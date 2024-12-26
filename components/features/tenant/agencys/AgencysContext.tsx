"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CommunityDetailsData } from "@/type/tenantData";
import { useAppSelector } from "@/lib/store/hooks";

export interface Filters {
  location?: string;
  priceRange?: [number, number];
}

export interface AgencysContextProps {
  agencysList: CommunityDetailsData[];
  setAgencysList: (developmentsList: CommunityDetailsData[]) => void;
  originalAgencysList: CommunityDetailsData[] | undefined;
  filters: Filters;
  setFilters: (newFilters: Partial<Filters>) => void;
}

export const defaultFilters: Filters = {
  location: "",
  priceRange: [0, Infinity],
};

export const AgencysContext = createContext<AgencysContextProps>({
  agencysList: [],
  setAgencysList: () => {},
  originalAgencysList: undefined,
  filters: defaultFilters,
  setFilters: () => {},
});

export function useAgencysContext() {
  return useContext(AgencysContext);
}

export function AgencysProvider({ children }: { children: React.ReactNode }) {
  const [agencysList, setAgencysList] = useState<CommunityDetailsData[]>([]);

  const [filters, setFiltersState] = useState<Filters>(defaultFilters);

  const community = useAppSelector((state) => state.tenant.communityDetails);

  const originalAgencysList = useMemo(() => {
    return community?.filter((community) => {
      return community.type.name === "agency";
    });
  }, [community]);

  const setFilters = (newFilters: Partial<Filters>) => {
    setFiltersState((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  useEffect(() => {
    setAgencysList(originalAgencysList ?? []);
  }, [originalAgencysList, community]);

  const filteredAgencys = useMemo(() => {
    return agencysList.filter((development) => {
      const matchesLocation =
        !filters.location ||
        (() => {
          const lowercasedSearchTerm = filters.location.toLowerCase();
          if (!development.location) return false;

          const { name, address, geo, division } = development.location;

          return (
            (name?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (address?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (geo.lng?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (geo.lat?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (division?.name?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division?.zipCode?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division?.township?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division?.state?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division?.country.shortName
              ?.toLowerCase()
              .includes(lowercasedSearchTerm) ??
              false) ||
            (division?.country.longName
              ?.toLowerCase()
              .includes(lowercasedSearchTerm) ??
              false)
          );
        })();

      const lowestPrice = development.properties?.reduce((acc, property) => {
        if (acc === 0) return property.operations[0].price;
        return acc > property.operations[0].price
          ? property.operations[0].price
          : acc;
      }, 0);

      const matchesPrice =
        lowestPrice &&
        lowestPrice >= (filters.priceRange?.[0] ?? 0) &&
        lowestPrice <= (filters.priceRange?.[1] ?? Infinity);

      return matchesLocation && matchesPrice;
    });
  }, [agencysList, filters]);

  return (
    <AgencysContext.Provider
      value={{
        agencysList: filteredAgencys,
        setAgencysList,
        originalAgencysList,
        filters,
        setFilters,
      }}
    >
      {children}
    </AgencysContext.Provider>
  );
}
