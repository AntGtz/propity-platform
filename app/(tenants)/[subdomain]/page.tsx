import CreateCommunity from "@/components/features/tenant/landing/CreateCommunity";
import DevelopmentsList from "@/components/features/tenant/landing/DevelopmentsList";
import Hero from "@/components/features/tenant/landing/Hero";
import RealStateAgencyList from "@/components/features/tenant/landing/RealStateAgencyList";
import SearchProperty from "@/components/features/tenant/landing/SearchProperty";
import { DevelopmentsAgencysList } from "@/components/features/tenant/landing/DevelopmentsAgencysList";
import { Team } from "@/components/features/tenant/landing/Team";
import { Button } from "@/components/common/button";

export default async function TenantPage({
  params,
}: {
  params: Promise<{
    subdomain: string;
  }>;
}) {
  const tenantData = await params;
  return (
    <main>
      <Hero />
      {tenantData.subdomain == "app" ? (
        <>
          <CreateCommunity />
          <section
            className={
              "max-w-5xl md:mx-auto py-12 px-8 bg-[#00B14033] text-[#041E42] font-galano flex md:flex-row flex-col mx-4 justify-center items-center gap-6 md:gap-20 my-12 md:my-0"
            }
          >
            <div className={"flex flex-col items-center"}>
              <span className={"text-5xl font-bold"}>20</span>
              <span>Empresas usando Propity</span>
            </div>
            <div className={"flex flex-col items-center"}>
              <span className={"text-5xl font-bold"}>1.500</span>
              <span>Usuarios conectados</span>
            </div>
            <div className={"flex flex-col items-center"}>
              <span className={"text-5xl font-bold"}>2.000</span>
              <span>Empresas usando Propity</span>
            </div>
            <div className={"flex flex-col items-center"}>
              <span className={"text-5xl font-bold"}>1.450</span>
              <span>Inmobiliarias activas</span>
            </div>
          </section>
          <DevelopmentsList />
          <RealStateAgencyList />
          <DevelopmentsAgencysList />
          <SearchProperty />
        </>
      ) : (
        <>  
          <SearchProperty />
          <Team />
          <section className="w-full h-[400px] bg-[#131E29] flex flex-col justify-center items-center gap-6 mt-12">
            <h1 className="text-5xl font-bold text-white max-w-7xl mx-auto text-center">¿Buscas Vender o Comprar Alguna Propiedad?
              <br />Somos tu solución</h1>
              <Button variant={"propity"} className="text-lg [&:hover]:bg-[#00B140] [&]:py-6 px-6">Ver Inventario</Button>
          </section>
        </>
      )}
    </main>
  );
}
