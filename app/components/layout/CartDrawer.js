import Link from "next/link";
import Icon from "../Icon";

function CartDrawer() {
  return (
    <div className="offcanvas offcanvas-end" id="cart" tabindex="-1" aria-label="Cart">
      <div className="offcanvas-header border-bottom">
        <h5 className="fw-bold m-0">1 Item</h5>
        <form action="/cart/clear" method="post" className="ms-auto">
          <button className="ico text-secondary small" type="submit">
            <Icon name="trash" size={14} /> Clear All
          </button>
        </form>
        <button className="btn-close ms-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column p-3">
        <div className="flex-grow-1">
          <div className="ci">
            <a className="th" href="product.html">
              <Icon name="tag" size={24} />
            </a>
            <div className="flex-grow-1">
              <div className="fw-semibold small">
                Freyias Sunscreen SPF PA 50 ++ For Oily Skin 50ml
                <span className="text-secondary">50ml</span>
              </div>
              <form action="/cart/update" method="post" className="d-flex gap-2 mt-2 flex-wrap">
                <input type="hidden" name="product_id" value="26" />
                <select className="sel" name="pack" aria-label="Pack size">
                  <option>1x50ml</option>
                </select>
                <input className="qty-in" type="number" name="qty" value="2" min="1" aria-label="Quantity" />
                <button className="btn btn-outline-secondary btn-sm" type="submit">
                  Update
                </button>
              </form>
            </div>
            <div className="text-end">
              <form action="/cart/remove" method="post">
                <input type="hidden" name="product_id" value="26" />
                <button className="ico" type="submit" aria-label="Remove">
                  <Icon name="trash" size={18} />
                </button>
              </form>
              <div className="fw-semibold">৳ 574.00</div>
              <s className="small text-secondary">৳ 700.00</s>
            </div>
          </div>
        </div>
        <div>
          <div className="save mb-3">You are saving ৳ 126.00 in this order</div>
          <div className="ln">
            <span>Subtotal (MRP)</span>
            <span>৳ 700.00</span>
          </div>
          <div className="ln">
            <span>Discount Applied</span>
            <span className="text-red">-৳ 126.00</span>
          </div>
          <hr className="my-2" />
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Total Amount</span>
            <span>৳ 574.00</span>
          </div>
          <Link href="/checkout" className="btn btn-m w-100 py-2" >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
