"use client";
import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterTenant() {
  const tenantData = useAppSelector((state) => state.tenant.details);
  const pathname = usePathname();

  if (pathname === "/dashboard") return <></>;

  return (
    <footer className="flex flex-col gap-2 pt-24 pb-12 bg-white max-w-7xl mx-auto px-4 md:px-0">
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
              <Link href="/desarrollos" className="text-sm">
                Desarrollos
              </Link>
            </li>
            <li>
              <Link href="/inmobiliarias" className="text-sm">
                Inmobiliarias
              </Link>
            </li>
            <li>
              <a href="#" className="text-sm">
                Precios
              </a>
            </li>
            <li>
              <Link href="/inventario" className="text-sm">
                Inventario
              </Link>
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
            <Link href={tenantData?.contact?.instagram ?? "#"} target="_blank">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href={tenantData?.contact?.facebook ?? "#"} target="_blank">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href={`${tenantData?.contact?.whatsapp ? `whatsapp://send?text=${tenantData?.contact?.whatsapp}` : "#"}`}
              target="_blank"
            >
              <Phone className="w-5 h-5" />
            </Link>
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
