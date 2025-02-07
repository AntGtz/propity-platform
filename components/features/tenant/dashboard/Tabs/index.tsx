"use client";
import { RootState } from "@/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  setCommunityFilters,
  setCommunityTabSelected,
} from "@/lib/store/features/dashboard/dashboardSlice";
import { useCallback, useEffect } from "react";
import { TabsValue } from "@/type/dashboard";

type TabsProps = {
  tabs: { display: string; value: TabsValue }[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  const { communityTabSelected } = useAppSelector(
    (state: RootState) => state.dashboard,
  );
  const dispatch = useAppDispatch();

  const handleFilterByTab = useCallback(
    (tab: TabsValue) => {
      switch (tab) {
        case "myCommunity":
          dispatch(
            setCommunityFilters([
              { id: "isActive", value: true },
              { id: "needsApproval", value: false },
            ]),
          );
          break;
        case "needsApproval":
          dispatch(setCommunityFilters([{ id: "needsApproval", value: true }]));
          break;
        case "discover":
          dispatch(
            setCommunityFilters([
              { id: "isActive", value: false },
              { id: "needsApproval", value: false },
            ]),
          );
          break;
      }
    },
    [dispatch],
  );

  useEffect(() => {
    handleFilterByTab(tabs[0].value);
  }, [handleFilterByTab, tabs]);

  return (
    <span
      className={`bg-[#E9EBEE] p-0.5 rounded-md flex items-center w-fit font-galano`}
    >
      {tabs.map((tab, index) => (
        <span
          key={index}
          onClick={() => {
            dispatch(setCommunityTabSelected(tab.value));
            handleFilterByTab(tab.value);
          }}
          className={`text-sm ${communityTabSelected === tab.value ? "bg-white font-bold " : ""} px-4 py-2 rounded-md cursor-pointer text-nowrap`}
        >
          {tab.display}
        </span>
      ))}
    </span>
  );
};
