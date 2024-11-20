import CreateCommunity from "@/components/features/tenant/landing/CreateCommunity";
import Hero from "@/components/features/tenant/landing/Hero";

export default async function TenantPage() {
  return (
    <main>
      <Hero />
      <CreateCommunity />
    </main>
  );
}
