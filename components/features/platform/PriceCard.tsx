import Image from "next/image";
import { Checkbox } from "@/components/common/checkbox";
import { Button } from "@/components/common/button";

type PriceCardProps = {
  title: string;
  price?: string;
  promoted?: boolean;
  features: string[];
};

export default function PriceCard({
  title,
  promoted,
  features,
  price,
}: PriceCardProps) {
  return (
    <>
      <article
        className={`px-9 py-6  ${promoted ? "bg-white-to-green-gradient border border-[#041E42]" : "bg-white"} rounded flex flex-col gap-1 h-fit`}
      >
        <span className={"flex items-center gap-1 font-bold text-2xl -mb-4"}>
          <Image
            src={"/propityIcon.png"}
            alt={"Propity Icon"}
            width={70}
            height={70}
            className={"-mr-2 -ml-3"}
          />
          {title}
        </span>
        <h1 className={"text-4xl font-bold font-galano text-[#262931] my-4"}>
          {price ? (
            <>
              <span className={"flex items-baseline"}>
                {price}
                <span className={"text-sm"}></span>
                {/* <span className={"text-sm"}>/mes</span> */}
              </span>
            </>
          ) : (
            "Free"
          )}
        </h1>
        <div className={"w-full h-px bg-gray-200 mb-4"}></div>
        <span className={"font-bold"}>Carácteristicas</span>
        <div className={"flex flex-col gap-4 mt-3"}>
          {features.map((feature, index) => (
            <div key={index} className={"flex items-center gap-1.5 text-sm"}>
              <Checkbox
                className={
                  "[&]:data-[state=checked]:bg-[#cdd2d9] [&]:h-fit [&]:w-fit p-1 border-none data-[state=checked]:text-[#041E42]"
                }
                checked
              />
              {feature}
            </div>
          ))}
        </div>
        <Button
          size={"lg"}
          variant={promoted ? "propity" : "propity-light"}
          className={`mt-6 py-6 text-xl font-galano font-medium`}
        >
          Suscribir
        </Button>
        <Button
          size={"lg"}
          variant={"link"}
          className={"text-[#041E42] text-sm font-galano font-medium"}
        >
          Comenzar gratis
        </Button>
      </article>
    </>
  );
}
