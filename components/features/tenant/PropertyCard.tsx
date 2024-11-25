import { HeartIcon } from "lucide-react";
import Image from "next/image";

export default function PropertyCard() {
  return (
    <article className="max-w-[264px] w-full flex flex-col min-h-32 font-galano">
      <header className="w-full relative h-[320px] rounded-md overflow-hidden">
        <div className="w-full flex justify-between">
          <span className="bg-[#69D790] rounded-3xl px-2.5 py-1.5 absolute z-10 text-xs font-jakarta ml-4 top-4">
            Entrega a 14 meses
          </span>
          <HeartIcon className="w-5 h-5 text-red-500 absolute z-10 right-4 top-4" />
        </div>
        <Image src={"/propertyex.jpg"} alt="Property" fill />
      </header>
      <span className=" text-xl font-bold my-1.5">Desde $3,500.000</span>
      <div className="flex items-center gap-7">
        <span>
          <span className="font-bold">2</span> baños
        </span>
        <span>
          <span className="font-bold">2</span> récamaras
        </span>
      </div>
      <span>Medellín 235</span>
    </article>
  );
}
