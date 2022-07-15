import React from 'react'

import cake from '../images/products/cake.jpg'

function ProductCard() {
  return (
    <div className='product'>
      <img className='product__image' src={cake} alt='Тістечко' />
      <div className='product__content'>
        <h4 className='product__name'>Торт «Монастирська Хатинка»</h4>
        <p className='product__description'>Tрубочки з пісочного тіста наповнені вишнею, сметанний крем, шоколадна глазур</p>
        <div className='product__stats'>
          <p className='product__weight'>Вага 1,5 кг</p>
          <p className='product__price'>Ціна 375 грн</p>
        </div>
        <div className='product__select'>
          <div className='product__button'>-</div>
          <span className='product__count'>12</span>
          <div className='product__button'>+</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard