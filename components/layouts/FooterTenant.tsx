"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";

export default function FooterTenant() {
  const tenantData = useAppSelector((state) => state.tenant.tenant);
  return (
    <footer className="flex flex-col gap-2 px-10 md:px-36 pt-24 pb-12 bg-white">
      <Image
        src={tenantData?.theme?.logotype.main || "/propitylogo.png"}
        height={60}
        quality={100}
        width={150}
        alt="Logo"
      />
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between mt-6 font-galano">
        <div className="flex flex-col gap-2 md:w-[500px]">
          <span className="font-bold md:text-base text-xl">Nosotros</span>
          <p className="text-sm w-full text-wrap">
            Somos un ecosistema dinámico que impulsa el crecimiento de la
            comunidad en cada transacción
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold md:text-base text-xl">Contacto</span>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm">
                Propity MX
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                +56 4 1234 5678
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                ricado.gomez@propity.io
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold md:text-base text-xl">Secciones</span>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm">
                Desarrollos
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Inmobiliarias
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Precios
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Inventario
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold">Síguenos</span>
          <div className="flex gap-2">
            <Instagram className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-300">
        <p className="text-sm text-gray-500">
          Propity 2024 Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
