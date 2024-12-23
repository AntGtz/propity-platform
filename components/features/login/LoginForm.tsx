import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useId, useState } from "react";
import { SignIn } from "@/actions/auth";
import { toast } from "react-toastify";

interface Props {
  setOpen: (open: boolean) => void;
  setTab: (
    tab: "login" | "newUser" | "newCompany" | "userConfirmation",
  ) => void;
}

export default function LoginForm({ setOpen, setTab }: Props) {
  const usernameFieldId = useId();
  const passwordFieldId = useId();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    email: {
      message: "",
    },
    password: {
      message: "",
    },
    general: {
      message: "",
    },
  });

  const handleLogin = async () => {
    setError({
      email: { message: "" },
      password: { message: "" },
      general: { message: "" },
    });

    if (!username) {
      setError((prev) => ({ ...prev, email: { message: "Campo requerido" } }));
      return;
    }
    if (!password) {
      setError((prev) => ({
        ...prev,
        password: { message: "Campo requerido" },
      }));
      return;
    }

    const result = await SignIn({
      username,
      password,
    });

    if (result?.error) {
      if (result.error === "Cuenta no confirmada") {
        setTab("userConfirmation");
        return;
      }
      setError((prev) => ({
        ...prev,
        general: { message: result.error ?? "" },
      }));
    } else if (result) {
      setOpen(false);
      toast("Bienvenido de nuevo");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 mt-6 mb-2 md:text-base text-sm md:mx-0 mx-4">
        {error.general.message ? (
          <span className="text-red-500 -mt-4 font-galano text-center">
            {error.general.message}
          </span>
        ) : null}
        <label htmlFor={usernameFieldId} className="font-galano">
          Email / Username{" "}
          {error.email.message ? <span className="text-red-500">*</span> : null}
        </label>
        <Input
          id={usernameFieldId}
          onChange={(e) => setUsername(e.target.value)}
          className="[&]:px-3 [&]:py-6 md:text-base text-sm"
          placeholder=""
        />
        <label htmlFor={passwordFieldId} className="font-galano">
          Contraseña{" "}
          {error.password.message ? (
            <span className="text-red-500">*</span>
          ) : null}
        </label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          className="[&]:px-3 [&]:py-6 md:text-base text-sm"
          type="password"
        />
      </div>
      <Button
        size={"lg"}
        onClick={handleLogin}
        className="bg-green-600 text-white font-galano font-semibold [&]:py-7 md:text-xl text-lg md:mx-0 mx-4"
      >
        Iniciar sesión
      </Button>
      <Button
        size={"lg"}
        variant={"link"}
        className="text-green-600 font-galano font-semibold [&]:py-7 -mt-3 md:text-lg text-sm md:mx-0 mx-4"
      >
        Olvidaste la contraseña?
      </Button>
    </>
  );
}
