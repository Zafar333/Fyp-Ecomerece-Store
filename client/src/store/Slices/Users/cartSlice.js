import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      // console.log(action.payload);
      let res = state.findIndex((item) => item._id == action.payload._id);
      if (res !== -1) {
        state.splice(res, 1, { ...state[res], qty: state[res].qty + 1 });
      } else {
        let data = action.payload;
        data.qty = 1;
        return (state = [...state, data]);
      }
    },
    IncCart(state, action) {
      let res = state.findIndex((item) => item._id == action.payload._id);
      if (res !== -1) {
        state.splice(res, 1, { ...state[res], qty: state[res].qty + 1 });
      } else {
        let data = action.payload;
        data.qty = 1;
        return (state = [...state, data]);
      }
    },
    DecCart(state, action) {
      let res = state.findIndex((item) => item._id == action.payload._id);
      if (state[res].qty > 1) {
        state.splice(res, 1, { ...state[res], qty: state[res].qty - 1 });
      } else {
        state.splice(res, 1);
      }
    },
    DeleteCartItem(state, action) {
      let res = state.findIndex((item) => item._id == action.payload._id);
      if (res !== -1) {
        state.splice(res, 1);
      }
    },
  },
});

export const { setCart, IncCart, DecCart, DeleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
