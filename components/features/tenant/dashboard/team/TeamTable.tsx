"use client";
import { Team } from "@/type/dashboard";
import { withPagination } from "../withPagination";
import { TableWrapped } from "../TableWrapped";
import { useAppSelector } from "@/lib/store/hooks";
import { columns } from "./ColumnDef";
import { VisibilityState } from "@tanstack/react-table";

export const TeamTable = () => {
  const teamList = useAppSelector((state) => state.dashboard.teamList);
  const Table = withPagination<Team>({
    Table: TableWrapped,
  });
  return (
    <Table
      data={teamList}
      columns={columns}
      columnVisibility={
        {
          id: false,
          name: true,
          photo: true,
          role: true,
        } as VisibilityState
      }
    />
  );
};
