function MenuButton({ category, onSortProducts, isActive }) {
  const selectCategory = () => {
    onSortProducts(category);
  };

  return (
    <button
      onClick={selectCategory}
      className={isActive ? "sort-button sort-button--active" : "sort-button"}
      type="button"
    >
      {category}
    </button>
  );
}

export default MenuButton;
