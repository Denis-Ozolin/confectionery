import { useState } from 'react'

function ProductCard({ product }) {
  const [productCount, setProductCount] = useState(0);

  const addProduct = () => {
    if (productCount > 9) return;
    setProductCount((productCount) => productCount + 1);
  }

  const removeProduct = () => {
    if (!productCount) return;
    setProductCount((productCount) => productCount - 1);
  }

  const { name, image, description, weight, price } = product;

  return (
    <div className='product'>
      <img className='product__image' src={window.location.origin + `/products/${image}.jpg`} alt={name} />
      <div className='product__content'>
        <h4 className='product__name'>{name}</h4>
        <p className='product__description'>{description}</p>
        <div className='product__stats'>
          <p className='product__weight'>Вага {weight} кг</p>
          <p className='product__price'>Ціна {price} грн</p>
        </div>
        <div className='product__select'>
          <svg onClick={removeProduct} className='product__button' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28.0314,28.0314,0,0,1,32,60Z" />
            <path d="M48,31H16a1,1,0,0,0,0,2H48a1,1,0,0,0,0-2Z" />
          </svg>
          <span className='product__count'>{productCount}</span>
          <svg onClick={addProduct} className='product__button' viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,124a60,60,0,1,1,60-60A60.07,60.07,0,0,1,64,124Z" />
            <path d="M95,62H66V33a2,2,0,0,0-4,0V62H33a2,2,0,0,0,0,4H62V95a2,2,0,0,0,4,0V66H95a2,2,0,0,0,0-4Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProductCard