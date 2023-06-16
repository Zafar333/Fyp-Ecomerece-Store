import { configureStore } from "@reduxjs/toolkit";
import adminProfileSlice from "./Slices/Admin/adminProfileSlice";

const store = configureStore({
  reducer: {
    adminProfile: adminProfileSlice,
  },
});
export default store;
