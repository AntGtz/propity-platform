"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";
import {
  PropertyType as PropertyTypeT,
  useInventoryContext,
} from "@/components/features/tenant/inventory/InventoryContext";
import { useState } from "react";

export const PropertyType = () => {
  const { setFilters } = useInventoryContext();
  const [propertyType, setPropertyType] = useState<string>("all");

  return (
    <Select
      value={propertyType}
      onValueChange={(value: PropertyTypeT) => {
        setPropertyType(value);
        setFilters({
          propertyType: value,
        });
      }}
    >
      <SelectTrigger
        className={
          "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
        }
      >
        <span className={"text-sm mr-2"}>Tipo de propiedad</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"apartment"}>Departamento</SelectItem>
        <SelectItem value={"house"}>Casa</SelectItem>
        <SelectItem value={"land"}>Terreno</SelectItem>
        <SelectItem value={"all"}>Todos</SelectItem>
      </SelectContent>
    </Select>
  );
};
