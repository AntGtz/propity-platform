"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { useState } from "react";
import { useDevelopmentContext } from "@/components/features/tenant/developments/DevelopmentsContext";

export const PriceLimits = () => {
  const [priceBase, setPriceBase] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");

  const { setFilters } = useDevelopmentContext();

  const applyFilter = () => {
    const minPrice = priceBase ? Number(priceBase) : 0;
    const maxPrice = priceMax ? Number(priceMax) : Infinity;

    setFilters({ priceRange: [minPrice, maxPrice] });
  };

  const formatNumber = (value: string) => {
    if (!value) return "";
    const number = value.replace(/[^0-9]/g, "");
    return new Intl.NumberFormat("es-MX").format(Number(number));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={
          "font-galano text-sm font-normal border border-[#131E29] rounded px-3 py-2.5 h-full w-fit flex gap-1.5 items-center"
        }
      >
        Precio
        <ChevronDown className={"ml-0 h-4 w-4"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Precio base</DropdownMenuLabel>
        <DropdownMenuItem>
          <Input
            placeholder={"3.000.000"}
            onClick={(e) => e.stopPropagation()}
            value={formatNumber(priceBase)}
            onChange={(e) => {
              const value = e.target.value;
              const numberValue = value.replace(/[^0-9]/g, "");

              e.target.value = formatNumber(numberValue);

              setPriceBase(numberValue); // Set value as a string
            }}
            className={
              "w-full rounded border-[#131E29] [&]:px-3 [&]:py-2.5 h-full md:w-48 text-xs md:text-sm"
            }
          />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Precio maximo</DropdownMenuLabel>
        <DropdownMenuItem>
          <Input
            placeholder={"3.000.000"}
            onClick={(e) => e.stopPropagation()}
            value={formatNumber(priceMax)}
            onChange={(e) => {
              const value = e.target.value;
              const numberValue = value.replace(/[^0-9]/g, "");

              e.target.value = formatNumber(numberValue);

              setPriceMax(numberValue); // Set value as a string
            }}
            className={
              "w-full rounded border-[#131E29] [&]:px-3 [&]:py-2.5 h-full md:w-48 text-xs md:text-sm"
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
              "w-full rounded border-[#131E29] [&]:px-3 [&]:py-2.5 h-full md:w-48 text-xs md:text-sm"
            }
          >
            Aplicar
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
