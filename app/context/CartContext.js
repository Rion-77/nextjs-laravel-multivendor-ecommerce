"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [isLocalCartLoaded, setIsLocalCartLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("careKart_cart");
      if (saved) setCartProducts(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to read cart", e);
    }
    setIsLocalCartLoaded(true);
  }, []);

   useEffect(() => {
    if (!isLocalCartLoaded) return;
    localStorage.setItem("careKart_cart", JSON.stringify(cartProducts));
  }, [cartProducts, isLocalCartLoaded]);

  return <CartContext.Provider value={{ cartProducts, setCartProducts }}>{children}</CartContext.Provider>;
}

export default CartProvider;
