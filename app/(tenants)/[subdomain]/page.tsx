import CreateCommunity from "@/components/features/tenant/landing/CreateCommunity";
import DevelopmentsList from "@/components/features/tenant/landing/DevelopmentsList";
import Hero from "@/components/features/tenant/landing/Hero";

export default async function TenantPage() {
  return (
    <main>
      <Hero />
      <CreateCommunity />
      <DevelopmentsList />
    </main>
  );
}
