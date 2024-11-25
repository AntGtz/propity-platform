import DevelopmentsCarousel from "@/components/features/tenant/developments/DevelopmentsCarousel";
import DevelopmentsList from "@/components/features/tenant/developments/DevelopmentsList";
import JoinToDevelopments from "@/components/features/tenant/developments/JoinToDevelopments";

export default function Desarrollos() {
  return (
    <main className="flex flex-col gap-4 px-4 py-16 sm:px-16 sm:py-24 xl:px-36 xl:py-32">
      <JoinToDevelopments />
      <DevelopmentsCarousel />
      <DevelopmentsList />
    </main>
  );
}
