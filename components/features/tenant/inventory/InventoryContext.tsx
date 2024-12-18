"use client";
import { createContext, useContext, useState } from "react";
import { CommunityDetailsData, PropertyData } from "@/type/tenantData";
import { useAppSelector } from "@/lib/store/hooks";

export interface InventoryContextProps {
  propertiesList: PropertyData[];
  setPropertiesList: (propertiesList: PropertyData[]) => void;
  locationSearch: string;
  setLocationSearch: (locationSearch: string) => void;
  entity: CommunityDetailsData | undefined;
  originalPropertiesList: PropertyData[] | undefined;
}

export const InventoryContext = createContext<InventoryContextProps>({
  propertiesList: [],
  setPropertiesList: () => {},
  locationSearch: "",
  setLocationSearch: () => {},
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
  const [locationSearch, setLocationSearch] = useState<string>("");

  const community = useAppSelector((state) => state.tenant.communityDetails);
  const entity = community?.filter((community) => community.id === id)[0];
  const originalPropertiesList = entity?.properties;

  return (
    <InventoryContext.Provider
      value={{
        propertiesList,
        setPropertiesList,
        locationSearch,
        setLocationSearch,
        entity,
        originalPropertiesList,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
