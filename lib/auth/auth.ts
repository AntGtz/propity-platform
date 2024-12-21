import NextAuth, { AuthError, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  GetUserCommand,
  InitiateAuthCommand,
  NotAuthorizedException,
  UserNotConfirmedException,
} from "@aws-sdk/client-cognito-identity-provider";

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.COGNITO_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

class AuthenticationError extends AuthError {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

// Extend the User type
interface CustomUser extends User {
  id: string;
  name: string;
  email: string;
  phone: string;
  accessToken: string;
}

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
            const accessToken = response.AuthenticationResult.AccessToken;

            try {
              const getUserCommand = new GetUserCommand({
                AccessToken: accessToken,
              });
              const userResponse = await cognitoClient.send(getUserCommand);

              const userAttributes = userResponse.UserAttributes?.reduce(
                (acc, attr) => {
                  if (attr.Name && attr.Value) {
                    acc[attr.Name] = attr.Value;
                  }
                  return acc;
                },
                {} as Record<string, string>,
              );

              return {
                id: userAttributes?.sub,
                name: userAttributes?.name,
                email: userAttributes?.email,
                phone: userAttributes?.phone_number,
                accessToken,
              } as CustomUser;
            } catch (error) {
              console.error("Error obteniendo atributos del usuario:", error);
              throw new AuthenticationError(
                "Error al obtener los datos del usuario",
              );
            }
          } else {
            return null;
          }
        } catch (error) {
          if (error instanceof NotAuthorizedException) {
            throw new AuthenticationError("Usuario o contraseña incorrectos");
          }
          if (error instanceof UserNotConfirmedException) {
            throw new AuthenticationError("Cuenta no confirmada");
          }
          console.error(error);
          throw new AuthenticationError("Error al iniciar sesión");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.phone = (user as CustomUser).phone;
        token.accessToken = (user as CustomUser).accessToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      (session.user as CustomUser) = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        phone: token.phone as string,
        accessToken: token.accessToken as string,
      };
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
