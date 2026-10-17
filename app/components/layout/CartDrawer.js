"use client";

import Link from "next/link";
import Icon from "../Icon";

import { CartContext } from "@/app/context/CartContext";
import { useContext, useEffect } from "react";

function CartDrawer() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const cartHasProduct = cartProducts.length > 0;

  const cartSubtotal = cartProducts.reduce(
    (accumulator, product) => accumulator + Number(product.base_price) * Number(product.quantity),
    0,
  );

  const cartTotal = cartProducts.reduce((accumulator, product) => {
    const price = Number(product.offer_price || product.base_price || 0) * Number(product.quantity);
    return accumulator + price;
  }, 0);

  const cartDiscount = cartSubtotal - cartTotal;

  // Increase Product Quantity
  const increaseQuantity = (id) => {
    setCartProducts((prev) => {
      const productExists = prev.some((product) => product.id == id);

      if (productExists) {
        return prev.map((product) => {
          if (product.id == id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  };
  // Decrease Product Quantity
  const decreaseQuantity = (id) => {
    setCartProducts((prev) => {
      const productExists = prev.some((product) => product.id == id);

      if (productExists) {
        return prev.map((product) => {
          if (product.id == id && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  // Delete Product

  const deleteProduct = (id) => {
    setCartProducts((prev) => {
      const productExists = prev.some((product) => product.id == id);

      if (productExists) {
        return prev.filter((product) => product.id != id);
      }
    });
  };

  //Clear cart
  const clearAllProducts = () => {
    setCartProducts([]);
  };

  // const closeOffcanvas = async () => {
  //   const { Offcanvas } = await import("bootstrap");
  //   const el = document.getElementById("cart");
  //   if (el) Offcanvas.getInstance(el)?.hide();
  // };

  return (
    <div className="offcanvas offcanvas-end" id="cart" tabIndex="-1" aria-label="Cart">
      {!cartHasProduct && (
        <div className="empty-cart-state">
          <div className="empty-cart-icon">
            <Icon name="cart" size={40} />
          </div>
          <h5>Your cart is empty</h5>
          <p>Looks like you haven’t added anything to your cart yet.</p>
          <button data-bs-dismiss="offcanvas" href="/" className="btn btn-m px-4 py-2">
            Continue shopping
          </button>
        </div>
      )}
      {cartHasProduct && (
        <>
          <div className="offcanvas-header border-bottom">
            <h5 className="fw-bold m-0">{cartProducts.length} Item</h5>
            <form action="/cart/clear" method="post" className="ms-auto">
              <button onClick={clearAllProducts} className="ico text-secondary small" type="button">
                <Icon name="trash" size={14} /> Clear All
              </button>
            </form>
            <button className="btn-close ms-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column p-3">
            {cartProducts.map((product) => (
              <div className="flex-grow-1" key={product.id}>
                <div className="ci">
                  <div className="th overflow-hidden">
                    <img className="cart-product-image" src={product.image} />
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold small">{product.name}</div>
                    <form action="/cart/update" method="post" className="d-flex gap-2 mt-2 flex-wrap">
                      <input type="hidden" name="product_id" value="26" />

                      <div className="cart-quantity">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="cart-quantity-btn"
                          type="button"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <input
                          className="qty-in"
                          type="number"
                          name="qty"
                          min="1"
                          readOnly
                          value={product.quantity}
                          aria-label="Quantity"
                        />
                        {/* onClick={addToCart} */}
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="cart-quantity-btn"
                          type="button"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="text-end">
                    <form action="/cart/remove" method="post">
                      <input type="hidden" name="product_id" value="26" />
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="ico"
                        type="button"
                        aria-label="Remove"
                      >
                        <Icon name="trash" size={18} />
                      </button>
                    </form>
                    <div className="fw-semibold">৳ {(product.offer_price * product.quantity).toFixed(2)}</div>
                    <s className="small text-secondary">৳ {(product.base_price * product.quantity).toFixed(2)}</s>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <div className="save mb-3">You are saving ৳ {cartDiscount.toFixed(2)} in this order</div>
              <div className="ln">
                <span>Subtotal (MRP)</span>
                <span>৳ {cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="ln">
                <span>Discount Applied</span>
                <span className="text-red">-৳ {cartDiscount.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total Amount</span>
                <span>৳ {cartTotal.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="btn btn-m w-100 py-2">
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;
