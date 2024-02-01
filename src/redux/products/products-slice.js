import { createSlice } from "@reduxjs/toolkit";
import productOperations from "./products-operations";

const initialState = {
  products: [],
  productById: {},
  isLoading: false,
  totalPages: 1,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state) => {
  state.isLoading = false;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productOperations.getAllProducts.pending, handlePending)
      .addCase(
        productOperations.getAllProducts.fulfilled,
        (state, { payload }) => {
          state.products = payload;
          state.isLoading = false;
        }
      )
      .addCase(productOperations.getAllProducts.rejected, handleRejected)
      .addCase(productOperations.getProductById.pending, handlePending)
      .addCase(
        productOperations.getProductById.fulfilled,
        (state, { payload }) => {
          state.productById = payload;
          state.isLoading = false;
        }
      )
      .addCase(productOperations.getProductById.rejected, handleRejected);
  },
});

export const productsReducer = productsSlice.reducer;
