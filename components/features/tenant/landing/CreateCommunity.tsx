import { Button } from "@/components/common/button";
import Image from "next/image";

export default function CreateCommunity() {
  return (
    <section className="grid grid-cols-2 3xl:px-64 xl:px-24 py-24  gap-16 bg-white">
      <div className="flex flex-col gap-2 font-galano justify-center">
        <h1 className="text-4xl font-bold">Únete a nuestra comunidad</h1>
        <p>Registráte para una experiencia más personalizada.</p>
        <Button
          size={"lg"}
          className="font-medium bg-green-600 text-white hover:bg-green-500 font-jakarta w-fit"
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
