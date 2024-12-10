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
