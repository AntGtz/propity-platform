import { Agent } from "@/type/dashboard";
import { createColumnHelper } from "@tanstack/table-core";
import Image from "next/image";

const columnHelper = createColumnHelper<Agent>();

export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("photo.original", {
    header: "",
    cell: (info) => (
      <Image
        height={50}
        width={50}
        className={"h-[50px] w-[50px] object-cover rounded-full"}
        src={info.getValue() ?? "/uknProfile.png"}
        alt="Entity logo"
      />
    ),
  }),
  columnHelper.accessor("name", {
    header: "Nombre",
    cell: (info) => info.getValue(),
    meta: {
      header: {
        className: "py-6",
      },
    },
  }),
  columnHelper.accessor("appointments", {
    header: "Citas",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("leads", {
    header: "Leads",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Ventas",
    cell: () => "39",
  }),
  columnHelper.accessor("status", {
    header: "Estado",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <></>,
    cell: (info) => (
      <div className="flex gap-2">
        <button className="bg-transparent text-[#262931] rounded-md px-2 py-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M15.9998 8.49859C15.9998 8.6312 15.9472 8.75838 15.8534 8.85215C15.7596 8.94592 15.6324 8.99859 15.4998 8.99859H14.4998V9.99859C14.4998 10.1312 14.4472 10.2584 14.3534 10.3521C14.2596 10.4459 14.1324 10.4986 13.9998 10.4986C13.8672 10.4986 13.7401 10.4459 13.6463 10.3521C13.5525 10.2584 13.4998 10.1312 13.4998 9.99859V8.99859H12.4998C12.3672 8.99859 12.2401 8.94592 12.1463 8.85215C12.0525 8.75838 11.9998 8.6312 11.9998 8.49859C11.9998 8.36598 12.0525 8.23881 12.1463 8.14504C12.2401 8.05127 12.3672 7.99859 12.4998 7.99859H13.4998V6.99859C13.4998 6.86598 13.5525 6.73881 13.6463 6.64504C13.7401 6.55127 13.8672 6.49859 13.9998 6.49859C14.1324 6.49859 14.2596 6.55127 14.3534 6.64504C14.4472 6.73881 14.4998 6.86598 14.4998 6.99859V7.99859H15.4998C15.6324 7.99859 15.7596 8.05127 15.8534 8.14504C15.9472 8.23881 15.9998 8.36598 15.9998 8.49859ZM12.383 12.1767C12.4683 12.2783 12.5098 12.4097 12.4983 12.5419C12.4869 12.6741 12.4233 12.7964 12.3217 12.8817C12.2201 12.9671 12.0887 13.0086 11.9565 12.9971C11.8243 12.9856 11.7021 12.9221 11.6167 12.8205C10.3592 11.323 8.63046 10.4986 6.74984 10.4986C4.86921 10.4986 3.14046 11.323 1.88296 12.8205C1.7976 12.922 1.67539 12.9855 1.54324 12.9969C1.41108 13.0083 1.2798 12.9668 1.17828 12.8814C1.07675 12.796 1.01329 12.6738 1.00186 12.5417C0.990433 12.4095 1.03197 12.2782 1.11734 12.1767C2.05109 11.0655 3.21234 10.2761 4.50296 9.85359C3.71915 9.36541 3.11566 8.63523 2.7838 7.77352C2.45193 6.9118 2.40974 5.96545 2.66362 5.07763C2.91749 4.18981 3.45362 3.40882 4.19088 2.85283C4.92814 2.29684 5.82643 1.99609 6.74984 1.99609C7.67325 1.99609 8.57153 2.29684 9.30879 2.85283C10.0461 3.40882 10.5822 4.18981 10.8361 5.07763C11.0899 5.96545 11.0477 6.9118 10.7159 7.77352C10.384 8.63523 9.78052 9.36541 8.99671 9.85359C10.2873 10.2761 11.4486 11.0655 12.383 12.1767ZM6.74984 9.49859C7.39263 9.49859 8.02098 9.30798 8.55544 8.95087C9.0899 8.59375 9.50646 8.08617 9.75245 7.49231C9.99843 6.89845 10.0628 6.24499 9.93739 5.61455C9.81199 4.98411 9.50245 4.40502 9.04793 3.9505C8.59341 3.49598 8.01432 3.18644 7.38388 3.06104C6.75344 2.93564 6.09998 3 5.50612 3.24598C4.91226 3.49197 4.40468 3.90853 4.04756 4.44299C3.69045 4.97745 3.49984 5.6058 3.49984 6.24859C3.50083 7.11024 3.84356 7.93632 4.45284 8.54559C5.06211 9.15487 5.88819 9.4976 6.74984 9.49859Z"
              fill={`${info.row.original.trade === "commercial leader" ? "#00B140" : "black"}`}
            />
          </svg>
        </button>
      </div>
    ),
  }),
];
