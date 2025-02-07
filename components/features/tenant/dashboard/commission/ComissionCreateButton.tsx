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
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { createCommission } from "./actions";
import { toast } from "react-toastify";
import { addCommission } from "@/lib/store/features/dashboard/dashboardSlice";

export const ComissionCreateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [schemaName, setSchemaName] = useState("");
  const [percentages, setPercentages] = useState<{
    [key: string]: string | number;
  }>({});

  const partnerList = useAppSelector((state) => state.dashboard.partnersList);
  const tenantId = useAppSelector((state) => state.tenant.details?.id);
  const dispatch = useAppDispatch();

  const handleCreateComission = async () => {
    const percentagesNumbers = Object.fromEntries(
      Object.entries(percentages).map(([key, value]) => [
        key,
        typeof value === "string" ? parseFloat(value) : value,
      ])
    );

    const res = await createCommission(
      tenantId as string,
      schemaName,
      percentagesNumbers
    );

    if (res) {
      dispatch(
        addCommission({
          id: Date.now().toString(),
          name: schemaName,
          percents: percentagesNumbers,
        })
      );
      setIsOpen(false);
      toast.success("Esquema de Comisión creada");
    } else {
      toast.error("Ha ocurrido un error al crear el esquema de comisión");
    }
  };

  const handlePercentageChange = (key: string, value: string) => {
    // Allow only numbers and a single decimal point
    if (!/^\d*\.?\d*$/.test(value)) return;

    // Handle empty input
    if (value === "") {
      setPercentages((prev) => ({
        ...prev,
        [key]: 0,
      }));
      return;
    }

    // Convert to number and update state
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setPercentages((prev) => ({
        ...prev,
        [key]: value.endsWith(".") ? value : numValue,
      }));
    }
  };

  const formatPercentage = (value: number | string | undefined) => {
    if (value === undefined || value === null) return "";

    // Mantener punto temporal si existe
    if (typeof value === "string" && value.endsWith(".")) {
      return value;
    }

    return value.toString();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={"py-5 px-6"}>
          Agregar Esquema{" "}
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
          Agregar Nuevo Esquema
        </DialogTitle>
        <div className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Nombre del esquema</span>
          <Input
            placeholder={"Nombre"}
            value={schemaName}
            onChange={(e) => setSchemaName(e.target.value)}
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        <div lang="en-US" className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Guia</span>
          <Input
            placeholder={"Guia porcentaje"}
            value={formatPercentage(percentages["Guia"])}
            type="text"
            inputMode="decimal"
            onChange={(e) => handlePercentageChange("Guia", e.target.value)}
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        <div lang="en-US" className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Asesor Interno</span>
          <Input
            placeholder={"Asesor Interno porcentaje"}
            value={formatPercentage(percentages["Asesor Interno"])}
            type="text"
            inputMode="decimal"
            onChange={(e) =>
              handlePercentageChange("Asesor Interno", e.target.value)
            }
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        <div lang="en-US" className={"flex flex-col gap-1"}>
          <span className={"text-sm"}>Asesor Externo</span>
          <Input
            placeholder={"Asesor Externo porcentaje"}
            value={formatPercentage(percentages["Asesor Externo"])}
            type="text"
            inputMode="decimal"
            onChange={(e) =>
              handlePercentageChange("Asesor Externo", e.target.value)
            }
            className={
              "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
            }
          />
        </div>
        {partnerList.map((partner) => (
          <div lang="en-US" key={partner.id} className={"flex flex-col gap-1"}>
            <span className={"text-sm"}>{partner.name}</span>
            <Input
              placeholder={`${partner.name} porcentaje`}
              value={formatPercentage(percentages[partner.name])}
              type="text"
              onChange={(e) =>
                handlePercentageChange(partner.name, e.target.value)
              }
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
            />
          </div>
        ))}
        <DialogFooter>
          <Button onClick={handleCreateComission} className={"py-6 w-full"}>
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
