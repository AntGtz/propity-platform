"use client";
import { useEffect, useState } from "react";
import { useInventoryContext } from "@/components/features/tenant/inventory/InventoryContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";

export const Bathrooms = () => {
  const [bathrooms, setBathrooms] = useState<string>("all");
  const { setFilters } = useInventoryContext();

  useEffect(() => {
    setFilters({
      bathrooms: bathrooms === "all" ? 0 : Number(bathrooms),
    });
  }, [bathrooms]);

  return (
    <>
      <Select value={bathrooms} onValueChange={(value) => setBathrooms(value)}>
        <SelectTrigger
          className={
            "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full w-fit"
          }
        >
          <span className={"text-sm mr-2"}>Baños</span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"1"}>1 Baño</SelectItem>
          <SelectItem value={"2"}>2 Baños</SelectItem>
          <SelectItem value={"3"}>3 Baños</SelectItem>
          <SelectItem value={"all"}>Todos</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};
