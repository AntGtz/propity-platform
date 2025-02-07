import JoinToAgencys from "@/components/features/tenant/agencys/JoinToAgencys";
import AgencysCarousel from "@/components/features/tenant/agencys/AgencysCarousel";
import AgencysList from "@/components/features/tenant/agencys/AgencysList";
import RealStateAgencyList from "@/components/features/tenant/landing/RealStateAgencyList";

export default function Inmobiliarias() {
  return (
    <main className="flex flex-col gap-4 py-8 sm:py-24 xl:py-24 max-w-7xl mx-auto px-4 md:px-0">
      <JoinToAgencys />
      <AgencysCarousel />
      <AgencysList />
      <RealStateAgencyList />
    </main>
  );
}
