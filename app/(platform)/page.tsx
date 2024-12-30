import Hero from "@/components/features/platform/landing/Hero";
import ExploreTheProduct from "@/components/features/platform/landing/ExploreTheProduct";
import PricingSection from "@/components/features/platform/landing/PricingSection";
import LastCTA from "@/components/features/platform/landing/LastCTA";
import FAQ from "@/components/features/platform/FAQ";
import PartnersCarousel from "@/components/features/platform/landing/PartnersCarousel";
import BenefitsSection from "@/components/features/platform/landing/BenefitsSection";
import GoalsSection from "@/components/features/platform/landing/GoalsSection";
import UserFeedbackSection from "@/components/features/platform/landing/UserFeedbackSection";

export default async function Home() {
  return (
    <main>
      <Hero />
      <PartnersCarousel />
      <BenefitsSection />
      <GoalsSection />
      <div className={"flex flex-col bg-propity"}>
        <PricingSection />
        <ExploreTheProduct />
        <UserFeedbackSection />
        <LastCTA />
        <FAQ />
      </div>
    </main>
  );
}
