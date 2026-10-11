import Icon from "../../components/Icon";

function SellerSinglePage() {
  return (
    <main className="container-xxl shell">
      <div className="crumb">
        Home › <a href="sellers.html">Sellers</a> › <b>Technokit Devices</b>
      </div>
      <section className="s-hero">
        <div className="s-cover"></div>
        <div className="s-body">
          <div className="shop-logo lg sl-e" aria-hidden="true">
            TK
          </div>
          <div className="flex-grow-1">
            <h1 className="h4 fw-bold mb-1">
              Technokit Devices
              <span className="chip-s ok-s"><Icon name="check" size={14} /> Verified seller</span>
            </h1>
            <div className="small text-secondary"><Icon name="map-pin" size={14} /> Dhaka · <Icon name="star" size={14} /> 4.5 rating</div>
          </div>
          <div className="s-stats">
            <div>
              <b>7</b>
              <span>Shops</span>
            </div>
            <div>
              <b>6</b>
              <span>Products</span>
            </div>
            <div>
              <b>4.5</b>
              <span>Rating</span>
            </div>
          </div>
        </div>
      </section>
      <div className="row g-3 mt-1">
        <aside className="col-lg-3">
          <div className="box">
            <h2 className="h6 fw-bold">About</h2>
            <p className="small text-secondary mb-0">
              Thermometers, oximeters, blood pressure monitors and other certified health devices.
            </p>
          </div>
          <div className="box">
            <h2 className="h6 fw-bold">Shop locations</h2>
            <ul className="s-list">
              <li><Icon name="map-pin" size={14} /> Dhanmondi</li>
              <li><Icon name="map-pin" size={14} /> Gulshan</li>
              <li><Icon name="map-pin" size={14} /> Mirpur</li>
              <li><Icon name="map-pin" size={14} /> Uttara</li>
            </ul>
            <div className="small text-secondary">+ 3 more shops</div>
          </div>
        </aside>
        <div className="col-lg-9">
          <div className="sec mt-0">
            <h2>All products (6)</h2>
            <a href="sellers.html">All sellers</a>
          </div>
          <div className="pgrid">
            <article className="pc">
              <span className="od">28% Off</span>
              <a href="product.html">
                <div className="im"><Icon name="thermometer" size={48} /></div>
                <h3>Thermometer Digital</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 216.00</b>
                <s>৳ 300.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="20" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">15% Off</span>
              <a href="product.html">
                <div className="im"><Icon name="thermometer" size={48} /></div>
                <h3>Pulse Oximeter (Jumper)</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 1,572.50</b>
                <s>৳ 1,850.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="21" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">20% Off</span>
              <a href="product.html">
                <div className="im"><Icon name="thermometer" size={48} /></div>
                <h3>BP Machine Digital (Jumper)</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 2,240.00</b>
                <s>৳ 2,800.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="22" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">18% Off</span>
              <a href="product.html">
                <div className="im"><Icon name="thermometer" size={48} /></div>
                <h3>Electric Hot Water Bag</h3>
              </a>
              <div className="mt">Technokit Healthcare Ltd</div>
              <div className="pr">
                <b>৳ 451.00</b>
                <s>৳ 550.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="23" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">20% Off</span>
              <a href="product.html">
                <div className="im"><Icon name="thermometer" size={48} /></div>
                <h3>Getwell Thermometer</h3>
              </a>
              <div className="mt">Getwell</div>
              <div className="pr">
                <b>৳ 200.00</b>
                <s>৳ 250.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="24" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
            <article className="pc">
              <span className="od">10% Off</span>
              <a href="product.html">
                <div className="im"><Icon name="thermometer" size={48} /></div>
                <h3>Blood Lancets (GetWell)</h3>
              </a>
              <div className="mt">Getwell</div>
              <div className="pr">
                <b>৳ 67.50</b>
                <s>৳ 75.00</s>
              </div>
              <form action="/cart/add" method="post">
                <input type="hidden" name="product_id" value="25" />
                <button className="btn btn-m w-100" type="submit">
                  Add to cart
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SellerSinglePage;
