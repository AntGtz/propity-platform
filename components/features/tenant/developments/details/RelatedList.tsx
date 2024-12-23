import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/common/collapsible";
import PropertyCard from "../../PropertyCard";

export default function RelatedList() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full py-4 text-sm mt-6">
        <div className="flex justify-between gap-2 font-galano font-bold text-2xl items-center">
          <span className="flex gap-2.5 items-center">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.45197V14.8C1 15.92 1 16.48 1.218 16.909C1.41 17.285 1.715 17.591 2.092 17.782C2.519 18 3.079 18 4.197 18H13.803C14.921 18 15.48 18 15.907 17.782C16.2835 17.5907 16.5898 17.2851 16.782 16.909C17 16.481 17 15.922 17 14.804V9.45197C17 8.91797 17 8.65097 16.935 8.40197C16.8774 8.18188 16.7827 7.97322 16.655 7.78497C16.51 7.57197 16.31 7.39497 15.907 7.04397L11.107 2.84397C10.361 2.19097 9.987 1.86397 9.567 1.73997C9.197 1.62997 8.803 1.62997 8.432 1.73997C8.012 1.86397 7.64 2.18997 6.894 2.84197L2.093 7.04397C1.691 7.39597 1.49 7.57197 1.346 7.78397C1.2178 7.97245 1.12276 8.18146 1.065 8.40197C1 8.64997 1 8.91797 1 9.45197Z"
                stroke="#262931"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Desarrollos similares
          </span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.0599 9.05989C8.77865 9.34079 8.3974 9.49857 7.9999 9.49857C7.6024 9.49857 7.22115 9.34079 6.9399 9.05989L1.2819 3.40389C1.00064 3.12249 0.84268 2.74089 0.842773 2.34304C0.842867 1.94518 1.00101 1.56365 1.2824 1.28239C1.56379 1.00113 1.9454 0.843168 2.34325 0.843262C2.74111 0.843356 3.12264 1.00149 3.4039 1.28289L7.9999 5.87889L12.5959 1.28289C12.8787 1.00952 13.2575 0.858143 13.6508 0.861374C14.0441 0.864605 14.4204 1.02218 14.6986 1.30016C14.9769 1.57815 15.1348 1.95429 15.1384 2.34759C15.142 2.74088 14.991 3.11986 14.7179 3.40289L9.0609 9.06089L9.0599 9.05989Z"
              fill="black"
            />
          </svg>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <section className="grid grid-cols-4 gap-4 mt-6">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </section>
      </CollapsibleContent>
    </Collapsible>
  );
}
