import { Button } from "@/components/common/button";

export default function LastCTA() {
  return (
    <>
      <section className={"-mt-36 px-64"}>
        <div
          className={
            "bg-[#131E29] py-24 px-16 rounded-lg flex flex-col items-center justify-center font-galano text-white"
          }
        >
          <span className={"text-center"}>Pizza ipsum dolor meat lovers</span>
          <h1 className={"font-bold text-5xl mt-6 mb-2 text-center"}>
            Pizza ipsum.
          </h1>
          <p className={"text-center"}>
            Pizza ipsum dolor meat lovers buffalo.
          </p>
          <div className={"flex gap-6 items-center mt-6"}>
            <Button
              size={"lg"}
              variant={"default"}
              className={"bg-[#00B140] [&]:py-5"}
            >
              Solicitar una demostración
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className={
                "border-[#00B140] bg-transparent border-2 font-medium text-[#00B140] [&]:py-5"
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
