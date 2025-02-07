"use client";
import { withPagination } from "@/components/features/tenant/dashboard/withPagination";
import { TableWrapped } from "@/components/features/tenant/dashboard/TableWrapped";
import { columns } from "./ColumnsDefs";
import { Agent } from "@/type/dashboard";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { ColumnFiltersState, OnChangeFn } from "@tanstack/table-core";
import { setAgentsFilters } from "@/lib/store/features/dashboard/dashboardSlice";

export const AgentsTable = () => {
  const Table = withPagination<Agent>({
    Table: TableWrapped,
  });
  const agentsList = useAppSelector((state) => state.dashboard.agentsList);
  const agentsFilters = useAppSelector(
    (state) => state.dashboard.agentsFilters
  );

  const dispatch = useAppDispatch();
  const handleChangeColumnsFilters: OnChangeFn<ColumnFiltersState> = (
    updaterOrValue
  ) => {
    const newFilters =
      typeof updaterOrValue === "function"
        ? updaterOrValue(agentsFilters)
        : updaterOrValue;
    dispatch(setAgentsFilters(newFilters));
  };

  return (
    <Table
      data={agentsList}
      columns={columns}
      columnsFilters={agentsFilters}
      onChangeColumnsFilters={handleChangeColumnsFilters}
      columnVisibility={{
        id: false,
        status: false,
      }}
    />
  );
};
