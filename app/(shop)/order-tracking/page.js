"use client";

import { API_URL } from "@/lib/config";
import Link from "next/link";
import { useState } from "react";

function OrderTrackigPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({});
  const [orderLoaded, setOrderLoaded] = useState(false);
  const [error, setError] = useState("");

  const getOrder = async () => {
    if (orderNumber.length < 1) {
      setError("Please enter your order id to track");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}orders/${orderNumber}`);
      const data = await res.json();
      if (res.status === 200) {
        setOrder(data.order);
        setOrderLoaded(true);
      }
      if (res.status === 404) {
        setError(data.message);
      }
      console.log(order);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // Date format fucntion
  const formatDate = (isoStr) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .format(new Date(isoStr))
      .replace(",", "")
      .replace(/\s(AM|PM)$/, "$1");
  };

  return (
    <main className="container-xxl shell order-track-page">
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link> ›<b>Track order</b>
      </nav>

      <section className="order-track-heading" aria-labelledby="order-track-title">
        <div>
          <p className="order-track-eyebrow">Your order, every step of the way</p>
          <h1 id="order-track-title">Track your order</h1>
          <p>See the latest delivery updates and estimated arrival time.</p>
        </div>
        <a className="order-track-help-link" href="mailto:support@example.com">
          <i className="bi bi-headset" aria-hidden="true" />
          Need help?
        </a>
      </section>

      {/* Order Number Search Bar */}
      <div className="order-track-search">
        <label htmlFor="order-number">Have another order to track?</label>
        <div className="order-track-search-controls">
          <div className="order-track-input-wrap">
            <i className="bi bi-clipboard" aria-hidden="true" />
            <input
              id="order-number"
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Enter your order number"
            />
          </div>
          <button onClick={getOrder} className="btn btn-m" type="submit">
            Track order
          </button>
        </div>
        {error && <small className="text-danger">{error}</small>}
        <small>Find your order number in your confirmation email or SMS.</small>
      </div>
      {/* Order Contents */}
      {orderLoaded && (
        <div className="order-track-layout" id="tracking-result">
          <section className="order-track-main" aria-label="Order delivery status">
            <article className="order-track-card order-track-delivery">
              <div className="order-track-status">
                <span className="order-track-status-icon" aria-hidden="true">
                  <i className="bi bi-truck" aria-hidden="true" />
                </span>
                <div>
                  <p className="order-track-status-label">We are processing your order</p>
                  <h2>Status: {order.order_status.name}</h2>
                  <p>Our delivery partner is bringing your order to you.</p>
                </div>
                <span className="order-track-live">
                  <i></i> Live update
                </span>
              </div>
              {/* <ol className="order-track-timeline" aria-label="Delivery progress">
                <li className="is-complete">
                  <span className="order-track-step-icon">
                    <i className="bi bi-check-lg" aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Order confirmed</strong>
                    <small>Oct 14 · 10:24 AM</small>
                  </span>
                </li>
                <li className="is-complete">
                  <span className="order-track-step-icon">
                    <i className="bi bi-box-seam" aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Ready for dispatch</strong>
                    <small>Oct 15 · 8:15 AM</small>
                  </span>
                </li>
                <li className="is-current" aria-current="step">
                  <span className="order-track-step-icon">
                    <i className="bi bi-truck" aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Out for delivery</strong>
                    <small>Today · 1:05 PM</small>
                  </span>
                </li>
                <li>
                  <span className="order-track-step-icon">
                    <i className="bi bi-house" aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Delivered</strong>
                    <small>Pending</small>
                  </span>
                </li>
              </ol> */}
            </article>

            <article className="order-track-card order-track-items">
              <div className="order-track-card-heading">
                <div>
                  <h2>Items in this delivery</h2>
                  <p>{order.order_items.length} item</p>
                </div>
                <span className="order-track-item-count">{order.order_items.length}</span>
              </div>
              {order.order_items.map((order_item) => (
                <div className="order-track-product" key={order_item.id}>
                  <div className="order-track-product-image overflow-hidden" aria-hidden="true">
                    <img src={order_item.product.thumbnail_url} alt={order_item.product.name} />
                  </div>
                  <div className="order-track-product-info">
                    <strong>{order_item.product.name}</strong>
                    <span>Quantity: {order_item.quantity}</span>
                  </div>
                  <strong className="order-track-product-price">৳ {(order_item.quantity * order_item.unit_price).toFixed(2)}</strong>
                </div>
              ))}
            </article>
          </section>

          {/* Order Details */}
          <aside className="order-track-sidebar" aria-label="Order details">
            <article className="order-track-card order-track-details">
              <div className="order-track-card-heading">
                <h2>Order details</h2>
                <span className="order-track-paid">COD</span>
              </div>
              <dl>
                <div>
                  <dt>Order number</dt>
                  <dd>{order.order_number}</dd>
                </div>
                <div>
                  <dt>Placed on</dt>
                  <dd>{formatDate(order.created_at)}</dd>
                </div>
                <div>
                  <dt>Payment method</dt>
                  <dd>Cash on delivery</dd>
                </div>
                <div className="order-track-total">
                  <dt>Order total</dt>
                  <dd>৳ {order.total_amount}</dd>
                </div>
              </dl>
            </article>

            {/* Order Address */}
            <article className="order-track-card order-track-address">
              <div className="order-track-card-heading">
                <h2>Delivery address</h2>
                <i className="bi bi-geo-alt" aria-hidden="true" />
              </div>
              <strong>{order.guest_name}</strong>
              <p>
                {order.shipping_address_line}
                <br />
                {order.shipping_district}
              </p>
              <a href="javascript:void(0);">
                <i className="bi bi-telephone" aria-hidden="true" />
                {order.shipping_phone}
              </a>
            </article>

            <article className="order-track-support">
              <span className="order-track-support-icon" aria-hidden="true">
                <i className="bi bi-chat-dots" />
              </span>
              <div>
                <strong>Questions about your delivery?</strong>
                <p>Our care team is here to help, any time.</p>
                <a href="mailto:support@example.com">
                  Contact support <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </article>
          </aside>
        </div>
      )}
    </main>
  );
}

export default OrderTrackigPage;
