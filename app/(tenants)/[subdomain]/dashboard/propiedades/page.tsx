"use client";

import { useState } from "react";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { ColumnFiltersState, createColumnHelper } from "@tanstack/table-core";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { TableWrapped } from "@/components/features/tenant/dashboard/TableWrapped";
import { withPagination } from "@/components/features/tenant/dashboard/withPagination";
import { AddPropertyButton } from "@/components/features/tenant/dashboard/properties/AddPropertyButton";
import { useAppSelector } from "@/lib/store/hooks";
import { NewPropertyForm } from "@/components/features/tenant/dashboard/properties/NewPropertyForm";

type PropiedadesTableData = {
  image: string;
  name: string;
  date: string;
  operation: string;
  price: string;
  owner: string;
  guies: string;
};

const testData: PropiedadesTableData[] = [
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2022-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2022-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2022-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2022-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2022-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2022-02-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "Propiedad MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
  {
    image: "/picClient.jpg",
    name: "rey MX",
    date: "2023-01-01",
    operation: "Operación",
    price: "100.000",
    owner: "Jom",
    guies: "10",
  },
];

export default function Propiedades() {
  const [tab, setTab] = useState(0);
  const [nameSearch, setNameSearch] = useState("");
  const propertyTabSelected = useAppSelector(
    (state) => state.dashboard.propertyTabSelected
  );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const columnHelper = createColumnHelper<PropiedadesTableData>();
  const columns = [
    columnHelper.accessor("image", {
      header: () => (
        <div className="py-4 text-sm text-center" style={{ width: "50px" }}>
          Preview
        </div>
      ),
      cell: (info) => (
        <div
          className={"flex items-center justify-start"}
          style={{ width: "50px" }}
        >
          <Image
            src={info.getValue()}
            alt="Entity logo"
            width={50}
            height={50}
            className={"rounded-md w-[50px] h-[50px] object-cover"}
          />
        </div>
      ),
      size: 10,
    }),
    columnHelper.accessor((row) => row.name, {
      id: "name",
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Nombre</span>
      ),
    }),
    columnHelper.accessor("date", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Fecha</span>
      ),
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
    }),
    columnHelper.accessor("operation", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Operación</span>
      ),
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
    }),
    columnHelper.accessor("owner", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Dueño</span>
      ),
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
    }),
    columnHelper.accessor("price", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Precio</span>
      ),
      cell: (info) => (
        <span className={"flex flex-col font-galano items-start w-full"}>
          <div className={"font-bold"}>{info.getValue()}</div>
        </span>
      ),
    }),
    columnHelper.accessor("guies", {
      header: () => (
        <span className={"font-galano font-normal text-sm"}>Guia</span>
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
          <Dialog>
            <DialogTrigger asChild>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M8.5 3.89453C12.947 3.89453 15 7.99953 15 7.99953C15 7.99953 12.947 12.1045 8.5 12.1045C4.053 12.1045 2 7.99953 2 7.99953C2 7.99953 4.053 3.89453 8.5 3.89453Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4399 8C10.4459 8.26634 10.3986 8.53119 10.3008 8.77899C10.203 9.02679 10.0566 9.25256 9.87037 9.44303C9.68411 9.63351 9.46167 9.78485 9.21611 9.88817C8.97056 9.99149 8.70684 10.0447 8.44043 10.0447C8.17402 10.0447 7.9103 9.99149 7.66475 9.88817C7.41919 9.78485 7.19675 9.63351 7.01049 9.44303C6.82423 9.25256 6.6779 9.02679 6.5801 8.77899C6.48229 8.53119 6.43497 8.26634 6.44093 8C6.44093 7.46957 6.65164 6.96086 7.02672 6.58579C7.40179 6.21071 7.9105 6 8.44093 6C8.97136 6 9.48007 6.21071 9.85514 6.58579C10.2302 6.96086 10.4409 7.46957 10.4409 8H10.4399Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </DialogTrigger>
            <DialogContent
              className={
                "flex flex-col gap-2 bg-[#131E29] text-white object-cover font-galano"
              }
            >
              <DialogTitle></DialogTitle>
              <Image
                src={"/picClient.jpg"}
                className={"rounded-full w-[180px] h-[180px] object-cover mt-6"}
                width={180}
                height={180}
                alt="coin"
              />
              <div className={"flex flex-col gap-2 mt-6"}>
                <span className={"text-2xl font-bold"}>
                  Melisa Santana De La Torre
                </span>
                <span className={"font-bold"}>@santanadelatorrem</span>
                <span>Asesor</span>
                <span className={"flex justify-between"}>
                  <span>santanadelatorrem@gmail.com</span>
                  <span className={"flex gap-1.5 items-center"}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7247 7.55671L2.7247 2.05671C2.63848 2.0136 2.54164 1.99632 2.44584 2.00696C2.35003 2.01761 2.25935 2.05572 2.1847 2.11671C2.11341 2.17646 2.0602 2.25491 2.03105 2.34323C2.0019 2.43156 1.99797 2.52627 2.0197 2.61671L3.4997 8.00171L1.9997 13.3717C1.97931 13.4472 1.97693 13.5265 1.99275 13.6031C2.00857 13.6797 2.04214 13.7516 2.09078 13.8128C2.13941 13.8741 2.20174 13.9231 2.27276 13.9559C2.34379 13.9887 2.42151 14.0044 2.4997 14.0017C2.57797 14.0012 2.65504 13.9824 2.7247 13.9467L13.7247 8.44671C13.8066 8.40475 13.8753 8.34101 13.9233 8.26249C13.9713 8.18397 13.9967 8.09374 13.9967 8.00171C13.9967 7.90969 13.9713 7.81945 13.9233 7.74093C13.8753 7.66242 13.8066 7.59867 13.7247 7.55671ZM3.2747 12.5567L4.3797 8.50171H8.9997V7.50171H4.3797L3.2747 3.44671L12.3797 8.00171L3.2747 12.5567Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.33203C4 5.4467 4 4.50336 4.586 3.91803C5.17133 3.33203 6.11467 3.33203 8 3.33203H10C11.8853 3.33203 12.8287 3.33203 13.414 3.91803C14 4.50336 14 5.4467 14 7.33203V10.6654C14 12.5507 14 13.494 13.414 14.0794C12.8287 14.6654 11.8853 14.6654 10 14.6654H8C6.11467 14.6654 5.17133 14.6654 4.586 14.0794C4 13.494 4 12.5507 4 10.6654V7.33203Z"
                        stroke="white"
                      />
                      <path
                        d="M4 12.6654C3.46957 12.6654 2.96086 12.4547 2.58579 12.0796C2.21071 11.7045 2 11.1958 2 10.6654V6.66536C2 4.15136 2 2.89403 2.78133 2.11336C3.56267 1.3327 4.81933 1.33203 7.33333 1.33203H10C10.5304 1.33203 11.0391 1.54274 11.4142 1.91782C11.7893 2.29289 12 2.8016 12 3.33203"
                        stroke="white"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <div className={"flex gap-2 justify-end"}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path
                    d="M8.5 3.89453C12.947 3.89453 15 7.99953 15 7.99953C15 7.99953 12.947 12.1045 8.5 12.1045C4.053 12.1045 2 7.99953 2 7.99953C2 7.99953 4.053 3.89453 8.5 3.89453Z"
                    stroke="black"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.4399 8C10.4459 8.26634 10.3986 8.53119 10.3008 8.77899C10.203 9.02679 10.0566 9.25256 9.87037 9.44303C9.68411 9.63351 9.46167 9.7848

                    5 9.88817C8 9.99149 9.29316 10.0447 9.55957 10.0447C9.82598 10.0447 10.0596 9.99149 10.2752 9.88817C10.4908 9.78485 10.6834 9.63351 10.7956 9.44303C10.9078 9.25256 10.9555 9.02679 10.9494 8C10.9494 7.46957 10.7589 6.96086 10.3738 6.58579C9.98879 6.21071 9.49947 6 8.94907 6C8.48867 6 8.08947 6.21071 7.70434 6.58579C7.31927 6.96086 7.12887 7.46957 7.12887 8H7.12887Z"
                    stroke="black"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <DialogFooter>
                <Button variant={"outline"} className={"py-6 w-full"}>
                  Agregar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path
              d="M3.83301 7.9987H8.49967M8.49967 7.9987H13.1663M8.49967 7.9987V3.33203M8.49967 7.9987V12.6654"
              stroke="#262931"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    }),
  ];

  const handleSearch = (value: string) => {
    setColumnFilters([
      {
        id: "name",
        value,
      },
    ]);
  };

  const PropertysTable = withPagination<PropiedadesTableData>({
    Table: TableWrapped,
  });

  return propertyTabSelected === "table" ? (
    <section className={"flex flex-col font-galano"}>
      <h1 className={"text-4xl font-bold mt-6"}>Propiedades</h1>
      <div className={"flex justify-between my-4"}>
        <span
          className={`bg-[#E9EBEE] p-0.5 rounded-md flex items-center w-fit font-galano`}
        >
          <span
            onClick={() => setTab(0)}
            className={`text-sm ${tab === 0 ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
          >
            Propiedades
          </span>
          <span
            onClick={() => setTab(1)}
            className={`text-sm ${tab === 1 ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
          >
            Por Autorizar
          </span>
          <span
            onClick={() => setTab(2)}
            className={`text-sm ${tab === 2 ? "bg-white font-bold" : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
          >
            Propiedades Inactivas
          </span>
          <span
            onClick={() => setTab(3)}
            className={`text-sm ${tab === 3 ? "bg-white font-bold" : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
          >
            Propiedades Incompletas
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
                handleSearch(value);
              }}
              className={`4xl:w-80 3xl:w-48 w-full pl-8 pr-4 [&]:py-5 md:text-sm text-sm focus:outline-none focus-visible:ring-0 border-[#26293133]`}
            />
          </span>
          <AddPropertyButton />
        </div>
      </div>

      <PropertysTable
        data={testData}
        columns={columns}
        columnsFilters={columnFilters}
        onChangeColumnsFilters={setColumnFilters}
      />
    </section>
  ) : (
    <NewPropertyForm />
  );
}
