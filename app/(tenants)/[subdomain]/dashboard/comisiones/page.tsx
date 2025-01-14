import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";

export default function Comisiones() {
  return (
    <>
      <section className={"flex flex-col font-galano"}>
        <h1 className={"text-4xl font-bold mt-6"}>Esquema de comisión</h1>
        <div className={"flex justify-between my-4"}>
          <Select>
            <SelectTrigger className={"w-fit"}>Esquema</SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Comisión 1</SelectItem>
              <SelectItem value={"2"}>Comisión 2</SelectItem>
              <SelectItem value={"3"}>Comisión 3</SelectItem>
            </SelectContent>
          </Select>

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
          className={"my-4 border rounded-lg border-gray-400 border-collapse"}
        >
          <Table className={"px-5"}>
            <TableHeader className={""}>
              <TableRow>
                <TableHead className="w-[100px] px-12 py-6">Esquema</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right px-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Guia</TableCell>
                <TableCell className={"w-full text-center"}>20%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Nuevo</TableCell>
                <TableCell className={"w-full text-center"}>15%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Guia</TableCell>
                <TableCell className={"w-full text-center"}>20%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Nuevo</TableCell>
                <TableCell className={"w-full text-center"}>15%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Guia</TableCell>
                <TableCell className={"w-full text-center"}>20%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Nuevo</TableCell>
                <TableCell className={"w-full text-center"}>15%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium px-12 py-6">Guia</TableCell>
                <TableCell className={"w-full text-center"}>20%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow className={"bg-[#EBEBEB]"}>
                <TableCell className="font-medium px-12 py-6">Nuevo</TableCell>
                <TableCell className={"w-full text-center"}>15%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
              <TableRow className={"bg-[#EBEBEB]"}>
                <TableCell className="font-medium px-12 py-6">Nuevo</TableCell>
                <TableCell className={"w-full text-center"}>15%</TableCell>
                <TableCell className={"w-full h-full px-12"}>
                  <svg width="3" height="15" viewBox="0 0 3 15" fill="none">
                    <circle
                      cx="1.5"
                      cy="13.5"
                      r="1.5"
                      transform="rotate(-90 1.5 13.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="7.5"
                      r="1.5"
                      transform="rotate(-90 1.5 7.5)"
                      fill="#A2A9B7"
                    />
                    <circle
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="rotate(-90 1.5 1.5)"
                      fill="#A2A9B7"
                    />
                  </svg>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
