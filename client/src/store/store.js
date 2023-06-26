import { configureStore } from "@reduxjs/toolkit";
import adminProfileSlice from "./Slices/Admin/adminProfileSlice";
import cartSlice from "./Slices/Users/cartSlice";
import adminEditProductSlice from "./Slices/Admin/adminEditProductSlice";

const store = configureStore({
  reducer: {
    adminProfile: adminProfileSlice,
    cart: cartSlice,
    adminEditProduct: adminEditProductSlice,
  },
});
export default store;
