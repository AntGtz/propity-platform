import Footer from "@/components/layouts/Footer";
import NavTenant from "@/components/layouts/NavTenant";
import StoreProvider from "@/app/(tenants)/[subdomain]/StoreProvider";
import { TenantData } from "@/type/tenantData";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    subdomain: string;
  }>;
}

export default async function TenantLayout({ children, params }: LayoutProps) {
  const tenantsData = await fetch("https://api.propity.mx/qa/entities/");
  const tenantsList: TenantData[] = await tenantsData.json();

  const appParams = await params;

  const getTenant = tenantsList.find(
    (tenant) => tenant.subdomain.split(".")[0] === appParams.subdomain,
  );

  return (
    <>
      <StoreProvider tenantId={getTenant?.id || ""}>
        <NavTenant />
        {children}
        <Footer />
      </StoreProvider>
    </>
  );
}
