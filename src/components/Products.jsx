import { useState, useEffect } from "react";

import products from "../db/products.json";
import { ProductCard, Button, ProductCategoryMenu } from "../components";

function Products() {
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [productsCategory, setProductsCategory] = useState("Уся продукція");

  // const sortProducts = (e) => {
  //   const selectedCategory = e.target.textContent;

  // const isSelectCategory = products.find(({ category }) => category === selectedCategory);
  // if (!isSelectCategory) {
  //   setSelectedProducts(products);
  //   return;
  // }

  // const sortedProducts = products.filter(({ category }) => category === selectedCategory);
  // setSelectedProducts(sortedProducts);
  // };

  const selectCategory = (category) => {
    setProductsCategory(category);
  };

  useEffect(() => {
    const isSelectCategory = products.find(
      ({ category }) => category === productsCategory
    );

    if (!isSelectCategory) {
      setSelectedProducts(products);
      return;
    }
    const sortedProducts = products.filter(
      ({ category }) => category === productsCategory
    );

    setSelectedProducts(sortedProducts);
  }, [productsCategory]);

  return (
    <section id="products" className="products">
      <div className="products__container">
        <h3 className="products__title">Продукція</h3>
        <ProductCategoryMenu
          sortProducts={selectCategory}
          selectedCategory={productsCategory}
        />
        <ul className="products__list">
          {selectedProducts.map((product) => (
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
