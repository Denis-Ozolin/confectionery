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
      count: 1,
    },
    {
      id: 2,
      name: "Торт «Вершки»",
      image: "Вершки2",
      description: " крем на основі білого шоколаду",
      weight: 1,
      price: 100,
      count: 1,
    },
  ],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({ ...action.payload });
      }

      state.totalPrice = state.products.reduce((sum, product) => {
        return product.price * product.count + sum;
      }, 0);
    },
    removeProduct(state, action) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct && !findProduct.count) {
        return;
      } else {
        findProduct.count--;
      }

      state.totalPrice = state.totalPrice - action.payload.price;
    },
    clearProducts(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.count;
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;
