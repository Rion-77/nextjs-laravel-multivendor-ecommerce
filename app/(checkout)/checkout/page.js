"use client";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "@/app/context/CartContext";
import Icon from "../../components/Icon";
import InputField from "../../components/form/InputField";
import TextareaField from "../../components/form/TextareaField";
import { API_URL } from "@/lib/config";
import Link from "next/link";

function CheckoutPage() {
  // Cart vairables and functions
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const cartSubtotal = cartProducts.reduce(
    (accumulator, product) => accumulator + Number(product.base_price) * Number(product.quantity),
    0,
  );

  const cartTotal = cartProducts.reduce((accumulator, product) => {
    const price = Number(product.offer_price || product.base_price || 0) * Number(product.quantity);
    return accumulator + price;
  }, 0);

  const cartDiscount = cartSubtotal - cartTotal;

  // Order variables and functions
  const [orderDetails, setOrderDetails] = useState({
    guest_name: "",
    guest_phone: "",
    guest_email: "",
    shipping_address_line: "",
    shipping_district: "",
  });

  const [errors, setErrors] = useState({});
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState();
  const [loading, setLoading] = useState(false);

  const handleOrderPlacement = async () => {
    const orderItems = cartProducts.map((product) => ({ id: product.id, quantity: product.quantity }));
    setLoading(true);

    try {
      // const res = await fetch(`${API_URL}orders`, {
      const res = await fetch(`http://multivendor-ecommerce.test/api/frontend/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...orderDetails,
          order_items: orderItems,
        }),
      });

      const status = res.status;
      console.log(status);

      const data = await res.json();
      console.log(data);
      if (status == 422) {
        setErrors(data.errors);
      }

      if (status == 201) {
        setCartProducts([]);
        setOrderCompleted(true);
        setOrderNumber(data.order_number);
        setOrderDetails({
          guest_name: "",
          guest_phone: "",
          guest_email: "",
          shipping_address_line: "",
          shipping_district: "",
        });
        setErrors({});
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  //Removes backdrop of cart
  useEffect(() => {
    const offcanvas = document.getElementById("cart");
    if (!offcanvas) return;

    const btn = document.createElement("button");
    btn.setAttribute("data-bs-dismiss", "offcanvas");
    btn.setAttribute("data-bs-target", "#cart");
    btn.style.display = "none";

    document.body.appendChild(btn);
    btn.click();
    btn.remove();
  }, []);

  return (
    <div className="container-xxl shell co position-relative">
      {/* Loader */}
      {loading && (
        <div className="checkout-loader-overlay">
          <div className="checkout-loader-spinner"></div>
        </div>
      )}

      {/* Order Complete */}
      {orderCompleted && cartProducts.length < 1 && (
        <section className="order-confirmation" aria-labelledby="order-confirmation-title" role="status">
          <div className="order-confirmation-icon">
            <Icon name="check" size={36} />
          </div>
          <p className="order-confirmation-eyebrow">Order confirmed</p>
          <h1 id="order-confirmation-title">Thank you for your order!</h1>
          <p className="order-confirmation-message">
            We’ve received your order and will prepare it for delivery. Keep your order number handy if you need to
            contact us.
          </p>
          <div className="order-confirmation-number">
            <span>Order number</span>
            <strong>{orderNumber}</strong>
          </div>

          <Link href="/" className="btn btn-m px-4 py-2">
            Continue shopping
          </Link>
        </section>
      )}

      {/* Empty Cart */}

      {cartProducts.length < 1 && !orderCompleted && (
        <div className="empty-cart-state">
          <div className="empty-cart-icon">
            <Icon name="cart" size={40} />
          </div>
          <h5>Your cart is empty</h5>
          <p>Looks like you haven’t added anything to your cart yet.</p>
          <Link href="/" className="btn btn-m px-4 py-2">
            Continue shopping
          </Link>
        </div>
      )}

      {/* Order Complete */}
      {cartProducts.length > 0 && (
        <>
          <div className="crumb">
            Home › Cart › <b>Checkout</b>
          </div>
          <div className="row g-3 g-lg-4">
            <div className="col-lg-7">
              <form id="co">
                <div className="box">
                  <div className="co-h">
                    <i>1</i>Delivery details
                  </div>
                  {/* {errors && <p className="text-danger py-2">{errors.message}</p>} */}
                  <div className="row g-3">
                    {/* Name Field */}
                    <InputField
                      label="Full name"
                      name="guest_name"
                      required={true}
                      placeholder="e.g. Shahed Ahmed"
                      value={orderDetails.guest_name}
                      onChange={(e) => {
                        setOrderDetails({ ...orderDetails, guest_name: e.target.value });
                      }}
                      errors={errors}
                    />

                    {/* Mobile Number Field */}
                    <InputField
                      label="Mobile number"
                      name="guest_phone"
                      type="number"
                      required={true}
                      placeholder="e.g. 01XXXXXXXXX"
                      value={orderDetails.guest_phone}
                      onChange={(e) => {
                        setOrderDetails({ ...orderDetails, guest_phone: e.target.value });
                      }}
                      errors={errors}
                    />

                    {/* Email Field */}
                    <InputField
                      label="Email (optional)"
                      name="guest_email"
                      className="col-md-12"
                      placeholder="e.g. you@example.com"
                      value={orderDetails.guest_email}
                      onChange={(e) => {
                        setOrderDetails({ ...orderDetails, guest_email: e.target.value });
                      }}
                      errors={errors}
                    />

                    {/* Shipping Field */}
                    <TextareaField
                      label="Full address"
                      name="shipping_address_line"
                      className="col-md-12"
                      rows="2"
                      placeholder="House, road, area"
                      value={orderDetails.shipping_address_line}
                      onChange={(e) => {
                        setOrderDetails({ ...orderDetails, shipping_address_line: e.target.value });
                      }}
                      errors={errors}
                    />

                    {/* Shipping District Field */}
                    <InputField
                      label="District"
                      name="shipping_district"
                      className="col-md-12"
                      required={true}
                      placeholder="e.g. Dhaka"
                      value={orderDetails.shipping_district}
                      onChange={(e) => {
                        setOrderDetails({ ...orderDetails, shipping_district: e.target.value });
                      }}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="box">
                  <div className="co-h">
                    <i>2</i>Payment method
                  </div>
                  <label className="pay">
                    <input type="radio" name="pay" readOnly checked />
                    <span className="e">
                      <Icon name="money" />
                    </span>
                    <span>
                      <b>Cash on delivery</b>
                      <small>Pay when your order arrives</small>
                    </span>
                  </label>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="col-lg-5">
              <div className="box sum">
                <div className="co-h">
                  <i>3</i>Order summary
                </div>
                {cartProducts.map((product) => (
                  <div className="sum-item" key={product.id}>
                    <div className="th overflow-hidden">
                      <img className="cart-product-image" src={product.image} />
                    </div>
                    <div className="flex-grow-1">
                      <div className="small fw-semibold">{product.name}</div>
                      <div className="small text-secondary"> × {product.quantity}</div>
                    </div>
                    <div className="text-end">
                      <div className="fw-semibold">৳ {(product.offer_price * product.quantity).toFixed(2)}</div>
                      <s className="small text-secondary">৳ {(product.base_price * product.quantity).toFixed(2)}</s>
                    </div>

                    {/* <div className="small fw-semibold">৳ 574.00</div> */}
                  </div>
                ))}
                {/* <div className="cpn my-3">
              <input
                className="form-control form-control-sm"
                form="co"
                name="coupon"
                placeholder="Coupon code"
                aria-label="Coupon code"
              />
              <button
                type="submit"
                form="co"
                formaction="/checkout/coupon"
                formnovalidate
                className="btn btn-outline-secondary btn-sm px-3"
              >
                Apply
              </button>
            </div> */}
                <div className="ln">
                  <span>Subtotal (MRP)</span>
                  <span>৳ {cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="ln">
                  <span>Discount Applied</span>
                  <span className="text-red">-৳ {cartDiscount.toFixed(2)}</span>
                </div>
                <div className="ln">
                  <span>Delivery</span>
                  <span>Cash On Delivery</span>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                  <span>Total Amount</span>
                  <span>৳ {cartTotal.toFixed(2)}</span>
                </div>
                <button type="button" onClick={handleOrderPlacement} form="co" className="btn btn-m w-100 py-2">
                  Place order
                </button>
                <p className="small text-secondary text-center mt-2 mb-0">
                  Free delivery on orders over ৳1,500. By placing your order you agree to our Terms &amp; Conditions.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
