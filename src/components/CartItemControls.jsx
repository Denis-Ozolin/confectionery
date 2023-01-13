import React from "react";
import { useDispatch } from "react-redux";

// import { cartOperations } from '../redux/cart';
import { add } from "../redux/cart/cart-slice";
import { SmallButton, ButtonIcon } from "../components";

function CartItemControls({ product }) {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(add(product));
  };

  return (
    <div className="controls">
      <SmallButton onClick={addProduct}>
        <ButtonIcon id="plus" />
      </SmallButton>
      <SmallButton>
        <ButtonIcon id="minus" />
      </SmallButton>
      <SmallButton>
        <ButtonIcon id="close" />
      </SmallButton>
    </div>
  );
}

export default CartItemControls;
