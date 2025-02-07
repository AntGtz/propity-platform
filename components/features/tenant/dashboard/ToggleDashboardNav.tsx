"use client";
import { collapseMenu } from "@/lib/store/features/dashboard/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { AppDispatch, RootState } from "@/lib/store/store";

export const ToggleDashboardNav = () => {
  const Dispatch = useAppDispatch<AppDispatch>();
  const dashboardMenuCollapsed = useAppSelector(
    (state: RootState) => state.dashboard.dashboardMenuCollapsed,
  );

  return (
    <svg
      onClick={() => Dispatch(collapseMenu({ type: "dashboardMenu" }))}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`cursor-pointer ${dashboardMenuCollapsed && "rotate-180"} transition-transform duration-300`}
    >
      <path
        d="M3 3V21"
        stroke="#262931"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12H7.5"
        stroke="#262931"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19L7 12L14 5"
        stroke="#262931"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
