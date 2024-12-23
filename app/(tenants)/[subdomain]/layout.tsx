import FooterTenant from "@/components/layouts/FooterTenant";
import NavTenant from "@/components/layouts/NavTenant";
import StoreProvider from "@/app/(tenants)/[subdomain]/StoreProvider";
import { TenantData } from "@/type/tenantData";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

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
      <SessionProvider>
        <StoreProvider tenantId={getTenant?.id || ""}>
          <NavTenant />
          {children}
          <FooterTenant />
        </StoreProvider>
      </SessionProvider>
    </>
  );
}
