"use client";
import {
  ColumnFiltersState,
  OnChangeFn,
  VisibilityState,
} from "@tanstack/table-core";
import { useEffect, useState } from "react";
import {
  CommunityFetchResponse,
  CommunityTableData,
} from "@/components/features/tenant/dashboard/community/types";
import columns from "@/components/features/tenant/dashboard/community/ColumnDef";
import { withPagination } from "@/components/features/tenant/dashboard/withPagination";
import { TableWrapped } from "@/components/features/tenant/dashboard/TableWrapped";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setCommunityFilters } from "@/lib/store/features/dashboard/dashboardSlice";

export const CommunityTable = () => {
  const { communityFilters } = useAppSelector((state) => state.dashboard);
  const Table = withPagination<CommunityTableData>({
    Table: TableWrapped,
  });
  const entity = useAppSelector((state) => state.tenant.details);
  const dispatch = useAppDispatch();
  const handleChangeColumnsFilters: OnChangeFn<ColumnFiltersState> = (
    updaterOrValue,
  ) => {
    const newFilters =
      typeof updaterOrValue === "function"
        ? updaterOrValue(communityFilters)
        : updaterOrValue;
    dispatch(setCommunityFilters(newFilters));
  };
  const [data, setData] = useState<CommunityTableData[]>([]);

  useEffect(() => {
    const fecthCommunityData = async () => {
      const res = await fetch(
        `https://api.propity.mx/qa/entities/${entity?.id}/community`,
      );
      const { active, pending, not } =
        (await res.json()) as CommunityFetchResponse;
      const formatedActiveCommunity: CommunityTableData[] = active.map(
        (community) => ({
          id: community.id,
          name: community.name,
          subdomain: community.subdomain,
          slogan: community.theme.slogan,
          logo: community.theme.logo,
          isActive: true,
          needsApproval: false,
        }),
      );
      const formatedPendingCommunity: CommunityTableData[] = pending.map(
        (community) => ({
          id: community.id,
          name: community.name,
          subdomain: community.subdomain,
          slogan: community.theme.slogan,
          logo: community.theme.logo,
          isActive: false,
          needsApproval: true,
        }),
      );
      const formatedNotCommunity: CommunityTableData[] = not.map(
        (community) => ({
          id: community.id,
          name: community.name,
          subdomain: community.subdomain,
          slogan: community.theme.slogan,
          logo: community.theme.logo,
          isActive: false,
          needsApproval: false,
        }),
      );

      setData([
        ...formatedActiveCommunity,
        ...formatedPendingCommunity,
        ...formatedNotCommunity,
      ]);
    };
    fecthCommunityData();
  }, [entity]);

  return (
    <>
      <Table
        data={data}
        columns={columns}
        columnsFilters={communityFilters}
        onChangeColumnsFilters={handleChangeColumnsFilters}
        columnVisibility={
          {
            entityInfo: true,
            isActive: false,
            needsApproval: false,
            slogan: false,
            subdomain: false,
          } as VisibilityState
        }
      />
    </>
  );
};
