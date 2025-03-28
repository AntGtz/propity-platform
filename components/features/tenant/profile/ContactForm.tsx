"use client";
import { Input } from "@/components/common/input";
import { PhoneInput } from "@/components/common/phone-input";
import { Textarea } from "@/components/common/textarea";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/lib/store/hooks";
import { Button } from "@/components/common/button";

export interface ContactFormProps {
  id: string;
}

export default function ContactForm({ id }: ContactFormProps) {
  const community = useAppSelector((state) => state.tenant.communityDetails);
  const development = community?.filter((community) => community.id === id)[0];

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
    <div
      className={
        "font-galano flex flex-col gap-y-4 w-full border border-gray-300 rounded-sm px-4 py-4 text-sm"
      }
    >
      <span className={"font-bold text-2xl"}>
        Conecta con {development?.name}
      </span>
      <div className={"flex flex-col gap-y-1.5"}>
        <span className={"text-gray-600"}>Nombre y apellido</span>
        <Input
          placeholder={""}
          className={
            "w-full [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
          }
        />
      </div>

      <div className={"flex flex-col gap-y-1.5"}>
        <span className={"text-gray-600"}>Email</span>
        <Input
          placeholder={""}
          type={"email"}
          className={
            "w-full [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
          }
        />
      </div>

      <div className={"flex flex-col gap-y-1.5"}>
        <span className={"text-gray-600"}>Teléfono</span>
        <PhoneInput
          placeholder="Enter a phone number"
          inputComponent={InputComponent}
          className={"[&>button]:py-4 md:[&>button]:py-2"}
        />
      </div>

      <div className={"flex flex-col gap-y-1.5"}>
        <span className={"text-gray-600"}>Mensaje</span>
        <Textarea rows={8} placeholder="" />
      </div>

      <Button className={"w-full py-6"}>Enviar Email</Button>
    </div>
  );
}
