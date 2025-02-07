"use client";
import { withPagination } from "@/components/features/tenant/dashboard/withPagination";
import { TableWrapped } from "@/components/features/tenant/dashboard/TableWrapped";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { columns } from "./ColumnDef";
import { Guide } from "@/type/dashboard";
import { ColumnFiltersState, OnChangeFn } from "@tanstack/table-core";
import { setGuidesFilters } from "@/lib/store/features/dashboard/dashboardSlice";

export const GuidesTable = () => {
  const Table = withPagination<Guide>({
    Table: TableWrapped,
  });
  const guidesList = useAppSelector((state) => state.dashboard.guidesList);
  const guidesFilters = useAppSelector(
    (state) => state.dashboard.guidesFilters
  );
  const dispatch = useAppDispatch();
  const handleChangeColumnsFilters: OnChangeFn<ColumnFiltersState> = (
    updaterOrValue
  ) => {
    const newFilters =
      typeof updaterOrValue === "function"
        ? updaterOrValue(guidesFilters)
        : updaterOrValue;
    dispatch(setGuidesFilters(newFilters));
  };

  return (
    <Table
      columnsFilters={guidesFilters}
      onChangeColumnsFilters={handleChangeColumnsFilters}
      data={guidesList}
      columns={columns}
      columnVisibility={{
        id: false,
      }}
    />
  );
};
