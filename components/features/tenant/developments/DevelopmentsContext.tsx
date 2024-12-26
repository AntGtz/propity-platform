"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CommunityDetailsData } from "@/type/tenantData";
import { useAppSelector } from "@/lib/store/hooks";

export interface Filters {
  location?: string;
  priceRange?: [number, number];
}

export interface DevelopmentContextProps {
  developmentsList: CommunityDetailsData[];
  setDevelopmentsList: (developmentsList: CommunityDetailsData[]) => void;
  originalDevelopmentsList: CommunityDetailsData[] | undefined;
  filters: Filters;
  setFilters: (newFilters: Partial<Filters>) => void;
}

export const defaultFilters: Filters = {
  location: "",
  priceRange: [0, Infinity],
};

export const DevelopmentContext = createContext<DevelopmentContextProps>({
  developmentsList: [],
  setDevelopmentsList: () => {},
  originalDevelopmentsList: undefined,
  filters: defaultFilters,
  setFilters: () => {},
});

export function useDevelopmentContext() {
  return useContext(DevelopmentContext);
}

export function DevelopmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [developmentsList, setDevelopmentsList] = useState<
    CommunityDetailsData[]
  >([]);

  const [filters, setFiltersState] = useState<Filters>(defaultFilters);

  const community = useAppSelector((state) => state.tenant.communityDetails);

  const originalDevelopmentsList = useMemo(() => {
    return community?.filter((community) => {
      return community.type.name === "development";
    });
  }, [community]);

  const setFilters = (newFilters: Partial<Filters>) => {
    setFiltersState((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  useEffect(() => {
    setDevelopmentsList(originalDevelopmentsList ?? []);
  }, [originalDevelopmentsList, community]);

  const filteredDevelopments = useMemo(() => {
    return developmentsList.filter((development) => {
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
  }, [developmentsList, filters]);

  return (
    <DevelopmentContext.Provider
      value={{
        developmentsList: filteredDevelopments,
        setDevelopmentsList,
        originalDevelopmentsList,
        filters,
        setFilters,
      }}
    >
      {children}
    </DevelopmentContext.Provider>
  );
}
