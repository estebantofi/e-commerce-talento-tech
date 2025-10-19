import { createContext, useContext } from "react";

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error("ShoppingCartProvider is not used");
  }

  return context;
};
