import { Select, SelectTrigger } from "@/components/common/select";
import { DevelopmentProvider } from "@/components/features/tenant/developments/DevelopmentsContext";
import DevelopmentsInventory from "@/components/features/tenant/developments/DevelopmentsInventory";
import { PriceLimits } from "@/components/features/tenant/developments/Filters/PriceLimits";
import { LocationInput } from "@/components/features/tenant/developments/Filters/LocationInput";
import { ResultsInfo } from "@/components/features/tenant/developments/Filters/ResultsInfo";

export default function DevelopmentsList() {
  return (
    <>
      <DevelopmentProvider>
        <section className={"flex flex-col mt-10"}>
          <h4 className={"font-galano font-bold text-2xl mb-4"}>
            Más Desarrollos
          </h4>
          <div
            className={
              "flex flex-wrap md:flex-nowrap justify-between items-center gap-3 font-galano"
            }
          >
            <div className={"flex items-center gap-2 w-full"}>
              <LocationInput />
            </div>

            <div className={"md:flex hidden items-center gap-2"}>
              <PriceLimits />

              <Select>
                <SelectTrigger
                  className={
                    "font-galano text-sm font-normal border-[#131E29] rounded px-3 py-2.5 h-full cursor-not-allowed"
                  }
                >
                  <span className={"text-sm mr-2"}>Desarollo</span>
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <ResultsInfo />
          <DevelopmentsInventory />
        </section>
      </DevelopmentProvider>
    </>
  );
}
