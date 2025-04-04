"use client";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { useEffect, useState } from "react";
import { useAgencysContext } from "@/components/features/tenant/agencys/AgencysContext";

interface LocationInputProps {
  locationSearch?: string | null;
}

export const LocationInput = ({ locationSearch }: LocationInputProps) => {
  const [location, setLocation] = useState<string>("");
  const { setFilters } = useAgencysContext();

  useEffect(() => {
    if (locationSearch && locationSearch !== "" && locationSearch !== null) {
      setLocation(locationSearch);
      setFilters({
        location: locationSearch,
      });
    }
  }, [locationSearch]);

  const applyFilter = () => {
    setFilters({
      location,
    });
  };

  return (
    <>
      <Input
        placeholder={"Ubicacion"}
        value={location}
        className={
          "w-full rounded border-[#131E29] [&]:px-3 [&]:py-2.5 h-full md:w-80 text-xs md:text-sm"
        }
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button
        onClick={applyFilter}
        className={"px-4 h-full py-3 rounded text-xs bg-primary"}
      >
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_489_5953"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="14"
            height="14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.333008 0.833374H13.3175V13.818H0.333008V0.833374Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_489_5953)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.82567 1.83337C3.79701 1.83337 1.33301 4.29671 1.33301 7.32537C1.33301 10.354 3.79701 12.818 6.82567 12.818C9.85367 12.818 12.3177 10.354 12.3177 7.32537C12.3177 4.29671 9.85367 1.83337 6.82567 1.83337ZM6.82567 13.818C3.24567 13.818 0.333008 10.9054 0.333008 7.32537C0.333008 3.74537 3.24567 0.833374 6.82567 0.833374C10.4057 0.833374 13.3177 3.74537 13.3177 7.32537C13.3177 10.9054 10.4057 13.818 6.82567 13.818Z"
              fill="white"
            />
          </g>
          <mask
            id="mask1_489_5953"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="10"
            y="11"
            width="4"
            height="4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4932 11.3047H13.8425V14.6479H10.4932V11.3047Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_489_5953)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3427 14.6479C13.2153 14.6479 13.0873 14.5992 12.9893 14.5019L10.64 12.1592C10.4447 11.9639 10.444 11.6472 10.6393 11.4519C10.834 11.2552 11.1507 11.2565 11.3467 11.4505L13.696 13.7939C13.8913 13.9892 13.892 14.3052 13.6967 14.5005C13.5993 14.5992 13.4707 14.6479 13.3427 14.6479Z"
              fill="white"
            />
          </g>
        </svg>
      </Button>
    </>
  );
};
