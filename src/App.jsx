import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./feature/products/Products";
import Product from "./feature/product/Product";
import { Login } from "./feature/login/Login";
import Buy from "./feature/Buy/Buy";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/buy" element={<Buy />}></Route>
        </Route>
      </Route>
      {/* Route without layout */}
      <Route path="/login" element={<Login />}></Route>
      {/* Default */}
      <Route path="*" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
