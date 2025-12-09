import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/auth/AuthProvider";
import { ShoppingCartProvider } from "./context/shoppingCart/ShoppingCartProvider";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Router>
    <ShoppingCartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ShoppingCartProvider>
  </Router>
  // </StrictMode>
);
