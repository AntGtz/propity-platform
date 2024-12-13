"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/lib/store/store";
import {
  setCommunityDetails,
  setCommunityList,
  setTenant,
} from "@/lib/store/features/tenants/tenantSlice";
import { CommunityListData } from "@/type/tenantData";

export default function StoreProvider({
  tenantId,
  children,
}: {
  tenantId: string;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const fetchTenantDetails = async () => {
      if (!storeRef.current) return; // Ensure storeRef.current is defined
      const tenantData = await fetch(
        `https://api.propity.mx/qa/entities/${tenantId}`,
      );
      const tenantDetails = await tenantData.json();
      storeRef.current.dispatch(setTenant(tenantDetails));
    };
    const fetchCommunityDetails = async () => {
      if (!storeRef.current) return; // Ensure storeRef.current is defined
      const communityData = await fetch(
        `https://api.propity.mx/qa/entities/${tenantId}/community`,
      );
      const communityList = await communityData.json();
      storeRef.current.dispatch(setCommunityList(communityList.active));

      const getCommunityDetails = async (communityId: string) => {
        const communityData = await fetch(
          `https://api.propity.mx/qa/entities/${communityId}`,
        );
        return await communityData.json();
      };

      const communityDetails = await Promise.all(
        communityList.active.map((community: CommunityListData) =>
          getCommunityDetails(community.id),
        ),
      );
      storeRef.current.dispatch(setCommunityDetails(communityDetails));
    };
    Promise.all([fetchTenantDetails(), fetchCommunityDetails()]);
  }, [tenantId]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
