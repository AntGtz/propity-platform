import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CommunityDetailsData,
  CommunityListData,
  TenantData,
} from "@/type/tenantData";

export interface InitialTenantSliceData {
  details: TenantData | undefined;
  communityList: CommunityListData | undefined;
  communityDetails: CommunityDetailsData[];
}
const initialState: InitialTenantSliceData = {
  details: undefined,
  communityList: undefined,
  communityDetails: [],
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
    setCommunityDetails: (
      state,
      action: PayloadAction<CommunityDetailsData>,
    ) => {
      state.communityDetails.push(action.payload);
    },
  },
});

export const { setTenant, setCommunityList, setCommunityDetails } =
  tenantSlice.actions;

export default tenantSlice.reducer;
