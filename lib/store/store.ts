import { configureStore } from "@reduxjs/toolkit";
import tenantReducer from "./features/tenants/tenantSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tenant: tenantReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
