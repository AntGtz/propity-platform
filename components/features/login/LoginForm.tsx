"use client";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useId } from "react";

export default function LoginForm() {
  const usernameFieldId = useId();
  const passwordFieldId = useId();
  return (
    <>
      <div className="flex flex-col gap-2 mt-6 mb-2">
        <label htmlFor={usernameFieldId} className="font-galano">
          Email / Username
        </label>
        <Input
          id={usernameFieldId}
          className="[&]:px-3 [&]:py-6"
          placeholder=""
        />
        <label htmlFor={passwordFieldId} className="font-galano">
          Contraseña
        </label>
        <Input className="[&]:px-3 [&]:py-6" type="password" />
      </div>
      <Button
        size={"lg"}
        className="w-full bg-green-600 text-white font-galano font-semibold [&]:py-7 text-xl"
      >
        Iniciar sesión
      </Button>
      <Button
        size={"lg"}
        variant={"link"}
        className="w-full text-green-600 font-galano font-semibold [&]:py-7 text-lg -mt-3"
      >
        Olvidaste la contraseña?
      </Button>
    </>
  );
}
