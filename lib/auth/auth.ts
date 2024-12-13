import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.COGNITO_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (
        credentials: Partial<Record<"username" | "password", unknown>>,
      ) => {
        const username = credentials.username as string;
        const password = credentials.password as string;

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
            // Return user object here; can include anything you need in the session
            return {
              id: username,
              accessToken: response.AuthenticationResult.AccessToken,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during Cognito auth:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
