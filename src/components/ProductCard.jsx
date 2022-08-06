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
          {/* <svg onClick={removeProduct} className='product__button' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M32,2A30,30,0,1,0,62,32,30.034,30.034,0,0,0,32,2Zm0,58A28,28,0,1,1,60,32,28.0314,28.0314,0,0,1,32,60Z" />
            <path d="M48,31H16a1,1,0,0,0,0,2H48a1,1,0,0,0,0-2Z" />
          </svg> */}
          <button className='product__button' onClick={removeProduct} type='button'>
            {/* <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
              <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
            </svg> */}
            -
          </button>    
          <span className='product__count'>{productCount}</span>
          {/* <svg onClick={addProduct} className='product__button' viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,124a60,60,0,1,1,60-60A60.07,60.07,0,0,1,64,124Z" />
            <path d="M95,62H66V33a2,2,0,0,0-4,0V62H33a2,2,0,0,0,0,4H62V95a2,2,0,0,0,4,0V66H95a2,2,0,0,0,0-4Z" />
          </svg> */}
          <button className='product__button' onClick={addProduct} type='button'>
            {/* <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
              <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
            </svg> */}
            +
          </button>       
        </div>
      </div>
    </div>
  )
}

export default ProductCard