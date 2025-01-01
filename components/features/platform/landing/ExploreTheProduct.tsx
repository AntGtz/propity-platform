import { Button } from "@/components/common/button";
import Image from "next/image";

export default function ExploreTheProduct() {
  return (
    <section
      className={
        "md:pb-16 max-w-7xl mx-auto px-4 md:px-0 flex flex-col items-center justify-center font-galano text-[#041E42]"
      }
    >
      <div
        className={
          "flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-24 mt-4 md:mt-16"
        }
      >
        <div className={"flex flex-col gap-3 justify-center"}>
          <span className={"text-[#00B140] text-base"}>
            Explora cómo funciona
          </span>
          <h1
            className={
              "md:text-4xl text-3xl font-galano font-bold text-[#041E42] leading-snug mr-24"
            }
          >
            Mucho más que una plataforma, <br /> UNA COMUNIDAD
          </h1>
          <p
            className={
              "md:text-base text-sm text-foreground font-galano md:mr-28"
            }
          >
            Creemos en la profunda necesidad humana de SERVIR; utilizamos la
            digitalización para potenciar el toque humano en cada interacción.
          </p>
          <div
            className={
              "flex md:flex-row flex-col gap-4 items-center font-galano mt-4"
            }
          >
            <Button
              size={"lg"}
              variant={"default"}
              className={"bg-[#00B140] [&]:py-6 md:w-fit w-full"}
            >
              Solicitar una demostración
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className={
                "border-[#00B140] bg-transparent border-2 font-bold text-[#00B140] [&]:py-6 md:w-fit w-full"
              }
            >
              Comenzar gratis
            </Button>
          </div>
        </div>
        <div
          className={
            "bg-propity relative pl-16 pt-16 md:h-[470px] h-80 w-[calc(100vw-32px)] md:w-auto overflow-hidden"
          }
        >
          <Image
            src={"/exploreProduct.jpg"}
            alt={"Propity explore product"}
            className={"md:object-cover rounded-lg"}
            fill
          />
        </div>
      </div>
    </section>
  );
}
