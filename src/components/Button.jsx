function Button({
  onClick,
  type = "button",
  option = "button",
  children,
  title = "",
}) {
  const currentClassName = option === "button" ? "button" : "icon";

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
