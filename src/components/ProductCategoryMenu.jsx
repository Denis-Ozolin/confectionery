import { productCategories } from "../settings/menu/productCategories";

import { MenuButton } from ".";

function ProductCategoryMenu({ onSortProducts, selectedCategory }) {
  return (
    <ul className="menu">
      {productCategories.map((category) => (
        <li key={category}>
          <MenuButton
            onSortProducts={onSortProducts}
            isActive={selectedCategory === category}
            category={category}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductCategoryMenu;
