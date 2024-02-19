import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import {
  Contacts,
  Delivery,
  Layout,
  Products,
  RestrictedRoute,
  PrivateRoute,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import productOperations from "./redux/products/products-operations";
import { selectProducts } from "./redux/products/selectors";

const MainPage = lazy(() => import("./pages/MainPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/cooperation"
          element={
            <RestrictedRoute component={RegistrationPage} redirectTo="/" />
          }
        />
        <Route
          path="/orders"
          element={<PrivateRoute component={OrdersPage} redirectTo="/" />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
