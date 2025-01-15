"use client";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { useState } from "react";
import { ColumnFiltersState, createColumnHelper } from "@tanstack/table-core";
import { withPagination } from "@/components/features/tenant/dashboard/withPagination";
import { TableWrapped } from "@/components/features/tenant/dashboard/TableWrapped";

type ComercialTableData = {
  name: string;
  description: string;
};

const testData: ComercialTableData[] = [
  {
    name: "Propity MX",
    description: "Propity MX",
  },
  {
    name: "Propity MX",
    description: "Propity MX",
  },
  {
    name: "Rey MX",
    description: "rey MX",
  },
];

export default function Comercial() {
  const [tab, setTab] = useState(0);
  const [nameSearch, setNameSearch] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columnHelper = createColumnHelper<ComercialTableData>();
  const columns = [
    columnHelper.accessor("name", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Nombre</span>
      ),
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
    }),
    columnHelper.accessor("description", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Descripción</span>
      ),
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: () => <>Acciones</>,
      cell: () => (
        <div className={"flex gap-2 justify-end"}>
          <Button variant={"outline"} className={"py-6 w-full"}>
            Agregar
          </Button>
        </div>
      ),
    }),
  ];

  const ComercialTable = withPagination<ComercialTableData>({
    Table: TableWrapped,
  });

  return (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Asesores</h1>
      <div className={"flex justify-between my-4"}>
        <span
          className={`bg-[#E9EBEE] p-0.5 rounded-md flex items-center w-fit font-galano`}
        >
          <span
            onClick={() => setTab(0)}
            className={`text-sm ${tab === 0 ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
          >
            Orígenes
          </span>
          <span
            onClick={() => setTab(1)}
            className={`text-sm ${tab === 1 ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
          >
            Estatus
          </span>
        </span>
        <div className={"flex gap-4 items-center"}>
          <span className={"relative"}>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              className={"absolute top-1/2 -translate-y-1/2 left-3"}
            >
              <mask
                id="mask0_858_13003"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.333008 0.332031H13.3175V13.3167H0.333008V0.332031Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_858_13003)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.82567 1.33203C3.79701 1.33203 1.33301 3.79536 1.33301 6.82403C1.33301 9.8527 3.79701 12.3167 6.82567 12.3167C9.85367 12.3167 12.3177 9.8527 12.3177 6.82403C12.3177 3.79536 9.85367 1.33203 6.82567 1.33203ZM6.82567 13.3167C3.24567 13.3167 0.333008 10.404 0.333008 6.82403C0.333008 3.24403 3.24567 0.332031 6.82567 0.332031C10.4057 0.332031 13.3177 3.24403 13.3177 6.82403C13.3177 10.404 10.4057 13.3167 6.82567 13.3167Z"
                  fill="#666666"
                />
              </g>
              <mask
                id="mask1_858_13003"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x="10"
                y="10"
                width="4"
                height="5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4932 10.8047H13.8425V14.1479H10.4932V10.8047Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_858_13003)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3427 14.1479C13.2153 14.1479 13.0873 14.0992 12.9893 14.0019L10.64 11.6592C10.4447 11.4639 10.444 11.1472 10.6393 10.9519C10.834 10.7552 11.1507 10.7565 11.3467 10.9505L13.696 13.2939C13.8913 13.4892 13.892 13.8052 13.6967 14.0005C13.5993 14.0992 13.4707 14.1479 13.3427 14.1479Z"
                  fill="#666666"
                />
              </g>
            </svg>

            <Input
              id={"search-input"}
              type={"text"}
              placeholder={"Buscar"}
              value={nameSearch}
              onChange={(e) => {
                const value = e.target.value;
                setNameSearch(value);
              }}
              className={`4xl:w-80 3xl:w-48 w-full pl-8 pr-4 [&]:py-5 md:text-sm text-sm focus:outline-none focus-visible:ring-0 border-[#26293133]`}
            />
          </span>
          <Button className={"py-5 px-6"}>
            Añadir Propiedad
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1.33301 5.9987H5.99967M5.99967 5.9987H10.6663M5.99967 5.9987V1.33203M5.99967 5.9987V10.6654"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <ComercialTable
        data={testData}
        columns={columns}
        columnsFilters={columnFilters}
        onChangeColumnsFilters={setColumnFilters}
      />
    </section>
  );
}
