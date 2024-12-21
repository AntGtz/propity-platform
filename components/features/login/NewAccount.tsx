import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import { Input } from "@/components/common/input";
import { PhoneInput } from "@/components/common/phone-input";
import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { forwardRef, useId, useState } from "react";

interface Props {
  setTab: (tab: string) => void;
}

export default function NewAccount({ setTab }: Props) {
  const nameFieldId = useId();
  const passwordFieldId = useId();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    fields: false,
    general: "",
  });

  const InputComponent = forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
  >(({ className, ...props }, ref) => (
    <Input
      type={"tel"}
      className={cn(
        "rounded-e-lg md:text-base text-sm rounded-s-none [&]:px-3 [&]:py-6",
        className,
      )}
      placeholder={""}
      onChange={props.onChange}
      value={props.value}
      ref={ref}
    />
  ));
  InputComponent.displayName = "InputComponent";

  const handleRegister = async () => {
    if (
      !form.password ||
      !form.confirmPassword ||
      !form.email ||
      !form.name ||
      !form.phone
    ) {
      setError((prev) => ({ ...prev, fields: true }));
      return;
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.email.split("@")[0],
        password: form.password,
        name: form.name,
        phone: form.phone,
        email: form.email,
      }),
    });

    if (response.ok) {
      setTab("confirm");
    } else {
      const responseT = await response.json();
      setError((prev) => ({ ...prev, general: responseT.message }));
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-6 mb-2 md:mx-0 mx-4 md:text-base text-sm">
      {error.general ? (
        <span className="text-red-500 -mt-4 font-galano text-center">
          {error.general}
        </span>
      ) : null}

      <label htmlFor={nameFieldId} className="font-galano">
        Nombre y Apellido
      </label>
      <Input
        id={nameFieldId}
        value={form.name}
        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        className={`[&]:px-3 [&]:py-6 md:text-base text-sm ${error.fields && form.name === "" ? "border-red-500" : ""}`}
        placeholder=""
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Email
      </label>
      <Input
        id={nameFieldId}
        value={form.email}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, email: e.target.value }))
        }
        type="email"
        className={`[&]:px-3 ${error.fields && form.email === "" ? "border-red-500" : ""} [&]:py-6 md:text-base text-sm`}
        placeholder=""
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Teléfono
      </label>
      <PhoneInput
        placeholder="Enter a phone number"
        value={form.phone}
        className={`${error.fields && form.phone === "" ? "border rounded-lg border-red-500" : ""}`}
        inputComponent={InputComponent}
        onChange={(e) => setForm((prev) => ({ ...prev, phone: e }))}
      />
      <label htmlFor={passwordFieldId} className="font-galano">
        Contraseña
      </label>
      <Input
        value={form.password}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, password: e.target.value }))
        }
        className={`[&]:px-3 [&]:py-6 md:text-base text-sm ${error.fields && form.password === "" ? "border-red-500" : ""}`}
        type="password"
      />
      <span
        className={`text-sm ${error.fields && form.password.length < 8 ? "text-red-400" : "text-foreground/50"} `}
      >
        Mínimo 8 caractéres &nbsp;&nbsp; &nbsp;&nbsp;
        {error.fields &&
          form.password !== form.confirmPassword &&
          "Contraseñas no coinciden"}
      </span>

      <label htmlFor={passwordFieldId} className="font-galano">
        Confirmar contraseña
      </label>
      <Input
        className={`[&]:px-3 [&]:py-6 md:text-base text-sm ${error.fields && form.confirmPassword === "" ? "border-red-500" : ""}`}
        type="password"
        value={form.confirmPassword}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))
        }
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
