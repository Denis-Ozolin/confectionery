import React from "react";

function MenuButton({ category, sortProducts, selectedCategory }) {
  const selectCategory = () => {
    sortProducts(category);
  };

  const isActive =
    selectedCategory === category
      ? "sort-button sort-button--active"
      : "sort-button";

  return (
    <button onClick={selectCategory} className={isActive} type="button">
      {category}
    </button>
  );
}

export default MenuButton;
