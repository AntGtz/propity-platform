import { CommunityTable } from "@/components/features/tenant/dashboard/community/CommunityTable";
import { Tabs } from "@/components/features/tenant/dashboard/Tabs";
import NameFilter from "@/components/features/tenant/dashboard/community/NameFilter";
import { CommunityTab } from "@/components/features/tenant/dashboard/community/types";

export default function Comunidad() {
  const tabs: CommunityTab[] = [
    {
      display: "Comunidad",
      value: "myCommunity",
    },
    {
      display: "Por Autorizar",
      value: "needsApproval",
    },
    {
      display: "Descubrir",
      value: "discover",
    },
  ];

  return (
    <section className={"flex flex-col"}>
      <h1 className={"text-4xl font-bold mt-6"}>Comunidad</h1>
      <div className={"flex justify-between mt-4"}>
        <Tabs tabs={tabs} />
        <NameFilter />
      </div>
      <CommunityTable />
    </section>
  );
}
