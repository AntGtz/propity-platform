import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Guide } from "@/type/dashboard";
import { createColumnHelper } from "@tanstack/table-core";
import Image from "next/image";
import { GuideDetail } from "./GuideDetail";

const columnHelper = createColumnHelper<Guide>();

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
  columnHelper.accessor("registerDate", {
    header: "Fec. Ingreso",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor("upline.name", {
    header: "Upline",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("adviser.name", {
    header: "Asesor",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <></>,
    cell: (info) => (
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-transparent text-[#262931] rounded-md px-2 py-1">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M8.5 3.89453C12.947 3.89453 15 7.99953 15 7.99953C15 7.99953 12.947 12.1045 8.5 12.1045C4.053 12.1045 2 7.99953 2 7.99953C2 7.99953 4.053 3.89453 8.5 3.89453Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4399 8C10.4459 8.26634 10.3986 8.53119 10.3008 8.77899C10.203 9.02679 10.0566 9.25256 9.87037 9.44303C9.68411 9.63351 9.46167 9.78485 9.21611 9.88817C8.97056 9.99149 8.70684 10.0447 8.44043 10.0447C8.17402 10.0447 7.9103 9.99149 7.66475 9.88817C7.41919 9.78485 7.19675 9.63351 7.01049 9.44303C6.82423 9.25256 6.6779 9.02679 6.5801 8.77899C6.48229 8.53119 6.43497 8.26634 6.44093 8C6.44093 7.46957 6.65164 6.96086 7.02672 6.58579C7.40179 6.21071 7.9105 6 8.44093 6C8.97136 6 9.48007 6.21071 9.85514 6.58579C10.2302 6.96086 10.4409 7.46957 10.4409 8H10.4399Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#131E29] rounded-xl text-white px-12">
            <DialogTitle></DialogTitle>
            <GuideDetail
              id={info.row.original.id}
              name={info.row.original.name}
              email={info.row.original.email}
              phone={info.row.original.phone}
              image={info.row.original?.photo?.original ?? "/uknProfile.png"}
              socials={"@kiwi"}
              since={new Date(info.row.original.registerDate).toLocaleDateString()}
            />
          </DialogContent>
        </Dialog>
      </div>
    ),
  }),
];
