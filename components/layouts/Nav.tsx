"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../common/button";
import { Dialog, DialogContent, DialogTrigger } from "../common/dialog";
import AuthDialog from "../features/login/AuthDialog";
import { useTenantTheme } from "@/hooks/useTenantTheme";
import { useAppSelector } from "@/lib/store/hooks";

export default function Nav() {
  const tenantData = useAppSelector((state) => state.tenant.tenant);
  useTenantTheme(tenantData?.theme?.color);
  return (
    <>
      <nav className="flex items-center justify-between gap-4 px-4 py-3 sm:px-16 sm:py-4 xl:px-36 relative shadow-md">
        <li className="flex items-center gap-4 font-galano">
          <a href="#" className="text-sm font-medium">
            Desarrollos
          </a>
          <a href="#" className="text-sm font-medium">
            Inmobiliarias
          </a>
          <a href="#" className="text-sm font-medium">
            Precios
          </a>
          <a href="#" className="text-sm font-medium">
            Inventario
          </a>
          <a href="#" className="text-sm font-medium">
            Nosotros
          </a>
          <a href="#" className="text-sm font-medium">
            Contacto
          </a>
        </li>
        <Link
          href={`/`}
          className="text-sm font-medium absolute top-0 left-1/2 -translate-x-1/2 transform"
        >
          <Image
            src={`/propitylogo.png`}
            height={60}
            quality={100}
            width={150}
            alt="Logo"
          />
        </Link>
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
              <AuthDialog />
            </DialogContent>
          </Dialog>
          {
            // TODO: add button variant
          }
          <Button size={"lg"} className={`font-medium font-jakarta`}>
            Registrarse
          </Button>
        </div>
      </nav>
    </>
  );
}
