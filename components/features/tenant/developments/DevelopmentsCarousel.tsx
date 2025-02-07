"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import { useAppSelector } from "@/lib/store/hooks";
import { DevelopmentCard } from "@/components/features/tenant/landing/DevelopmentCard";

export default function DevelopmentsCarousel() {
  const community = useAppSelector((state) => state.tenant.communityDetails);

  return (
    <section className="flex flex-col gap-2 mt-9 bg-white">
      <h1 className="md:text-3xl text-2xl font-galano font-bold">
        Desarrollos en ...
      </h1>
      <div className={"flex gap-4 mt-3 w-full"}>
        <div className="w-full relative">
          <div
            className={
              "h-full hidden md:block md:absolute top-0 left-0 w-[40px] bg-white-gradient-carrousel z-20"
            }
          ></div>
          <Carousel className="relative">
            <CarouselContent>
              {community
                ?.filter((community) => community.type.name === "development")
                .map((development) => {
                  const location = development.location;
                  return (
                    <CarouselItem key={development.id}>
                      <DevelopmentCard
                        id={development.id}
                        image={null}
                        logo={development.theme.logotype.main}
                        name={development.name}
                        slogan={development.theme?.slogan}
                        location={
                          location
                            ? `${location.division?.name}, ${
                                location.division?.state
                              }, ${location.division?.country?.longName}`
                            : "México"
                        }
                        price={development.properties?.reduce(
                          (acc, property) => {
                            if (acc === 0) return property.operations[0].price;
                            return acc > property.operations[0].price
                              ? property.operations[0].price
                              : acc;
                          },
                          0,
                        )}
                        description={development.description}
                      />
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
            <CarouselPrevious className="bg-primary text-primary-foreground z-30 absolute top-1/2 left-1 md:-left-5 -translate-y-1/2 border-0" />
            <CarouselNext className="bg-primary text-primary-foreground z-30 absolute top-1/2 right-1 md:right-5 -translate-y-1/2 border-0" />
          </Carousel>
          <div
            className={
              "h-full hidden md:block md:absolute top-0 right-0 w-[140px] transform rotate-180 bg-white-gradient-carrousel z-20"
            }
          ></div>
        </div>
      </div>
    </section>
  );
}
