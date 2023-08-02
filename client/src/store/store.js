import { configureStore } from "@reduxjs/toolkit";
import adminProfileSlice from "./Slices/Admin/adminProfileSlice";
import tailoradminProfileSlice from "./Slices/TailorAdmin/tailorAdminProfileSlice";
import cartSlice from "./Slices/Users/cartSlice";
import adminEditProductSlice from "./Slices/Admin/adminEditProductSlice";
import singleProductSlice from "./Slices/Users/SingleProduct";
import allTailorsDataSlice from "./Slices/TailorAdmin/allTailorsData";
import changeCategorySlice from "./Slices/Users/ChangeCategory";

const store = configureStore({
  reducer: {
    adminProfile: adminProfileSlice,
    tailoradminProfile: tailoradminProfileSlice,
    cart: cartSlice,
    adminEditProduct: adminEditProductSlice,
    singleProduct: singleProductSlice,
    allTailorsDatas: allTailorsDataSlice,
    changeCategory: changeCategorySlice,
  },
});
export default store;
