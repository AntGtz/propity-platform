"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";
import { InventoryProvider } from "@/components/features/tenant/inventory/InventoryContext";
import { LocationInput } from "@/components/features/tenant/inventory/Filters/LocationInput";
import { PriceLimits } from "@/components/features/tenant/inventory/Filters/PriceLimits";
import { PropertyType } from "@/components/features/tenant/inventory/Filters/PropertyType";
import { InventoryList } from "@/components/features/tenant/inventory/InventoryList";
import { ResultsInfo } from "@/components/features/tenant/inventory/Filters/ResultsInfo";

export default function SearchProperty() {
  return (
    <InventoryProvider>
      <section className="flex flex-col gap-2 3xl:px-64 xl:px-24 2xl:px-32 md:py-16 bg-white font-galano px-10">
        <div className={"flex items-center gap-3 w-full text-sm"}>
          <span
            className={
              "py-3 px-2 text-center border-b-2 border-slate-800 cursor-pointer"
            }
          >
            Venta
          </span>
          <span
            className={
              "py-3 px-2 text-center border-b-2 border-transparent cursor-pointer"
            }
          >
            Renta
          </span>
        </div>
        <div
          className={
            "flex flex-wrap md:flex-nowrap justify-between items-center gap-3 mt-6"
          }
        >
          <div className={"flex items-center gap-3 w-full"}>
            <LocationInput />
          </div>

          <div className={"md:flex hidden items-center gap-2"}>
            <PriceLimits />

            <PropertyType />

            <Select>
              <SelectTrigger
                className={
                  "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full"
                }
              >
                <span className={"text-sm mr-2"}>Desarollo</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"a"}>Seleccionar</SelectItem>
                <SelectItem value={"b"}>Seleccionar</SelectItem>
                <SelectItem value={"c"}>Seleccionar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ResultsInfo />
        <InventoryList gridCols={4} cardType={"property"} />
      </section>
    </InventoryProvider>
  );
}
