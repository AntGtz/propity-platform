"use client";
import { Input } from "@/components/common/input";
import { useId, useState } from "react";
import { Button } from "@/components/common/button";
import { CodeMismatchException } from "@aws-sdk/client-cognito-identity-provider";
import { toast } from "react-toastify";

interface Props {
  setTab: (tab: "login" | "newUser" | "newCompany") => void;
}

export const UserConfirmation = ({ setTab }: Props) => {
  const usernameFieldId = useId();
  const codeFieldId = useId();

  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState({
    fields: false,
    general: "",
  });

  const handleConfirm = async () => {
    if (!username || !code) {
      setError((prev) => ({ ...prev, fields: true }));
      toast.error("Completa todos los campos");
      return;
    }
    try {
      const response = await fetch("/api/auth/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.split("@")[0], code }),
      });
      if (response.ok) {
        toast("Cuenta confirmada con éxito, ingresa a tu cuenta");
        setTab("login");
      }
      if (response.status === 400) {
        setError((prev) => ({
          ...prev,
          general: "Código de confirmación incorrecto",
        }));
        toast("Código de confirmación incorrecto");
      }
    } catch (error) {
      if (error instanceof CodeMismatchException) {
        setError((prev) => ({
          ...prev,
          general:
            "Código de confirmación incorrecto, intentelo de nuevo o solicite un nuevo código de confirmación",
        }));
      }
    }
  };

  const handleResend = async () => {
    try {
      const response = await fetch("/api/auth/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.split("@")[0] }),
      });
      if (response.ok) {
        toast("Código de confirmación reenviado");
      } else {
        toast("Error al reenviar el código");
      }
    } catch (error) {
      console.error(error);
      toast("Error al reenviar el código");
    }
  };

  return (
    <>
      <div className={"flex flex-col font-galano"}>
        <span className={"text-xl font-bold text-center text-slate-800 mt-4"}>
          Confirma tu cuenta
        </span>

        {error.general && (
          <>
            <span className={"text-sm font-bold text-center text-red-600 mt-4"}>
              {error.general}
            </span>
          </>
        )}

        <label htmlFor={usernameFieldId} className="font-galano text-sm mt-2">
          Email
        </label>
        <Input
          id={usernameFieldId}
          type={"email"}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className={`${
            error.fields && username === "" ? "border-red-500" : ""
          } [&]:px-3 [&]:py-6 md:text-base text-sm`}
          placeholder=""
        />
        <label htmlFor={codeFieldId} className="font-galano text-sm mt-4">
          Codigo de confirmación
        </label>
        <Input
          id={codeFieldId}
          onChange={(e) => setCode(e.target.value)}
          type="password"
          value={code}
          className={`${
            error.fields && code === "" ? "border-red-500" : ""
          } [&]:px-3 [&]:py-6 md:text-base text-sm`}
          placeholder="Código de confirmación"
        />

        <Button
          size={"lg"}
          onClick={handleConfirm}
          className="w-full bg-green-600 text-white font-galano font-semibold [&]:py-7 md:text-xl text-lg mt-8"
        >
          Confirmar cuenta
        </Button>
        {error.general && (
          <>
            <Button
              size={"lg"}
              variant={"ghost"}
              onClick={handleResend}
              className="w-full   font-galano font-semibold [&]:py-7 md:text-base text-sm mt-8"
            >
              Reenviar Código
            </Button>
          </>
        )}
      </div>
    </>
  );
};
