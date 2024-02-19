import { useState, useEffect } from "react";

// button types: primary, secondary, additional

function Button({
  onClick,
  type = "button",
  option = "",
  children,
  title = "",
}) {
  const [currentClassName, setCurrentClassName] = useState("button");

  useEffect(() => {
    if (!option) return;

    switch (option) {
      case "primary":
        setCurrentClassName("primaryBtn");
        break;
      case "secondary":
        setCurrentClassName("secondaryBtn");
        break;
      case "additional":
        setCurrentClassName("additionalBtn");
        break;
      default:
        setCurrentClassName("button");
    }
  }, [option]);

  return (
    <button
      onClick={onClick}
      className={currentClassName}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
}

export default Button;
