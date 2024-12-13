"use client";
import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import { Input } from "@/components/common/input";
import { PhoneInput } from "@/components/common/phone-input";
import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { forwardRef, useId, useState } from "react";

export default function NewAccount() {
  const nameFieldId = useId();
  const passwordFieldId = useId();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const InputComponent = forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
  >(({ className, ...props }, ref) => (
    <Input
      className={cn(
        "rounded-e-lg md:text-base text-sm rounded-s-none [&]:px-3 [&]:py-6",
        className,
      )}
      {...props}
      ref={ref}
    />
  ));
  InputComponent.displayName = "InputComponent";

  const handleRegister = async () => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Usuario registrado con éxito");
    } else {
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-6 mb-2 md:mx-0 mx-4 md:text-base text-sm">
      <label htmlFor={nameFieldId} className="font-galano">
        Nombre y Apellido
      </label>
      <Input
        id={nameFieldId}
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        placeholder=""
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Email
      </label>
      <Input
        id={nameFieldId}
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        placeholder=""
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Teléfono
      </label>
      <PhoneInput
        placeholder="Enter a phone number"
        inputComponent={InputComponent}
      />
      <label htmlFor={passwordFieldId} className="font-galano">
        Contraseña
      </label>
      <Input
        onChange={(e) => setPassword(e.target.value)}
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        type="password"
      />
      <span className="text-sm text-foreground/50">Mínimo 8 caractéres</span>

      <label htmlFor={passwordFieldId} className="font-galano">
        Confirmar contraseña
      </label>
      <Input
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        type="password"
      />

      <div className="h-px w-full bg-foreground/40 my-4"></div>
      <span className="text-sm text-foreground/50 flex items-center gap-2">
        <EyeIcon className="w-5 h-5 text-foreground/50" />
        Aviso de Privacidad
      </span>

      <div className="flex gap-2 text-foreground/50 items-center mb-4">
        <Checkbox className="md:text-sm text-xs" />
        He leído el Aviso de Privacidad
      </div>
      <Button
        onClick={handleRegister}
        size={"lg"}
        className="w-full bg-green-600 text-white font-galano font-semibold [&]:py-7 md:text-xl text-lg"
      >
        Crear cuenta
      </Button>
      <Button
        size={"lg"}
        variant={"ghost"}
        className="w-full font-galano [&]:py-7 md:text-lg text-base -mt-3 hover:bg-transparent"
      >
        Ya tienes cuenta? <span className="text-green-600">Inicia sesión</span>
      </Button>
    </div>
  );
}
