import { CommunityListData } from "@/type/tenantData";

export type CommunityTableData = {
  logo: string;
  name: string;
  subdomain: string;
  slogan: string;
  isActive: boolean;
  needsApproval: boolean;
};

export type TabsValue = "myCommunity" | "needsApproval" | "discover";

export type CommunityTab = {
  display: string;
  value: TabsValue;
};

export type CommunityFetchResponse = {
  active: CommunityListData[];
  pending: CommunityListData[];
  not: CommunityListData[];
};
