import Footer from "@/components/layouts/Footer";
import NavPlatform from "@/components/layouts/NavPlatform";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavPlatform />
      {children}
      <Footer />
    </>
  );
}
