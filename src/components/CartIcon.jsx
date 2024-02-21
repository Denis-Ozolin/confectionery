import React from "react";

import { SvgIcon } from "../components";

function CartIcon({ productCount = 0 }) {
  return (
    <span className="cart-icon">
      <SvgIcon id="cart" />
      {productCount > 0 && (
        <span className="cart-icon__count">{productCount}</span>
      )}
    </span>
  );
}

export default CartIcon;
