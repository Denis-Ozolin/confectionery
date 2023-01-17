import { productCategories } from "../settings/menu/productCategories";

import { MenuButton } from ".";

function ProductCategoryMenu({ sortProducts, selectedCategory }) {
  return (
    <ul className="menu">
      {productCategories.map((category) => (
        <li key={category}>
          <MenuButton
            sortProducts={sortProducts}
            selectedCategory={selectedCategory}
            category={category}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductCategoryMenu;
