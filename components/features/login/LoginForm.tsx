"use client";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useId, useState } from "react";

export default function LoginForm() {
  const usernameFieldId = useId();
  const passwordFieldId = useId();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Token:", data.token);
      // Puedes almacenar el token en cookies o localStorage según sea necesario
      alert("Inicio de sesión exitoso");
    } else {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 mt-6 mb-2 md:text-base text-sm md:mx-0 mx-4">
        <label htmlFor={usernameFieldId} className="font-galano">
          Email / Username
        </label>
        <Input
          id={usernameFieldId}
          onChange={(e) => setUsername(e.target.value)}
          className="[&]:px-3 [&]:py-6 md:text-base text-sm"
          placeholder=""
        />
        <label htmlFor={passwordFieldId} className="font-galano">
          Contraseña
        </label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          className="[&]:px-3 [&]:py-6 md:text-base text-sm"
          type="password"
        />
      </div>
      <Button
        size={"lg"}
        onClick={handleLogin}
        className="bg-green-600 text-white font-galano font-semibold [&]:py-7 md:text-xl text-lg md:mx-0 mx-4"
      >
        Iniciar sesión
      </Button>
      <Button
        size={"lg"}
        variant={"link"}
        className="text-green-600 font-galano font-semibold [&]:py-7 -mt-3 md:text-lg text-sm md:mx-0 mx-4"
      >
        Olvidaste la contraseña?
      </Button>
    </>
  );
}
