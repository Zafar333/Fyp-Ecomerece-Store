import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const allTailorsDataSlice = createSlice({
  name: "allTailorsData",
  initialState,
  reducers: {
    setAlltailorsData(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setAlltailorsData } = allTailorsDataSlice.actions;
export default allTailorsDataSlice.reducer;
