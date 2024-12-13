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
  location: string | null;
  theme: {
    slogan: string;
    color: ColorScheme;
    logotype: {
      main: string;
      dark: string;
      light: string;
    };
  };
};
