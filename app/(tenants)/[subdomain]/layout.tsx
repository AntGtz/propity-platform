import Footer from "@/components/layouts/Footer";
import Nav from "@/components/layouts/Nav";

export default async function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
