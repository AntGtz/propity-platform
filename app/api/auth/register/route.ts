// app/api/auth/register/route.ts

import { NextResponse } from "next/server";
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

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
    };

    const command = new SignUpCommand(params);
    await cognitoClient.send(command);
    return NextResponse.json(
      { message: "Usuario registrado con éxito" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      { message: "Error al registrar usuario" },
      { status: 500 },
    );
  }
}
