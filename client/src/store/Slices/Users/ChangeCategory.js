import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

const changeCategorySlice = createSlice({
  name: "changeCategory",
  initialState,
  reducers: {
    setCategory(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setCategory } = changeCategorySlice.actions;
export default changeCategorySlice.reducer;
