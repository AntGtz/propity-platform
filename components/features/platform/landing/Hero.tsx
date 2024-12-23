import { Button } from "@/components/common/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={"grid grid-cols-2 gap-8 py-16 px-16"}>
      <div className={"flex flex-col gap-3 justify-center"}>
        <h1
          className={
            "text-5xl font-galano font-bold text-[#041E42] leading-tight"
          }
        >
          Guiando su camino hacia un nuevo hogar
        </h1>
        <p className={"text-base text-foreground font-galano"}>
          Propity es un sitio web de comercio electrónico para la industria de
          inmobiliarias.
        </p>
        <div className={"flex gap-4 items-center font-galano mt-4"}>
          <Button
            size={"lg"}
            variant={"default"}
            className={"bg-[#041E42] [&]:py-5"}
          >
            Solicitar una demostración
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className={
              "border-[#041E42] border-2 font-bold text-[#041E42] [&]:py-5"
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
      <div className={"bg-propity relative pl-16 pt-16"}>
        <span
          className={
            "h-[450px] block w-[550px] bg-[linear-gradient(100deg,rgba(0,0,0,0),rgba(255,255,255,0.4),rgba(255,255,255,1),rgba(255,255,255,1)),url('/demoImg.png')] bg-cover"
          }
        ></span>
      </div>
    </section>
  );
}
