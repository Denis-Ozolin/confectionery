import React from 'react'

import {ProductCard} from '../components'

function ProductList() {
  return (
    <section className='productList'>
      <div className="productList__container">
        <h3 className='productList__title'>Уся продукція</h3>
        <ul className='productList__cardset'>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
          <li className='productList__card'>
            <ProductCard />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProductList