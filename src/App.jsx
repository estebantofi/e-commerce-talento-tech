import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Products from "./feature/products/Products";
import SuperDeals from "./feature/superdeals/SuperDeals";
import Cart from "./feature/cart/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/superdeals" element={<SuperDeals />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
