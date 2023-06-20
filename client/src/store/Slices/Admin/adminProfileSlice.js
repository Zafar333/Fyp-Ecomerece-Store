import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const adminProfileSlice = createSlice({
  name: "adminProfie",
  initialState,
  reducers: {
    setProfile(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setProfile } = adminProfileSlice.actions;
export default adminProfileSlice.reducer;
