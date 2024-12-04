import Footer from "@/components/layouts/Footer";
import NavPlatform from "@/components/layouts/NavPlatform";

export default async function TenantLayout({
  children,
}: {
  children: React.ReactNode;
  params: { subdomain: string };
}) {
  return (
    <>
      <NavPlatform />
      {children}
      <Footer />
    </>
  );
}
