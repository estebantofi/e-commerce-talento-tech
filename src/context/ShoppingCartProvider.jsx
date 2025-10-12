import { useState } from "react";

import { ShoppingCartContext } from "./ShoppingCartContext";

import { ProductsControl } from "../utils/ProductsControl";

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getCountProducts = () =>
    products.reduce((acc, product) => acc + product.quantity, 0);

  const addProductCart = (product) =>
    setProducts(ProductsControl(products, product, "plus"));

  const subtractProductCart = (product) =>
    setProducts(ProductsControl(products, product, "minus"));

  const deleteProductCart = () => {
    setProducts([]);
  };

  const cleanShoppingCart = () => {
    setProducts([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        addProductCart,
        subtractProductCart,
        deleteProductCart,
        cleanShoppingCart,
        getCountProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
