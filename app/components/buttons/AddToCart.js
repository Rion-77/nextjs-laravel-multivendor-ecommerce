"use client";

import { CartContext } from "@/app/context/CartContext";
import { useContext, useEffect } from "react";

function AddToCartButton({ product }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  // Add product to cart
  const addToCart = (product) => {
    const newProduct = {
      id: product.id,
      name: product.name,
      quantity: 1,
      offer_price: product.offer_price ?? 0,
      base_price: product.base_price,
      image: product.media.length > 0 ? product.media[0].original_url : "https://placehold.co/600x400",
    };

    setCartProducts((prev) => {
      const productExists = prev.some((product) => product.id == newProduct.id);

      if (productExists) {
        return prev.map((product) => {
          if (product.id == newProduct.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        return [...prev, newProduct];
      }
    });
  };

  // // Save cart to localStorage
  // useEffect(() => {
  //   localStorage.setItem("careKart_cart", JSON.stringify(cartProducts));

  //   console.log(cartProducts);
  // }, [cartProducts]);

  return (
    <button onClick={() => addToCart(product)} className="btn btn-m w-100 py-2" type="button">
      Add to cart
    </button>
  );
}

export default AddToCartButton;
