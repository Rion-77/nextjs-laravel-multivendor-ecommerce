import Link from "next/link";
import Icon from "../components/Icon";

function SellersPage() {
  return (
    <main className="container-xxl shell">
      <div className="crumb">
        Home › <b>Sellers</b>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-3">
        <div>
          <h1 className="h4 fw-bold mb-1">Our sellers</h1>
          <p className="text-secondary small mb-0">Buy from verified pharmacies and stores across Bangladesh.</p>
        </div>
        <form className="seller-search" action="sellers.html" method="get" role="search">
          <input
            type="search"
            name="q"
            className="form-control"
            placeholder="Search sellers"
            aria-label="Search sellers"
          />
          <button className="btn btn-m px-3">Search</button>
        </form>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
        <div className="col">
          <article className="seller">
            <div className="shop-logo sl-a" aria-hidden="true">
              MC
            </div>
            <div className="flex-grow-1">
              <h2 className="h6 fw-bold mb-1">
                <Link href="/sellers/1">MediCare Pharmacy</Link>
              </h2>
              <div className="small text-secondary"><Icon name="map-pin" size={14} /> Dhaka · <Icon name="star" size={14} /> 4.8</div>
              <div className="seller-meta">
                <span className="chip-s"><Icon name="store" size={14} /> 24 shops</span>
                <span className="chip-s"><Icon name="package" size={14} /> 7 products</span>
              </div>
            </div>
            <Link className="btn btn-m btn-sm px-3" href="/sellers/1">
              Visit store
            </Link>
          </article>
        </div>
        <div className="col">
          <article className="seller">
            <div className="shop-logo sl-b" aria-hidden="true">
              H+
            </div>
            <div className="flex-grow-1">
              <h2 className="h6 fw-bold mb-1">
                <a href="seller-healthplus-drugstore.html">HealthPlus Drugstore</a>
              </h2>
              <div className="small text-secondary"><Icon name="map-pin" size={14} /> Chattogram · <Icon name="star" size={14} /> 4.7</div>
              <div className="seller-meta">
                <span className="chip-s"><Icon name="store" size={14} /> 18 shops</span>
                <span className="chip-s"><Icon name="package" size={14} /> 6 products</span>
              </div>
            </div>
            <a className="btn btn-m btn-sm px-3" href="seller-healthplus-drugstore.html">
              Visit store
            </a>
          </article>
        </div>
        <div className="col">
          <article className="seller">
            <div className="shop-logo sl-c" aria-hidden="true">
              LW
            </div>
            <div className="flex-grow-1">
              <h2 className="h6 fw-bold mb-1">
                <a href="seller-lazz-wellness.html">Lazz Wellness</a>
              </h2>
              <div className="small text-secondary"><Icon name="map-pin" size={14} /> Sylhet · <Icon name="star" size={14} /> 4.6</div>
              <div className="seller-meta">
                <span className="chip-s"><Icon name="store" size={14} /> 12 shops</span>
                <span className="chip-s"><Icon name="package" size={14} /> 6 products</span>
              </div>
            </div>
            <a className="btn btn-m btn-sm px-3" href="seller-lazz-wellness.html">
              Visit store
            </a>
          </article>
        </div>
        <div className="col">
          <article className="seller">
            <div className="shop-logo sl-d" aria-hidden="true">
              BB
            </div>
            <div className="flex-grow-1">
              <h2 className="h6 fw-bold mb-1">
                <a href="seller-babybloom-store.html">BabyBloom Store</a>
              </h2>
              <div className="small text-secondary"><Icon name="map-pin" size={14} /> Dhaka · <Icon name="star" size={14} /> 4.9</div>
              <div className="seller-meta">
                <span className="chip-s"><Icon name="store" size={14} /> 9 shops</span>
                <span className="chip-s"><Icon name="package" size={14} /> 6 products</span>
              </div>
            </div>
            <a className="btn btn-m btn-sm px-3" href="seller-babybloom-store.html">
              Visit store
            </a>
          </article>
        </div>
        <div className="col">
          <article className="seller">
            <div className="shop-logo sl-e" aria-hidden="true">
              TK
            </div>
            <div className="flex-grow-1">
              <h2 className="h6 fw-bold mb-1">
                <a href="seller-technokit-devices.html">Technokit Devices</a>
              </h2>
              <div className="small text-secondary"><Icon name="map-pin" size={14} /> Dhaka · <Icon name="star" size={14} /> 4.5</div>
              <div className="seller-meta">
                <span className="chip-s"><Icon name="store" size={14} /> 7 shops</span>
                <span className="chip-s"><Icon name="package" size={14} /> 6 products</span>
              </div>
            </div>
            <a className="btn btn-m btn-sm px-3" href="seller-technokit-devices.html">
              Visit store
            </a>
          </article>
        </div>
        <div className="col">
          <article className="seller">
            <div className="shop-logo sl-f" aria-hidden="true">
              SG
            </div>
            <div className="flex-grow-1">
              <h2 className="h6 fw-bold mb-1">
                <a href="seller-skinglow-beauty.html">SkinGlow Beauty</a>
              </h2>
              <div className="small text-secondary"><Icon name="map-pin" size={14} /> Bogura · <Icon name="star" size={14} /> 4.7</div>
              <div className="seller-meta">
                <span className="chip-s"><Icon name="store" size={14} /> 15 shops</span>
                <span className="chip-s"><Icon name="package" size={14} /> 12 products</span>
              </div>
            </div>
            <a className="btn btn-m btn-sm px-3" href="seller-skinglow-beauty.html">
              Visit store
            </a>
          </article>
        </div>
      </div>
    </main>
  );
}

export default SellersPage;
