import { TableProps } from "@/components/features/tenant/dashboard/TableWrapped";
import { useState } from "react";

export const withPagination = <T,>({
  Table,
}: {
  Table: React.FC<TableProps<T>>;
}) => {
  return function WrappedWithPagination({
    data,
    columns,
    onChangeColumnsFilters,
    columnsFilters,
    columnVisibility,
  }: TableProps<T>) {
    const [pagination, setPagination] = useState({
      pageIndex: 0,
      pageSize: 8,
    });
    const [filteredRowCount, setFilteredRowCount] = useState(data.length);

    const totalPages = Math.ceil(filteredRowCount / pagination.pageSize);

    const getPaginationPages = () => {
      const range = 8;
      const halfRange = Math.floor(range / 2);

      let start = Math.max(0, pagination.pageIndex - halfRange);
      const end = Math.min(totalPages, start + range);

      if (end - start < range) {
        start = Math.max(0, end - range);
      }

      return Array.from({ length: end - start }, (_, i) => start + i);
    };

    return (
      <div className={"flex flex-col gap-2"}>
        <Table
          data={data}
          columns={columns}
          onChangeColumnsFilters={onChangeColumnsFilters}
          columnsFilters={columnsFilters}
          pagination={pagination}
          onPaginationChange={setPagination}
          onFilteredRowCountChange={setFilteredRowCount}
          columnVisibility={columnVisibility}
        />
        <div className={"flex justify-center w-full"}>
          <div
            className={
              "flex flex-row justify-center gap-4 items-center font-galano"
            }
          >
            <span
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: Math.max(0, prev.pageIndex - 1),
                }))
              }
              className={`flex items-center text-xs md:text-sm cursor-pointer ${
                pagination.pageIndex === 0 ? "opacity-50" : ""
              }`}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13" fill="white" />
                <path
                  d="M17.6368 13.5396H10.5459"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9087 10.5L9.36328 13.5394L12.9087 16.5787"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={"md:block hidden"}>Anterior</span>
            </span>

            <div className={"flex items-center gap-2"}>
              {getPaginationPages().map((pg) => (
                <span
                  key={pg}
                  onClick={() =>
                    setPagination({
                      ...pagination,
                      pageIndex: pg,
                    })
                  }
                  className={`border rounded-lg py-1.5 px-2 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer ${
                    pg === pagination.pageIndex
                      ? "bg-green-400 text-white border-transparent"
                      : "border-gray-400"
                  }`}
                >
                  {pg + 1}
                </span>
              ))}
              {data.length / pagination.pageSize > 5 &&
                getPaginationPages().slice(-1)[0] <
                  data.length / pagination.pageSize - 1 && (
                  <span
                    className={
                      "rounded-lg md:px-4 md:py-2 text-sm font-bold cursor-pointer md:scale-100 scale-50 w-fit"
                    }
                  >
                    <svg
                      width="23"
                      height="7"
                      viewBox="0 0 23 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="3.5" cy="3.5" r="3" fill="#262931" />
                      <circle cx="11.5" cy="3.5" r="3" fill="#262931" />
                      <circle cx="19.5" cy="3.5" r="3" fill="#262931" />
                    </svg>
                  </span>
                )}
              {getPaginationPages().slice(-1)[0] < totalPages - 1 && (
                <span
                  onClick={() =>
                    setPagination({
                      ...pagination,
                      pageIndex: totalPages - 1,
                    })
                  }
                  className={`border rounded-lg py-1.5 px-2 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer ${
                    pagination.pageIndex === totalPages
                      ? "bg-green-400 text-white"
                      : "border-gray-400"
                  }`}
                >
                  {totalPages}
                </span>
              )}
            </div>

            <span
              onClick={() => {
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: Math.min(totalPages - 1, prev.pageIndex + 1),
                }));
              }}
              className={`flex items-center text-sm cursor-pointer ${
                pagination.pageIndex >= totalPages - 1 ? "opacity-50" : ""
              }`}
            >
              <span className={"md:block hidden"}>Siguiente</span>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="13"
                  transform="matrix(-1 0 0 1 26.5 0.5)"
                  fill="white"
                />
                <path
                  d="M9.36319 13.5396H16.4541"
                  stroke="#262931"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.0913 10.5L17.6367 13.5394L14.0913 16.5787"
                  stroke="#262931"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  };
};
