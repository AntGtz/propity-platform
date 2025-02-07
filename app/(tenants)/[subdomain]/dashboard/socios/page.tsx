import { NewPartnerButton } from "@/components/features/tenant/dashboard/partner/NewPartnerButton";
import { PartnersList } from "@/components/features/tenant/dashboard/partner/PartnersList";

export default async function Socios() {
  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Socios Comerciales</h1>
      <div className={"flex justify-end my-4"}>
        <NewPartnerButton />
      </div>
      <PartnersList />
    </section>
  );
}
