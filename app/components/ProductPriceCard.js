"use client";
import { useState } from "react";
import AddToCartButton from "./buttons/AddToCart";

function ProductPriceCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (quantity > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };
  return (
    <>
      <div className="box">
        <div className="mrp">
          <s>MRP ৳{(product.base_price * quantity).toFixed(2)}</s>
          <span className="off">
            {(100 - (product.offer_price / product.base_price * 100)).toFixed(2)}% Off
          </span>
        </div>
        <div className="best mt-1">
          <small>Best Price</small> MRP ৳{(product.offer_price * quantity).toFixed(2)}
        </div>
        <div className="qty-stepper mb-3" role="group" aria-label="Quantity selector">
          <button type="button" className="qty-btn" aria-label="Decrease quantity" onClick={decreaseQuantity}>
            <i className="bi bi-dash"></i>
          </button>
          <span className="qty-input" type="number" name="qty" aria-label="Quantity" readOnly>
            {quantity}
          </span>
          <button type="button" className="qty-btn" aria-label="Increase quantity" onClick={increaseQuantity}>
            <i className="bi bi-plus"></i>
          </button>
        </div>
        <AddToCartButton product={product} quantity={quantity} />
      </div>
    </>
  );
}

export default ProductPriceCard;
