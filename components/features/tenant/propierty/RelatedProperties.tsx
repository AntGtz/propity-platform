"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import { useAppSelector } from "@/lib/store/hooks";
import PropertyCard2 from "@/components/features/tenant/PropertyCard2";

interface RelatedPropertiesProps {
  entityId: string;
}

export const RelatedProperties = ({ entityId }: RelatedPropertiesProps) => {
  const entity = useAppSelector((state) =>
    state.tenant.communityDetails.find((e) => e.id === entityId),
  );

  return (
    <section
      className={
        "flex flex-col w-full h-full max-w-7xl mx-auto py-12 font-galano md:px-0 px-4"
      }
    >
      <span
        className={
          "flex items-center gap-3 text-black font-bold md:text-2xl text-lg"
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 11.4527V16.8007C4 17.9207 4 18.4807 4.218 18.9097C4.41 19.2857 4.715 19.5917 5.092 19.7827C5.519 20.0007 6.079 20.0007 7.197 20.0007H16.803C17.921 20.0007 18.48 20.0007 18.907 19.7827C19.2835 19.5914 19.5898 19.2858 19.782 18.9097C20 18.4817 20 17.9227 20 16.8047V11.4527C20 10.9187 20 10.6517 19.935 10.4027C19.8774 10.1826 19.7827 9.97395 19.655 9.7857C19.51 9.5727 19.31 9.3957 18.907 9.0447L14.107 4.8447C13.361 4.1917 12.987 3.8647 12.567 3.7407C12.197 3.6307 11.803 3.6307 11.432 3.7407C11.012 3.8647 10.64 4.1907 9.894 4.8427L5.093 9.0447C4.691 9.3967 4.49 9.5727 4.346 9.7847C4.2178 9.97319 4.12276 10.1822 4.065 10.4027C4 10.6507 4 10.9187 4 11.4527Z"
            stroke="#262931"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Propiedades relacionadas
      </span>
      <div className="w-full mt-12 relative px-10">
        <div
          className={
            "h-full hidden md:block md:absolute top-0 left-5 w-[40px] bg-white-gradient-carrousel z-20"
          }
        ></div>
        <Carousel className="relative w-full">
          <CarouselContent>
            {entity?.properties?.map((property) => {
              const location = property.location;
              return (
                <CarouselItem
                  className={"md:basis-1/4 w-full"}
                  key={property.id}
                >
                  <PropertyCard2
                    key={property.id.toString()}
                    id={property.id.toString()}
                    image={property.images[0].thumbnail}
                    logo={property.theme.icon}
                    name={property.entity.name}
                    price={property.operations[0]!.price}
                    address={
                      location
                        ? `${location.division?.name}, ${
                            location.division?.state
                          }, ${location.division?.country?.name}`
                        : "México"
                    }
                    description={property.description}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-primary-foreground z-30 absolute top-1/2 -left-5 md:left-5 -translate-y-1/2 border-0" />
          <CarouselNext className="bg-primary text-primary-foreground z-30 absolute top-1/2 -right-5 md:right-5 -translate-y-1/2 border-0" />
        </Carousel>
        <div
          className={
            "h-full hidden md:block md:absolute top-0 right-0 w-[140px] transform rotate-180 bg-white-gradient-carrousel z-20"
          }
        ></div>
      </div>
    </section>
  );
};
