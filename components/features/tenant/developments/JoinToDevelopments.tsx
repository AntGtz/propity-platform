import { Button } from "@/components/common/button";
import Image from "next/image";

export default function JoinToDevelopments() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col justify-between gap-4 font-galano">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-galano font-bold">Desarrollos</h1>
            <div className="mt-7 flex flex-col font-galano gap-2">
              <span className="font-bold  text-2xl">
                Únete como nuevo desarrollo
              </span>
              <p>Registráte para una experiencia más personalizada.</p>
              <Button
                size={"lg"}
                className="w-56 bg-green-600 text-white font-galano font-semibold [&]:py-6"
              >
                Regístrate
              </Button>
            </div>
          </div>
          <span className="cursor-pointer">
            Ya te uniste a nosotros? {""}
            <span className="text-green-600 underline font-semibold">
              Accede a tu cuenta{" "}
            </span>
          </span>
        </div>

        <div className="flex justify-end">
          <Image
            src={"/develop.jpg"}
            alt="Desarrollos"
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </>
  );
}
