"use client";
import { Button } from "@/components/common/button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/lib/store/hooks";
import {
  setAuthDialogOpen,
  setAuthDialogType,
} from "@/lib/store/features/app/appSlice";

export default function JoinToAgencys() {
  const session = useSession();

  const dispatch = useAppDispatch();

  function OpenRegisterDialog() {
    dispatch(setAuthDialogOpen(true));
    dispatch(setAuthDialogType("newCompany"));
  }

  function OpenLoginDialog() {
    dispatch(setAuthDialogOpen(true));
    dispatch(setAuthDialogType("login"));
  }

  return (
    <>
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-5">
        <div className="flex flex-col justify-between gap-4 font-galano">
          <div className="flex flex-col md:gap-4">
            <h1 className="md:text-4xl text-2xl font-galano font-bold">
              Inmobiliarias
            </h1>
            <div className="md:mt-7 flex flex-col font-galano md:gap-2">
              <span className="font-bold text-xl">
                Únete como nueva inmobiliaria
              </span>
              <p className={"text-sm"}>
                Registráte para una experiencia más personalizada.
              </p>
              {session.status !== "authenticated" && (
                <Button
                  onClick={OpenRegisterDialog}
                  size={"lg"}
                  className="md:w-56 w-fit bg-primary text-white font-galano font-semibold [&]:py-6 md:mt-0 mt-4"
                >
                  Regístrate
                </Button>
              )}
            </div>
          </div>
          <span className="cursor-pointer md:block hidden">
            Ya te uniste a nosotros? {""}
            <span
              onClick={OpenLoginDialog}
              className="text-primary underline font-semibold"
            >
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
            className="rounded-md md:w-full md:h-full h-72 w-96 object-cover"
          />
        </div>
      </div>
    </>
  );
}
