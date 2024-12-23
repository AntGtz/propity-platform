"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import LoginForm from "./LoginForm";
import NewAccount from "./NewAccount";
import NewTenant from "./NewTenant";
import { UserConfirmation } from "@/components/features/login/UserConfirmation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setAuthDialogType } from "@/lib/store/features/app/appSlice";

interface Props {
  setOpen: (open: boolean) => void;
}

export default function AuthDialog({ setOpen }: Props) {
  const authType = useAppSelector((state) => state.app.AuthDialogType);
  const dispatch = useAppDispatch();

  function setTab(
    tab: "login" | "newUser" | "newCompany" | "userConfirmation",
  ) {
    dispatch(setAuthDialogType(tab));
  }

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
            authType === "login" ? "border-[#00B140]" : "border-transparent"
          } hover:border-[#00B140]`}
        >
          Inicia sesión
        </span>
        <span
          onClick={() => setTab("newUser")}
          className={`pb-1.5 cursor-pointer border-b-[3px] text-nowrap ${
            authType === "newUser" ? "border-[#00B140]" : "border-transparent"
          } hover:border-[#00B140]`}
        >
          Registrar Usuario
        </span>
        <span
          onClick={() => setTab("newCompany")}
          className={`pb-1.5 cursor-pointer border-b-[3px] text-center ${
            authType === "newCompany"
              ? "border-[#00B140]"
              : "border-transparent"
          } hover:border-[#00B140]`}
        >
          Registrar Empresa
        </span>
      </div>
      <>
        {authType === "login" ? (
          <>
            <LoginForm setOpen={setOpen} setTab={setTab} />
          </>
        ) : authType === "newUser" ? (
          <>
            <NewAccount setTab={setTab} />
          </>
        ) : authType === "newCompany" ? (
          <>
            <NewTenant />
          </>
        ) : (
          <UserConfirmation setTab={setTab} />
        )}
      </>
    </>
  );
}
