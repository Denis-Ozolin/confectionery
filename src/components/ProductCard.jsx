import { useState } from 'react'

import { SmallButton, ButtonIcon } from '../components'

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
          <SmallButton onClick={removeProduct}>
            <ButtonIcon id='minus'/>
          </SmallButton>    
          <span className='product__count'>{productCount}</span>
          <SmallButton onClick={addProduct}>
            <ButtonIcon id='plus'/>
          </SmallButton>       
        </div>
      </div>
    </div>
  )
}

export default ProductCard