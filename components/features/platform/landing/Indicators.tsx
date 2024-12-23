export default function Indicators() {
  return (
    <section className={"w-full flex justify-center -mb-16"}>
      <div
        className={
          "px-10 py-6 flex items-center gap-16 bg-[#041E42] text-white font-galano"
        }
      >
        <div className={"flex items-center flex-col gap-1.5"}>
          <span className={"text-4xl font-bold"}>2.000</span>
          <span className={""}>Empresas usando Propity</span>
        </div>
        <div className={"flex items-center flex-col gap-1.5"}>
          <span className={"text-4xl font-bold"}>1.500</span>
          <span className={""}>Usuarios conectados</span>
        </div>
        <div className={"flex items-center flex-col gap-1.5"}>
          <span className={"text-4xl font-bold"}>2.000</span>
          <span className={""}>Empresas usando Propity</span>
        </div>
        <div className={"flex items-center flex-col gap-1.5"}>
          <span className={"text-4xl font-bold"}>1.450</span>
          <span className={""}>Inmobiliarias activas</span>
        </div>
      </div>
    </section>
  );
}
