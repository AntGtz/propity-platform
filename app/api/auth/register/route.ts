// app/api/auth/register/route.ts

import { NextResponse } from "next/server";
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  UsernameExistsException,
} from "@aws-sdk/client-cognito-identity-provider";

export async function POST(request: Request) {
  try {
    const { username, password, name, phone, email } = await request.json();

    const cognitoClient = new CognitoIdentityProviderClient({
      region: process.env.COGNITO_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const params = {
      ClientId: process.env.COGNITO_CLIENT_ID!,
      Username: username,
      Password: password,
      UserAttributes: [
        {
          Name: "email",
          Value: `${email}`,
        },
        {
          Name: "name",
          Value: `${name}`,
        },
      ],
    };

    const command = new SignUpCommand(params);
    await cognitoClient.send(command);
    return NextResponse.json(
      { message: "Usuario registrado con éxito" },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof UsernameExistsException) {
      return NextResponse.json(
        { message: "El usuario ya existe" },
        { status: 400 },
      );
    }

    console.error("Error during user registration:", error);
    return NextResponse.json(
      { message: "Error al registrar usuario" },
      { status: 500 },
    );
  }
}
