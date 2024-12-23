"use server";

import { signIn } from "@/lib/auth/auth";

export const SignIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    return await signIn("credentials", {
      redirect: false,
      username: username.split("@")[0],
      password,
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
  }
};
