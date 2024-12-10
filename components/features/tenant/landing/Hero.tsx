import { SearchIcon } from "@/components/common/icons";
import { Input } from "@/components/common/input";
import Image from "next/image";

export default async function Hero() {
  return (
    <section className="flex flex-col justify-center gap-4 py-16 px-12 sm:px-16 lg:px-36 3xl:px-64 md:h-[600px] relative text-white">
      <Image
        src={`/heroBg.jpg`}
        fill
        className="-z-20 object-cover"
        alt="Logo"
      />
      <div className="absolute left-0 top-0 -z-10 w-full h-full bg-black/50"></div>
      <h1 className="md:text-6xl text-3xl font-jakarta font-bold xl:w-4/6 3xl:w-5/6 4xl:w-3/6 leading-tight">
        Guiando su camino hacia un nuevo hogar
      </h1>
      <div className="flex items-center gap-5 font-galano">
        <span className="py-1 px-1 border-b-2 border-white cursor-pointer md:text-base text-sm">
          Venta
        </span>
        <span className="py-1 px-1 border-b-2 border-transparent hover:border-white cursor-pointer md:text-base text-sm">
          Renta
        </span>
      </div>
      <div className="flex items-center gap-4 mt-3 md:mb-0 mb-6">
        <div className="relative bg-white rounded-md w-full md:w-2/4 overflow-hidden">
          <Input
            placeholder="Departamento, local, casa, terreno, oficina, bodega"
            className="md:px-10 px-3 md:text-base text-xs py-6 border-none focus:ring-0 focus-visible:ring-0 text-black"
          />
          <span className="absolute flex items-center justify-center top-1/2 right-0 -translate-y-1/2 h-full text-white bg-primary w-14 cursor-pointer">
            <SearchIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </section>
  );
}
