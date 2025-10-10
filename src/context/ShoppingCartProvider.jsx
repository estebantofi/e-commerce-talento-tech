import { useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getCountProducts = () => products.length;

  const addProductCart = (product) => setProducts([...products, product]);

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
        deleteProductCart,
        cleanShoppingCart,
        getCountProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
