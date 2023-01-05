import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Main, Auth, Buy } from "./pages";
import { Header, Footer } from "./components";

function App() {
  const [productCategory, setProductCategory] = useState("Продукція");

  const onChangeProductCategory = (category) => {
    setProductCategory(category);
  };

  return (
    <div className="wrapper">
      <Header getProductCategory={onChangeProductCategory} />
      <Routes>
        <Route path="*" element={<Main title={productCategory} />} />
        <Route path="/cooperation" element={<Auth />} />
        <Route path="/cart" element={<Buy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
