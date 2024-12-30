"use client";
import { Button } from "@/components/common/button";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [clientType, setClientType] = useState<"inmobiliario" | "propietario">(
    "inmobiliario",
  );
  return (
    <section
      className={
        "flex flex-col-reverse md:grid md:grid-cols-2 gap-8 py-10 md:py-16 px-4 md:px-0 max-w-7xl mx-auto"
      }
    >
      <div className={"flex flex-col gap-3 justify-center"}>
        <div
          className={
            "bg-[#E9EBEE] px-3 py-2 rounded-md flex items-center w-fit font-galano"
          }
        >
          <span
            onClick={() => setClientType("inmobiliario")}
            className={`text-sm ${
              clientType === "inmobiliario"
                ? "font-bold bg-white"
                : "font-normal"
            }
             px-4 py-2 rounded-md cursor-pointer`}
          >
            Inmobiliario
          </span>
          <span
            onClick={() => setClientType("propietario")}
            className={`text-sm ${
              clientType === "propietario"
                ? "font-bold bg-white"
                : "font-normal"
            }
             px-4 py-2 rounded-md cursor-pointer`}
          >
            Propietario
          </span>
        </div>
        <h1
          className={
            "md:text-5xl text-3xl font-galano font-bold text-[#041E42] leading-tight"
          }
        >
          El poder de la comunidad en el Mundo Inmobiliario
        </h1>
        <p className={"md:text-base text-sm text-foreground font-galano"}>
          Conectamos a desarrolladores inmobiliarios y dueños de vivienda con
          una comunidad vibrante que comercializará sus inventarios de forma
          eficiente.
        </p>
        <div
          className={
            "flex gap-4 items-center font-galano mt-4 md:flex-nowrap flex-wrap"
          }
        >
          <Button
            size={"lg"}
            variant={"default"}
            className={"bg-[#00B140] [&]:py-6 text-lg md:w-fit w-full"}
          >
            Solicitar una demostración
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className={
              "border-[#00B140] border-2 font-bold text-lg text-[#00B140] [&]:py-6 md:w-fit w-full"
            }
          >
            Comenzar gratis
          </Button>
        </div>
        <div className={"flex gap-3 items-center w-full mt-1 font-galano"}>
          <span className={"flex items-center"}>
            <Image
              src={"/picClient.jpg"}
              alt={"Propity logo"}
              width={50}
              className={"rounded-full h-[50px] w-[50px] object-cover"}
              height={50}
            />
            <Image
              src={"/picClient.jpg"}
              alt={"Propity logo"}
              width={50}
              className={"rounded-full h-[50px] w-[50px] object-cover -ml-6"}
              height={50}
            />
            <Image
              src={"/picClient.jpg"}
              alt={"Propity logo"}
              width={50}
              className={"rounded-full h-[50px] w-[50px] object-cover -ml-6"}
              height={50}
            />
            <Image
              src={"/picClient.jpg"}
              alt={"Propity logo"}
              width={50}
              className={"rounded-full h-[50px] w-[50px] object-cover -ml-6"}
              height={50}
            />
            <Image
              src={"/picClient.jpg"}
              alt={"Propity logo"}
              width={50}
              className={"rounded-full h-[50px] w-[50px] object-cover -ml-6"}
              height={50}
            />
          </span>
          <span className={"text-sm"}>Únete al top 1%</span>
        </div>
      </div>
      <div className={"bg-propity relative pl-20 pt-16 overflow-hidden"}>
        <span
          className={
            "md:h-[450px] h-[260px] block w-[550px] bg-[linear-gradient(100deg,rgba(0,0,0,0),rgba(255,255,255,0.4),rgba(255,255,255,1),rgba(255,255,255,1)),url('/demoImg.png')] bg-cover"
          }
        ></span>
      </div>
    </section>
  );
}
