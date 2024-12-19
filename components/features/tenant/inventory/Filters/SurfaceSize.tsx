"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { useState } from "react";
import { useInventoryContext } from "@/components/features/tenant/inventory/InventoryContext";

export const SurfaceSize = () => {
  const [minSurface, setMinSurface] = useState<string>("");
  const { setFilters } = useInventoryContext();

  const formatNumber = (value: string) => {
    if (!value) return "";
    const number = value.replace(/[^0-9]/g, "");
    return new Intl.NumberFormat("es-MX").format(Number(number));
  };

  const applyFilter = () => {
    setFilters({
      minSurface: Number(minSurface),
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={
          "font-galano text-sm font-normal border border-[#131E29] rounded px-3 py-2.5 h-full w-fit flex gap-1.5 items-center"
        }
      >
        Superficie
        <ChevronDown className={"ml-0 h-4 w-4"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tamaño mínimo</DropdownMenuLabel>
        <DropdownMenuItem>
          <Input
            placeholder={"350"}
            onClick={(e) => e.stopPropagation()}
            value={formatNumber(minSurface)}
            onChange={(e) => {
              const value = e.target.value;
              const numberValue = value.replace(/[^0-9]/g, "");

              e.target.value = formatNumber(numberValue);

              setMinSurface(numberValue);
            }}
            className={
              "w-full rounded border-[#131E29] [&]:px-3 [&]:py-2.5 h-full md:w-32 text-xs md:text-sm"
            }
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              applyFilter();
            }}
            className={
              "w-full rounded border-[#131E29] [&]:px-3 [&]:py-2.5 h-full md:w-32 text-xs md:text-sm"
            }
          >
            Aplicar
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
