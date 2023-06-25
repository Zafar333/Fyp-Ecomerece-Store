import { configureStore } from "@reduxjs/toolkit";
import adminProfileSlice from "./Slices/Admin/adminProfileSlice";
import cartSlice from "./Slices/Users/cartSlice";

const store = configureStore({
  reducer: {
    adminProfile: adminProfileSlice,
    cart: cartSlice,
  },
});
export default store;
