import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { Main, Registration, Orders } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="cooperation" element={<Registration />} />
        <Route path="cart" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
