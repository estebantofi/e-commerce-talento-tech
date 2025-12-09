import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./feature/products/Products";
import Product from "./feature/product/Product";
import { Login } from "./feature/login/Login";
import Buy from "./feature/Buy/Buy";

import Layout from "./components/Layout";

import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteIsAdmin from "./components/ProtectedRouteIsAdmin";
import ProtectedRouteIsUser from "./components/ProtectedRouteIsUser";

function App() {
  return (
    <Routes>
      {/* Public Web */}
      <Route element={<ProtectedRouteIsUser />}>
        <Route element={<Layout />}>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/Product/:id" element={<Product />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/buy" element={<Buy />}></Route>
          </Route>
        </Route>
        {/* Route without layout */}
        <Route path="/login" element={<Login />}></Route>
      </Route>
      {/* Dashboard Privated*/}
      <Route element={<ProtectedRouteIsAdmin />}>
        <Route path="/dashboard" element={<Layout />}>
          <Route path="products" element={<Products />}></Route>
        </Route>
      </Route>
      {/* Route without layout */}
      <Route path="/dashboard/login" element={<Login />}></Route>
      {/* Default */}
      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default App;
