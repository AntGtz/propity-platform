"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import LoginForm from "./LoginForm";
import NewAccount from "./NewAccount";
import NewTenant from "./NewTenant";

export default function AuthDialog() {
  const [tab, setTab] = useState("login");
  return (
    <>
      <DialogTitle className="hidden">Ingresar</DialogTitle>
      <span className="md:text-4xl text-3xl font-bold font-galano block w-full text-center mt-12">
        Bienvenido a Propity
      </span>
      <div className="md:mt-12 mt-8 flex items-center gap-6 font-galano justify-center md:text-base text-xs">
        <span
          onClick={() => setTab("login")}
          className={`pb-1.5 cursor-pointer border-b-[3px] text-nowrap ${
            tab === "login" ? "border-[#00B140]" : "border-transparent"
          } hover:border-[#00B140]`}
        >
          Inicia sesión
        </span>
        <span
          onClick={() => setTab("newUser")}
          className={`pb-1.5 cursor-pointer border-b-[3px] text-nowrap ${
            tab === "newUser" ? "border-[#00B140]" : "border-transparent"
          } hover:border-[#00B140]`}
        >
          Registrar Usuario
        </span>
        <span
          onClick={() => setTab("newCompany")}
          className={`pb-1.5 cursor-pointer border-b-[3px] text-center ${
            tab === "newCompany" ? "border-[#00B140]" : "border-transparent"
          } hover:border-[#00B140]`}
        >
          Registrar Empresa
        </span>
      </div>
      <>
        {tab === "login" ? (
          <>
            <LoginForm />
          </>
        ) : tab === "newUser" ? (
          <>
            <NewAccount />
          </>
        ) : tab === "newCompany" ? (
          <>
            <NewTenant />
          </>
        ) : null}
      </>
    </>
  );
}
