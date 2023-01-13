import React from "react";

import { CartItemControls } from "../components";

function CartItem({ product }) {
  return (
    <div className="cart-item">
      <p className="cart-item__name">{product.name}</p>
      <div className="cart-item__value">
        <p>{product.weight} кг</p>
        <p>{product.price} грн</p>
        <CartItemControls product={product} />
      </div>
    </div>
  );
}

export default CartItem;
