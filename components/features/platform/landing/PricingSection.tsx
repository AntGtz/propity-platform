import PriceCard from "@/components/features/platform/PriceCard";

export default function PricingSection() {
  return (
    <section
      className={
        "py-24 px-16 flex flex-col items-center justify-center font-galano text-[#262931] bg-gray-gradient"
      }
    >
      <span className={"text-4xl font-bold mb-6"}>
        Elige el plan perfecto para ti
      </span>
      <p className={"w-[700px] text-center"}>
        Pizza ipsum dolor meat lovers buffalo. Pork fresh personal spinach dolor
        pan NY ranch. NY sauce parmesan thin mayo large Aussie black tossed.
      </p>

      <div className={"grid grid-cols-3 gap-20 mt-16 w-full items-center"}>
        <PriceCard
          title={"Mini"}
          description={
            "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives."
          }
          features={["ricotta", "tomatoes", "marinara"]}
        />
        <PriceCard
          title={"Basico"}
          description={
            "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives."
          }
          features={["ricotta", "tomatoes", "marinara", "ricotta", "tomatoes"]}
          promoted
        />
        <PriceCard
          title={"Pro"}
          description={
            "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives."
          }
          features={["ricotta", "tomatoes", "marinara"]}
        />
      </div>
    </section>
  );
}
