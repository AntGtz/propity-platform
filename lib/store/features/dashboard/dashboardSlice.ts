import {
  CommissionData,
  CommissionScheme,
  Partner,
  PartnerData,
} from "@/type/dashboard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnFiltersState } from "@tanstack/table-core";

interface DashboardState {
  dashboardMenuCollapsed: boolean;
  menuItemsCollapsable: Record<"userMenu" | "configMenu", boolean>;
  communityTabSelected: string;
  communityFilters: ColumnFiltersState;
  commissionTabSelected: string;
  commissionsArray: CommissionData;
  partnersList: PartnerData;
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
  communityTabSelected: "myCommunity",
  communityFilters: [],
  commissionTabSelected: "",
  commissionsArray: [],
  partnersList: [],
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
    setCommunityTabSelected: (state, action: PayloadAction<string>) => {
      state.communityTabSelected = action.payload;
    },
    setCommunityFilters: (state, action: PayloadAction<ColumnFiltersState>) => {
      // Create a new map to handle each filter by its column ID
      const filtersMap = new Map(
        state.communityFilters.map((filter) => [filter.id, filter])
      );

      // Update the map with the new filters, replacing entries for the same column ID
      for (const newFilter of action.payload) {
        filtersMap.set(newFilter.id, newFilter);
      }

      // Convert the map back to an array
      state.communityFilters = Array.from(filtersMap.values());
    },
    setCommissionTabSelected: (state, action: PayloadAction<string>) => {
      state.commissionTabSelected = action.payload;
    },
    setCommissionsArray: (state, action: PayloadAction<CommissionData>) => {
      state.commissionsArray = action.payload;
    },
    setPartnersList: (state, action: PayloadAction<PartnerData>) => {
      state.partnersList = action.payload;
    },
    addPartner: (state, action: PayloadAction<Partner>) => {
      state.partnersList.push(action.payload);
    },
    addCommission: (state, action: PayloadAction<CommissionScheme>) => {
      state.commissionsArray.push(action.payload);
    },
    deleteCommissionById: (state, action: PayloadAction<string>) => {
      state.commissionTabSelected =
        state.commissionsArray[0].id.toString() || "";
      state.commissionsArray = state.commissionsArray.filter(
        (commission) => commission.id !== action.payload
      );
    },
  },
});

export const {
  collapseMenu,
  setCommunityTabSelected,
  setCommunityFilters,
  setCommissionTabSelected,
  setCommissionsArray,
  setPartnersList,
  addPartner,
  addCommission,
  deleteCommissionById,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
