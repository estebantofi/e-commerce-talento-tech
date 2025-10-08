import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./feature/products/Products";
import SuperDeals from "./feature/superdeals/SuperDeals";
import Cart from "./feature/cart/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/superdeals" element={<SuperDeals />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
