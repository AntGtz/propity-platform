import CreateCommunity from "@/components/features/tenant/landing/CreateCommunity";
import DevelopmentsList from "@/components/features/tenant/landing/DevelopmentsList";
import Hero from "@/components/features/tenant/landing/Hero";
import RealStateAgencyList from "@/components/features/tenant/landing/RealStateAgencyList";
import SearchProperty from "@/components/features/tenant/landing/SearchProperty";

export default async function TenantPage() {
  return (
    <main>
      <Hero />
      <CreateCommunity />
      <DevelopmentsList />
      <RealStateAgencyList />
      <SearchProperty />
    </main>
  );
}
