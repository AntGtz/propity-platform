"use client";
import { Input } from "@/components/common/input";
import { PhoneInput } from "@/components/common/phone-input";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/button";
import Image from "next/image";

export default function Empresa() {
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

  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Editar perfil de empresa</h1>
      <div className={"my-6 flex gap-7"}>
        <div
          className={
            "w-8/12 border border-gray-300 rounded-lg p-6 flex flex-col gap-6 text-sm"
          }
        >
          <span>Contacto</span>
          <div className={"flex gap-4"}>
            <div className={"flex gap-1 flex-col w-6/12"}>
              <span>Razón social</span>
              <Input
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
                placeholder={"Razón social"}
              />
            </div>
            <div className={"flex gap-1 flex-col w-6/12"}>
              <span>RFC de Facturación</span>
              <Input
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
                placeholder={""}
              />
            </div>
          </div>

          <div className={"flex gap-4"}>
            <div className={"flex gap-1 flex-col w-6/12"}>
              <span>Subdominio de la Empresa</span>
              <Input
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
                placeholder={""}
              />
            </div>
            <div className={"flex gap-1 flex-col w-6/12"}>
              <span>Tipo de Empresa</span>
              <Input
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
                placeholder={""}
              />
            </div>
          </div>

          <div className={"flex gap-4"}>
            <div className={"flex gap-1 flex-col w-6/12"}>
              <span>Descripción</span>
              <Input
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
                placeholder={""}
              />
            </div>
            <div className={"flex gap-1 flex-col w-6/12"}>
              <span>Estatus</span>
              <Input
                className={
                  "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                }
                placeholder={""}
              />
            </div>
          </div>

          <div className={"flex gap-1 flex-col"}>
            <span>API Key</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
        </div>
        <div className={"w-4/12 flex flex-col gap-4"}>
          <div
            className={
              "p-6 border border-gray-300 rounded-lg flex flex-col gap-4 items-center justify-center"
            }
          >
            <svg width="197" height="197" viewBox="0 0 197 197" fill="none">
              <path
                d="M177.563 3.625H19.4375C15.2438 3.625 11.2218 5.29096 8.25637 8.25637C5.29096 11.2218 3.625 15.2438 3.625 19.4375V177.563C3.625 181.756 5.29096 185.778 8.25637 188.744C11.2218 191.709 15.2438 193.375 19.4375 193.375H177.563C181.756 193.375 185.778 191.709 188.744 188.744C191.709 185.778 193.375 181.756 193.375 177.563V19.4375C193.375 15.2438 191.709 11.2218 188.744 8.25637C185.778 5.29096 181.756 3.625 177.563 3.625Z"
                stroke="#C6C6C6"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M193.375 161.749L135.396 109.04L82.6875 156.478L45.7917 124.853L3.625 156.478M66.875 93.2279C73.8646 93.2279 80.5678 90.4513 85.5102 85.5089C90.4526 80.5665 93.2292 73.8633 93.2292 66.8737C93.2292 59.8841 90.4526 53.1809 85.5102 48.2385C80.5678 43.2961 73.8646 40.5195 66.875 40.5195C59.8854 40.5195 53.1822 43.2961 48.2398 48.2385C43.2974 53.1809 40.5208 59.8841 40.5208 66.8737C40.5208 73.8633 43.2974 80.5665 48.2398 85.5089C53.1822 90.4513 59.8854 93.2279 66.875 93.2279Z"
                stroke="#C6C6C6"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={"flex flex-col gap-1 items-center"}>
              <span className={"text-4xl font-bold"}>Jom!</span>
              <span className={"text-sm"}>¡Hagamos Comunidad!</span>
            </div>
          </div>

          <div className={"flex gap-1 flex-col mt-auto"}>
            <span>Slogan</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={"¡Hagamos Comunidad!"}
            />
          </div>
        </div>
      </div>

      <div
        className={
          "my-4 border rounded-lg border-gray-300 p-6 flex flex-col gap-4 text-sm"
        }
      >
        <span>Contacto</span>
        <div className={"w-full grid grid-cols-3 gap-6"}>
          <div className={"flex gap-1 flex-col"}>
            <span>Correo Electrónico de Contacto</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Teléfono</span>
            <PhoneInput inputComponent={InputComponent} />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Whatsapp</span>
            <PhoneInput inputComponent={InputComponent} />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Facebook</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Instagram</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
        </div>
      </div>

      <div
        className={
          "my-4 border rounded-lg border-gray-300 p-6 flex flex-col gap-4 text-sm"
        }
      >
        <span>Dirección</span>
        <div className={"w-full grid grid-cols-3 gap-6"}>
          <div className={"flex gap-1 flex-col"}>
            <span>Núm Int</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Núm Ext</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Código Postal</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Colonia</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Municipio</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
          <div className={"flex gap-1 flex-col"}>
            <span>Estado</span>
            <Input
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
              placeholder={""}
            />
          </div>
        </div>
      </div>

      <div
        className={
          "my-4 border rounded-lg border-gray-300 p-6 flex flex-col gap-4 text-sm"
        }
      >
        <div className={"w-full flex justify-between"}>
          <span>Imagenes</span>
          <Button className={"py-6 px-6"}>Subir imagen</Button>
        </div>
        <div className={"grid grid-cols-3 gap-x-8 gap-y-4 my-6"}>
          <Image
            src={"/propertyPrincipal.jpg"}
            alt={"Propity logo"}
            width={50}
            className={"rounded-md object-cover w-full h-[360px]"}
            height={320}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={"/propertyPrincipal.jpg"}
            alt={"Propity logo"}
            width={50}
            className={"rounded-md object-cover w-full h-[360px]"}
            height={320}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={"/propertyPrincipal.jpg"}
            alt={"Propity logo"}
            width={50}
            className={"rounded-md object-cover w-full h-[360px]"}
            height={320}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={"/propertyPrincipal.jpg"}
            alt={"Propity logo"}
            width={50}
            className={"rounded-md object-cover w-full h-[360px]"}
            height={320}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={"/propertyPrincipal.jpg"}
            alt={"Propity logo"}
            width={50}
            className={"rounded-md object-cover w-full h-[360px]"}
            height={320}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={"/propertyPrincipal.jpg"}
            alt={"Propity logo"}
            width={50}
            className={"rounded-md object-cover w-full h-[360px]"}
            height={320}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={"w-full flex justify-end"}>
          <Button>Guardar</Button>
        </div>
      </div>
    </section>
  );
}
