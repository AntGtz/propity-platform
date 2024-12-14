import Image from "next/image";
import TenantProfile from "@/components/features/tenant/profile/TenantProfile";
import TenantDetails from "@/components/features/tenant/profile/TenantDetails";
import ContactCard from "@/components/features/tenant/profile/ContactCard";
import ContactForm from "@/components/features/tenant/profile/ContactForm";
import { ImagesCarousel } from "@/components/features/tenant/profile/ImagesCarousel";

interface TenantProfileProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PerfilPage({ params }: TenantProfileProps) {
  const paramsPage = await params;

  return (
    <main>
      <section className={"relative w-full h-40 md:h-80"}>
        <Image
          src={"/profileBanner.jpg"}
          quality={100}
          alt={"Banner de perfil"}
          fill
          className={"object-cover object-center"}
        />
      </section>
      <section className={"px-4 py-4 md:py-16 mx-auto max-w-7xl lg:px-8"}>
        <TenantProfile id={paramsPage.id} />
        <ImagesCarousel />
        <div
          className={
            "flex md:flex-row flex-col gap-12 md:gap-32 mt-8 font-galano"
          }
        >
          <div className={"flex flex-col md:w-8/12"}>
            <TenantDetails id={paramsPage.id} />
          </div>
          <div className={"flex flex-col gap-y-8 md:w-4/12"}>
            <ContactCard id={paramsPage.id} />
            <ContactForm id={paramsPage.id} />
          </div>
        </div>
      </section>
    </main>
  );
}
