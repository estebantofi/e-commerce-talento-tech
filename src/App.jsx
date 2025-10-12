import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./feature/products/Products";
import SuperDeals from "./feature/superdeals/SuperDeals";
import Cart from "./feature/cart/Cart";
import Product from "./feature/product/Product";
import Login from "./feature/login/Login";

import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/superdeals" element={<SuperDeals />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
