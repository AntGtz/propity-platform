import FooterTenant from "@/components/layouts/FooterTenant";
import NavTenant from "@/components/layouts/NavTenant";
import StoreProvider from "@/app/(tenants)/[subdomain]/StoreProvider";
import { TenantData } from "@/type/tenantData";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    subdomain: string;
  }>;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const appParams = await params;

  const tenantsData = await fetch("https://api.propity.mx/qa/entities/");
  const tenantsList: TenantData[] = await tenantsData.json();

  const IfQAJOM = appParams.subdomain.split(".")[0] === "qajom";

  const getTenant = tenantsList.find(
    (tenant) => tenant.subdomain.split(".")[0] === (IfQAJOM ? "jom" : appParams.subdomain),
  );

  const response: Response = await fetch(
    `https://api.propity.mx/qa/entities/${getTenant?.id}`,
  );

  const tenantDetails: TenantData = await response.json();

  return {
    title: `${tenantDetails.name} - ${tenantDetails.theme?.slogan}`,
    description: tenantDetails.description,
    openGraph: {
      images: [tenantDetails.theme.imagetype.main],
    },
    icons: {
      icon: tenantDetails.theme.logotype.main,
    },
  };
}

export default async function TenantLayout({ children, params }: LayoutProps) {
  const appParams = await params;

  const tenantsData = await fetch("https://api.propity.mx/qa/entities/");
  const tenantsList: TenantData[] = await tenantsData.json();
  
  const ifQAJOM = appParams.subdomain.split(".")[0] === "qajom";

  const getTenant = tenantsList.find(
    (tenant) => tenant.subdomain.split(".")[0] === (ifQAJOM ? "jom" : appParams.subdomain),
  );

  if (!getTenant) {
    redirect(`http://localhost:3000/`);
  }

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
