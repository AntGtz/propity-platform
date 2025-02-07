import { CommissionTableData } from "@/type/dashboard";
import { createColumnHelper } from "@tanstack/table-core";
import React from "react";
import { CommissionEditButton } from "./CommissionEditButton";

export const CommissionTableHelper = createColumnHelper<CommissionTableData>();

export const columns = [
  CommissionTableHelper.accessor("id", {
    header: () => <span className={"w-[100px] px-12 py-6 font-bold"}>ID</span>,
    cell: (info) => (
      <span className={"font-medium px-12 py-6"}>
        <div className={"font-bold"}>{info.getValue()}</div>
      </span>
    ),
  }),
  CommissionTableHelper.accessor("name", {
    header: () => (
      <span className={"w-[100px] px-6 py-6 font-bold block"}>Esquema</span>
    ),
    cell: (info) => (
      <span className={"font-medium py-3 block"}>
        <div className="font-normal">{info.getValue()}</div>
      </span>
    ),
  }),
  CommissionTableHelper.accessor("value", {
    header: "",
    cell: (info) => (
      <span className={"w-full text-center"}>{info.getValue()}%</span>
    ),
  }),
  CommissionTableHelper.display({
    id: "actions",
    header: () => (
      <span className="text-right px-12">
        <span className="font-bold"></span>
      </span>
    ),
    cell: () => (
      <CommissionEditButton />
    ),
    meta: {
      className: "px-8 w-20",
    },
  }),
];

export default columns;
