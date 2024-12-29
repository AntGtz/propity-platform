"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/common/dialog";
import { Button } from "@/components/common/button";
import AuthDialog from "@/components/features/login/AuthDialog";
import React, { useState } from "react";

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
      <nav className="gap-4 px-4 py-3 sm:px-16 sm:py-4 xl:px-36 relative shadow-md">
        <div
          className={
            "flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0"
          }
        >
          <Link href={`/`} className="text-sm font-medium">
            <Image
              src={`/propitylogo.png`}
              height={60}
              quality={100}
              width={150}
              alt="Logo"
            />
          </Link>
          <li className="flex items-center gap-4 font-galano">
            <a href="#" className="text-sm font-medium">
              Paquetes
            </a>
            <a href="#" className="text-sm font-medium">
              Nosotros
            </a>
            <a href="#" className="text-sm font-medium">
              Precios
            </a>
            <a href="#" className="text-sm font-medium">
              Contacto
            </a>
          </li>

          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="hover:bg-gray-200 font-medium font-jakarta"
                >
                  Ingresar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px] px-14 my-5">
                <AuthDialog setOpen={setOpenAuthDialog} />
              </DialogContent>
            </Dialog>
            {
              // TODO: add button variant
            }
            <Button size={"lg"} className={`font-medium font-jakarta`}>
              Crear cuenta {openAuthDialog}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
