import { Guide, GuideData } from "@/type/dashboard";
import { createColumnHelper } from "@tanstack/table-core";
import Image from "next/image";

const columnHelper = createColumnHelper<Guide>();

export const columns = [
    columnHelper.accessor("id", {
        header: "ID",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("photo.original", {
        header: "Image",
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
        header: "Title",
        cell: (info) => info.getValue(),
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
        header: "Adviser",
        cell: (info) => info.getValue(),
    }),
    columnHelper.display({
        id: "actions",
        header: () => <></>,
        cell: (info) => (
            <div className="flex gap-2">
                <button className="bg-[#F2F4F7] text-[#262931] rounded-md px-2 py-1">
                    Editar
                </button>
                <button className="bg-[#F2F4F7] text-[#262931] rounded-md px-2 py-1">
                    Eliminar
                </button>
            </div>
        ),
    }),
];