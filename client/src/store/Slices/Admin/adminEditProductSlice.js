import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const adminEditProductSlice = createSlice({
  name: "adminEditProduct",
  initialState,
  reducers: {
    setProfile(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setProfile } = adminEditProductSlice.actions;
export default adminEditProductSlice.reducer;
