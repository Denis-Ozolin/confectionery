import React from "react";
import { useSelector } from "react-redux";

import { cartSelectors } from "../redux/cart";
import { CartItem, Button } from "../components";

function Cart() {
  const selectedProducts = useSelector(cartSelectors.selectedProducts);
  const totalPrice = useSelector(cartSelectors.totalPrice);

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
        <div className="cart__options">
          <span>
            До сплати: <span className="cart__price">{totalPrice}</span> грн.
          </span>
          <Button>Замовити</Button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
