"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CommunityDetailsData, PropertyData } from "@/type/tenantData";
import { useAppSelector } from "@/lib/store/hooks";

export type PropertyType = "apartment" | "house" | "land" | "all";

export interface Filters {
  location?: string;
  priceRange?: [number, number];
  propertyType?: PropertyType;
  minSurface?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export interface InventoryContextProps {
  propertiesList: PropertyData[];
  setPropertiesList: (propertiesList: PropertyData[]) => void;
  filters: Filters;
  setFilters: (newFilters: Partial<Filters>) => void;
  entity: CommunityDetailsData | undefined;
  originalPropertiesList: PropertyData[] | undefined;
}

export const InventoryContext = createContext<InventoryContextProps>({
  propertiesList: [],
  setPropertiesList: () => {},
  filters: {
    location: "",
    priceRange: [0, Infinity],
    propertyType: "all",
    minSurface: 0,
    bedrooms: 0,
    bathrooms: 0,
  },
  setFilters: () => {},
  entity: undefined,
  originalPropertiesList: undefined,
});

export function useInventoryContext() {
  return useContext(InventoryContext);
}

export function InventoryProvider({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const [propertiesList, setPropertiesList] = useState<PropertyData[]>([]);
  const [filters, setFiltersState] = useState<Filters>({
    location: "",
    priceRange: [0, Infinity],
    propertyType: "all",
    bedrooms: 0,
    bathrooms: 0,
  });

  const community = useAppSelector((state) => state.tenant.communityDetails);
  const entity = community?.find((community) => community.id === id);
  const originalPropertiesList = entity?.properties ?? [];

  useEffect(() => {
    setPropertiesList(originalPropertiesList);
  }, [entity]);

  const setFilters = (newFilters: Partial<Filters>) => {
    setFiltersState((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const filteredProperties = useMemo(() => {
    return propertiesList.filter((property) => {
      const matchesLocation =
        !filters.location ||
        (() => {
          const lowercasedSearchTerm = filters.location.toLowerCase();
          if (!property.location) return false;

          const { name, address, number, geo, division } = property.location;

          return (
            (name?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (address?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (number.ext?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (number.int?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (geo.lng?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (geo.lat?.toLowerCase().includes(lowercasedSearchTerm) ?? false) ||
            (division.name?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division.zipCode?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division.township?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division.state?.toLowerCase().includes(lowercasedSearchTerm) ??
              false) ||
            (division.country.shortName
              ?.toLowerCase()
              .includes(lowercasedSearchTerm) ??
              false) ||
            (division.country.name
              ?.toLowerCase()
              .includes(lowercasedSearchTerm) ??
              false)
          );
        })();

      const matchesPrice = property.operations.some(
        (operation) =>
          operation.name === "sale" &&
          operation.price >= (filters.priceRange?.[0] ?? 0) &&
          operation.price <= (filters.priceRange?.[1] ?? Infinity),
      );

      const matchesSurface =
        property.surface.built >= (filters.minSurface ?? 0);

      const matchesBedrooms =
        property.rooms !== null
          ? filters.bedrooms === 0
            ? true
            : property.rooms === filters.bedrooms
          : true;

      const matchesBathrooms =
        property.bathrooms !== null
          ? filters.bathrooms === 0
            ? true
            : property.bathrooms === filters.bathrooms
          : true;

      const matchesPropertyType =
        filters.propertyType === "all" ||
        property.type.name === filters.propertyType;

      return (
        matchesLocation &&
        matchesPrice &&
        matchesSurface &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesPropertyType
      );
    });
  }, [propertiesList, filters]);

  return (
    <InventoryContext.Provider
      value={{
        propertiesList: filteredProperties,
        setPropertiesList,
        filters,
        setFilters,
        entity,
        originalPropertiesList,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
