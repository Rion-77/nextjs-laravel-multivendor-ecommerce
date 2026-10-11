import Link from "next/link";
import Icon from "../../components/Icon";

async function SingleProducts({ params }) {
  const { id } = await params;

  const res = await fetch(`http://multivendor-ecommerce.test/api/frontend/products/1`);

  const data = await res.json();

  const product = data.product;
  console.log(product);

  return (
    <div className="flex-grow-1 main-col">
      <div className="crumb">
        <Link href="/"> Home </Link> › {product.category.name} ›<b> {product.name} </b>
      </div>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="gal">
            <img
              className="product-image"
              src={product.media.length > 0 ? product.media[0].original_url : "https://placehold.co/600x400"}
              alt={product.name}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box">
            <h1 className="h5 fw-bold mb-1">{product.name}</h1>
            <div className="small text-secondary mb-3">{product.category.name}</div>
            <div className="small">
              By&nbsp;
              <a className="fw-semibold text-decoration-underline" href="index.html">
                {product.vendor.shop_name}
              </a>
            </div>
          </div>
          <form className="box" action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="26" />
            <div className="mrp">
              <s>MRP ৳{product.offer_price}</s>
              <span className="off">
                {(((product.base_price - product.offer_price) / product.base_price) * 100).toFixed(2)}% Off
              </span>
            </div>
            <div className="best mt-1">
              <small>Best Price</small> MRP ৳{product.offer_price}
            </div>
            {/* <select className="sel my-3" name="pack" aria-label="Pack size">
              <option>1x50ml</option>
            </select> */}
            <input className="qt-in mb-3" type="number" name="qty" value="1" min="1" aria-label="Quantity" />
            <button className="btn btn-m w-100 py-2" type="submit">
              Add to cart
            </button>
          </form>
        </div>
      </div>

      {/* Key Details */}
      {/* Used Description value for now replace it later with actual value */}
      <details className="box mt-2">
        <summary className="d-flex justify-content-between align-items-center">
          <h2 className="h6 fw-bold m-0">Key facts</h2>
          <span className="toggle">Show details</span>
        </summary>
        <p className="small text-secondary mt-2 mb-0">{product.description}</p>
      </details>

      {/* Related Products */}
      <div className="box">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h6 fw-bold m-0"><Icon name="clipboard" size={18} /> Alternatives</h2>
          <a className="fw-semibold link-m small" href="index.html">
            View All
          </a>
        </div>
        <div className="row-x rail">
          <article className="pc">
            <span className="od">23% Off</span>
            <a href="product.html">
              <div className="im"><Icon name="bottle" size={48} /></div>
              <h3>SkinO Daily Gel Moisturizer 70ml</h3>
            </a>
            <div className="mt">SkinO</div>
            <div className="pr">
              <b>৳ 300.30</b>
              <s>৳ 390.00</s>
            </div>
            <form action="/cart/add" method="post">
              <input type="hidden" name="product_id" value="8" />
              <button className="btn btn-m w-100" type="submit">
                Add to cart
              </button>
            </form>
          </article>
          <article className="pc">
            <span className="od">25% Off</span>
            <a href="product.html">
              <div className="im"><Icon name="bottle" size={48} /></div>
              <h3>SkinO Gel Cleanser 100ml</h3>
            </a>
            <div className="mt">SkinO</div>
            <div className="pr">
              <b>৳ 195.00</b>
              <s>৳ 260.00</s>
            </div>
            <form action="/cart/add" method="post">
              <input type="hidden" name="product_id" value="9" />
              <button className="btn btn-m w-100" type="submit">
                Add to cart
              </button>
            </form>
          </article>
          <article className="pc">
            <span className="od">5% Off</span>
            <a href="product.html">
              <div className="im"><Icon name="bottle" size={48} /></div>
              <h3>Sunmask</h3>
            </a>
            <div className="mt">Square Pharmaceuticals PLC.</div>
            <div className="pr">
              <b>৳ 237.50</b>
              <s>৳ 250.00</s>
            </div>
            <form action="/cart/add" method="post">
              <input type="hidden" name="product_id" value="10" />
              <button className="btn btn-m w-100" type="submit">
                Add to cart
              </button>
            </form>
          </article>
          <article className="pc">
            <span className="od">45% Off</span>
            <a href="product.html">
              <div className="im"><Icon name="bottle" size={48} /></div>
              <h3>Laikou Matcha Mud Mask</h3>
            </a>
            <div className="mt">Laikou</div>
            <div className="pr">
              <b>৳ 27.50</b>
              <s>৳ 50.00</s>
            </div>
            <form action="/cart/add" method="post">
              <input type="hidden" name="product_id" value="11" />
              <button className="btn btn-m w-100" type="submit">
                Add to cart
              </button>
            </form>
          </article>
          <article className="pc">
            <span className="od">50% Off</span>
            <a href="product.html">
              <div className="im"><Icon name="bottle" size={48} /></div>
              <h3>SkinO Tea Tree Shower Gel</h3>
            </a>
            <div className="mt">SkinO</div>
            <div className="pr">
              <b>৳ 125.00</b>
              <s>৳ 250.00</s>
            </div>
            <form action="/cart/add" method="post">
              <input type="hidden" name="product_id" value="12" />
              <button className="btn btn-m w-100" type="submit">
                Add to cart
              </button>
            </form>
          </article>
          <article className="pc">
            <span className="od">5% Off</span>
            <a href="product.html">
              <div className="im"><Icon name="bottle" size={48} /></div>
              <h3>Mederma Advance Scar Gel</h3>
            </a>
            <div className="mt">Mundipharma</div>
            <div className="pr">
              <b>৳ 1,282.50</b>
              <s>৳ 1,350.00</s>
            </div>
            <form action="/cart/add" method="post">
              <input type="hidden" name="product_id" value="13" />
              <button className="btn btn-m w-100" type="submit">
                Add to cart
              </button>
            </form>
          </article>
        </div>
      </div>

      {/* Descrption */}
      <div className="box ov">
        <h2 className="h6 fw-bold m-0"><Icon name="clipboard" size={18} /> Product overview</h2>
        <h4>Description</h4>

        <p>{product.description}</p>

        <h4>Frequently Asked Questions</h4>
        <div className="faq">
          <p>
            <b>Q: Is Freyias Sunscreen SPF PA 50 ++ For Oily Skin 50ml genuine?</b>
            <br />
            A: Yes. Products are sourced from licensed distributors and checked before dispatch.
          </p>
          <p>
            <b>Q: How fast is delivery?</b>
            <br />
            A: Same-day in major cities and 2-3 days nationwide.
          </p>
        </div>
      </div>
      <div className="disc">
        <b>Disclaimer</b>The information provided is accurate to the best of our knowledge, but packaging, ingredients
        and specifications may change without notice. Check the pack before use and consult a professional for any
        concerns.
      </div>
    </div>
  );
}

export default SingleProducts;
