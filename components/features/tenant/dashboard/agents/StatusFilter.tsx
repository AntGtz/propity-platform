"use client";

import { setAgentsFilters } from "@/lib/store/features/dashboard/dashboardSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useState } from "react";

export const StatusFilter = () => {
  const [tab, setTab] = useState(2);
  const dispatch = useAppDispatch();

  return (
    <span
      className={`bg-[#E9EBEE] p-0.5 rounded-md flex items-center w-fit font-galano`}
    >
      <span
        onClick={() => {
          dispatch(setAgentsFilters([{ id: "status", value: "intern" }]));
          setTab(0);
        }}
        className={`text-sm ${tab === 0 ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
      >
        Internos
      </span>
      <span
        onClick={() => {
          dispatch(setAgentsFilters([{ id: "status", value: "extern" }]));
          setTab(1);
        }}
        className={`text-sm ${tab === 1 ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
      >
        Externos autorizados
      </span>
      <span
        onClick={() => {
          dispatch(setAgentsFilters([{ id: "status", value: "pending" }]));
          setTab(2);
        }}
        className={`text-sm ${tab === 2 ? "bg-white font-bold" : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
      >
        Externos pend. de autorización
      </span>
    </span>
  );
};
