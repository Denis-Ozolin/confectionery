import React from 'react'
import products from '../db/products.json'
import { ProductCard, Button } from '.'

function Products({title}) {
  return (
    <section id='product' className='product'>
      <div className="product__container">
        <h3 className='product__title'>{title}</h3>
        <ul className='product__list'>
          {products.map((product) => (
            <li key={product.id} className='product__item'>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <Button type='button' text='Завантажити ще'/>
      </div>
    </section>
  )
}

export default Products