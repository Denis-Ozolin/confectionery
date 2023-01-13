import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { MainPage, RegistrationPage, CartPage, OrdersPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cooperation" element={<RegistrationPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
