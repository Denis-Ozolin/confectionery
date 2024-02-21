const selectedProducts = (state) => state.cart.products;
const totalPrice = (state) => state.cart.totalPrice;

const cartSelectors = {
  selectedProducts,
  totalPrice,
};
export default cartSelectors;
