import { useState } from "react";

import products from "../db/products.json";
import { ProductCard, Button, ProductCategoryMenu } from "../components";

function Products() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentProducts, setCurrentProducts] = useState(products);

  const getCategoryValue = (e) => {
    setCurrentCategory(e.target.textContent);

    const selectedProducts = currentCategory
      ? products.filter(({ category }) => category === currentCategory)
      : products;

    setCurrentProducts(selectedProducts);
  };

  // const selectedProducts = currentCategory? products.filter(({ category }) =>
  //   category === currentCategory): products;

  // useEffect(() => {
  //   setCurrentProducts(selectedProducts)
  // }, [selectedProducts])

  return (
    <section id="products" className="products">
      <div className="products__container">
        <h3 className="products__title">Продукція</h3>
        <ProductCategoryMenu getCategory={getCategoryValue} />
        <ul className="products__list">
          {currentProducts.map((product) => (
            <li key={product.id} className="products__item">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <Button type="button" text="Завантажити ще" />
      </div>
    </section>
  );
}

export default Products;
