"use client";
import { ChevronDown } from "lucide-react";
import {
  defaultFilters,
  Filters,
} from "@/components/features/tenant/inventory/InventoryContext";
import { useAgencysContext } from "@/components/features/tenant/agencys/AgencysContext";

export const ResultsInfo = () => {
  const { agencysList, filters } = useAgencysContext();

  const isAnyFilterApplied = Object.entries(filters).some(([key, filter]) => {
    const defaultValue = defaultFilters[key as keyof Filters];
    if (Array.isArray(filter) && Array.isArray(defaultValue)) {
      return filter[0] !== defaultValue[0] || filter[1] !== defaultValue[1];
    }
    return filter !== defaultValue;
  });

  if (!isAnyFilterApplied) return null;

  return (
    <div className={"flex flex-col gap-2 mt-2 md:mt-6"}>
      <span className={"font-bold font-galano text-xl md:text-3xl"}>
        {filters.location && `${filters.location}, Inmobiliarias`}
      </span>
      <div className={"flex md:flex-row flex-col md:gap-2 md:items-center"}>
        <span className={"text-sm text-nowrap"}>
          {agencysList.length} resultados encontrados
        </span>
        <span className={"hidden md:block"}>|</span>
        <span className={"text-sm flex items-center gap-1.5"}>
          Ver por <span className={"underline"}>Actividad más reciente</span>{" "}
          <ChevronDown className={"ml-0 h-4 w-4"} />
        </span>
      </div>
    </div>
  );
};
