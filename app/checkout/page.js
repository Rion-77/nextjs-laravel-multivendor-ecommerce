import Icon from "../components/Icon";

function CheckoutPage() {
  return (
    <div className="container-xxl shell co">
      <div className="crumb">
        Home › Cart › <b>Checkout</b>
      </div>
      <div className="row g-3 g-lg-4">
        <div className="col-lg-7">
          <form id="co" action="/checkout" method="post" enctype="multipart/form-data">
            <div className="box">
              <div className="co-h">
                <i>1</i>Delivery details
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="l" for="name">
                    Full name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    autocomplete="name"
                    placeholder="e.g. Rahim Uddin"
                  />
                </div>
                <div className="col-md-6">
                  <label className="l" for="phone">
                    Mobile number
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="(\+?88)?01[3-9][0-9]{8}"
                    title="Enter a valid Bangladeshi mobile number"
                    autocomplete="tel"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <div className="col-12">
                  <label className="l" for="email">
                    Email (optional)
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-md-5">
                  <label className="l" for="area">
                    Delivery area
                  </label>
                  <select className="form-select" id="area" name="area" required>
                    <option value="" disabled selected>
                      Select area
                    </option>
                    <option value="dhaka">Dhaka city · ৳60 · same day</option>
                    <option value="metro">Chattogram / Sylhet / Bogura city · ৳60 · same day</option>
                    <option value="other">Rest of Bangladesh · ৳120 · 2-3 days</option>
                  </select>
                </div>
                <div className="col-md-7">
                  <label className="l" for="addr">
                    Full address
                  </label>
                  <textarea
                    className="form-control"
                    id="addr"
                    name="address"
                    rows="2"
                    required
                    autocomplete="street-address"
                    placeholder="House, road, area"
                  ></textarea>
                </div>
                <div className="col-12">
                  <label className="l" for="note">
                    Note for the pharmacist (optional)
                  </label>
                  <input className="form-control" id="note" name="note" placeholder="Any instructions" />
                </div>
                <div className="col-12">
                  <label className="l" for="rx">
                    Upload prescription (if your order needs one)
                  </label>
                  <input className="form-control" id="rx" name="prescription" type="file" accept="image/*,.pdf" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="co-h">
                <i>2</i>Payment method
              </div>
              <label className="pay">
                <input type="radio" name="pay" value="cod" checked />
                <span className="e"><Icon name="money" /></span>
                <span>
                  <b>Cash on delivery</b>
                  <small>Pay when your order arrives</small>
                </span>
              </label>
              <label className="pay">
                <input type="radio" name="pay" value="bkash" />
                <span className="e"><Icon name="phone" /></span>
                <span>
                  <b>bKash</b>
                  <small>Pay with mobile banking</small>
                </span>
              </label>
              <label className="pay">
                <input type="radio" name="pay" value="card" />
                <span className="e"><Icon name="credit-card" /></span>
                <span>
                  <b>Credit / debit card</b>
                  <small>Secure, SSL-encrypted payment</small>
                </span>
              </label>
            </div>
          </form>
        </div>
        <div className="col-lg-5">
          <div className="box sum">
            <div className="co-h">
              <i>3</i>Order summary
            </div>
            <div className="sum-item">
              <div className="th"><Icon name="tag" size={24} /></div>
              <div className="flex-grow-1">
                <div className="small fw-semibold">Freyias Sunscreen SPF PA 50 ++ For Oily Skin 50ml</div>
                <div className="small text-secondary">50ml × 2</div>
              </div>
              <div className="small fw-semibold">৳ 574.00</div>
            </div>
            <div className="cpn my-3">
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
            </div>
            <div className="ln">
              <span>Subtotal (MRP)</span>
              <span>৳ 700.00</span>
            </div>
            <div className="ln">
              <span>Discount Applied</span>
              <span className="text-red">-৳ 126.00</span>
            </div>
            <div className="ln">
              <span>Delivery</span>
              <span>Calculated by area</span>
            </div>
            <hr className="my-2" />
            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Total Amount</span>
              <span>৳ 574.00</span>
            </div>
            <button type="submit" form="co" className="btn btn-m w-100 py-2">
              Place order
            </button>
            <p className="small text-secondary text-center mt-2 mb-0">
              Free delivery on orders over ৳1,500. By placing your order you agree to our Terms &amp; Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
