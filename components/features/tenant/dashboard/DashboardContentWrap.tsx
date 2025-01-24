"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect } from "react";
import { fetchCommissions } from "./commission/actions";
import { setCommissionsArray, setPartnersList } from "@/lib/store/features/dashboard/dashboardSlice";
import { CommissionData, PartnerData } from "@/type/dashboard";
import { fetchPartners } from "./partner/actions";

export const DashboardContentWrap = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tenantId = useAppSelector((state) => state.tenant.details?.id);
  const commissionsArray = useAppSelector(
    (state) => state.dashboard.commissionsArray
  );
  const partnersList = useAppSelector(
    (state) => state.dashboard.partnersList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchComissionData = async () => {
      if (!tenantId || commissionsArray.length > 0) return;
      const data = (await fetchCommissions(tenantId)) as CommissionData;
      dispatch(setCommissionsArray(data));
    };

    const fetchPartnerData = async () => {
      if (!tenantId || partnersList.length > 0) return;
      const data = (await fetchPartners(tenantId)) as PartnerData;
      dispatch(setPartnersList(data));
    };

    Promise.all([fetchComissionData(), fetchPartnerData()]);
  }, [tenantId, commissionsArray.length, partnersList.length, dispatch]);

  return (
    <main
      className={
        "bg-white flex-grow shadow-xl my-4 w-9/12 mr-4 rounded-lg border border-[#26293133] p-4 flex flex-col"
      }
    >
      {children}
    </main>
  );
};
