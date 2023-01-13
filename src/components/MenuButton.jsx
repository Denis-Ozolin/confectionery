import React from "react";

function MenuButton({ children, onClick }) {
  return (
    <button onClick={(e) => onClick(e)} className="sort-button" type="button">
      {children}
    </button>
  );
}

export default MenuButton;
