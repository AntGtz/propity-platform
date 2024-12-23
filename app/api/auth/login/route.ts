// app/api/auth/login/route.ts

import { NextResponse } from "next/server";
import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const cognitoClient = new CognitoIdentityProviderClient({
    region: process.env.COGNITO_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH" as AuthFlowType,
    ClientId: process.env.COGNITO_CLIENT_ID!,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const command = new InitiateAuthCommand(params);
    const response = await cognitoClient.send(command);

    if (response.AuthenticationResult?.AccessToken) {
      return NextResponse.json(
        { token: response.AuthenticationResult.AccessToken },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: "Autenticación fallida" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json(
      { message: "Error al iniciar sesión" },
      { status: 500 },
    );
  }
}
