import { NextResponse } from "next/server";
import {
  CodeMismatchException,
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
  ExpiredCodeException,
} from "@aws-sdk/client-cognito-identity-provider";

export async function POST(request: Request) {
  try {
    const { username, code } = await request.json();

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
      ConfirmationCode: code,
    };

    const command = new ConfirmSignUpCommand(params);
    await cognitoClient.send(command);

    return NextResponse.json(
      { message: "Usuario confirmado con éxito" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof ExpiredCodeException) {
      return NextResponse.json(
        { message: "Codigo expirado o inválido" },
        { status: 400 },
      );
    }
    if (error instanceof CodeMismatchException) {
      return NextResponse.json(
        { message: "Código de confirmación incorrecto" },
        { status: 400 },
      );
    }
    console.error("Error al confirmar usuario:", error);
    return NextResponse.json(
      { message: "Error al confirmar usuario" },
      { status: 500 },
    );
  }
}
