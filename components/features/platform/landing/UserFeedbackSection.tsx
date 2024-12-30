import FeedbackCard from "@/components/features/platform/landing/FeedbackCard";

export default function UserFeedbackSection() {
  return (
    <section
      className={
        "max-w-7xl mx-auto px-4 md:px-0 font-galano flex flex-col items-center mt-12 pb-32"
      }
    >
      <span className={"text-[#041E42] text-sm text-center"}>
        Inmobiliarios y asesores ya están haciendo comunidad en Propity.
      </span>
      <h1 className={"font-bold text-[#041E42] text-5xl my-4"}>
        Valioso feedback
      </h1>
      <div className={"grid grid-cols-3 gap-20 w-10/12 mx-auto mt-8"}>
        <FeedbackCard
          title={"Alejandro Pérez"}
          subtitle={"Desarrollador inmobiliario"}
          description={
            "“La mejor forma de comercializar un desarrollo inmobiliario es a través de la comunidad de asesores externos profesionales disponibles en cada ciudad. Propity le dio orden y estructura a esa comunidad!”"
          }
          image={"/feed1.png"}
        />

        <FeedbackCard
          title={"José Miguel Torre"}
          subtitle={"Director de JOM! Inmobiliaria"}
          description={
            "“Un 60% de nuestras ventas anuales se hacen compartiendo con colegas inmobiliarios. Propity e sla heramienta que permite que podamos colaborar de iuna forma organizada, eficiente y con el mejor servicio al cliente”"
          }
          image={"/feed2.png"}
        />

        <FeedbackCard
          title={"José Navarro"}
          subtitle={"Gerente operativo"}
          description={
            "“Vender no es el foco de desarrollador. Con Propity pudimos delegar con confianza la comercialización a una comunidad organizada de asesores”"
          }
          image={"/feed3.png"}
        />
      </div>
    </section>
  );
}
