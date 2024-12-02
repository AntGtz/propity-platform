import Footer from "@/components/layouts/Footer";
import Nav from "@/components/layouts/Nav";
import StoreProvider from "@/app/(tenants)/[subdomain]/StoreProvider";
import { TenantData } from "@/type/tenantData";

export interface Tenant {
  id: string;
  subdomain: string;
}

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { subdomain: string };
}) {
  const tenantsData = await fetch("https://api.propity.mx/qa/entities/");
  const tenantsList: TenantData[] = await tenantsData.json();

  const appParams = await params;

  const getTenant = tenantsList.find(
    (tenant) => tenant.subdomain.split(".")[0] === appParams.subdomain,
  );

  return (
    <>
      <StoreProvider tenantId={getTenant?.id || ""}>
        <Nav />
        {children}
        <Footer />
      </StoreProvider>
    </>
  );
}
