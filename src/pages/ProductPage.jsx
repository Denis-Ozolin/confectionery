import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";

import { authSelectors } from "../redux/auth";
import productOperations from "../redux/products/products-operations";
import {
  selectProductById,
  selectLoadingProducts,
} from "../redux/products/selectors";
import { Button, SvgIcon } from "../components";

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
              <Button option="icon" onClick={handleChangeFormStatus}>
                <SvgIcon id="pen" />
              </Button>
            )}
            <Formik initialValues={initialState} onSubmit={handleSubmit}>
              <Form onSubmit={handleSubmit}>
                {isAdmin && !formDisabled && (
                  <Button option="icon" onClick={handleChangeFormStatus}>
                    <SvgIcon id="pen" />
                  </Button>
                )}
                {isAdmin && !formDisabled && (
                  <Button option="icon" onClick={handleChangeFormStatus}>
                    <SvgIcon id="pen" />
                  </Button>
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
                <Button option="icon" onClick={removeProduct}>
                  <SvgIcon id="minus" />
                </Button>
                <span className="product__count">{productCount}</span>
                <Button option="icon" onClick={addProduct}>
                  <SvgIcon id="plus" />
                </Button>
              </div>
              <Button>Замовити</Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
