import PropertyCard from "../PropertyCard2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";

export default function RealStateAgencyList() {
  return (
    <section className="flex flex-col gap-2 3xl:px-64 xl:px-24 2xl:px-32 py-16 bg-white">
      <h1 className="text-4xl font-galano font-bold">Inmobiliarias</h1>
      <div className="relative">
        <Carousel className="relative w-full">
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <PropertyCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-green-400 absolute top-1/2 left-5 -translate-y-1/2" />
          <CarouselNext className="bg-green-400 absolute top-1/2 right-5 -translate-y-1/2 z-40" />
        </Carousel>
        <div
          className={
            "h-full absolute top-0 right-0 w-[140px] transform rotate-180 bg-white-gradient-carrousel z-20"
          }
        ></div>
      </div>
    </section>
  );
}
