import { Button } from "@/components/common/button";
import Image from "next/image";

export default function ExploreTheProduct() {
  return (
    <section
      className={
        "pb-16 max-w-7xl mx-auto px-4 md:px-0 flex flex-col items-center justify-center font-galano text-[#041E42]"
      }
    >
      <div className={"grid grid-cols-2 gap-24 mt-16"}>
        <div className={"flex flex-col gap-3 justify-center"}>
          <span className={"text-[#00B140] text-base"}>
            Explora cómo funciona
          </span>
          <h1
            className={
              "text-4xl font-galano font-bold text-[#041E42] leading-snug mr-24"
            }
          >
            Mucho más que una plataforma, <br /> UNA COMUNIDAD
          </h1>
          <p className={"text-base text-foreground font-galano mr-28"}>
            Creemos en la profunda necesidad humana de SERVIR; utilizamos la
            digitalización para potenciar el toque humano en cada interacción.
          </p>
          <div className={"flex gap-4 items-center font-galano mt-4"}>
            <Button
              size={"lg"}
              variant={"default"}
              className={"bg-[#00B140] [&]:py-6"}
            >
              Solicitar una demostración
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className={
                "border-[#00B140] bg-transparent border-2 font-bold text-[#00B140] [&]:py-6"
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
