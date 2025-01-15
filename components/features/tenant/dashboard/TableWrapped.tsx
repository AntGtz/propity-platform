import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
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
import { useEffect } from "react";

export type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  columnsFilters?: ColumnFiltersState;
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
  onFilteredRowCountChange,
}) => {
  const _table = useReactTable({
    data,
    columns,
    state: {
      columnFilters: columnsFilters,
      pagination: pagination,
    },
    onColumnFiltersChange: onChangeColumnsFilters,
    onPaginationChange: onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    if (onFilteredRowCountChange) {
      onFilteredRowCountChange(_table.getFilteredRowModel().rows.length);
    }
  }, [_table.getFilteredRowModel().rows.length, onFilteredRowCountChange]);

  return (
    <div className={"my-4 border rounded-lg border-gray-200 border-collapse"}>
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
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {_table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  className={`${(index === 0 || index === row.getVisibleCells().length - 1) && "px-6"}`}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
