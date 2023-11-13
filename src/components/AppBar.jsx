import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; //, useLocation
import { authSelectors } from "../redux/auth";
// import a from "react-anchor-link-smooth-scroll";

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/products" className="nav__link">
            Продукція
          </Link>
        </li>
        <li>
          <Link to="/delivery" className="nav__link">
            Доставка
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="nav__link">
            Контакти
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/orders" className="nav__link">
              Мої замовлення
            </Link>
          ) : (
            <Link to="/cooperation" className="nav__link">
              Співпраця
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default AppBar;
