"use client";
import Image from "next/image";
import TenantProfile from "@/components/features/tenant/profile/TenantProfile";
import TenantDetails from "@/components/features/tenant/profile/TenantDetails";
import ContactCard from "@/components/features/tenant/profile/ContactCard";
import ContactForm from "@/components/features/tenant/profile/ContactForm";

export default function PerfilPage() {
  return (
    <main>
      <section className={"relative w-full h-80"}>
        <Image
          src={"/profileBanner.jpg"}
          quality={100}
          alt={"Banner de perfil"}
          fill
          className={"object-cover object-center"}
        />
      </section>
      <section className={"px-4 py-16 mx-auto max-w-7xl lg:px-8"}>
        <TenantProfile />

        <div className={"flex gap-x-32 mt-8 font-galano"}>
          <div className={"flex flex-col gap-y-2 w-8/12"}>
            <TenantDetails />
          </div>
          <div className={"flex flex-col gap-y-8 w-4/12"}>
            <ContactCard />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
