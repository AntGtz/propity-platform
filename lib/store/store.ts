import { configureStore } from "@reduxjs/toolkit";
import tenantReducer from "./features/tenants/tenantSlice";
import appReducer from "@/lib/store/features/app/appSlice";
import dashboardReducer from "@/lib/store/features/dashboard/dashboardSlice";
import userReducer from "@/lib/store/features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tenant: tenantReducer,
      app: appReducer,
      dashboard: dashboardReducer,
      user: userReducer
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
