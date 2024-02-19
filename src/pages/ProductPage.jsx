import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productOperations from "../redux/products/products-operations";
import { ButtonIcon, SmallButton } from "../components";
import {
  selectProductById,
  selectLoadingProducts,
} from "../redux/products/selectors";
import { Button } from "../components";
import { Field, Form, Formik } from "formik";

export default function ProductPage() {
  const isAdmin = useSelector(authSelectors.getIsAdmin);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(selectLoadingProducts);
  const { name, image, description, weight, category, price } =
    useSelector(selectProductById);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(0);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    dispatch(productOperations.getProductById(id));
  }, [dispatch, id]);

  const addProduct = () => {
    if (productCount > 9) return;
    setProductCount((productCount) => productCount + 1);
  };

  const removeProduct = () => {
    if (!productCount) return;
    setProductCount((productCount) => productCount - 1);
  };

  const handleChangeFormStatus = () => {
    setFormDisabled(!formDisabled);
  };

  const initialState = {
    name,
    image,
    description,
    weight,
    category,
    price,
  };

  const handleSubmit = (values, e) => {
    e.preventDefault();

    const { name, description, weight, price } = values;

    const updateValues = {
      name,
      description,
      weight,
      price,
    };
    dispatch(
      productOperations.updateProduct({ id, image, category, ...updateValues })
    );
  };

  return (
    !isLoading && (
      <div className="product_page">
        <div className="product_page__container">
          <img
            className="product_page__image"
            src={window.location.origin + `/products/${image}.jpg`}
            alt={name}
          />
          <div className="product_page__content">
            {isAdmin && formDisabled && (
              <button type="button" onClick={handleChangeFormStatus}>
                <ButtonIcon id="edit" />
              </button>
            )}
            <Formik initialValues={initialState} onSubmit={handleSubmit}>
              <Form onSubmit={handleSubmit}>
                {isAdmin && !formDisabled && (
                  <button type="submit">
                    <ButtonIcon id="done" />
                  </button>
                )}
                {isAdmin && !formDisabled && (
                  <button type="button" onClick={handleChangeFormStatus}>
                    <ButtonIcon id="cross" />
                  </button>
                )}
                <Field
                  component="textarea"
                  className="product_page__name"
                  name="name"
                  disabled={formDisabled}
                />
                <Field
                  component="textarea"
                  className="product_page__description"
                  name="description"
                  disabled={formDisabled}
                />

                {isLoggedIn && (
                  <>
                    <div className="product_page__stats">
                      <label className="product_page__weight">
                        {" "}
                        Вага
                        <Field name="weight" disabled={formDisabled} />
                        <span>кг</span>
                      </label>
                      <label className="product_page__price">
                        {" "}
                        Ціна
                        <Field name="price" disabled={formDisabled} />
                        <span>грн.</span>
                      </label>
                    </div>
                  </>
                )}
              </Form>
            </Formik>
            <div className="product_page__select">
              <div className="product_page__wrapper">
                <SmallButton onClick={removeProduct}>
                  <ButtonIcon id="minus" />
                </SmallButton>
                <span className="product__count">{productCount}</span>
                <SmallButton onClick={addProduct}>
                  <ButtonIcon id="plus" />
                </SmallButton>
              </div>
              <Button type="button" text="Замовити" />
            </div>
          </div>
        </div>
      </div>
    )

    // <div className="product_page">
    //   <div className="product_page__container">
    //   <img
    //     className="product_page__image"
    //     src={window.location.origin + `/products/${image}.jpg`}
    //     alt={name}
    //   />
    //   <div className="product_page__content">
    //     <h4 className="product_page__name">{name}</h4>
    //     <p className="product_page__description">{description}</p>
    //     {isLoggedIn && (
    //       <>
    //         <div className="product_page__stats">
    //           <p className="product_page__weight">Вага {weight} кг</p>
    //           <p className="product_page__price">Ціна {price} грн</p>
    //         </div>
    // <div className="product_page__select">
    //   <SmallButton onClick={removeProduct}>
    //     <ButtonIcon id="minus" />
    //   </SmallButton>
    //   <span className="product__count">{productCount}</span>
    //   <SmallButton onClick={addProduct}>
    //     <ButtonIcon id="plus" />
    //     </SmallButton>
    //   <Button type="button" text="Замовити"/>
    // </div>
    //       </>
    //     )}
    //     </div>
    //     </div>
    //   </div>
  );
}
