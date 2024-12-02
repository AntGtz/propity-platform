import { createSlice } from "@reduxjs/toolkit";
import { TenantData } from "@/type/tenantData";

export interface InitialTenantSliceData {
  tenant: TenantData | undefined;
}
const initialState: InitialTenantSliceData = {
  tenant: undefined,
};

export const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    setTenant: (state, action) => {
      state.tenant = action.payload;
    },
  },
});

export const { setTenant } = tenantSlice.actions;

export default tenantSlice.reducer;
