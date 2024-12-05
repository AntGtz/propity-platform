import Hero from "@/components/features/platform/landing/Hero";
import Indicators from "@/components/features/platform/landing/Indicators";
import CTA from "@/components/features/platform/landing/CTA";
import ExploreTheProduct from "@/components/features/platform/landing/ExploreTheProduct";
import PricingSection from "@/components/features/platform/landing/PricingSection";
import Features from "@/components/features/platform/landing/Features";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Indicators />
      <CTA />
      <ExploreTheProduct />
      <PricingSection />
      <Features />
    </main>
  );
}
