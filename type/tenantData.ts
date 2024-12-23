export type TenantData = {
  id: string;
  subdomain: string;
  theme: {
    color: ColorScheme;
    logotype: {
      main: string;
      dark: string;
      light: string;
    };
  };
};

export interface ColorScheme {
  primary: { text: string; background: string };
  secondary: { text: string; background: string };
  tertiary: { text: string; background: string };
}

export type CommunityListData = {
  id: string;
  name: string;
  subdomain: string;
  theme: {
    slogan: string;
    logo: string;
  };
  x: boolean;
};

export type ImagesOfProperty = {
  sequence: number;
  description: string | null;
  original: string;
  thumbnail: string;
};

export type OperationsOfProperty = {
  name: string;
  display: string;
  price: number;
  commission: number;
};

export type PropertyData = {
  id: number;
  uuid: string;
  description: string | null;
  age: number | null;
  front: number | null;
  depth: number | null;
  surface: {
    total: number;
    built: number;
  };
  images: ImagesOfProperty[];
  operations: OperationsOfProperty[];
  floors: number | null;
  rooms: number | null;
  bathrooms: number | null;
  toilets: number | null;
  parking: number | null;
  dressingRooms: number | null;
  slope: number | null;
  type: {
    name: string;
    display: string;
  };
  location: {
    name: string;
    address: string;
    number: {
      ext: string;
      int: string | null;
    };
    geo: {
      lng: string;
      lat: string;
    };
    division: {
      name: string;
      zipCode: string;
      township: string;
      state: string;
      country: {
        shortName: string;
        name: string;
      };
    };
  } | null;
  owner: {
    id: string;
    firtsName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  register: string;
  lastUpdate: string;
  theme: {
    background: string;
    text: string;
    icon: string;
  };
  entity: {
    id: string;
    name: string;
  };
};

export type CommunityDetailsData = {
  id: string;
  name: string;
  description: string | null;
  subdomain: string;
  type: {
    name: string;
    display: string;
  };
  contact: {
    type: {
      name: string;
      display: string;
    };
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
  } | null;
  location: {
    type: {
      name: string;
      display: string;
    };
    name: string;
    address: string;
    extNum: string;
    intNum: string | null;
    geo: {
      lng: string;
      lat: string;
    };
    division: {
      name: string;
      zipCode: string;
      township: string;
      state: string;
      country: {
        shortName: string;
        longName: string;
      };
    };
  } | null;
  theme: {
    slogan: string;
    color: ColorScheme;
    logotype: {
      main: string;
      dark: string;
      light: string;
    };
  };
  properties: PropertyData[] | undefined;
};
