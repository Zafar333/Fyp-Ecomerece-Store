import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      return (state = [...state, action.payload]);
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
