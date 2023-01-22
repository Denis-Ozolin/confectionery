import React from "react";

function SmallButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="small-button" type="button">
      {children}
    </button>
  );
}

export default SmallButton;
