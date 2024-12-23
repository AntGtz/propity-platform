import { NextResponse } from "next/server";
import {
  CognitoIdentityProviderClient,
  ResendConfirmationCodeCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export async function POST(request: Request) {
  try {
    const { username } = await request.json();

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
    };

    const command = new ResendConfirmationCodeCommand(params);
    await cognitoClient.send(command);

    return NextResponse.json(
      { message: "Código de confirmación reenviado" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error during resending code:", error);
    return NextResponse.json(
      { message: "Error al reenviar el código" },
      { status: 500 },
    );
  }
}
