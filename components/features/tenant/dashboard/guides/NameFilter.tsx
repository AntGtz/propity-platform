"use client";
import { Input } from "@/components/common/input";
import { useAppDispatch } from "@/lib/store/hooks";
import { setGuidesFilters } from "@/lib/store/features/dashboard/dashboardSlice";

export const NameFilter = () => {
    const dispatch = useAppDispatch();

  return (
    <>
      <span className={"relative"}>
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          className={"absolute top-1/2 -translate-y-1/2 left-3"}
        >
          <mask
            id="mask0_858_13003"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="14"
            height="14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.333008 0.332031H13.3175V13.3167H0.333008V0.332031Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_858_13003)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.82567 1.33203C3.79701 1.33203 1.33301 3.79536 1.33301 6.82403C1.33301 9.8527 3.79701 12.3167 6.82567 12.3167C9.85367 12.3167 12.3177 9.8527 12.3177 6.82403C12.3177 3.79536 9.85367 1.33203 6.82567 1.33203ZM6.82567 13.3167C3.24567 13.3167 0.333008 10.404 0.333008 6.82403C0.333008 3.24403 3.24567 0.332031 6.82567 0.332031C10.4057 0.332031 13.3177 3.24403 13.3177 6.82403C13.3177 10.404 10.4057 13.3167 6.82567 13.3167Z"
              fill="#666666"
            />
          </g>
          <mask
            id="mask1_858_13003"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x="10"
            y="10"
            width="4"
            height="5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4932 10.8047H13.8425V14.1479H10.4932V10.8047Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_858_13003)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3427 14.1479C13.2153 14.1479 13.0873 14.0992 12.9893 14.0019L10.64 11.6592C10.4447 11.4639 10.444 11.1472 10.6393 10.9519C10.834 10.7552 11.1507 10.7565 11.3467 10.9505L13.696 13.2939C13.8913 13.4892 13.892 13.8052 13.6967 14.0005C13.5993 14.0992 13.4707 14.1479 13.3427 14.1479Z"
              fill="#666666"
            />
          </g>
        </svg>
        <Input
          id={"search-input"}
          type={"text"}
          onChange={(e) => {
            dispatch(
              setGuidesFilters([{ id: "name", value: e.target.value }]),
            );
          }}
          placeholder={"Buscar"}
          className={`w-80 pl-8 pr-4 [&]:py-5 md:text-sm text-sm focus:outline-none focus-visible:ring-0 border-[#26293133]`}
        />
      </span>
    </>
  );
};
