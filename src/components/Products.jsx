import React from "react";
import products from "../db/products.json";
import { ProductCard, Button } from ".";

function Products() {
  return (
    <section id="products" className="products">
      <div className="products__container">
        <h3 className="products__title">Продукція</h3>
        <ul className="products__list">
          {products.map((product) => (
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
