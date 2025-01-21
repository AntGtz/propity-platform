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

export type CommissionScheme = {
    id: string;
    name: string;
    percents: Record<string, number>;
};

export type CommissionData = Array<CommissionScheme>;

export type CommissionTableData = {
    id: string;
    name: string;
    value: string | number;
};