"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect } from "react";
import { fetchCommissions } from "./commission/actions";
import { setCommissionsArray, setGuidesList, setPartnersList, setTeamList } from "@/lib/store/features/dashboard/dashboardSlice";
import { CommissionData, Guide, PartnerData, TeamData, UsersResponse } from "@/type/dashboard";
import { fetchPartners } from "./partner/actions";
import { fetchTeams } from "./team/actions";
import { useSession } from "next-auth/react";

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
  const teamList = useAppSelector(
    (state) => state.dashboard.teamList
  );
  const { data: session } = useSession();

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

    const fetchTeamData = async () => {
      if (!tenantId || teamList.length > 0) return;
      const data = (await fetchTeams(tenantId)) as TeamData;
      dispatch(setTeamList(data));
    };

    const fetchUsersData = async () => {
        if (!tenantId || !session?.user.accessToken) return;
        try {
            const response = await fetch(
                `https://api.propity.mx/qa/entities/${tenantId}/users`,
                {
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${session.user.accessToken}`
                    }
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: UsersResponse[] = await response.json();
            const formattedGuides: Guide[] = data
                .filter(guide => guide.role.jom.name === "guide")
                .map(guide => ({
                    id: guide.id,
                    photo: guide.photo ? {
                        original: guide.photo.original,
                        thumbnail: guide.photo.thumbnail
                    } : null,
                    name: `${guide.firstName} ${guide.lastName}`,
                    email: guide.email,
                    registerDate: guide.register,
                    upline: guide.parent ? {
                        id: guide.parent.id,
                        name: guide.parent.name
                    } : null,
                    adviser: guide.agent ? {
                        id: guide.agent.id,
                        name: guide.agent.name
                    } : null
                }));
            dispatch(setGuidesList(formattedGuides));
        } catch (error) {
            console.error("Failed to fetch users data:", error);
        }
    };

    Promise.all([fetchComissionData(), fetchPartnerData(), fetchTeamData(), fetchUsersData()]);
  }, [tenantId, commissionsArray.length, partnersList.length, teamList.length, dispatch]);

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
