import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import Image from "next/image";

export default function ImageCarousel() {
  return (
    <section className="flex gap-4">
      <div className="w-9/12">
        <Carousel className="relative h-full">
          <CarouselContent className="">
            <CarouselItem className="h-[504px] relative">
              <Image
                src={"/propertyPrincipal.jpg"}
                alt="Apartment"
                width={700}
                height={320}
                className="w-full rounded-tl-md rounded-bl-md h-full"
              />
              <div className="absolute bottom-4 left-12 flex items-center gap-2">
                <span className="flex gap-1.5 font-galano text-white text-[10px]  bg-[#00000080] px-2 py-2 rounded-md">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.779625 1.17334C0.797629 1.02196 0.850698 0.876879 0.934613 0.749614C1.01853 0.62235 1.13097 0.516416 1.26301 0.440234C1.39505 0.364053 1.54304 0.319724 1.69522 0.310773C1.8474 0.301822 1.99957 0.328495 2.13963 0.388671C2.84763 0.691338 4.43429 1.41067 6.44763 2.57267C8.46163 3.73534 9.87829 4.75067 10.4936 5.21134C11.019 5.60534 11.0203 6.38667 10.4943 6.782C9.88496 7.24001 8.48562 8.242 6.44763 9.41934C4.40762 10.5967 2.83963 11.3073 2.13829 11.606C1.53429 11.864 0.858292 11.4727 0.779625 10.8213C0.687625 10.06 0.515625 8.33134 0.515625 5.99667C0.515625 3.66334 0.686959 1.93534 0.779625 1.17334Z"
                      fill="white"
                    />
                  </svg>
                  Video tour
                </span>
                <span className="flex gap-1.5 font-galano text-white text-[10px]  bg-[#00000080] px-2 py-2 rounded-md">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99967 9.66667C7.83301 9.66667 8.54145 9.37511 9.12501 8.792C9.70856 8.20889 10.0001 7.50044 9.99967 6.66667C9.99923 5.83289 9.70767 5.12467 9.12501 4.542C8.54234 3.95933 7.8339 3.66756 6.99967 3.66667C6.16545 3.66578 5.45723 3.95756 4.87501 4.542C4.29279 5.12644 4.00101 5.83467 3.99967 6.66667C3.99834 7.49867 4.29012 8.20711 4.87501 8.792C5.4599 9.37689 6.16812 9.66844 6.99967 9.66667ZM6.99967 8.33333C6.53301 8.33333 6.13856 8.17222 5.81634 7.85C5.49412 7.52778 5.33301 7.13333 5.33301 6.66667C5.33301 6.2 5.49412 5.80556 5.81634 5.48333C6.13856 5.16111 6.53301 5 6.99967 5C7.46634 5 7.86079 5.16111 8.18301 5.48333C8.50523 5.80556 8.66634 6.2 8.66634 6.66667C8.66634 7.13333 8.50523 7.52778 8.18301 7.85C7.86079 8.17222 7.46634 8.33333 6.99967 8.33333ZM1.66634 12C1.29967 12 0.985897 11.8696 0.725008 11.6087C0.464119 11.3478 0.333452 11.0338 0.333008 10.6667V2.66667C0.333008 2.3 0.463675 1.98622 0.725008 1.72533C0.986341 1.46444 1.30012 1.33378 1.66634 1.33333H3.76634L4.99967 0H8.99967L10.233 1.33333H12.333C12.6997 1.33333 13.0137 1.464 13.275 1.72533C13.5363 1.98667 13.6668 2.30044 13.6663 2.66667V10.6667C13.6663 11.0333 13.5359 11.3473 13.275 11.6087C13.0141 11.87 12.7001 12.0004 12.333 12H1.66634Z"
                      fill="white"
                    />
                  </svg>
                  1/20
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="h-[504px] relative">
              <Image
                src={"/propertyPrincipal.jpg"}
                alt="Apartment"
                width={700}
                height={400}
                className="rounded-tl-md rounded-bl-md w-full h-full"
              />
              <div className="absolute bottom-4 left-12 flex items-center gap-2">
                <span className="flex gap-1.5 font-galano text-white text-[10px]  bg-[#00000080] px-2 py-2 rounded-md">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.779625 1.17334C0.797629 1.02196 0.850698 0.876879 0.934613 0.749614C1.01853 0.62235 1.13097 0.516416 1.26301 0.440234C1.39505 0.364053 1.54304 0.319724 1.69522 0.310773C1.8474 0.301822 1.99957 0.328495 2.13963 0.388671C2.84763 0.691338 4.43429 1.41067 6.44763 2.57267C8.46163 3.73534 9.87829 4.75067 10.4936 5.21134C11.019 5.60534 11.0203 6.38667 10.4943 6.782C9.88496 7.24001 8.48562 8.242 6.44763 9.41934C4.40762 10.5967 2.83963 11.3073 2.13829 11.606C1.53429 11.864 0.858292 11.4727 0.779625 10.8213C0.687625 10.06 0.515625 8.33134 0.515625 5.99667C0.515625 3.66334 0.686959 1.93534 0.779625 1.17334Z"
                      fill="white"
                    />
                  </svg>
                  Video tour
                </span>
                <span className="flex gap-1.5 font-galano text-white text-[10px]  bg-[#00000080] px-2 py-2 rounded-md">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99967 9.66667C7.83301 9.66667 8.54145 9.37511 9.12501 8.792C9.70856 8.20889 10.0001 7.50044 9.99967 6.66667C9.99923 5.83289 9.70767 5.12467 9.12501 4.542C8.54234 3.95933 7.8339 3.66756 6.99967 3.66667C6.16545 3.66578 5.45723 3.95756 4.87501 4.542C4.29279 5.12644 4.00101 5.83467 3.99967 6.66667C3.99834 7.49867 4.29012 8.20711 4.87501 8.792C5.4599 9.37689 6.16812 9.66844 6.99967 9.66667ZM6.99967 8.33333C6.53301 8.33333 6.13856 8.17222 5.81634 7.85C5.49412 7.52778 5.33301 7.13333 5.33301 6.66667C5.33301 6.2 5.49412 5.80556 5.81634 5.48333C6.13856 5.16111 6.53301 5 6.99967 5C7.46634 5 7.86079 5.16111 8.18301 5.48333C8.50523 5.80556 8.66634 6.2 8.66634 6.66667C8.66634 7.13333 8.50523 7.52778 8.18301 7.85C7.86079 8.17222 7.46634 8.33333 6.99967 8.33333ZM1.66634 12C1.29967 12 0.985897 11.8696 0.725008 11.6087C0.464119 11.3478 0.333452 11.0338 0.333008 10.6667V2.66667C0.333008 2.3 0.463675 1.98622 0.725008 1.72533C0.986341 1.46444 1.30012 1.33378 1.66634 1.33333H3.76634L4.99967 0H8.99967L10.233 1.33333H12.333C12.6997 1.33333 13.0137 1.464 13.275 1.72533C13.5363 1.98667 13.6668 2.30044 13.6663 2.66667V10.6667C13.6663 11.0333 13.5359 11.3473 13.275 11.6087C13.0141 11.87 12.7001 12.0004 12.333 12H1.66634Z"
                      fill="white"
                    />
                  </svg>
                  1/20
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="h-[504px] relative">
              <Image
                src={"/propertyPrincipal.jpg"}
                alt="Apartment"
                width={700}
                height={400}
                className="rounded-tl-md rounded-bl-md w-full h-full"
              />
              <div className="absolute bottom-4 left-12 flex items-center gap-2">
                <span className="flex gap-1.5 font-galano text-white text-[10px]  bg-[#00000080] px-2 py-2 rounded-md">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.779625 1.17334C0.797629 1.02196 0.850698 0.876879 0.934613 0.749614C1.01853 0.62235 1.13097 0.516416 1.26301 0.440234C1.39505 0.364053 1.54304 0.319724 1.69522 0.310773C1.8474 0.301822 1.99957 0.328495 2.13963 0.388671C2.84763 0.691338 4.43429 1.41067 6.44763 2.57267C8.46163 3.73534 9.87829 4.75067 10.4936 5.21134C11.019 5.60534 11.0203 6.38667 10.4943 6.782C9.88496 7.24001 8.48562 8.242 6.44763 9.41934C4.40762 10.5967 2.83963 11.3073 2.13829 11.606C1.53429 11.864 0.858292 11.4727 0.779625 10.8213C0.687625 10.06 0.515625 8.33134 0.515625 5.99667C0.515625 3.66334 0.686959 1.93534 0.779625 1.17334Z"
                      fill="white"
                    />
                  </svg>
                  Video tour
                </span>
                <span className="flex gap-1.5 font-galano text-white text-[10px]  bg-[#00000080] px-2 py-2 rounded-md">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99967 9.66667C7.83301 9.66667 8.54145 9.37511 9.12501 8.792C9.70856 8.20889 10.0001 7.50044 9.99967 6.66667C9.99923 5.83289 9.70767 5.12467 9.12501 4.542C8.54234 3.95933 7.8339 3.66756 6.99967 3.66667C6.16545 3.66578 5.45723 3.95756 4.87501 4.542C4.29279 5.12644 4.00101 5.83467 3.99967 6.66667C3.99834 7.49867 4.29012 8.20711 4.87501 8.792C5.4599 9.37689 6.16812 9.66844 6.99967 9.66667ZM6.99967 8.33333C6.53301 8.33333 6.13856 8.17222 5.81634 7.85C5.49412 7.52778 5.33301 7.13333 5.33301 6.66667C5.33301 6.2 5.49412 5.80556 5.81634 5.48333C6.13856 5.16111 6.53301 5 6.99967 5C7.46634 5 7.86079 5.16111 8.18301 5.48333C8.50523 5.80556 8.66634 6.2 8.66634 6.66667C8.66634 7.13333 8.50523 7.52778 8.18301 7.85C7.86079 8.17222 7.46634 8.33333 6.99967 8.33333ZM1.66634 12C1.29967 12 0.985897 11.8696 0.725008 11.6087C0.464119 11.3478 0.333452 11.0338 0.333008 10.6667V2.66667C0.333008 2.3 0.463675 1.98622 0.725008 1.72533C0.986341 1.46444 1.30012 1.33378 1.66634 1.33333H3.76634L4.99967 0H8.99967L10.233 1.33333H12.333C12.6997 1.33333 13.0137 1.464 13.275 1.72533C13.5363 1.98667 13.6668 2.30044 13.6663 2.66667V10.6667C13.6663 11.0333 13.5359 11.3473 13.275 11.6087C13.0141 11.87 12.7001 12.0004 12.333 12H1.66634Z"
                      fill="white"
                    />
                  </svg>
                  1/20
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-green-400 absolute top-1/2 left-5 -translate-y-1/2" />
          <CarouselNext className="bg-green-400 absolute top-1/2 right-5 -translate-y-1/2" />
        </Carousel>
      </div>
      <div className="w-3/12 flex flex-col gap-3">
        <div className="relative w-full h-40">
          <Image
            src={"/propertyDetail1.jpg"}
            className="object-cover rounded-tr-md"
            alt="Property"
            fill
          />
          <span className="absolute font-galano text-white text-[10px] bottom-4 left-4 bg-[#00000080] px-2 py-1 rounded-md">
            Exterior
          </span>
        </div>
        <div className="relative w-full h-40">
          <Image src={"/propertyDetail2.jpg"} alt="Property" fill />
          <span className="absolute font-galano text-white text-[10px] bottom-4 left-4 bg-[#00000080] px-2 py-1 rounded-md">
            Cocina
          </span>
        </div>
        <div className="relative w-full h-40">
          <Image
            src={"/propertyDetail3.jpg"}
            alt="Property"
            fill
            className="rounded-br-md"
          />
          <span className="absolute font-galano text-white text-[10px] bottom-4 left-4 bg-[#00000080] px-2 py-1 rounded-md">
            Sala de estar
          </span>
        </div>
      </div>
    </section>
  );
}
