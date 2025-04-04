import Image from "next/image";
import { Button } from "@/components/common/button";
import Link from "next/link";

interface DevelopmentCardProps {
  id: string;
  image: string | null;
  logo: string;
  name: string;
  slogan: string;
  location: string | null;
  description: string | null;
  price?: number;
}

export const DevelopmentCard = ({
  id,
  image,
  logo,
  name,
  slogan,
  location,
  description,
  price,
}: DevelopmentCardProps) => {
  return (
    <>
      <div
        className={
          "flex md:flex-row flex-col gap-4 items-center justify-between bg-[#00B14024] text-[#252526] rounded px-4 py-4 md:mr-10"
        }
      >
        <Image
          src={image ?? "/apartment1.jpg"}
          alt="Apartment"
          width={700}
          height={320}
          className="rounded-md w-[50rem] h-[360px] object-cover"
        />
        <div className="md:w-4/12 w-full md:h-[360px] flex flex-col font-galano">
          <div className={"flex items-center gap-3"}>
            <Image
              className=""
              src={logo ?? "/jomLogo.png"}
              alt="JomLogo"
              width={60}
              height={60}
            />
            <div className={"flex flex-col"}>
              <Link href={`/perfil/${id}`}>
                <h3 className={"font-bold text-xl"}>
                  {name ?? "Constructora Hogar"}
                </h3>
              </Link>
              <span>{slogan ?? "Ciudad de México"}</span>
            </div>
          </div>
          <span className="font-bold text-base my-1">
            Desde {price ? `$${price.toLocaleString("es-MX")}` : "$3,500.000"}
          </span>
          <span className={"text-base my-1"}>
            {location ?? "Quetzal 247, Priv. El Encanto, en Pozos de Caldas"}
          </span>
          <p className="text-base my-1">
            {description ??
              "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives."}
          </p>
          <div className={"flex gap-2 items-center my-1"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z"
                fill="#262931"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                fill="#262931"
              />
            </svg>

            <svg
              width="27"
              height="23"
              viewBox="0 0 27 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_489_3838)">
                <path
                  d="M18.8113 18.645L15.541 18.6405L15.548 13.5696C15.5497 12.3604 15.53 10.8038 13.8509 10.8015C12.1477 10.7991 11.8853 12.1162 11.8834 13.4766L11.8763 18.6352L8.60604 18.6307L8.62038 8.20283L11.7598 8.20715L11.7579 9.63222L11.8018 9.63228C12.1167 9.10081 12.5713 8.66387 13.1172 8.36799C13.6631 8.07211 14.2798 7.92837 14.9017 7.95209C18.2162 7.95664 18.8244 10.1162 18.8205 12.9245L18.8113 18.645ZM4.93242 6.77234C4.55708 6.77189 4.19029 6.66125 3.87845 6.4544C3.56661 6.24755 3.32373 5.95379 3.18051 5.61026C3.03728 5.26673 3.00014 4.88887 3.0738 4.52445C3.14746 4.16003 3.32861 3.82543 3.59433 3.56296C3.86005 3.30048 4.19842 3.12192 4.56663 3.04986C4.93485 2.97779 5.31638 3.01546 5.66298 3.1581C6.00958 3.30074 6.30568 3.54194 6.51384 3.8512C6.722 4.16046 6.83287 4.5239 6.83243 4.89554C6.83214 5.14231 6.78275 5.38659 6.68711 5.61446C6.59146 5.84232 6.45144 6.04931 6.27501 6.22358C6.09858 6.39786 5.88919 6.53602 5.65883 6.63018C5.42847 6.72433 5.18164 6.77264 4.93242 6.77234ZM6.55124 18.6282L3.27759 18.6237L3.29193 8.1955L6.56558 8.2L6.55124 18.6282ZM20.4672 0.0285533L1.6599 0.00269088C1.23303 -0.00266594 0.821467 0.159998 0.515673 0.454938C0.209878 0.749879 0.0348729 1.15296 0.0290819 1.57562L0.00336798 20.275C0.00781793 20.6978 0.181611 21.1017 0.486583 21.3978C0.791554 21.6939 1.20276 21.858 1.62985 21.8541L20.4372 21.8799C20.8651 21.8858 21.2779 21.7233 21.5849 21.4281C21.8919 21.1328 22.068 20.729 22.0745 20.3053L22.1002 1.60462C22.0947 1.18111 21.9196 0.777086 21.6134 0.481311C21.3072 0.185537 20.8949 0.0222062 20.4672 0.0272035"
                  fill="#262931"
                />
              </g>
              <defs>
                <clipPath id="clip0_489_3838">
                  <rect
                    width="26.1021"
                    height="22.0342"
                    fill="white"
                    transform="translate(0.0302734) rotate(0.0787888)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <Link className={"block mt-6 md:mt-auto"} href={`/inventario/${id}`}>
            <Button
              size={"lg"}
              className="w-full mt-6 md:mt-auto bg-primary text-white [&]:py-4"
            >
              Ver inventario
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
