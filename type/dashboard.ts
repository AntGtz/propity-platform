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
  percents: Record<string, number | string>;
};

export type CommissionData = Array<CommissionScheme>;

export type CommissionTableData = {
  id: string;
  name: string;
  value: string | number;
};

export type Partner = {
  id: string;
  name: string;
  description: string;
};

export type PartnerData = Array<Partner>;

export type TeamResponse = {
  id: string,
  photo: {
    original: string,
    thumbnail: string
  } | null,
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  status: {
    name: string,
    display: string
  },
  role: {
    jom: {
      name: string,
      display: string
    },
    team: {
      name: string,
      display: string
    },
    trade: null
  }
};

export type Team = {
  id: string,
  name: string,
  role: string,
  photo: {
    original: string,
    thumbnail: string
  }
};

export type TeamData = Array<Team>;

export type UsersResponse = {
  id: string,
  photo: null | {
    original: string,
    thumbnail: string
  },
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  dream: null,
  aboutMe: null,
  register: string,
  parent: null | {
    id: string,
    phone: string,
    name: string,
    mail: string
  },
  agent: null | {
    id: string,
    phone: string,
    name: string,
    mail: string
  },
  lastEntry: null,
  lastUpdate: string,
  status: {
    name: string,
    display: string
  },
  role: {
    jom: {
      name: string,
      display: string
    },
    team: null | {
      name: string,
      display: string
    },
    trade: null | {
      name: string,
      display: string
    }
  }
}

export type Guide = {
  id: string,
  photo: {
    original: string
    thumbnail: string
  } | null,
  name: string,
  email: string,
  registerDate: string,
  upline: {
    id: string
    name: string
  } | null,
  adviser: {
    id: string
    name: string
  } | null,
}

export type GuideData = Array<Guide>;