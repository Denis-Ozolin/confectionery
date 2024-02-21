import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { authSelectors } from "../redux/auth";
import { cartSelectors } from "../redux/cart";
import { toggleLogged } from "../redux/auth/auth-slice";
import { AppBar, Modal, Signin, CartIcon } from "../components";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const cartProducts = useSelector(cartSelectors.selectedProducts);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onLogOut = () => {
    dispatch(toggleLogged());
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <h2 className="header__logo">Sweet Village</h2>
        </Link>
        <AppBar isLoggedIn={isLoggedIn} />
        <div className="header__settings">
          <Link to="cart">
            <CartIcon productCount={cartProducts.length} />
          </Link>
          <div className="auth">
            {!isLoggedIn ? (
              <button onClick={onOpenModal} className="auth__button">
                <span className="auth__text">Вхід</span>
              </button>
            ) : (
              <button onClick={onLogOut} className="auth__button">
                <Link to="/">
                  <span className="auth__text">Вийти</span>
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal closeModal={onCloseModal}>
          <Signin closeModal={onCloseModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
