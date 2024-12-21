import { NextResponse } from "next/server";
import {
  AdminDeleteUserCommand,
  CognitoIdentityProviderClient,
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
      UserPoolId: "us-west-2_O9Od5ZNt6", // Make sure this is set in your environment
      Username: username,
    };

    const command = new AdminDeleteUserCommand(params);
    await cognitoClient.send(command);

    return NextResponse.json(
      { message: "Usuario eliminado con éxito" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json(
      { message: "Error al eliminar usuario" },
      { status: 500 },
    );
  }
}
