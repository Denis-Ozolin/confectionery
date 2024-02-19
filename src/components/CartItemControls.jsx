import React from "react";
import { useDispatch } from "react-redux";

// import { cartOperations } from '../redux/cart';
import {
  addProduct,
  clearProducts,
  removeProduct,
} from "../redux/cart/cart-slice";
import { SmallButton, ButtonIcon } from "../components";

function CartItemControls({ product }) {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addProduct(product));
  };

  const remove = () => {
    dispatch(removeProduct(product.id));
  };

  const clear = () => {
    dispatch(clearProducts(product.id));
  };

  return (
    <div className="controls">
      <SmallButton onClick={add}>
        <ButtonIcon id="plus" />
      </SmallButton>
      <SmallButton onClick={remove}>
        <ButtonIcon id="minus" />
      </SmallButton>
      <SmallButton onClick={clear}>
        <ButtonIcon id="close" />
      </SmallButton>
    </div>
  );
}

export default CartItemControls;
