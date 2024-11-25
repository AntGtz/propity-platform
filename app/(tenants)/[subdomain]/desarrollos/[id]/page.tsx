import Details from "@/components/features/tenant/developments/details/Details";
import Header from "@/components/features/tenant/developments/details/Header";
import ImageCarousel from "@/components/features/tenant/developments/details/ImageCarousel";
import RelatedList from "@/components/features/tenant/developments/details/RelatedList";

export default function DevelopmentDetails() {
  return (
    <main className="flex flex-col gap-4 px-4 pt-16 sm:px-16 sm:pt-24 xl:px-36 xl:pt-32">
      <Header />
      <ImageCarousel />
      <Details />
      <RelatedList />
    </main>
  );
}
