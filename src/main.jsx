import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/auth/AuthProvider";
import { ShoppingCartProvider } from "./context/shoppingCart/ShoppingCartProvider";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter basename="/e-commerce-talento-tech">
    <ShoppingCartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ShoppingCartProvider>
  </BrowserRouter>
  // </StrictMode>
);
