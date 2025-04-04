"use client";
import PropertyCard from "../PropertyCard2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import { useAppSelector } from "@/lib/store/hooks";

export default function RealStateAgencyList() {
  const agencyList = useAppSelector((state) =>
    state.tenant.communityDetails.filter(
      (community) => community.type.name === "agency",
    ),
  );
  return (
    <section className="flex flex-col gap-2 py-16 bg-white max-w-7xl mx-auto px-4 md:px-0 w-full">
      <h1 className="text-4xl font-galano font-bold">Inmobiliarias</h1>
      <div className="relative px-3 w-full">
        <div
          className={
            "h-full hidden md:block md:absolute top-0 left-0 w-[90px] bg-white-gradient-carrousel z-20"
          }
        ></div>
        <Carousel className="relative w-full h-[34rem] md:h-auto">
          <CarouselContent>
            {agencyList.map((community) => (
              <CarouselItem
                className="md:basis-1/4 h-fit flex justify-center w-full"
                key={community.id}
              >
                <PropertyCard
                  entityId={community.id}
                  withPropertyRedirect={false}
                  image={
                    community.properties?.[community.properties.length - 1]
                      .images[0].thumbnail
                  }
                  name={community.name}
                  price={community.properties?.reduce((acc, property) => {
                    if (acc === 0) return property.operations[0].price;
                    return acc > property.operations[0].price
                      ? property.operations[0].price
                      : acc;
                  }, 0)}
                  address={community.location?.address}
                  logo={community.theme?.logotype.main}
                  description={community.description}
                  facebook={community.contact?.facebook}
                  instagram={community.contact?.instagram}
                />
              </CarouselItem>
            ))}
            {/*<CarouselItem className="md:basis-1/4 h-fit flex justify-center">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem className="basis-1/4">*/}
            {/*  <PropertyCard />*/}
            {/*</CarouselItem>*/}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-primary-foreground z-30 absolute top-1/2 -left-5 -translate-y-1/2 border-0" />
          <CarouselNext className="bg-primary text-primary-foreground z-30 absolute top-1/2 -right-5 -translate-y-1/2 border-0" />
        </Carousel>
        <div
          className={
            "h-full hidden md:block md:absolute top-0 right-0 w-[140px] transform rotate-180 bg-white-gradient-carrousel z-20"
          }
        ></div>
      </div>
    </section>
  );
}
