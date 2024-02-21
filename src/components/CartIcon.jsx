import React from "react";

import { SvgIcon } from "../components";

function CartIcon({ productCount = 0 }) {
  return (
    <span className="cart-icon">
      <SvgIcon id="cart" />
      {productCount > 0 && (
        <SvgIcon id="muffin" size={16} className="cart-icon__count" />
      )}
    </span>
  );
}

export default CartIcon;
