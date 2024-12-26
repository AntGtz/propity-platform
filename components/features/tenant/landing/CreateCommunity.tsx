"use client";
import { Button } from "@/components/common/button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  setAuthDialogOpen,
  setAuthDialogType,
} from "@/lib/store/features/app/appSlice";
import { useAppDispatch } from "@/lib/store/hooks";

export default function CreateCommunity() {
  const session = useSession();

  const dispatch = useAppDispatch();

  function OpenRegisterDialog() {
    dispatch(setAuthDialogOpen(true));
    dispatch(setAuthDialogType("newCompany"));
  }

  return (
    <section className="md:grid md:grid-cols-2 flex flex-col-reverse py-16 md:py-24 md:gap-16 gap-6 bg-white max-w-7xl mx-auto px-4 md:px-0">
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
        {session?.status !== "authenticated" && (
          <Button
            onClick={OpenRegisterDialog}
            size={"lg"}
            className="font-medium mt-2  text-white  font-jakarta w-fit"
          >
            Registrarse
          </Button>
        )}
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
