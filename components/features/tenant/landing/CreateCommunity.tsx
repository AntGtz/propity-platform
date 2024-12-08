import { Button } from "@/components/common/button";
import Image from "next/image";

export default function CreateCommunity() {
  return (
    <section className="grid grid-cols-2 3xl:px-64 xl:px-24 py-24  gap-16 bg-white">
      <div className="flex flex-col gap-2 font-galano justify-center w-10/12">
        <span className={"text-[#00B140]"}>Pizza ipsum dolor</span>
        <h1 className="text-5xl font-bold leading-tight">
          Únete a nuestra comunidad
        </h1>
        <p>
          Pizza ipsum dolor meat lovers buffalo. Fresh pie steak pepperoni
          pepperoni buffalo black fresh banana cheese. Aussie cheese Aussie
          platter party broccoli beef beef dolor.
        </p>
        <Button
          size={"lg"}
          className="font-medium mt-2  text-white  font-jakarta w-fit"
        >
          Registrarse
        </Button>
      </div>
      <div className="w-full h-full relative">
        <Image
          src={"/agent.jpg"}
          alt="Agent"
          width={600}
          height={600}
          className="rounded-md"
        />
      </div>
    </section>
  );
}
