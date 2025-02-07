import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    phone: string;
    profile: string;
    accessToken: string;
  }

  interface Session {
    user: {
      id: string;
      phone: string;
      profile: string;
      accessToken: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    phone: string;
    profile: string;
    accessToken: string;
  }
}
