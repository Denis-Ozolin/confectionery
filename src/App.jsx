import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {
  Contacts,
  Delivery,
  Layout,
  Products,
  RestrictedRoute,
  PrivateRoute,
} from "./components";

const MainPage = lazy(() => import("./pages/MainPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/products" element={<Products />} />
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
