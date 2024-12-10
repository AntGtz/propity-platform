import { Button } from "@/components/common/button";
import Image from "next/image";

export default function CreateCommunity() {
  return (
    <section className="md:grid md:grid-cols-2 flex flex-col-reverse px-10 3xl:px-64 xl:px-24 py-16 md:py-24 md:gap-16 gap-6 bg-white">
      <div className="flex flex-col gap-1 md:gap-2 font-galano justify-center md:w-10/12">
        <span className={"text-primary"}>Pizza ipsum dolor</span>
        <h1 className="md:text-5xl text-2xl font-bold leading-tight">
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
          className="rounded-md md:w-full md:h-full h-72 w-96 object-cover"
        />
      </div>
    </section>
  );
}
