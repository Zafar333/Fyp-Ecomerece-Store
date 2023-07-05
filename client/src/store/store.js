import { configureStore } from "@reduxjs/toolkit";
import adminProfileSlice from "./Slices/Admin/adminProfileSlice";
import tailoradminProfileSlice from "./Slices/TailorAdmin/tailorAdminProfileSlice";

const store = configureStore({
  reducer: {
    adminProfile: adminProfileSlice,
    tailoradminProfile: tailoradminProfileSlice,
  },
});
export default store;
