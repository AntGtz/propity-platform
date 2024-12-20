"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/common/collapsible";
import { ReactNode, useState } from "react";

interface CollapsibleWrapProps {
  title: string | ReactNode;
  defaultOpen?: boolean;
  openFixed?: boolean;
  children: ReactNode;
}

export const CollapsibleWrap = ({
  title,
  defaultOpen,
  openFixed,
  children,
}: CollapsibleWrapProps) => {
  const [open, setOpen] = useState(openFixed ?? defaultOpen ?? false);

  return (
    <>
      <Collapsible open={openFixed ?? open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className={`w-full ${!open && !openFixed && "border-b border-gray-500"} transition  py-4 text-sm cursor-pointer flex justify-between items-center`}
        >
          <span className={"font-bold text-2xl"}>{title}</span>
          {!openFixed && (
            <svg
              className={`${open && "rotate-180"} transition`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.0599 9.05989C8.77865 9.34079 8.3974 9.49857 7.9999 9.49857C7.6024 9.49857 7.22115 9.34079 6.9399 9.05989L1.2819 3.40389C1.00064 3.12249 0.84268 2.74089 0.842773 2.34304C0.842867 1.94518 1.00101 1.56365 1.2824 1.28239C1.56379 1.00113 1.9454 0.843168 2.34325 0.843262C2.74111 0.843356 3.12264 1.00149 3.4039 1.28289L7.9999 5.87889L12.5959 1.28289C12.8787 1.00952 13.2575 0.858143 13.6508 0.861374C14.0441 0.864605 14.4204 1.02218 14.6986 1.30016C14.9769 1.57815 15.1348 1.95429 15.1384 2.34759C15.142 2.74088 14.991 3.11986 14.7179 3.40289L9.0609 9.06089L9.0599 9.05989Z"
                fill="black"
              />
            </svg>
          )}
        </CollapsibleTrigger>
        <CollapsibleContent
          className={`${(open || openFixed) && "border-b border-gray-500 pb-8"} transition`}
        >
          {children}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};
