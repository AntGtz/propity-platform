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
        `https://api.propity.mx/qa/entities/${tenantId}`
      );
      const tenantDetails = await tenantData.json();
      storeRef.current.dispatch(setTenant(tenantDetails));
    };
    const fetchCommunityDetails = async () => {
      if (!storeRef.current) return; // Ensure storeRef.current is defined
      const communityData = await fetch(
        `https://api.propity.mx/qa/entities/${tenantId}/community`
      );
      const communityList = await communityData.json();
      storeRef.current.dispatch(setCommunityList(communityList.active));

      const getCommunityDetails = async (communityId: string) => {
        const communityData = await fetch(
          `https://api.propity.mx/qa/entities/${communityId}`
        );
        return await communityData.json();
      };

      const getCommunityProperties = async (communityId: string) => {
        const communityData = await fetch(
          `https://api.propity.mx/qa/entities/${communityId}/properties`
        );
        return await communityData.json();
      };

      const fetchCommunityData = async (community: CommunityListData) => {
        try {
          const [details, properties] = await Promise.all([
            getCommunityDetails(community.id),
            getCommunityProperties(community.id),
          ]);

          const communityData = {
            ...details,
            properties,
          };

          if (storeRef.current) {
            storeRef.current.dispatch(setCommunityDetails(communityData));
          }
        } catch (error) {
          console.error(
            `Failed to fetch details for community ${community.id}`,
            error
          );
        }
      };

      const fetchAllCommunityDetails = async () => {
        for (const community of communityList.active) {
          fetchCommunityData(community);
        }
      };

      fetchAllCommunityDetails();
    };

    Promise.all([
      fetchTenantDetails(),
      fetchCommunityDetails(),
    ]);
  }, [tenantId]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
