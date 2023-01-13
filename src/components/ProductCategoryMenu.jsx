import { productTypes } from "../settings/menu/productTypes";

import { MenuButton } from ".";

function ProductCategoryMenu({ getCategory }) {
  return (
    <ul className="menu">
      {productTypes.map((product) => (
        <li key={product}>
          <MenuButton onClick={getCategory}>{product}</MenuButton>
        </li>
      ))}
    </ul>
  );
}

export default ProductCategoryMenu;
