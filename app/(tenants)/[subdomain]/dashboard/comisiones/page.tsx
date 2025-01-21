import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import CommissionSelect from "@/components/features/tenant/dashboard/commission/CommissionSelect";
import { CommissionTable } from "@/components/features/tenant/dashboard/commission/CommissionTable";

export default async function Comisiones() {
  return (
    <>
      <section className={"flex flex-col font-galano"}>
        <h1 className={"text-4xl font-bold mt-6"}>Esquema de comisión</h1>
        <div className={"flex justify-between my-4"}>
          <CommissionSelect />
          <Dialog>
            <DialogTrigger asChild>
              <Button className={"py-5 px-6"}>
                Agregar Esquema{" "}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent
              className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
            >
              <DialogTitle className={"text-3xl text-center"}>
                Nuevo Socio Comercial
              </DialogTitle>
              <div className={"flex flex-col gap-1"}>
                <span className={"text-sm"}>Nombre</span>
                <Input
                  placeholder={"Nombre"}
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                />
              </div>
              <div className={"flex flex-col gap-1"}>
                <span className={"text-sm"}>Descripción</span>
                <Input
                  placeholder={"Descripción"}
                  className={
                    "w-full border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                />
              </div>
              <DialogFooter>
                <Button className={"py-6 w-full"}>Guardar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div
          className={"my-4 border rounded-lg border-gray-400 border-collapse overflow-hidden"}
        >
          <CommissionTable />
        </div>
      </section>
    </>
  );
}
