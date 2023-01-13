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
  allOrders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log(add);
    },
  },
});

export default cartSlice.reducer;

export const { add } = cartSlice.actions;
