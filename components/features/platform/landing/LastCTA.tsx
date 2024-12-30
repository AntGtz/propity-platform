import { Button } from "@/components/common/button";

export default function LastCTA() {
  return (
    <>
      <section className={"px-4 md:px-0 max-w-7xl mx-auto"}>
        <div
          className={
            "bg-[#041E42] py-24 rounded-lg flex flex-col items-center justify-center font-galano text-white"
          }
        >
          <h1
            className={
              "font-bold text-5xl mt-6 mb-2 text-center w-7/12 leading-tight"
            }
          >
            La nueva normalidad es colaborativa.
          </h1>
          <div className={"flex gap-6 items-center mt-6"}>
            <Button
              size={"lg"}
              variant={"default"}
              className={"bg-[#00B140] [&]:py-6"}
            >
              Solicitar una demostración
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className={
                "border-[#00B140] bg-transparent border-2 font-medium text-[#00B140] [&]:py-6"
              }
            >
              Comenzar gratis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
