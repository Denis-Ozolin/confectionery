import { useDispatch } from "react-redux";

import {
  addProduct,
  clearProducts,
  removeProduct,
} from "../redux/cart/cart-slice";
import { Button, SvgIcon } from "../components";

function CartItem({ product }) {
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
    <div className="cart-item">
      <p className="cart-item__name">{product.name}</p>
      <div className="cart-item__options">
        <div className="cart-item__controls">
          <Button onClick={remove} option="secondary" title="Відняти">
            <SvgIcon id="minus" size={30} />
          </Button>
          <Button onClick={add} option="secondary" title="Додати">
            <SvgIcon id="plus" size={30} />
          </Button>
        </div>
        <p>{product.weight} кг</p>
        <p>{product.price} грн</p>
        <Button onClick={clear} option="secondary" title="Видалити">
          <SvgIcon id="trash" size={24} />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
