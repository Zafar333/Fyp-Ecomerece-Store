import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const tailoradminProfileSlice = createSlice({
  name: "tailoradminProfie",
  initialState,
  reducers: {
    setTailorProfile(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setTailorProfile } = tailoradminProfileSlice.actions;
export default tailoradminProfileSlice.reducer;
