import React from 'react'
import { Hero, Products, Delivery, Contacts } from '../components'

function Main({title}) {
  return (
    <main>
      <Hero/>
      <Products title={title} />
      <Delivery />
      <Contacts />
    </main>
  )
}

export default Main