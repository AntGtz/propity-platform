"use client";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";
import { useState } from "react";

interface PropertyCarouselProps {
  entityId: string;
  id: string;
}

export const PropertyCarousel = ({ entityId, id }: PropertyCarouselProps) => {
  const entity = useAppSelector((state) =>
    state.tenant.communityDetails.find((e) => e.id === entityId),
  );
  const property = entity?.properties?.find((p) => p.id === Number(id));

  const [propertyImages, setPropertyImages] = useState<string[]>([
    "/apartment1.jpg",
    "/demoImg.png",
    "/agent.jpg",
    "/develop.jpg",
    "/propertyex.jpg",
  ]);

  const handleNext = () => {
    setPropertyImages((prevImages) => {
      const [first, ...rest] = prevImages;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setPropertyImages((prevImages) => {
      const last = prevImages[prevImages.length - 1];
      const rest = prevImages.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <>
      <div className={"w-full flex gap-6 mt-8"}>
        <div
          className={"md:w-9/12 h-[220px] md:h-auto md:max-h-[600px] relative"}
        >
          <span
            onClick={handlePrev}
            className={
              "absolute top-1/2 left-2 md:left-6 -translate-y-1/2 cursor-pointer md:scale-100 scale-75"
            }
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="black" fillOpacity="0.5" />
              <path
                d="M31.6368 24.0723H18.5459"
                stroke="white"
                strokeWidth="1.84615"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.9087 18.4609L16.3633 24.0721L22.9087 29.6832"
                stroke="white"
                strokeWidth="1.84615"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div
            className={"absolute top-4 left-8 md:flex hidden flex-col gap-2"}
          >
            <span
              className={
                "text-xs text-center bg-blue-400 px-2 py-1 text-white rounded-full"
              }
            >
              Renta
            </span>
            <span
              className={
                "text-xs text-center bg-red-400 px-2 py-1 text-white rounded-full"
              }
            >
              Casa
            </span>
          </div>
          <Image
            src={propertyImages[0]}
            alt="Apartment"
            className={"rounded-lg w-full object-cover h-full"}
            width={840}
            height={500}
          />
          <div className={"absolute bottom-5 left-8 md:flex hidden gap-2"}>
            <span
              className={
                "text-sm flex gap-1.5 items-center text-white font-galano font-medium bg-black/60 px-3 py-1 rounded-full"
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99967 11.6667C8.83301 11.6667 9.54145 11.3751 10.125 10.792C10.7086 10.2089 11.0001 9.50044 10.9997 8.66667C10.9992 7.83289 10.7077 7.12467 10.125 6.542C9.54234 5.95933 8.8339 5.66756 7.99967 5.66667C7.16545 5.66578 6.45723 5.95756 5.87501 6.542C5.29279 7.12644 5.00101 7.83467 4.99967 8.66667C4.99834 9.49867 5.29012 10.2071 5.87501 10.792C6.4599 11.3769 7.16812 11.6684 7.99967 11.6667ZM7.99967 10.3333C7.53301 10.3333 7.13856 10.1722 6.81634 9.85C6.49412 9.52778 6.33301 9.13333 6.33301 8.66667C6.33301 8.2 6.49412 7.80556 6.81634 7.48333C7.13856 7.16111 7.53301 7 7.99967 7C8.46634 7 8.86079 7.16111 9.18301 7.48333C9.50523 7.80556 9.66634 8.2 9.66634 8.66667C9.66634 9.13333 9.50523 9.52778 9.18301 9.85C8.86079 10.1722 8.46634 10.3333 7.99967 10.3333ZM2.66634 14C2.29967 14 1.9859 13.8696 1.72501 13.6087C1.46412 13.3478 1.33345 13.0338 1.33301 12.6667V4.66667C1.33301 4.3 1.46367 3.98622 1.72501 3.72533C1.98634 3.46444 2.30012 3.33378 2.66634 3.33333H4.76634L5.99967 2H9.99967L11.233 3.33333H13.333C13.6997 3.33333 14.0137 3.464 14.275 3.72533C14.5363 3.98667 14.6668 4.30044 14.6663 4.66667V12.6667C14.6663 13.0333 14.5359 13.3473 14.275 13.6087C14.0141 13.87 13.7001 14.0004 13.333 14H2.66634Z"
                  fill="white"
                />
              </svg>
              1/{propertyImages.length}
            </span>
            <span
              className={
                "text-xs flex gap-1.5 items-center text-white font-galano font-medium bg-black/60 px-3 py-1 rounded-full"
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.77963 3.17285C3.79763 3.02148 3.8507 2.87639 3.93461 2.74913C4.01853 2.62186 4.13097 2.51593 4.26301 2.43975C4.39505 2.36356 4.54304 2.31924 4.69522 2.31028C4.8474 2.30133 4.99957 2.32801 5.13963 2.38818C5.84763 2.69085 7.43429 3.41018 9.44763 4.57218C11.4616 5.73485 12.8783 6.75018 13.4936 7.21085C14.019 7.60485 14.0203 8.38618 13.4943 8.78152C12.885 9.23952 11.4856 10.2415 9.44763 11.4188C7.40762 12.5962 5.83963 13.3069 5.13829 13.6055C4.53429 13.8635 3.85829 13.4722 3.77963 12.8209C3.68763 12.0595 3.51562 10.3308 3.51562 7.99618C3.51562 5.66285 3.68696 3.93485 3.77963 3.17285Z"
                  fill="white"
                />
              </svg>
              Video tour
            </span>
          </div>
          <span
            onClick={handleNext}
            className={
              "absolute top-1/2 right-2 md:right-6 -translate-y-1/2 cursor-pointer md:scale-100 scale-75"
            }
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                transform="matrix(-1 0 0 1 48 0)"
                fill="black"
                fillOpacity="0.5"
              />
              <path
                d="M16.3632 24.0723H29.4541"
                stroke="white"
                strokeWidth="1.84615"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.0913 18.4609L31.6367 24.0721L25.0913 29.6832"
                stroke="white"
                strokeWidth="1.84615"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div
          className={"md:w-3/12 md:grid hidden max-h-[600px] grid-rows-3 gap-4"}
        >
          <div className={"w-full h-full relative"}>
            <Image
              src={propertyImages[1]}
              alt="Apartment"
              className={"rounded-lg w-full object-cover h-full"}
              width={400}
              height={400}
            />
            <span
              className={
                "absolute text-[10px] bottom-4 left-5 flex gap-2 text-white bg-black/60 px-3 py-1 rounded-full"
              }
            >
              Exterior
            </span>
          </div>
          <Image
            src={propertyImages[2]}
            alt="Apartment"
            className={"rounded-lg w-full object-cover h-full"}
            width={400}
            height={400}
          />
          <Image
            src={propertyImages[3]}
            alt="Apartment"
            className={"rounded-lg w-full object-cover h-full"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};
