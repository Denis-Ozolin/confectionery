import { useState } from "react";
import { useSelector } from "react-redux";

import { authSelectors } from "../redux/auth";
import { SmallButton, ButtonIcon } from "../components";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const [productCount, setProductCount] = useState(0);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const addProduct = () => {
    if (productCount > 9) return;
    setProductCount((productCount) => productCount + 1);
  };

  const removeProduct = () => {
    if (!productCount) return;
    setProductCount((productCount) => productCount - 1);
  };

  const { name, image, description, weight, price, id } = product;

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <img
          className="product__image"
          src={window.location.origin + `/products/${image}.jpg`}
          alt={name}
        />
      </Link>
      <div className="product__content">
        <Link to={`/products/${id}`}>
          <h4 className="product__name">{name}</h4>
        </Link>
        <p className="product__description">{description}</p>
        {isLoggedIn && (
          <>
            <div className="product__stats">
              <p className="product__weight">Вага {weight} кг</p>
              <p className="product__price">Ціна {price} грн</p>
            </div>
            <div className="product__select">
              <SmallButton onClick={removeProduct}>
                <ButtonIcon id="minus" />
              </SmallButton>
              <span className="product__count">{productCount}</span>
              <SmallButton onClick={addProduct}>
                <ButtonIcon id="plus" />
              </SmallButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
