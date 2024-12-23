import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isLoading: boolean;
  AuthDialogOpen: boolean;
  AuthDialogType: "login" | "newUser" | "newCompany" | "userConfirmation";
}

const initialState: AppState = {
  isLoading: false,
  AuthDialogOpen: false,
  AuthDialogType: "login",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAuthDialogOpen: (state, action) => {
      state.AuthDialogOpen = action.payload;
    },
    setAuthDialogType: (
      state,
      action: PayloadAction<
        "login" | "newUser" | "newCompany" | "userConfirmation"
      >,
    ) => {
      state.AuthDialogType = action.payload;
    },
  },
});

export const { setLoading, setAuthDialogOpen, setAuthDialogType } =
  appSlice.actions;

export default appSlice.reducer;
