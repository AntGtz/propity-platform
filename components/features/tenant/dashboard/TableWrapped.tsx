import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  VisibilityState,
} from "@tanstack/table-core";
import { flexRender, useReactTable } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/table";
import { useEffect, useMemo } from "react";

export type TableProps<T> = {
  data: T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  columnsFilters?: ColumnFiltersState;
  columnVisibility?: VisibilityState;
  onChangeColumnsFilters?: OnChangeFn<ColumnFiltersState>;
  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;
  onFilteredRowCountChange?: (count: number) => void;
};

type TableWrappedComponent = <T>(props: TableProps<T>) => JSX.Element;

export const TableWrapped: TableWrappedComponent = ({
  data,
  columns,
  pagination,
  onPaginationChange,
  onChangeColumnsFilters,
  columnsFilters,
  columnVisibility,
  onFilteredRowCountChange,
}) => {
  const _table = useReactTable({
    data,
    columns,
    state: {
      columnFilters: columnsFilters,
      pagination: pagination,
      columnVisibility: columnVisibility,
    },
    onColumnFiltersChange: onChangeColumnsFilters,
    onPaginationChange: onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const tableRows = useMemo(() => _table.getRowModel().rows, [_table]);

  useEffect(() => {
    if (onFilteredRowCountChange) {
      onFilteredRowCountChange(_table.getFilteredRowModel().rows.length);
    }
  }, [_table, tableRows, onFilteredRowCountChange]);

  return (
    <div className={"my-4 border rounded-lg border-gray-200 border-collapse"}>
      <Table className={"px-5"}>
        <TableHeader>
          {_table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <TableHead
                  className={`${(index === 0 || headerGroup.headers.length === index - 1) && "px-6"} ${header.column.columnDef.meta?.header.className}`}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {_table.getRowModel().rows.length > 0
            ? _table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      className={`${cell.column.columnDef.meta ? cell.column.columnDef.meta.className : ""} ${(index === 0 || index === row.getVisibleCells().length - 1) && "px-6"}`}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : _table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <TableCell
                      className={`${header.column.columnDef.meta ? header.column.columnDef.meta.className : ""} ${(index === 0 || headerGroup.headers.length === index - 1) && "px-6"}`}
                      key={header.id}
                    >
                      {header.column.columnDef.meta
                        ? header.column.columnDef.meta.empty
                        : ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
};
