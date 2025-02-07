import { GuidesTable } from "@/components/features/tenant/dashboard/guides/GuidesTable";
import { NameFilter } from "@/components/features/tenant/dashboard/guides/NameFilter";

export default function Guias() {

  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Guias</h1>
      <div className={"my-6 flex justify-end"}>
        <NameFilter />
      </div>
      <GuidesTable />
    </section>
  );
}
