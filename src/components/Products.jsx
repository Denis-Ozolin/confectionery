import { useState, useEffect } from "react";

import products from "../db/products.json";
import { ProductCard, ProductCategoryMenu, Pagination } from "../components";
// import { usePagination } from "../hooks";

function Products() {
  //   const {
  //   firstContentIndex,
  //   lastContentIndex,
  //   nextPage,
  //   prevPage,
  //   page,
  //   setPage,
  //   totalPages,
  // } = usePagination({
  //   contentPerPage: productsPerPage,
  //   count: products.length,
  // });
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [productsCategory, setProductsCategory] = useState("Уся продукція");
  // const [productsIsLoading, setProductsIsLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  // const lastProductIndex = currentPage * productsPerPage;
  // const firstProductIndex = lastProductIndex - productsPerPage;
  // const currentProducts = selectedProducts.slice(
  //   firstProductIndex,
  //   lastProductIndex
  // );
  // const isPagination = selectedProducts.length > productsPerPage;

  const onSelectCategory = (category) => {
    setProductsCategory(category);
  };

  // const onPaginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

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
          onSortProducts={onSelectCategory}
          selectedCategory={productsCategory}
        />
        <ul className="products__list">
          {selectedProducts.map((product) => (
            <li key={product.id} className="products__item">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <Pagination
          productsPerPage={productsPerPage}
          products={selectedProducts}
          // onPaginate={onPaginate}
        />
      </div>
    </section>
  );
}

export default Products;
