import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  allOrders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.products = [action.payload, ...state.products];
    },
  },
});

export default cartSlice.reducer;

export const { add } = cartSlice.actions;
