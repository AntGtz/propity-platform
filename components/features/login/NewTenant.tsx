import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import { Input } from "@/components/common/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/select";
import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { forwardRef, useId, useState } from "react";

export default function NewTenant() {
  const nameFieldId = useId();

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

  const [type, setType] = useState("");

  return (
    <div className="flex flex-col gap-2 mt-6 mb-2 md:text-base text-sm">
      <label htmlFor={nameFieldId} className="font-galano">
        Nombre de Empresa
      </label>
      <Input
        id={nameFieldId}
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        placeholder=""
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Subdominio
      </label>
      <Input
        id={nameFieldId}
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        placeholder="jom.propity.mx"
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Tipo de Empresa
      </label>
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-full [&]:px-3 [&]:py-6 font-galano md:text-base text-sm">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent className="font-galano">
          <SelectItem value="development">Desarrollo</SelectItem>
          <SelectItem value="agency">Inmobiliaria</SelectItem>
        </SelectContent>
      </Select>
      <label htmlFor={nameFieldId} className="font-galano">
        Nombre del Desarrollo
      </label>
      <Input
        id={nameFieldId}
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        placeholder=""
      />
      <label htmlFor={nameFieldId} className="font-galano">
        Slogan
      </label>
      <Input
        id={nameFieldId}
        className="[&]:px-3 [&]:py-6 md:text-base text-sm"
        placeholder="El mejor desarrollo en el mundo"
      />
      <div className="h-px w-full bg-foreground/40 mt-4"></div>
      <div className="flex justify-between items-center gap-2 font-galano text-foreground/50 border-b border-foreground/50 py-3 md:text-base text-sm">
        <span>Principal</span>
        <div className="flex gap-1 items-center md:text-base text-sm">
          Color
          <input
            type="color"
            className="h-6 w-6 rounded-full bg-transparent text-foreground/50"
          />
          Letra
          <input
            type="color"
            className="h-6 w-6 rounded-full bg-transparent text-foreground/50"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 font-galano text-foreground/50  border-b border-foreground/50 py-3">
        <span>Segundario</span>
        <div className="flex gap-1 items-center">
          Color
          <input
            type="color"
            className="h-6 w-6 rounded-full bg-transparent text-foreground/50"
          />
          Letra
          <input
            type="color"
            className="h-6 w-6 rounded-full bg-transparent text-foreground/50"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 font-galano text-foreground/50 border-b border-foreground/50 py-3">
        <span>Terciario</span>
        <div className="flex gap-1 items-center">
          Color
          <input
            type="color"
            className="h-6 w-6 rounded-full bg-transparent text-foreground/50"
          />
          Letra
          <input
            type="color"
            className="h-6 w-6 rounded-full bg-transparent text-foreground/50"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 font-galano text-foreground/50  border-b border-foreground/50 py-3">
        Logotipo
        <Input
          type="file"
          className="[&]:px-3 [&]:py-1.5 md:[&]:py-1.5 flex items-center w-64 md:text-base text-sm"
        />
      </div>
      <span className="text-sm text-foreground/50 flex items-center gap-2 mt-5">
        <EyeIcon className="w-5 h-5 text-foreground/50" />
        Aviso de Privacidad
      </span>

      <div className="flex gap-2 text-foreground/50 items-center mb-4">
        <Checkbox className="text-sm " />
        He leído el Aviso de Privacidad
      </div>
      <Button
        size={"lg"}
        className="w-full bg-green-600 text-white font-galano font-semibold [&]:py-7 md:text-xl text-lg"
      >
        Crear cuenta
      </Button>
      <Button
        size={"lg"}
        variant={"ghost"}
        className="w-full font-galano [&]:py-7 m md:text-lg text-base -mt-3 hover:bg-transparent"
      >
        Ya tienes cuenta? <span className="text-green-600">Inicia sesión</span>
      </Button>
    </div>
  );
}
