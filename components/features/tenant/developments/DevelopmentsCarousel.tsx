import { Button } from "@/components/common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import Image from "next/image";

export default function DevelopmentsCarousel() {
  return (
    <section className="mt-12 flex gap-4">
      <div className="w-8/12">
        <Carousel className="relative">
          <CarouselContent>
            <CarouselItem className="h-[360px]">
              <Image
                src={"/apartment1.jpg"}
                alt="Apartment"
                width={700}
                height={320}
                className="rounded-md w-full h-[360px]"
              />
            </CarouselItem>
            <CarouselItem className="h-[360px]">
              <Image
                src={"/apartment1.jpg"}
                alt="Apartment"
                width={700}
                height={400}
                className="rounded-md w-full h-[360px]"
              />
            </CarouselItem>
            <CarouselItem className="h-[360px]">
              <Image
                src={"/apartment1.jpg"}
                alt="Apartment"
                width={700}
                height={400}
                className="rounded-md w-full h-[360px]"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-green-400 absolute top-1/2 left-5 -translate-y-1/2" />
          <CarouselNext className="bg-green-400 absolute top-1/2 right-5 -translate-y-1/2" />
        </Carousel>
      </div>
      <div className="w-4/12 rounded-md bg-[#00B14024] px-4 py-5 flex flex-col gap-2 font-galano ">
        <Image
          className="rounded-full"
          src={"/jomLogo.png"}
          alt="JomLogo"
          width={60}
          height={60}
        />
        <h3 className="font-bold text-xl">Ciudad de México</h3>
        <span className="font-bold text-base">Desde $3,500.000</span>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center">
            <span className="font-bold">2</span>
            baños
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-bold">2</span>
            recamaras
          </div>
        </div>
        <p className="text-base">Medellín 235</p>
        <p className="text-base">
          Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY
          green mayo buffalo tossed olives.
        </p>
        <Button size={"lg"} className="w-full bg-[#00B140] text-white [&]:py-4">
          Ver inventario
        </Button>
      </div>
    </section>
  );
}
