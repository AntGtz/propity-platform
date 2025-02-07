interface InventoryPaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export const InventoryPagination = ({
  page,
  setPage,
  totalPages,
}: InventoryPaginationProps) => {
  const handleNextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const getPaginationPages = () => {
    const range = 5;
    const pages = [];
    const halfRange = Math.floor(range / 2);

    let start = Math.max(1, page - halfRange);
    let end = Math.min(totalPages, page + halfRange);

    if (page <= halfRange) {
      end = Math.min(totalPages, range);
    } else if (page + halfRange > totalPages) {
      start = Math.max(1, totalPages - range + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <>
      <div
        className={
          "flex flex-row justify-center mt-8 gap-4 items-center font-galano"
        }
      >
        <span
          onClick={handlePreviousPage}
          className={`flex items-center text-xs md:text-sm cursor-pointer ${
            page === 1 ? "opacity-50" : ""
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
              onClick={() => setPage(pg)}
              className={`border rounded-lg py-1.5 px-2 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer min-w-8 text-center ${
                pg === page
                  ? "bg-green-400 text-white border-transparent"
                  : "border-gray-400"
              }`}
            >
              {pg}
            </span>
          ))}
          {totalPages > 5 &&
            getPaginationPages().slice(-1)[0] < totalPages - 1 && (
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
          {getPaginationPages().slice(-1)[0] < totalPages && (
            <span
              onClick={() => setPage(totalPages)}
              className={`border rounded-lg py-1.5 px-2 md:px-4 md:py-2 text-xs md:text-sm font-bold cursor-pointer ${
                page === totalPages
                  ? "bg-green-400 text-white"
                  : "border-gray-400"
              }`}
            >
              {totalPages}
            </span>
          )}
        </div>

        <span
          onClick={handleNextPage}
          className={`flex items-center text-sm cursor-pointer ${
            page === totalPages ? "opacity-50" : ""
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
    </>
  );
};
