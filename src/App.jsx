import { useState } from 'react';
import { Header, Hero, ProductList } from './components';

function App() {
  const [productCategory, setProductCategory] = useState('Продукція');

  const onChangeProductCategory = (category) => {
    setProductCategory(category);
  }

  return (
    <>
      <Header getProductCategory={onChangeProductCategory} />
      <Hero />
      <ProductList title={productCategory} />
    </>
  )
}

export default App;
