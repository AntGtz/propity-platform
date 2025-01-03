import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  dashboardMenuCollapsed: boolean;
  menuItemsCollapsable: Record<"userMenu" | "configMenu", boolean>;
}

interface CollapseMenuPayload {
  type: "userMenu" | "dashboardMenu";
  menu?: "userMenu" | "configMenu";
}

const initialState: DashboardState = {
  dashboardMenuCollapsed: false,
  menuItemsCollapsable: {
    userMenu: false,
    configMenu: false,
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    collapseMenu: (state, action: PayloadAction<CollapseMenuPayload>) => {
      const { type, menu } = action.payload;
      const { menuItemsCollapsable } = state;

      if (type === "userMenu" && menu) {
        if (menu === "configMenu" && menuItemsCollapsable.userMenu) {
          menuItemsCollapsable.userMenu = false;
        }
        if (menu === "userMenu" && menuItemsCollapsable.configMenu) {
          menuItemsCollapsable.configMenu = false;
        }
        state.menuItemsCollapsable[menu] = !state.menuItemsCollapsable[menu];
      } else if (type === "dashboardMenu")
        state.dashboardMenuCollapsed = !state.dashboardMenuCollapsed;
    },
  },
});

export const { collapseMenu } = dashboardSlice.actions;

export default dashboardSlice.reducer;
