import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    setUserAuthProfile(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setUserAuthProfile } = userAuthSlice.actions;
export default userAuthSlice.reducer;
