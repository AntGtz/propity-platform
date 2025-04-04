import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";

export default function FooterTenant() {
  return (
    <footer className="flex flex-col gap-2 px-10 md:px-36 pt-24 pb-12 bg-white">
      <Image
        src={"/propitylogo.png"}
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
              <a href="tel:+525597523838" className="text-sm">
              +52 55 9752 3838
              </a>
            </li>
            <li>
              <a href="mailto:ricardo.gomez@propity.io" className="text-sm">
                ricardo.gomez@propity.io
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
            <a href="https://www.instagram.com/propity.io/"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/propity.io"><Facebook className="w-5 h-5" /></a>
            <X className="w-5 h-5" />
            <a href="https://www.linkedin.com/company/propity/"><Linkedin className="w-5 h-5" /></a>
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
