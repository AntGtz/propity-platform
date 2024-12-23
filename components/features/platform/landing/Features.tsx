import FeatureCard from "@/components/features/platform/FeatureCard";

export default function Features() {
  return (
    <section
      className={
        "pt-24 pb-64 px-16 flex flex-col items-center justify-center font-galano bg-white-to-green-gradient-bottom text-[#262931]"
      }
    >
      <h1 className={"w-full text-3xl font-bold text-center"}>
        Pizza ipsum dolor meat lovers buffalo.
      </h1>
      <div className={"grid grid-cols-3 gap-12 w-full mt-16"}>
        <FeatureCard
          index={1}
          title={"Meat lovers buffalo."}
          description={
            "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives. ipsum"
          }
          image={"/demoImg.png"}
        />
        <FeatureCard
          index={2}
          title={"Meat lovers buffalo."}
          description={
            "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives. ipsum"
          }
          image={"/demoImg.png"}
        />
        <FeatureCard
          index={3}
          title={"Meat lovers buffalo."}
          description={
            "Pizza ipsum dolor meat lovers buffalo. Ricotta tomatoes marinara NY green mayo buffalo tossed olives. ipsum"
          }
          image={"/demoImg.png"}
        />
      </div>
    </section>
  );
}
