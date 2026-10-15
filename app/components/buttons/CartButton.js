"use client";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
import Icon from "../Icon";

function CartButton() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  return (
    <button className="cartbtn" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-label="Open cart">
      <Icon name="cart" />
      <span className="bdg">{cartProducts.length}</span>
    </button>
  );
}

export default CartButton;
