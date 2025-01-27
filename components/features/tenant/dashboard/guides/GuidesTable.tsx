"use client";
import { withPagination } from "@/components/features/tenant/dashboard/withPagination";
import { TableWrapped } from "@/components/features/tenant/dashboard/TableWrapped";
import { useAppSelector } from "@/lib/store/hooks";
import { columns } from "./ColumnDef";
import {Guide } from "@/type/dashboard";

export const GuidesTable = () => {
  const Table = withPagination<Guide>({
    Table: TableWrapped,
  });
  const guidesList = useAppSelector((state) => state.dashboard.guidesList);

  return <Table data={guidesList} columns={columns} columnVisibility={
    {
        id: false
    }
  } />;
};
