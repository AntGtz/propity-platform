"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import MobileMenuPlatform from "@/components/layouts/MobileMenuPlatform";
import { Dialog, DialogTrigger } from "@/components/common/dialog";
import { Button } from "@/components/common/button";

export default function NavPlatform() {
  const [openAuthDialog, setOpenAuthDialog] = useState(false);

  return (
    <>
      <div
        className={"py-3 w-full bg-[#041E42] text-white font-galano text-xs"}
      >
        <div
          className={"max-w-7xl gap-6  mx-auto px-4 md:px-0 flex justify-end"}
        >
          <span className={"flex gap-1 items-center"}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.33366 1C4.66699 1 6.00033 4 6.00033 4.33333C6.00033 5 5.00033 5.66667 4.66699 6.33333C4.33366 7 5.00033 7.66667 5.66699 8.33333C5.92699 8.59333 7.00033 9.66667 7.66699 9.33333C8.33366 9 9.00033 8 9.66699 8C10.0003 8 13.0003 9.33333 13.0003 9.66667C13.0003 11 12.0003 12 11.0003 12.3333C10.0003 12.6667 9.33366 12.6667 8.00033 12.3333C6.66699 12 5.66699 11.6667 4.00033 10C2.33366 8.33333 2.00033 7.33333 1.66699 6C1.33366 4.66667 1.33366 4 1.66699 3C2.00033 2 3.00033 1 4.33366 1Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            +52 444 2215761
          </span>

          <span className={"flex gap-1 items-center"}>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.28395C12 0.659287 11.33 0.241953 10.766 0.551953C10.008 0.967953 7.764 2.17995 6.42067 2.71395C4.85733 3.33462 3.51133 3.56795 1.96867 3.63995C0.9 3.68929 0 4.55262 0 5.66662V8.33329C0 9.44729 0.9 10.3106 1.96867 10.36C2.15089 10.3688 2.33089 10.3797 2.50867 10.3926L2.01267 12.8693C1.97801 13.0427 2.01368 13.2229 2.11182 13.37C2.20997 13.5172 2.36255 13.6193 2.536 13.654C2.70945 13.6886 2.88957 13.6529 3.03672 13.5548C3.18387 13.4567 3.28601 13.3041 3.32067 13.1306L3.836 10.552C4.678 10.6953 5.51267 10.9253 6.42067 11.286C7.764 11.82 10.0073 13.0326 10.766 13.448C11.33 13.758 12 13.3406 12 12.716V1.28395ZM4 9.22795C4.94533 9.38462 5.88867 9.63995 6.91333 10.0473C8.01467 10.4846 9.63733 11.3266 10.6667 11.878V2.12195C9.63733 2.67329 8.01467 3.51529 6.91333 3.95262C5.88867 4.35929 4.94533 4.61529 4 4.77262V9.22795ZM2.66667 4.93262C2.45689 4.94862 2.24489 4.96173 2.03067 4.97195C1.62867 4.99062 1.33333 5.30795 1.33333 5.66662V8.33329C1.33333 8.69195 1.62867 9.00929 2.03067 9.02795C2.24533 9.03773 2.45733 9.05106 2.66667 9.06795V4.93262Z"
                fill="white"
              />
            </svg>
            !Recomiéndanos!
          </span>
        </div>
      </div>
      <nav className="py-3 sm:py-4 relative shadow-md w-full">
        <div
          className={
            "max-w-7xl mx-auto flex items-center md:justify-between gap-4 px-4 md:px-0"
          }
        >
          <MobileMenuPlatform />
          <Link href={`/`} className="text-sm font-medium">
            <Image
              src={"/propityLogo.png"}
              height={80}
              quality={100}
              width={190}
              className={"h-8 md:h-12 w-auto"}
              alt="Logo"
            />
          </Link>
          <li className="md:flex hidden items-center gap-4 font-galano">
            <Link href="/desarrollos" className={`text-sm font-medium`}>
              Desarrollos
            </Link>
            <Link href="/inmobiliarias" className={`text-sm font-medium`}>
              Inmobiliarias
            </Link>
            <Link href="/inventario" className={`text-sm font-medium`}>
              Inventario
            </Link>
          </li>

          <span className={"ml-auto block md:hidden"}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9734 20.4453C20.688 18.1894 18.6809 16.4317 16.2752 15.455C17.4716 14.5578 18.3553 13.3068 18.8011 11.8794C19.247 10.4521 19.2325 8.92056 18.7596 7.50188C18.2867 6.08321 17.3794 4.84929 16.1663 3.9749C14.9531 3.10052 13.4956 2.63 12.0002 2.63C10.5048 2.63 9.04731 3.10052 7.83416 3.9749C6.62102 4.84929 5.71375 6.08321 5.24086 7.50188C4.76797 8.92056 4.75343 10.4521 5.19932 11.8794C5.6452 13.3068 6.52889 14.5578 7.72522 15.455C5.31953 16.4317 3.31245 18.1894 2.0271 20.4453C1.94745 20.5734 1.89437 20.7162 1.87101 20.8651C1.84764 21.0141 1.85447 21.1663 1.89109 21.3126C1.92771 21.4589 1.99337 21.5963 2.08416 21.7168C2.17496 21.8372 2.28904 21.9381 2.41963 22.0135C2.55021 22.089 2.69463 22.1374 2.8443 22.1559C2.99397 22.1744 3.14584 22.1627 3.29087 22.1213C3.4359 22.08 3.57114 22.0099 3.68854 21.9152C3.80595 21.8206 3.90312 21.7033 3.97429 21.5703C5.67304 18.6341 8.67304 16.8828 12.0002 16.8828C15.3274 16.8828 18.3274 18.635 20.0262 21.5703C20.1804 21.8183 20.425 21.9966 20.7083 22.0675C20.9916 22.1384 21.2914 22.0964 21.5443 21.9503C21.7972 21.8042 21.9833 21.5655 22.0634 21.2846C22.1434 21.0038 22.1112 20.7028 21.9734 20.4453ZM7.12523 9.75782C7.12523 8.79363 7.41114 7.8511 7.94681 7.04941C8.48248 6.24772 9.24385 5.62288 10.1346 5.2539C11.0254 4.88493 12.0056 4.78839 12.9513 4.97649C13.8969 5.16459 14.7656 5.62889 15.4474 6.31067C16.1292 6.99245 16.5935 7.86109 16.7816 8.80675C16.9697 9.75241 16.8731 10.7326 16.5041 11.6234C16.1352 12.5142 15.5103 13.2756 14.7086 13.8112C13.9069 14.3469 12.9644 14.6328 12.0002 14.6328C10.7078 14.6313 9.46864 14.1172 8.55472 13.2033C7.64081 12.2894 7.12671 11.0503 7.12523 9.75782Z"
                fill="#041E42"
              />
            </svg>
          </span>
          <div className="md:flex hidden items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="hover:bg-gray-200 font-medium font-jakarta"
                >
                  Ingresar
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button
              size={"lg"}
              className={`font-medium font-jakarta bg-[#00B140]`}
            >
              Registrarse
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
