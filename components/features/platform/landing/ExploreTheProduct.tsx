import { Button } from "@/components/common/button";
import Image from "next/image";

export default function ExploreTheProduct() {
  return (
    <section
      className={
        "py-24 px-16 flex flex-col items-center justify-center font-galano text-[#041E42]"
      }
    >
      <span className={"text-4xl font-bold mb-6"}>
        Pizza ipsum dolor meat lovers buffalo.
      </span>
      <span>Pizza ipsum dolor meat lovers buffalo.</span>
      <div className={"grid grid-cols-2 gap-24 mt-16"}>
        <div className={"flex flex-col gap-3 justify-center"}>
          <span className={"text-[#00B140] text-base"}>
            Explora cómo funciona
          </span>
          <h1
            className={
              "text-4xl font-galano font-bold text-[#041E42] leading-snug mr-20"
            }
          >
            Pizza ipsum dolor meat lovers buffalo tomato tossed tomato.
          </h1>
          <p className={"text-base text-foreground font-galano"}>
            Pizza ipsum dolor meat lovers buffalo. Fresh pie steak pepperoni
            pepperoni buffalo black fresh banana cheese. Aussie cheese Aussie
            platter party broccoli beef beef dolor.
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
        </div>
        <div className={"bg-propity relative pl-16 pt-16 h-[470px]"}>
          <Image
            src={"/exploreProduct.jpg"}
            alt={"Propity explore product"}
            className={"object-cover rounded-lg"}
            fill
          />
        </div>
      </div>
    </section>
  );
}
