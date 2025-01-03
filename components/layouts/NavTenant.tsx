"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../common/button";
import { Dialog, DialogContent, DialogTrigger } from "../common/dialog";
import AuthDialog from "../features/login/AuthDialog";
import { useTenantTheme } from "@/hooks/useTenantTheme";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import MobileMenu from "@/components/layouts/MobileMenu";
import { signOut, useSession } from "next-auth/react";
import {
  setAuthDialogOpen,
  setAuthDialogType,
} from "@/lib/store/features/app/appSlice";
import { usePathname } from "next/navigation";

export default function NavTenant() {
  const tenantData = useAppSelector((state) => state.tenant.details);
  useTenantTheme(tenantData?.theme?.color);
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const { data: session } = useSession();

  const pathname = usePathname();

  if (pathname.includes("/dashboard")) return <></>;

  function handleOpenAuthDialog(bool: boolean) {
    dispatch(setAuthDialogOpen(bool));
  }

  return (
    <>
      <nav className="py-3 sm:py-4 relative shadow-md w-full">
        <div
          className={
            "max-w-7xl mx-auto flex items-center md:justify-between gap-4 px-4 md:px-0"
          }
        >
          <MobileMenu />
          <li className="md:flex hidden items-center gap-4 font-galano">
            <Link
              href="/desarrollos"
              className={`text-sm ${pathname.includes("/desarrollos") ? "font-extrabold" : "font-medium"}`}
            >
              Desarrollos
            </Link>
            <Link
              href="/inmobiliarias"
              className={`text-sm ${pathname.includes("/inmobiliarias") ? "font-extrabold" : "font-medium"}`}
            >
              Inmobiliarias
            </Link>
            <Link
              href="/inventario"
              className={`text-sm ${pathname.includes("/inventario") ? "font-extrabold" : "font-medium"}`}
            >
              Inventario
            </Link>
          </li>
          <Link
            href={`/`}
            className="text-sm font-medium md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 transform"
          >
            <Image
              src={tenantData?.theme?.logotype.main || "/logotype.svg"}
              height={60}
              quality={100}
              width={150}
              className={"h-8 md:h-12 w-auto"}
              alt="Logo"
            />
          </Link>
          <span
            onClick={() => handleOpenAuthDialog(true)}
            className={"ml-auto block md:hidden"}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9734 20.4453C20.688 18.1894 18.6809 16.4317 16.2752 15.455C17.4716 14.5578 18.3553 13.3068 18.8011 11.8794C19.247 10.4521 19.2325 8.92056 18.7596 7.50188C18.2867 6.08321 17.3794 4.84929 16.1663 3.9749C14.9531 3.10052 13.4956 2.63 12.0002 2.63C10.5048 2.63 9.04731 3.10052 7.83416 3.9749C6.62102 4.84929 5.71375 6.08321 5.24086 7.50188C4.76797 8.92056 4.75343 10.4521 5.19932 11.8794C5.6452 13.3068 6.52889 14.5578 7.72522 15.455C5.31953 16.4317 3.31245 18.1894 2.0271 20.4453C1.94745 20.5734 1.89437 20.7162 1.87101 20.8651C1.84764 21.0141 1.85447 21.1663 1.89109 21.3126C1.92771 21.4589 1.99337 21.5963 2.08416 21.7168C2.17496 21.8372 2.28904 21.9381 2.41963 22.0135C2.55021 22.089 2.69463 22.1374 2.8443 22.1559C2.99397 22.1744 3.14584 22.1627 3.29087 22.1213C3.4359 22.08 3.57114 22.0099 3.68854 21.9152C3.80595 21.8206 3.90312 21.7033 3.97429 21.5703C5.67304 18.6341 8.67304 16.8828 12.0002 16.8828C15.3274 16.8828 18.3274 18.635 20.0262 21.5703C20.1804 21.8183 20.425 21.9966 20.7083 22.0675C20.9916 22.1384 21.2914 22.0964 21.5443 21.9503C21.7972 21.8042 21.9833 21.5655 22.0634 21.2846C22.1434 21.0038 22.1112 20.7028 21.9734 20.4453ZM7.12523 9.75782C7.12523 8.79363 7.41114 7.8511 7.94681 7.04941C8.48248 6.24772 9.24385 5.62288 10.1346 5.2539C11.0254 4.88493 12.0056 4.78839 12.9513 4.97649C13.8969 5.16459 14.7656 5.62889 15.4474 6.31067C16.1292 6.99245 16.5935 7.86109 16.7816 8.80675C16.9697 9.75241 16.8731 10.7326 16.5041 11.6234C16.1352 12.5142 15.5103 13.2756 14.7086 13.8112C13.9069 14.3469 12.9644 14.6328 12.0002 14.6328C10.7078 14.6313 9.46864 14.1172 8.55472 13.2033C7.64081 12.2894 7.12671 11.0503 7.12523 9.75782Z"
                fill="#041E42"
              />
            </svg>
          </span>
          <div className="md:flex hidden items-center gap-4">
            {!session ? (
              <>
                <Dialog
                  open={appState.AuthDialogOpen}
                  onOpenChange={handleOpenAuthDialog}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="hover:bg-gray-200 font-medium font-jakarta"
                    >
                      Ingresar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px] md:h-auto h-auto w-screen px-4 md:px-14 md:my-5">
                    <AuthDialog setOpen={handleOpenAuthDialog} />
                  </DialogContent>
                </Dialog>
                {
                  // TODO: add button variant
                }
                <Button
                  onClick={() => {
                    handleOpenAuthDialog(true);
                    dispatch(setAuthDialogType("newUser"));
                  }}
                  size={"lg"}
                  className={`font-medium font-jakarta`}
                >
                  Registrarse
                </Button>
              </>
            ) : (
              <span
                onClick={() => signOut()}
                className={
                  "flex items-center gap-1 font-galano text-sm cursor-pointer"
                }
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9734 20.4453C20.688 18.1894 18.6809 16.4317 16.2752 15.455C17.4716 14.5578 18.3553 13.3068 18.8011 11.8794C19.247 10.4521 19.2325 8.92056 18.7596 7.50188C18.2867 6.08321 17.3794 4.84929 16.1663 3.9749C14.9531 3.10052 13.4956 2.63 12.0002 2.63C10.5048 2.63 9.04731 3.10052 7.83416 3.9749C6.62102 4.84929 5.71375 6.08321 5.24086 7.50188C4.76797 8.92056 4.75343 10.4521 5.19932 11.8794C5.6452 13.3068 6.52889 14.5578 7.72522 15.455C5.31953 16.4317 3.31245 18.1894 2.0271 20.4453C1.94745 20.5734 1.89437 20.7162 1.87101 20.8651C1.84764 21.0141 1.85447 21.1663 1.89109 21.3126C1.92771 21.4589 1.99337 21.5963 2.08416 21.7168C2.17496 21.8372 2.28904 21.9381 2.41963 22.0135C2.55021 22.089 2.69463 22.1374 2.8443 22.1559C2.99397 22.1744 3.14584 22.1627 3.29087 22.1213C3.4359 22.08 3.57114 22.0099 3.68854 21.9152C3.80595 21.8206 3.90312 21.7033 3.97429 21.5703C5.67304 18.6341 8.67304 16.8828 12.0002 16.8828C15.3274 16.8828 18.3274 18.635 20.0262 21.5703C20.1804 21.8183 20.425 21.9966 20.7083 22.0675C20.9916 22.1384 21.2914 22.0964 21.5443 21.9503C21.7972 21.8042 21.9833 21.5655 22.0634 21.2846C22.1434 21.0038 22.1112 20.7028 21.9734 20.4453ZM7.12523 9.75782C7.12523 8.79363 7.41114 7.8511 7.94681 7.04941C8.48248 6.24772 9.24385 5.62288 10.1346 5.2539C11.0254 4.88493 12.0056 4.78839 12.9513 4.97649C13.8969 5.16459 14.7656 5.62889 15.4474 6.31067C16.1292 6.99245 16.5935 7.86109 16.7816 8.80675C16.9697 9.75241 16.8731 10.7326 16.5041 11.6234C16.1352 12.5142 15.5103 13.2756 14.7086 13.8112C13.9069 14.3469 12.9644 14.6328 12.0002 14.6328C10.7078 14.6313 9.46864 14.1172 8.55472 13.2033C7.64081 12.2894 7.12671 11.0503 7.12523 9.75782Z"
                    fill="#041E42"
                  />
                </svg>
                {session?.user.name}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
