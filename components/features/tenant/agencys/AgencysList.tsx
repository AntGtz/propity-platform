import { Select, SelectTrigger } from "@/components/common/select";
import { AgencysProvider } from "@/components/features/tenant/agencys/AgencysContext";
import { LocationInput } from "@/components/features/tenant/agencys/Filters/LocationInput";
import { PriceLimits } from "@/components/features/tenant/agencys/Filters/PriceLimits";
import { ResultsInfo } from "@/components/features/tenant/agencys/Filters/ResultsInfo";
import AgencysInventory from "@/components/features/tenant/agencys/AgencysInventory";

export default function AgencysList() {
  return (
    <>
      <AgencysProvider>
        <section className={"flex flex-col mt-10"}>
          <h4 className={"font-galano font-bold text-2xl mb-4"}>
            Más Inmobiliarias
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
                  <span className={"text-sm mr-2"}>Inmobiliaria</span>
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <ResultsInfo />
          <AgencysInventory />
        </section>
      </AgencysProvider>
    </>
  );
}
