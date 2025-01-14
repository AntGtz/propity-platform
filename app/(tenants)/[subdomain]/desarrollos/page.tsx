import DevelopmentsCarousel from "@/components/features/tenant/developments/DevelopmentsCarousel";
import DevelopmentsList from "@/components/features/tenant/developments/DevelopmentsList";
import JoinToDevelopments from "@/components/features/tenant/developments/JoinToDevelopments";

export default function Desarrollos() {
  return (
    <main className="flex flex-col gap-4 py-8 sm:py-24 xl:py-24 max-w-7xl mx-auto px-4 md:px-0">
      <JoinToDevelopments />
      <DevelopmentsCarousel />
      <DevelopmentsList />
    </main>
  );
}
