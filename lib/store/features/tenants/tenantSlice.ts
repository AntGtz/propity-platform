import { createSlice } from "@reduxjs/toolkit";
import { TenantData } from "@/type/tenantData";

export interface InitialTenantSliceData {
  details: TenantData | undefined;
}
const initialState: InitialTenantSliceData = {
  details: undefined,
};

export const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    setTenant: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setTenant } = tenantSlice.actions;

export default tenantSlice.reducer;
