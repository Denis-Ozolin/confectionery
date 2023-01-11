import React from "react";
import { Link } from "react-router-dom"; //, useLocation
import AnchorLink from "react-anchor-link-smooth-scroll";

function AppBar({ isLoggedIn }) {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li>
          <AnchorLink href="#products" offset="90" className="nav__link">
            Продукція
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#delivery" offset="90" className="nav__link">
            Доставка
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contacts" offset="90" className="nav__link">
            Контакти
          </AnchorLink>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="cooperation" className="nav__link">
              Співпраця
            </Link>
          ) : (
            <Link to="cart" className="nav__link">
              Кошик
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default AppBar;
