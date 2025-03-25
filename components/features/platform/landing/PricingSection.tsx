import PriceCard from "@/components/features/platform/PriceCard";

export default function PricingSection() {
  return (
    <section
      id={"paquetes"}
      className={
        "py-24 px-4 md:px-16 flex flex-col items-center justify-center font-galano text-[#262931] max-w-7xl mx-auto"
      }
    >
      <span
        className={
          "md:text-5xl text-4xl text-[#041E42] font-bold mb-6 text-center md:w-10/12 leading-tight"
        }
      >
        Asesores Inmobilarios e Inmobiliarias Tenemos un plan para tí
      </span>
      <p className={"w-full text-center"}>
        Aumenta tu inventario, compartelo con la comunidad y vende más dándole a
        tu cliente lo que realmente necesita.
      </p>

      <div
        className={
          "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 mt-16 w-full items-center"
        }
      >
        <PriceCard
          title={"Starter"}
          price={"Próximamente"}
          features={[
            "Ve los inventarios de tus Desarrolladores",
            "Descubre nuevos desarrollos",
            "Organiza el inventario en tu aplicación",
            "1 Usuario",
          ]}
        />
        <PriceCard
          title={"Basico"}
          price={"Próximamente"}
          features={[
            "Ve los inventarios de tus Desarrolladores",
            "Descubre nuevos desarrollos",
            "Organiza el inventario en tu aplicación",
            "Hasta 5 asesores internos",
            "Landing Page Personalizada",
            "Sube hasta 100 propiedades de tu inventario",
          ]}
          promoted
        />
        <PriceCard
          title={"Pro"}
          price={"Próximamente"}
          features={[
            "Ve los inventarios de tus Desarrolladores",
            "Descubre nuevos desarrollos",
            "Organiza el inventario en tu aplicación",
            "Hasta 40 asesores internos",
            "Landing Page Personalizada",
            "Sube hasta 500 propiedades de tu inventario",
          ]}
        />
      </div>
    </section>
  );
}
