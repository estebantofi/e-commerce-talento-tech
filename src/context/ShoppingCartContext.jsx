import { createContext, useContext } from "react";

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  return context;
};
