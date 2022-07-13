import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [laterData, setLaterData] = useState([]);

  return (
    <CartContext.Provider
      value={{ cartData, setCartData, laterData, setLaterData }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
