import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Social, Modal, Signin } from '../components'
import { productTypes } from '../settings/menu/productTypes'

function Header({getProductCategory}) {
  const [onSortNav, setOnSortNav] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const location = useLocation();
  const isCooperation = location.pathname === '/cooperation';

  const toggleSortNav = () => {
    setOnSortNav(!onSortNav);
  }

  const onOpenModal = () => {
    setIsOpenModal(true);
  }

  const onCloseModal = () => {
    setIsOpenModal(false);
  }

  const getDefaultCategory = (event) => {
    event.preventDefault();
    toggleSortNav();
    getProductCategory(event.target.textContent);
  }

  return (
    <header className='header'>
        <div className='header__container'>
            <NavLink to='*'>
              <h2 className='header__logo'>Sweet Village</h2>
            </NavLink> 
        {isCooperation ?
          <NavLink to='*' className='nav__link'>На головну</NavLink> : 
          <nav className='header__nav nav'>
            {!onSortNav ?
              <AnchorLink onClick={(e) => getDefaultCategory(e)} href='#product' offset='90' className='nav__link nav__link--main'>Продукція</AnchorLink> :
              <AnchorLink onClick={toggleSortNav} href='#home' offset='90' className='nav__link nav__link--main'>Головне меню</AnchorLink>
            }
            {!onSortNav ? 
              <ul className='nav__list'>
                <li>
                  <AnchorLink href='#delivery' offset='90' className='nav__link'>Доставка</AnchorLink>
                </li>
                <li>
                  <AnchorLink href='#contacts' offset='90' className='nav__link'>Контакти</AnchorLink>
                </li>
                <li>
                  <NavLink to='/cooperation' className='nav__link'>Співпраця</NavLink>
                </li>
              </ul> :
              <ul className='nav__list'>
                {productTypes.map((type) =>
                  <li key={type} onClick={() => getProductCategory(type)}>
                    <AnchorLink href='#product' offset='90' className='nav__link'>{type}</AnchorLink>
                  </li>  
                )}
              </ul>  
            }
          </nav>
        }       
          <div className="header__settings">
            <button onClick={onOpenModal} className='login'>
              <svg className='login__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30px" height="30px">
                <path d="M7.763 2A6.77 6.77 0 0 0 1 8.763c0 1.807.703 3.505 1.98 4.782a6.718 6.718 0 0 0 4.783 1.981 6.77 6.77 0 0 0 6.763-6.763A6.77 6.77 0 0 0 7.763 2ZM3.675 13.501a5.094 5.094 0 0 1 3.958-1.989c.024.001.047.007.071.007h.023c.022 0 .042-.006.064-.007a5.087 5.087 0 0 1 3.992 2.046 6.226 6.226 0 0 1-4.02 1.468 6.212 6.212 0 0 1-4.088-1.525zm4.032-2.494c-.025 0-.049.004-.074.005a2.243 2.243 0 0 1-2.167-2.255 2.246 2.246 0 0 1 2.262-2.238 2.246 2.246 0 0 1 2.238 2.262c0 1.212-.97 2.197-2.174 2.232-.028-.001-.056-.006-.085-.006Zm4.447 2.215a5.594 5.594 0 0 0-3.116-2.052 2.749 2.749 0 0 0 1.428-2.412A2.747 2.747 0 0 0 7.704 6.02a2.747 2.747 0 0 0-2.738 2.762 2.73 2.73 0 0 0 1.422 2.386 5.602 5.602 0 0 0-3.081 1.995 6.22 6.22 0 0 1-1.806-4.398 6.27 6.27 0 0 1 6.263-6.263 6.27 6.27 0 0 1 6.263 6.263 6.247 6.247 0 0 1-1.873 4.457z" />
              </svg>
              <span className='login__text'>Вхід</span>
            </button>
            <Social />
          </div>
      </div>
      {isOpenModal &&
        <Modal closeModal={onCloseModal}>
          <Signin closeModal={onCloseModal}/>
        </Modal>}
    </header>

  )
}

export default Header