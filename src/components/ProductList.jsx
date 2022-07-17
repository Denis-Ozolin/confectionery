import React from 'react'
import products from '../db/products.json'
import { ProductCard, LoadMoreBtn } from '../components'

function ProductList({title}) {
  return (
    <section id='products' className='productList'>
      <div className="productList__container">
        <h3 className='productList__title'>{title}</h3>
        <ul className='productList__cardset'>
          {products.map((product) => (
            <li key={product.id} className='productList__card'>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <LoadMoreBtn />
      </div>
    </section>
  )
}

export default ProductList