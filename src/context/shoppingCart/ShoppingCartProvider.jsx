import { useState } from "react";

import { ShoppingCartContext } from "./ShoppingCartContext";

import {
  addProduct,
  putProducts,
  substractProduct,
} from "../../utils/ProductsControl";

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(null);

  const getCountProducts = () =>
    products.reduce((acc, product) => acc + product.quantity, 0);

  const addProductCart = (product) => {
    const result = addProduct(products, product);

    putProducts(result, cartId)
      .then(() => {
        setProducts(result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const subtractProductCart = (product) => {
    const result = substractProduct(products, product);

    putProducts(result, cartId)
      .then(() => {
        setProducts(result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const deleteProductCart = () => {
    setProducts([]);
  };

  const cleanShoppingCart = () => {
    putProducts([], cartId)
      .then(() => {
        setProducts([]);
      })
      .catch((error) => {
        console.error("error", error);
      });
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
        setProducts,
        setCartId,
        cartId,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
