import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Торт «Полуниця Вершки»",
      image: "Полуниця_Вершки2",
      description:
        "бісквіт, полуничне компоте, крем-сир з додаванням полуниці, крем на основі білого шоколаду",
      weight: 1.5,
      price: 450,
    },
  ],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearProducts(state, actions) {
      state.products = [];
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;
