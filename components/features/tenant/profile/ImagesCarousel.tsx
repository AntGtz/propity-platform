import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import Image from "next/image";

export const ImagesCarousel = () => {
  return (
    <>
      <section className={"relative w-full mt-6"}>
        <div
          className={
            "h-full hidden md:block md:absolute top-0 left-0 w-[40px] bg-white-gradient-carrousel z-20"
          }
        ></div>
        <Carousel className="relative">
          <CarouselContent>
            <CarouselItem className="basis-3/4 relative">
              <Image
                src={"/apartment1.jpg"}
                alt={"ProfilePic"}
                width={600}
                height={600}
                className={
                  "object-cover rounded-lg md:rounded-none h-[17em] md:h-[380px] w-full object-center"
                }
              />
            </CarouselItem>
            <CarouselItem className="basis-3/4 relative">
              <Image
                src={"/apartment1.jpg"}
                alt={"ProfilePic"}
                width={600}
                height={600}
                className={
                  "object-cover rounded-lg md:rounded-none h-[17em] md:h-[380px] w-full object-center"
                }
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-primary-foreground z-30 absolute top-1/2 left-0 md:-left-5 -translate-y-1/2 border-0" />
          <CarouselNext className="bg-primary text-primary-foreground z-30 absolute top-1/2 right-0 md:-right-5 -translate-y-1/2 border-0" />
        </Carousel>
        <div
          className={
            "h-full hidden md:block md:absolute top-0 right-0 w-[140px] transform rotate-180 bg-white-gradient-carrousel z-20"
          }
        ></div>
      </section>
    </>
  );
};
