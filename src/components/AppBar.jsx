import React from "react";
import { Link } from "react-router-dom"; //, useLocation
// import a from "react-anchor-link-smooth-scroll";

function AppBar({ isLoggedIn }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/" className="nav__link">
            Продукція
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
            Доставка
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
            Контакти
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="cooperation" className="nav__link">
              Співпраця
            </Link>
          ) : (
            <Link to="orders" className="nav__link">
              Мої замовлення
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default AppBar;
