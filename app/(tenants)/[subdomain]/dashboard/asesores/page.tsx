import { Button } from "@/components/common/button";
import { AgentsTable } from "@/components/features/tenant/dashboard/agents/AgentsTable";
import { StatusFilter } from "@/components/features/tenant/dashboard/agents/StatusFilter";
import { NameFilter } from "@/components/features/tenant/dashboard/agents/NameFilter";

export default function Asesores() {
  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Asesores</h1>
      <div className={"flex justify-between my-4"}>
        <StatusFilter />
        <div className={"flex gap-4 items-center"}>
          <NameFilter />
          <Button className={"py-5 px-6"}>
            Agregar
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
      <AgentsTable />
    </section>
  );
}
