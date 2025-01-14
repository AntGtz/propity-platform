"use client";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/common/textarea";
import { Button } from "@/components/common/button";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";

interface CTAPropertyProps {
  entityId: string;
  id: string;
}

export const CTAProperty = ({ entityId, id }: CTAPropertyProps) => {
  const entity = useAppSelector((state) =>
    state.tenant.communityDetails.find((e) => e.id === entityId),
  );
  const property = entity?.properties?.find((p) => p.id === Number(id));
  return (
    <section
      className={
        "w-full hidden md:flex justify-center items-center bg-gray-300 py-12 font-galano"
      }
    >
      <div className={"flex flex-col items-center"}>
        <span className={"text-lg"}>Aprende más sobre este desarrollo</span>
        <div
          className={
            "max-w-4xl flex mt-6 border border-gray-400 rounded-xl overflow-hidden"
          }
        >
          <div className={"w-4/12 flex flex-col gap-y-4 px-4 py-6"}>
            <span className={"text-2xl font-bold"}>
              Más sobre esta propiedad
            </span>
            <div className={"flex flex-col gap-y-1.5"}>
              <span className={"text-gray-600 text-sm"}>Nombre y apellido</span>
              <Input
                placeholder={""}
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
              />
            </div>
            <div className={"flex flex-col gap-y-1.5"}>
              <span className={"text-gray-600 text-sm"}>Email</span>
              <Input
                placeholder={""}
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
              />
            </div>
            <div className={"flex flex-col gap-y-1.5"}>
              <span className={"text-gray-600 text-sm"}>Mensaje</span>
              <Textarea
                rows={4}
                placeholder={""}
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
              />
            </div>
            <Button className={"py-6"}>Enviar email</Button>
          </div>
          <Image
            src={property?.images[0].thumbnail ?? "/propiedadForm.jpg"}
            alt={"Propiedad"}
            width={900}
            height={900}
            className={"w-8/12"}
          />
        </div>
      </div>
    </section>
  );
};
