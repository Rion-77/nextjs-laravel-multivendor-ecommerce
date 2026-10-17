"use client";

import { CartContext } from "@/app/context/CartContext";
import { useContext, useEffect, useRef, useState } from "react";

function AddToCartButton({ product, quantity = 1 }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  // const [addAlert, setAddAlert] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const newProduct = {
      id: product.id,
      name: product.name,
      quantity: quantity,
      offer_price: product.offer_price ?? 0,
      base_price: product.base_price,
      image: product.thumbnail_url,
    };

    setCartProducts((prev) => {
      const productExists = prev.some((product) => product.id == newProduct.id);

      if (productExists) {
        return prev.map((product) => {
          if (product.id == newProduct.id) {
            return { ...product, quantity: product.quantity + quantity };
          } else {
            return product;
          }
        });
      } else {
        return [...prev, newProduct];
      }
    });

    // setAddAlert(true);
  };

  // Dismiss alert
  // useEffect(() => {
  //   if (addAlert) {
  //     setTimeout(() => {
  //       setAddAlert(false);
  //     }, 1500);
  //   }
  // }, [addAlert]);

  return (
    <>
      <button onClick={() => addToCart(product)} className="btn btn-m w-100 py-2" type="button">
        Add to cart
      </button>

      {/* <div
        className={`cart-alert ${addAlert ? "is-visible" : ""}`}
        id="cart-alert"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span>Added To Your Cart</span>
        <button onClick={()=> {setAddAlert(false)}} className="cart-alert-close" type="button" aria-label="Dismiss notification">
          &times;
        </button>
        <span className="cart-alert-progress" aria-hidden="true"></span>
      </div> */}
    </>
  );
}

export default AddToCartButton;
