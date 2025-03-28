"use client";
import Image from "next/image";
import { formatPhoneNumber } from "@/utils";
import Link from "next/link";
import { useAppSelector } from "@/lib/store/hooks";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Button } from "@/components/common/button";
import { useState } from "react";

interface InventoryCardProps {
  entityId: string;
  propertyId: string;
  image: string | null;
  address: string;
  price: number;
  comision: number;
  phone: string;
  facebook: string | undefined;
  instagram: string | undefined;
  rooms: number;
  bathrooms: number;
  totalSpace: number;
  totalBuiltSpace: number;
}

export const InventoryCard = ({
  entityId,
  propertyId,
  image,
  address,
  price,
  comision,
  rooms,
  bathrooms,
  phone,
  facebook,
  instagram,
  totalSpace,
  totalBuiltSpace,
}: InventoryCardProps) => {
  const userState = useAppSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className={"flex flex-col gap-3 w-full cursor-pointer"}>
        <div className="relative">
          <Link
            className={"w-full h-full cursor-pointer relative"}
            href={`/propiedad/${entityId}/${propertyId}`}
          >
            <Image
              src={image ?? "/apartment1.jpg"}
              alt="Apartment"
              width={700}
              className={"rounded-md object-cover w-full h-[360px]"}
              height={320}
            />
            {userState.role.jom.name === "agent" && (
              <span className="text-xs bg-[#69D790] rounded-3xl px-2.5 py-1.5 absolute z-10 font-jakarta ml-4 top-4">
                {comision}%
              </span>
            )}
          </Link>
          {userState.role.jom.name === "agent" && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <span className="text-xs bg-primary text-primary-foreground rounded-3xl px-2.5 py-1.5 absolute z-10 font-jakarta right-4 top-4">
                  Agregar
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className={"font-galano text-xl"}>
                  {" "}
                  Desea agregar esta propiedad a su inventario?
                </DialogTitle>

                <DialogFooter>
                  <Button onClick={() => setOpen(false)} className={"py-6 w-full"}>
                    Agregar
                  </Button>
                  <Button variant={"outline"} onClick={() => setOpen(false)} className={"py-6 w-full"}>
                    Cancelar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className={"flex flex-col items-center"}>
          <Link
            href={`/propiedad/${entityId}/${propertyId}`}
            className={
              "font-bold flex items-center gap-3 font-galano text-3xl my-1 w-full"
            }
          >
            ${Number(price).toLocaleString("es-MX")}{" "}
          </Link>
          <Link
            className={"flex justify-start w-full"}
            href={`/propiedad/${entityId}/${propertyId}`}
          >
            <span className={"text-base mb-1 w-full"}>{address}</span>
          </Link>
          <Link
            href={`/propiedad/${entityId}/${propertyId}`}
            className={
              "md:flex grid grid-cols-2 justify-between gap-2 md:gap-4 items-center w-full"
            }
          >
            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2H7V3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3V2C9 1.46957 8.78929 0.960859 8.41421 0.585786C8.03914 0.210714 7.53043 0 7 0H6C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V8H2C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 3.89926e-09 9.46957 3.89926e-09 10V11C-3.52605e-05 11.9783 0.239126 12.9417 0.696649 13.8064C1.15417 14.671 1.81618 15.4107 2.625 15.961L2.293 16.293C2.19749 16.3852 2.12131 16.4956 2.0689 16.6176C2.01649 16.7396 1.9889 16.8708 1.98775 17.0036C1.9866 17.1364 2.0119 17.2681 2.06218 17.391C2.11246 17.5138 2.18671 17.6255 2.2806 17.7194C2.3745 17.8133 2.48615 17.8875 2.60905 17.9378C2.73194 17.9881 2.86362 18.0134 2.9964 18.0123C3.12918 18.0111 3.2604 17.9835 3.3824 17.9311C3.50441 17.8787 3.61475 17.8025 3.707 17.707L4.583 16.832C5.037 16.942 5.512 17 6 17H14C14.488 17 14.963 16.942 15.417 16.832L16.293 17.707C16.4816 17.8892 16.7342 17.99 16.9964 17.9877C17.2586 17.9854 17.5094 17.8802 17.6948 17.6948C17.8802 17.5094 17.9854 17.2586 17.9877 16.9964C17.99 16.7342 17.8892 16.4816 17.707 16.293L17.375 15.961C18.1838 15.4107 18.8458 14.671 19.3034 13.8064C19.7609 12.9417 20 11.9783 20 11V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H5V3ZM2 10H18V11C18 12.0609 17.5786 13.0783 16.8284 13.8284C16.0783 14.5786 15.0609 15 14 15H6C4.93913 15 3.92172 14.5786 3.17157 13.8284C2.42143 13.0783 2 12.0609 2 11V10Z"
                  fill="#262931"
                />
              </svg>
              <strong>{bathrooms}</strong>
              baños
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path
                  d="M19 5.78V3C19 1.35 17.65 0 16 0H12C11.23 0 10.53 0.3 10 0.78C9.47 0.3 8.77 0 8 0H4C2.35 0 1 1.35 1 3V5.78C0.39 6.33 0 7.12 0 8V13C0 13.55 0.45 14 1 14C1.55 14 2 13.55 2 13V12H18V13C18 13.55 18.45 14 19 14C19.55 14 20 13.55 20 13V8C20 7.12 19.61 6.33 19 5.78ZM12 2H16C16.55 2 17 2.45 17 3V5H11V3C11 2.45 11.45 2 12 2ZM3 3C3 2.45 3.45 2 4 2H8C8.55 2 9 2.45 9 3V5H3V3ZM2 10V8C2 7.45 2.45 7 3 7H17C17.55 7 18 7.45 18 8V10H2Z"
                  fill="#262931"
                />
              </svg>
              <strong>{rooms}</strong>
              recamaras
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H12M7 1V8M19 8H12M1 13H10"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <strong>{totalSpace}</strong>
              Metros
            </span>

            <span className={"flex gap-1.5 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 7.5V6C6.5 5.60218 6.34196 5.22064 6.06066 4.93934C5.77936 4.65804 5.39782 4.5 5 4.5C4.60218 4.5 4.22064 4.65804 3.93934 4.93934C3.65804 5.22064 3.5 5.60218 3.5 6V9.5"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 13.5C14 10.1865 11.3135 7.5 8 7.5C4.6865 7.5 2 10.1865 2 13.5V19.5H14M14 13.5V19.5M14 13.5H22V19.5H14"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 15.5C9.10457 15.5 10 14.6046 10 13.5C10 12.3954 9.10457 11.5 8 11.5C6.89543 11.5 6 12.3954 6 13.5C6 14.6046 6.89543 15.5 8 15.5Z"
                  stroke="#262931"
                  strokeWidth="2"
                />
                <path
                  d="M19.5 13.5V15.5M16.5 13.5V15.5M15 13.5H21"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <strong>{totalBuiltSpace}</strong>
              Metros
            </span>
          </Link>
          <div className={"flex justify-between items-center w-full mt-2"}>
            <Link
              href={`https://wa.me/${phone}`}
              target="_blank"
              className={"flex gap-1.5 items-center underline"}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.39 14.39 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                  stroke="#262931"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {formatPhoneNumber(phone)}
            </Link>
            <span className={"flex gap-1.5 items-center"}>
              <Link
                href={`${instagram ? `https://instagram.com/${instagram}` : "#"}`}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.33316 1.066C9.50616 1.012 9.88016 1 12.8682 1C15.8562 1 16.2302 1.013 17.4022 1.066C18.5742 1.119 19.3742 1.306 20.0742 1.577C20.8072 1.854 21.4722 2.287 22.0222 2.847C22.5822 3.396 23.0142 4.06 23.2902 4.794C23.5622 5.494 23.7482 6.294 23.8022 7.464C23.8562 8.639 23.8682 9.013 23.8682 12C23.8682 14.988 23.8552 15.362 23.8022 16.535C23.7492 17.705 23.5622 18.505 23.2902 19.205C23.0142 19.9391 22.5814 20.6042 22.0222 21.154C21.4722 21.714 20.8072 22.146 20.0742 22.422C19.3742 22.694 18.5742 22.88 17.4042 22.934C16.2302 22.988 15.8562 23 12.8682 23C9.88016 23 9.50616 22.987 8.33316 22.934C7.16316 22.881 6.36316 22.694 5.66316 22.422C4.92908 22.146 4.26398 21.7133 3.71416 21.154C3.15454 20.6047 2.72148 19.9399 2.44516 19.206C2.17416 18.506 1.98816 17.706 1.93416 16.536C1.88016 15.361 1.86816 14.987 1.86816 12C1.86816 9.012 1.88116 8.638 1.93416 7.466C1.98716 6.294 2.17416 5.494 2.44516 4.794C2.72189 4.06008 3.15528 3.39531 3.71516 2.846C4.2642 2.2865 4.92864 1.85344 5.66216 1.577C6.36216 1.306 7.16216 1.12 8.33216 1.066H8.33316ZM17.3132 3.046C16.1532 2.993 15.8052 2.982 12.8682 2.982C9.93116 2.982 9.58316 2.993 8.42316 3.046C7.35016 3.095 6.76816 3.274 6.38016 3.425C5.86716 3.625 5.50016 3.862 5.11516 4.247C4.75021 4.60205 4.46934 5.03428 4.29316 5.512C4.14216 5.9 3.96316 6.482 3.91416 7.555C3.86116 8.715 3.85016 9.063 3.85016 12C3.85016 14.937 3.86116 15.285 3.91416 16.445C3.96316 17.518 4.14216 18.1 4.29316 18.488C4.46916 18.965 4.75016 19.398 5.11516 19.753C5.47016 20.118 5.90316 20.399 6.38016 20.575C6.76816 20.726 7.35016 20.905 8.42316 20.954C9.58316 21.007 9.93016 21.018 12.8682 21.018C15.8062 21.018 16.1532 21.007 17.3132 20.954C18.3862 20.905 18.9682 20.726 19.3562 20.575C19.8692 20.375 20.2362 20.138 20.6212 19.753C20.9862 19.398 21.2672 18.965 21.4432 18.488C21.5942 18.1 21.7732 17.518 21.8222 16.445C21.8752 15.285 21.8862 14.937 21.8862 12C21.8862 9.063 21.8752 8.715 21.8222 7.555C21.7732 6.482 21.5942 5.9 21.4432 5.512C21.2432 4.999 21.0062 4.632 20.6212 4.247C20.2661 3.88207 19.8339 3.60121 19.3562 3.425C18.9682 3.274 18.3862 3.095 17.3132 3.046ZM11.4632 15.391C12.2478 15.7176 13.1215 15.7617 13.9351 15.5157C14.7486 15.2697 15.4516 14.7489 15.9238 14.0422C16.396 13.3356 16.6082 12.4869 16.5242 11.6411C16.4402 10.7953 16.0652 10.005 15.4632 9.405C15.0794 9.02148 14.6154 8.72781 14.1045 8.54515C13.5936 8.36248 13.0486 8.29536 12.5087 8.34862C11.9687 8.40187 11.4473 8.57418 10.982 8.85313C10.5166 9.13208 10.1189 9.51074 9.81747 9.96185C9.51603 10.413 9.31835 10.9253 9.23868 11.462C9.15901 11.9986 9.19932 12.5463 9.3567 13.0655C9.51409 13.5847 9.78465 14.0626 10.1489 14.4647C10.5131 14.8668 10.962 15.1832 11.4632 15.391ZM8.87016 8.002C9.39519 7.47697 10.0185 7.0605 10.7045 6.77636C11.3904 6.49222 12.1257 6.34597 12.8682 6.34597C13.6107 6.34597 14.3459 6.49222 15.0319 6.77636C15.7178 7.0605 16.3411 7.47697 16.8662 8.002C17.3912 8.52702 17.8077 9.15032 18.0918 9.8363C18.3759 10.5223 18.5222 11.2575 18.5222 12C18.5222 12.7425 18.3759 13.4777 18.0918 14.1637C17.8077 14.8497 17.3912 15.473 16.8662 15.998C15.8058 17.0583 14.3677 17.654 12.8682 17.654C11.3686 17.654 9.9305 17.0583 8.87016 15.998C7.80983 14.9377 7.21414 13.4995 7.21414 12C7.21414 10.5005 7.80983 9.06234 8.87016 8.002ZM19.7762 7.188C19.9063 7.06527 20.0104 6.91768 20.0825 6.75397C20.1545 6.59027 20.193 6.41377 20.1956 6.23493C20.1982 6.05609 20.1649 5.87855 20.0976 5.71281C20.0304 5.54707 19.9306 5.39651 19.8041 5.27004C19.6777 5.14357 19.5271 5.04376 19.3614 4.97652C19.1956 4.90928 19.0181 4.87598 18.8392 4.87858C18.6604 4.88119 18.4839 4.91965 18.3202 4.9917C18.1565 5.06374 18.0089 5.1679 17.8862 5.298C17.6475 5.55103 17.5168 5.88712 17.5219 6.23493C17.5269 6.58274 17.6674 6.91488 17.9133 7.16084C18.1593 7.40681 18.4914 7.54723 18.8392 7.5523C19.187 7.55737 19.5231 7.42669 19.7762 7.188Z"
                    fill="#262931"
                  />
                </svg>
              </Link>
              <Link
                href={`${facebook ? `https://facebook.com/${facebook}` : "#"}`}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_661_10967)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.868164 12.067C0.868164 18.033 5.20116 22.994 10.8682 24V15.333H7.86816V12H10.8682V9.333C10.8682 6.333 12.8012 4.667 15.5352 4.667C16.4012 4.667 17.3352 4.8 18.2012 4.933V8H16.6682C15.2012 8 14.8682 8.733 14.8682 9.667V12H18.0682L17.5352 15.333H14.8682V24C20.5352 22.994 24.8682 18.034 24.8682 12.067C24.8682 5.43 19.4682 0 12.8682 0C6.26816 0 0.868164 5.43 0.868164 12.067Z"
                      fill="#262931"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_661_10967">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.868164)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </article>
    </>
  );
};
