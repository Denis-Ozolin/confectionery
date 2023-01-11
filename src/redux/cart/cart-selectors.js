const selectedProducts = (state) => state.cart.products;
const allOrders = (state) => state.cart.allOrders;

const cartSelectors = {
  selectedProducts,
  allOrders,
};
export default cartSelectors;
