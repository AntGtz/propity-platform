import { createSlice } from "@reduxjs/toolkit";
import {
  CommunityDetailsData,
  CommunityListData,
  TenantData,
} from "@/type/tenantData";

export interface InitialTenantSliceData {
  details: TenantData | undefined;
  communityList: CommunityListData | undefined;
  communityDetails: CommunityDetailsData[] | undefined;
}
const initialState: InitialTenantSliceData = {
  details: undefined,
  communityList: undefined,
  communityDetails: undefined,
};

export const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    setTenant: (state, action) => {
      state.details = action.payload;
    },
    setCommunityList: (state, action) => {
      state.communityList = action.payload;
    },
    setCommunityDetails: (state, action) => {
      state.communityDetails = action.payload;
    },
  },
});

export const { setTenant, setCommunityList, setCommunityDetails } =
  tenantSlice.actions;

export default tenantSlice.reducer;
