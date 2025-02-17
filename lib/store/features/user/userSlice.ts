import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  photo: null | {
    original: string;
    thumbnail: string;
  };
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agentData: boolean;
  aboutMe: null | string;
  status: {
    name: string;
    display: string;
  };
  agent: {
    id: string;
    phone: string;
  };
  parent: null | {
    id: string;
    name: string;
  };
  dream: null | string;
  register: string;
  role: {
    jom: {
      name: string;
      display: string;
    };
    team: null | {
      name: string;
      display: string;
    };
    trade: null | {
      name: string;
      display: string;
    };
  };
  apiKey: null | string;
}

const initialState: UserState = {
  id: "",
  photo: null,
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  agentData: false,
  aboutMe: null,
  status: {
    name: "",
    display: "",
  },
  agent: {
    id: "",
    phone: "",
  },
  parent: null,
  dream: null,
  register: "",
  role: {
    jom: {
      name: "",
      display: "",
    },
    team: null,
    trade: null,
  },
  apiKey: null,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
