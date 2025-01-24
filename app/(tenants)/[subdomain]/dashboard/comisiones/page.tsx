import CommissionSelect from "@/components/features/tenant/dashboard/commission/CommissionSelect";
import { CommissionTable } from "@/components/features/tenant/dashboard/commission/CommissionTable";
import { ComissionCreateButton } from "@/components/features/tenant/dashboard/commission/ComissionCreateButton";
import { ComissionDeleteButton } from "@/components/features/tenant/dashboard/commission/ComissionDeleteButton";

export default async function Comisiones() {
  return (
    <>
      <section className={"flex flex-col font-galano"}>
        <h1 className={"text-4xl font-bold mt-6"}>Esquema de comisión</h1>
        <div className={"flex justify-between my-4"}>
          <CommissionSelect />
          <div className="flex items-center gap-3">
            <ComissionCreateButton />
            <ComissionDeleteButton />
          </div>
        </div>
        <div
          className={"my-4 border rounded-lg border-gray-400 border-collapse overflow-hidden"}
        >
          <CommissionTable />
        </div>
      </section>
    </>
  );
}
