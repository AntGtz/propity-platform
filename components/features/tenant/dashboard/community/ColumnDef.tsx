import { createColumnHelper } from "@tanstack/table-core";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { CommunityTableData } from "@/type/dashboard";

const columnHelper = createColumnHelper<CommunityTableData>();

const columns = [
  columnHelper.accessor("logo", {
    header: () => <></>,
    cell: (info) => (
      <div>
        <Image
          height={50}
          width={50}
          className={"h-[50px] w-[50px] object-contain rounded-lg"}
          src={info.getValue()}
          alt="Entity logo"
        />
      </div>
    ),
    size: 50,
    maxSize: 50,
    enableResizing: false,
    meta: {
      className: "w-32",
      empty: " ",
    },
  }),
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => (
      <span className={"flex flex-col font-galano items-start w-full"}>
        <div className={"font-bold"}>{info.getValue()}</div>
        <div className={"text-sm"}>{info.row.getValue("slogan")}</div>
      </span>
    ),
    header: () => (
      <span className={"font-galano font-normal text-sm py-5 block"}>
        Nombre
      </span>
    ),
    meta: {
      className: "py-6",
      empty: "No hay Comunidades",
    },
  }),
  columnHelper.accessor("slogan", {
    header: () => <span>Slogan</span>,
    cell: (info) => (
      <span className={"font-galano font-normal text-sm py-5 block"}>
        {info.getValue()}
      </span>
    ),
    meta: {
      empty: " ",
    },
  }),
  columnHelper.accessor("subdomain", {
    header: () => <span>Subdominio</span>,
    cell: (info) => (
      <span className={"font-galano font-normal text-sm py-5 block"}>
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("isActive", {
    header: () => <span>Activo</span>,
    cell: (info) => (info.getValue() ? "Si" : "No"),
    enableSorting: true,
  }),
  columnHelper.accessor("needsApproval", {
    header: () => <span>Necesita aprobación</span>,
    cell: (info) => (info.getValue() ? "Si" : "No"),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <></>,
    cell: ({ row }) => (
      <div className={"flex gap-2 justify-end"}>
        {row.original.isActive && (
          <Button variant={"destructive"} size={"sm"} className={"font-galano"}>
            Eliminar
          </Button>
        )}
        {!row.original.isActive && row.original.needsApproval && (
          <>
            <Button
              variant={"propity"}
              size={"sm"}
              className={"font-galano bg-[#00B140] [&]:py-4"}
            >
              Aceptar
            </Button>
            <Button
              variant={"destructive"}
              size={"sm"}
              className={"font-galano"}
            >
              Rechazar
            </Button>
          </>
        )}
        {!row.original.isActive && !row.original.needsApproval && (
          <>
            <Button
              variant={"propity"}
              size={"sm"}
              className={"font-galano bg-[#00B140] [&]:py-4"}
            >
              Aceptar
            </Button>
          </>
        )}
      </div>
    ),
    meta: {
      empty: " ",
    },
  }),
];

export default columns;
