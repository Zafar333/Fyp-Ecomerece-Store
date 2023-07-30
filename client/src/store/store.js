import { configureStore } from "@reduxjs/toolkit";
import adminProfileSlice from "./Slices/Admin/adminProfileSlice";
import tailoradminProfileSlice from "./Slices/TailorAdmin/tailorAdminProfileSlice";
import cartSlice from "./Slices/Users/cartSlice";
import adminEditProductSlice from "./Slices/Admin/adminEditProductSlice";
import singleProductSlice from "./Slices/Users/SingleProduct";
import userAuthSlice from "./Slices/Users/authDataSlice";
import allTailorsDataSlice from "./Slices/TailorAdmin/allTailorsData";

const store = configureStore({
  reducer: {
    adminProfile: adminProfileSlice,
    tailoradminProfile: tailoradminProfileSlice,
    cart: cartSlice,
    adminEditProduct: adminEditProductSlice,
    singleProduct: singleProductSlice,
    userAuth: userAuthSlice,
    allTailorsDatas: allTailorsDataSlice,
  },
});
export default store;
