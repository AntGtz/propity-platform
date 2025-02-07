import { Button } from "@/components/common/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/common/select";
import { Team } from "@/type/dashboard";
import Image from "next/image";
import { createColumnHelper } from "@tanstack/table-core";

const columnHelper = createColumnHelper<Team>();

export const columns = [
  columnHelper.accessor("photo.original", {
    header: () => <></>,
    cell: (info) => (
      <Image
        height={50}
        width={50}
        className={"h-[50px] w-[50px] object-cover rounded-full"}
        src={info.getValue()}
        alt="Entity logo"
      />
    ),
    meta: {
      className: "w-[150px] [&]:pl-12",
      header: {
        className: "py-8",
      },
    },
  }),
  columnHelper.accessor("name", {
    cell: (info) => (
      <span className={"flex flex-col font-galano items-start w-full"}>
        <div className={"text-[#262931]"}>{info.cell.getValue()}</div>
      </span>
    ),
    header: () => (
      <span className={"font-galano font-normal text-sm"}>Nombre</span>
    ),
  }),
  columnHelper.accessor("role", {
    header: () => (
      <span className={"font-galano font-normal text-sm"}>Rol</span>
    ),
    cell: (info) => (
      <span className={"flex flex-col font-galano items-start w-full"}>
        <div className={"text-[#262931]"}>{info.cell.getValue() === "admin" ? "Administrador" : "Equipo"}</div>
      </span>
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <></>,
    cell: () => (
      <div className={"flex gap-2 justify-end"}>
        <Dialog>
          <DialogTrigger asChild>
            <svg
              className={"cursor-pointer"}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.66667 2C8.83659 2.00019 9.00002 2.06525 9.12358 2.1819C9.24714 2.29855 9.32149 2.45797 9.33145 2.6276C9.34141 2.79722 9.28622 2.96425 9.17716 3.09455C9.0681 3.22486 8.9134 3.3086 8.74467 3.32867L8.66667 3.33333H3.33333V12.6667H12.6667V7.33333C12.6669 7.16341 12.7319 6.99998 12.8486 6.87642C12.9652 6.75286 13.1246 6.67851 13.2943 6.66855C13.4639 6.65859 13.6309 6.71378 13.7612 6.82284C13.8915 6.9319 13.9753 7.0866 13.9953 7.25533L14 7.33333V12.6667C14.0001 13.0031 13.8731 13.327 13.6443 13.5737C13.4156 13.8204 13.1021 13.9714 12.7667 13.9967L12.6667 14H3.33333C2.99695 14.0001 2.67296 13.8731 2.4263 13.6443C2.17965 13.4156 2.02856 13.1021 2.00333 12.7667L2 12.6667V3.33333C1.99989 2.99695 2.12694 2.67296 2.35566 2.4263C2.58439 2.17965 2.8979 2.02856 3.23333 2.00333L3.33333 2H8.66667ZM12.8287 2.22867C12.9486 2.1091 13.1096 2.03968 13.2789 2.03451C13.4482 2.02934 13.6131 2.08881 13.7402 2.20083C13.8672 2.31285 13.9469 2.46903 13.9629 2.63765C13.979 2.80626 13.9303 2.97467 13.8267 3.10867L13.7713 3.172L7.17133 9.77133C7.05136 9.8909 6.89038 9.96032 6.72108 9.96549C6.55178 9.97066 6.38686 9.91119 6.25981 9.79917C6.13277 9.68715 6.05313 9.53097 6.03707 9.36235C6.02101 9.19374 6.06973 9.02533 6.17333 8.89133L6.22867 8.82867L12.8287 2.22867Z"
                fill="#262931"
              />
            </svg>
          </DialogTrigger>
          <DialogContent
            className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
          >
            <DialogTitle className={"text-3xl text-center"}>
              Editar Integrante
            </DialogTitle>
            <div className={"flex flex-col gap-1"}>
              <span className={"text-sm"}>Rol de usuario</span>
              <Select>
                <SelectTrigger
                  className={
                    "border-gray-400 [&]:rounded-sm [&]:py-6 focus:ring-0 focus-visible:ring-0"
                  }
                >
                  <span className={"text-sm"}>Desarrollador</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"Desarrollador"}>Desarrollador</SelectItem>
                  <SelectItem value={"Propietario"}>Propietario</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button className={"py-6 w-full"}>Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <svg
              className={"cursor-pointer"}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 3.66536L12.5867 10.3487C12.4813 12.056 12.4287 12.91 12 13.524C11.7884 13.8275 11.5159 14.0836 11.2 14.276C10.562 14.6654 9.70667 14.6654 7.996 14.6654C6.28267 14.6654 5.426 14.6654 4.78667 14.2754C4.47059 14.0825 4.19814 13.826 3.98667 13.522C3.55867 12.9074 3.50667 12.052 3.404 10.342L3 3.66536M6 7.82203H10M7 10.4347H9M2 3.66536H14M10.7033 3.66536L10.2487 2.7267C9.946 2.1027 9.79533 1.79136 9.53467 1.5967C9.47676 1.55358 9.41545 1.51523 9.35133 1.48203C9.06267 1.33203 8.716 1.33203 8.02267 1.33203C7.31267 1.33203 6.95733 1.33203 6.66333 1.48803C6.59834 1.52284 6.53635 1.56298 6.478 1.60803C6.214 1.81003 6.06667 2.13336 5.772 2.77936L5.36867 3.66536"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DialogTrigger>
          <DialogContent
            className={"flex flex-col gap-y-7 font-galano px-12 py-12"}
          >
            <DialogTitle className={"text-3xl text-center"}>
              Eliminar Usuario
            </DialogTitle>
            <DialogFooter className={"flex justify-between gap-5"}>
              <Button className={"py-6 w-full"}>Si</Button>
              <Button variant={"outline"} className={"py-6 w-full"}>
                No
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    ),
  }),
];
