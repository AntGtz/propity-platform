"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useState } from "react";
import { createPartner } from "./actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { addPartner } from "@/lib/store/features/dashboard/dashboardSlice";
import { toast } from "react-toastify";

export const NewPartnerButton = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const tenantId = useAppSelector((state) => state.tenant.details?.id);
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const createPartnerEvent = async () => {
    if (!tenantId) return;
    const success = await createPartner(tenantId, name, description);
    if (success) {
      dispatch(
        addPartner({
          id: Date.now().toString(),
          name,
          description,
        })
      );
      toast("Socio creado con exito", {
        type: "success",
      });
      setOpen(false);
    } else {
      toast("Ha ocurrido un error al crear el socio", {
        type: "error",
      });
      setName("");
      setDescription("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={"py-5 px-6"}>
          Agregar Socio{" "}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
      >
        <DialogTitle className={"text-3xl text-center"}>
          Nuevo Socio Comercial
        </DialogTitle>
        <div className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Nombre</span>
          <Input
            placeholder={"Nombre"}
            value={name}
            onChange={handleNameChange}
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        <div className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Descripción</span>
          <Input
            placeholder={"Descripción"}
            value={description}
            onChange={handleDescriptionChange}
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        <DialogFooter>
          <Button onClick={createPartnerEvent} className={"py-6 w-full"}>
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
