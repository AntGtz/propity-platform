"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/common/table";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect, useMemo } from "react";
import { setCommissionTabSelected } from "@/lib/store/features/dashboard/dashboardSlice";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import columns from "./ColumnDef";

export const CommissionTable = () => {
  const commissionTabSelected = useAppSelector(
    (state) => state.dashboard.commissionTabSelected
  );
  const commissionsArray = useAppSelector(
    (state) => state.dashboard.commissionsArray
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (commissionsArray.length > 0)
      dispatch(setCommissionTabSelected(commissionsArray[0].id.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commissionsArray.length, dispatch]);

  const selectedCommission = commissionsArray.find(
    (commission) => commission.id === commissionTabSelected
  );

  const percentsArray = useMemo(() => {
    return selectedCommission?.percents
      ? Object.entries(selectedCommission.percents).map(([key, value]) => ({
          id: key,
          name: key,
          value,
        }))
      : [];
  }, [selectedCommission]);

  const _table = useReactTable({
    data: percentsArray,
    columns: columns,
    state: {
      columnVisibility: {
        id: false,
      },
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className={"px-5"}>
      <TableHeader>
        {_table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <TableHead
                className={`${(index === 0 || headerGroup.headers.length === index - 1) && "px-6"}`}
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {_table.getRowModel().rows?.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell, index) => (
              <TableCell
                className={`${cell.column.columnDef.meta ? cell.column.columnDef.meta.className : ""} ${(index === 0 || index === row.getVisibleCells().length - 1) && "px-12"}`}
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow>
          <TableCell className="px-12 py-4 font-bold bg-gray-200">
            Total
          </TableCell>
          <TableCell className="font-bold bg-gray-200">
            {percentsArray.reduce(
              (total, item) => total + Number(item.value),
              0
            ).toFixed(2)}
            %
          </TableCell>
          <TableCell className="px-6 bg-gray-200"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-12 py-4 font-bold bg-gray-200">
            Margen
          </TableCell>
          <TableCell className="font-bold bg-gray-200">
            {percentsArray.reduce(
              (total, item) => total - Number(item.value),
              100
            ).toFixed(2)}
            %
          </TableCell>
          <TableCell className="px-6 bg-gray-200"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
