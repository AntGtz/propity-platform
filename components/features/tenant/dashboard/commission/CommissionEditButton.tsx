"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Input } from "@/components/common/input";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { Button } from "@/components/common/button";
import { setCommissionsArray } from "@/lib/store/features/dashboard/dashboardSlice";
import { updateCommission } from "./actions";
import { toast } from "react-toastify";

export const CommissionEditButton = () => {
  const tenantId = useAppSelector((state) => state.tenant.details?.id);
  const commissionTabSelected = useAppSelector(
    (state) => state.dashboard.commissionTabSelected
  );
  const commissionsArray = useAppSelector(
    (state) => state.dashboard.commissionsArray
  );
  const dispatch = useAppDispatch();

  const commission = useMemo(() => {
    return commissionsArray.find(
      (commission) => commission.id === commissionTabSelected
    );
  }, [commissionsArray, commissionTabSelected]);

  useEffect(() => {
    setSchemaName(commission?.name);
    setPercents(commission?.percents || {});
  }, [commission]);

  const [schemaName, setSchemaName] = useState(commission?.name);
  const [percents, setPercents] = useState(commission?.percents || {});
  const [isOpen, setIsOpen] = useState(false);

  const handlePercentageChange = (key: string, value: string) => {
    // Allow only numbers and a single decimal point
    if (!/^\d*\.?\d*$/.test(value)) return;

    // Handle empty input
    if (value === "") {
      setPercents((prev) => ({
        ...prev,
        [key]: 0,
      }));
      return;
    }

    // Convert to number and update state
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setPercents((prev) => ({
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

  const handleEditCommission = async () => {
    if (!schemaName || !percents) return;
    const percentsNumbers = Object.fromEntries(
      Object.entries(percents).map(([key, value]) => [
        key,
        typeof value === "string" ? parseFloat(value) : value,
      ])
    );
    const newCommissions = {
      id: commissionTabSelected,
      name: schemaName,
      percents: percentsNumbers,
    };
    dispatch(
      setCommissionsArray([
        ...commissionsArray.filter(
          (commission) => commission.id !== commissionTabSelected
        ),
        newCommissions,
      ])
    );
    const res = await updateCommission(tenantId as string, newCommissions);
    if (res) {
      toast.success("Esquema de Comisión actualizada");
      setIsOpen(false);
    } else {
      toast.error("Ha ocurrido un error al actualizar el esquema de comisión");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-end">
          <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
            <circle
              cx="1.5"
              cy="13.5"
              r="1.5"
              transform="rotate(-90 1.5 13.5)"
              fill="#A2A9B7"
            />
            <circle
              cx="1.5"
              cy="7.5"
              r="1.5"
              transform="rotate(-90 1.5 7.5)"
              fill="#A2A9B7"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="rotate(-90 1.5 1.5)"
              fill="#A2A9B7"
            />
          </svg>
        </div>
      </DialogTrigger>
      <DialogContent
        className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
      >
        <DialogTitle className={"text-3xl text-center"}>
          Editar Esquema
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
        {Object.keys(percents).map((percent) => (
          <div lang="en-US" key={percent} className={"flex flex-col gap-1"}>
            <span className={"text-sm"}>{percent}</span>
            <Input
              placeholder={`${percent} porcentaje`}
              value={formatPercentage(percents[percent])}
              type="text"
              onChange={(e) => handlePercentageChange(percent, e.target.value)}
              className={
                "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
              }
            />
          </div>
        ))}
        <DialogFooter>
          <Button onClick={handleEditCommission} className={"py-6 w-full"}>
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
