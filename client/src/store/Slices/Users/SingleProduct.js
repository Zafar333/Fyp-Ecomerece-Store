import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setSingleProduct(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setSingleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
