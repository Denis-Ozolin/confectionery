import React from "react";
import { useSelector } from "react-redux";

import { cartSelectors } from "../redux/cart";
import { CartItem } from "../components";

function Cart() {
  const selectedProducts = useSelector(cartSelectors.selectedProducts);

  return (
    <section className="cart">
      <div className="cart__container">
        <h3 className="cart__title">Кошик</h3>
        <ul className="cart__list">
          {selectedProducts.map((product) => (
            <li key={product.id}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cart;
