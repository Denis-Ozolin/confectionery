import icons from "../images/icons/sprite.svg";

function SvgIcon({
  id = "",
  size = 24,
  stroke = "none",
  fill = "none",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      stroke={stroke}
      fill={fill}
      className={className}
    >
      <use href={`${icons}#${id}`}></use>
    </svg>
  );
}

export default SvgIcon;
