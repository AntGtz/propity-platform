import { CommissionTableData } from "@/type/dashboard";
import { createColumnHelper } from "@tanstack/table-core";
import React from "react";

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
      <>
        <div className="flex justify-end">
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
        </div>
      </>
    ),
    meta: {
      className: "px-8 w-20",
    },
  }),
];

export default columns;
