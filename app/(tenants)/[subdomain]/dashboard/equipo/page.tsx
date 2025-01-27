import { AddUserButton } from "@/components/features/tenant/dashboard/team/AddUserButton";
import { TeamTable } from "@/components/features/tenant/dashboard/team/TeamTable";

export default function Equipo() {
  return (
    <section className={"flex flex-col"}>
      <h1 className={"text-4xl font-bold mt-6"}>Equipo</h1>
      <div className={"flex justify-end my-4"}>
        <AddUserButton />
      </div>
      <TeamTable />
    </section>
  );
}
