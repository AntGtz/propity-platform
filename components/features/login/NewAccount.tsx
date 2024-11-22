import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import { Input } from "@/components/common/input";
import { PhoneInput } from "@/components/common/phone-input";
import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { forwardRef, useId } from "react";

export default function NewAccount() {
  const nameFieldId = useId();
  const passwordFieldId = useId();

  const InputComponent = forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
  >(({ className, ...props }, ref) => (
    <Input
      className={cn("rounded-e-lg rounded-s-none [&]:px-3 [&]:py-6", className)}
      {...props}
      ref={ref}
    />
  ));
  InputComponent.displayName = "InputComponent";

  return (
    <div className="flex flex-col gap-2 mt-6 mb-2">
      <label htmlFor={nameFieldId} className="font-galano">
        Nombre y Apellido
      </label>
      <Input id={nameFieldId} className="[&]:px-3 [&]:py-6" placeholder="" />
      <label htmlFor={nameFieldId} className="font-galano">
        Email
      </label>
      <Input
        id={nameFieldId}
        type="email"
        className="[&]:px-3 [&]:py-6"
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
      <Input className="[&]:px-3 [&]:py-6" type="password" />
      <span className="text-sm text-foreground/50">Mínimo 8 caractéres</span>

      <label htmlFor={passwordFieldId} className="font-galano">
        Confirmar contraseña
      </label>
      <Input className="[&]:px-3 [&]:py-6" type="password" />

      <div className="h-px w-full bg-foreground/40 my-4"></div>
      <span className="text-sm text-foreground/50 flex items-center gap-2">
        <EyeIcon className="w-5 h-5 text-foreground/50" />
        Aviso de Privacidad
      </span>

      <div className="flex gap-2 text-foreground/50 items-center mb-4">
        <Checkbox className="text-sm " />
        He leído el Aviso de Privacidad
      </div>
      <Button
        size={"lg"}
        className="w-full bg-green-600 text-white font-galano font-semibold [&]:py-7 text-xl"
      >
        Crear cuenta
      </Button>
      <Button
        size={"lg"}
        variant={"ghost"}
        className="w-full font-galano [&]:py-7 text-lg -mt-3 hover:bg-transparent"
      >
        Ya tienes cuenta? <span className="text-green-600">Inicia sesión</span>
      </Button>
    </div>
  );
}
