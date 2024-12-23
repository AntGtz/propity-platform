"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";
import { useEffect, useState } from "react";
import { useInventoryContext } from "@/components/features/tenant/inventory/InventoryContext";

export const BedRooms = () => {
  const [bedrooms, setBedrooms] = useState<string>("all");
  const { setFilters } = useInventoryContext();

  useEffect(() => {
    setFilters({
      bedrooms: bedrooms === "all" ? 0 : Number(bedrooms),
    });
  }, [bedrooms]);

  return (
    <>
      <Select value={bedrooms} onValueChange={(value) => setBedrooms(value)}>
        <SelectTrigger
          className={
            "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
          }
        >
          <span className={"text-sm mr-2"}>Habitaciones</span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"1"}>1 Habitación</SelectItem>
          <SelectItem value={"2"}>2 Habitaciones</SelectItem>
          <SelectItem value={"3"}>3 Habitaciones</SelectItem>
          <SelectItem value={"4"}>4 Habitaciones</SelectItem>
          <SelectItem value={"all"}>Todos</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};
