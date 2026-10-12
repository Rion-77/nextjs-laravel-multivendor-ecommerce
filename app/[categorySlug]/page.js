import Link from "next/link";
// import Icon from "../../components/Icon";
import Icon from "../components/Icon";

// async function getCategoryProduct(id) {
//   "use cache";

//   const res = await fetch(
//     `http://multivendor-ecommerce.test/api/frontend/products/1`,
//   );

//   return res.json();
// }


async function SingleProducts({ params }) {
  const { categorySlug } = await params;

  const res = await fetch(
    `http://multivendor-ecommerce.test/api/frontend/products/1`,
  );

  const data = await res.json();

  const product = data.product;
  console.log(product);

  return (
    <div className="flex-grow-1 main-col">
      {/* <!-- ========== CATEGORY PAGE ========== --> */}
      <nav className="category-crumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        <span>›</span>
        <a href="index.html#categories">Category</a>
        <span>›</span>
        <a href="category.html">OTC Medicine</a>
        <span>›</span>
        <b>Gastric &amp; Digestive Care</b>
      </nav>

      {/* <section className="category-browse" aria-labelledby="browse-heading">
        <h1 id="browse-heading">Browse in Gastric &amp; Digestive Care</h1>
        <div
          className="category-chips"
          role="group"
          aria-label="Filter by subcategory"
        >
          <button
            className="category-chip active"
            type="button"
            data-category="all"
            aria-pressed="true"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#bowl"></use>
              </svg>
            </span>
            (All)
          </button>
          <button
            className="category-chip"
            type="button"
            data-category="antiulcerant"
            aria-pressed="false"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#capsule"></use>
              </svg>
            </span>
            Antiulcerant
          </button>
          <button
            className="category-chip"
            type="button"
            data-category="antiemetic"
            aria-pressed="false"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#flower"></use>
              </svg>
            </span>
            Anti-emetic &amp; Nausea Relief
          </button>
          <button
            className="category-chip"
            type="button"
            data-category="antacid"
            aria-pressed="false"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#heart"></use>
              </svg>
            </span>
            Antacid &amp; Alginate
          </button>
          <button
            className="category-chip"
            type="button"
            data-category="ors"
            aria-pressed="false"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#droplet"></use>
              </svg>
            </span>
            ORS &amp; Electrolytes
          </button>
          <button
            className="category-chip"
            type="button"
            data-category="amoebiasis"
            aria-pressed="false"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#shield"></use>
              </svg>
            </span>
            Amoebiasis &amp; Gut Infection
          </button>
          <button
            className="category-chip"
            type="button"
            data-category="laxative"
            aria-pressed="false"
          >
            <span>
              <svg className="ui-icon" aria-hidden="true" focusable="false">
                <use href="icons.svg#leaf"></use>
              </svg>
            </span>
            Laxative &amp; Constipation Relief
          </button>
        </div>
      </section> */}

      <form className="category-filters" role="search">
        <label className="filter-brand">
          <span aria-hidden="true">▽</span>
          <b>Brand</b>
          <select id="brand-filter" aria-label="Filter by brand">
            <option value="">All Brands</option>
            <option value="Square Pharmaceuticals PLC.">
              Square Pharmaceuticals PLC.
            </option>
            <option value="Incepta Pharmaceuticals Ltd.">
              Incepta Pharmaceuticals Ltd.
            </option>
            <option value="Eskayef Bangladesh Ltd.">
              Eskayef Bangladesh Ltd.
            </option>
            <option value="Beximco Pharmaceuticals Ltd.">
              Beximco Pharmaceuticals Ltd.
            </option>
          </select>
        </label>
        <label className="filter-select">
          <span className="visually-hidden">Price range</span>
          <select id="price-filter" aria-label="Filter by price range">
            <option value="">Price Range</option>
            <option value="0-50">Under ৳50</option>
            <option value="50-100">৳50–৳100</option>
            <option value="100-500">৳100–৳500</option>
            <option value="500-999999">Over ৳500</option>
          </select>
        </label>
        <label className="filter-select">
          <span className="visually-hidden">Discount</span>
          <select id="discount-filter" aria-label="Filter by discount">
            <option value="">Discount</option>
            <option value="10">10% off or more</option>
            <option value="20">20% off or more</option>
          </select>
        </label>
        <label className="category-search">
          <span className="visually-hidden">Search within category</span>
          <input
            id="category-search"
            type="search"
            placeholder="Search within Category"
          />
          <svg className="ui-icon" aria-hidden="true" focusable="false">
            <use href="icons.svg#search"></use>
          </svg>
        </label>
      </form>

      <div className="category-product-heading">
        <h2>Products</h2>
        <span id="product-count" aria-live="polite">
          8 items
        </span>
      </div>
      <div className="category-products" id="category-products">
        <article
          className="pc category-card"
          data-category="antiulcerant"
          data-brand="Square Pharmaceuticals PLC."
          data-price="54"
          data-discount="10"
          data-name="seclo omeprazole"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-seclo" aria-hidden="true">
              <span className="medicine-box">
                <small>SQUARE</small>
                <b>Seclo</b>
                <em>20 mg</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Seclo <small>20 mg</small>
            </h3>
          </a>
          <div className="mt">Square Pharmaceuticals PLC.</div>
          <div className="pr">
            <b>৳ 54.00</b>
            <s>৳ 60.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="101" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="antiulcerant"
          data-brand="Incepta Pharmaceuticals Ltd."
          data-price="88.2"
          data-discount="10"
          data-name="pantonix pantoprazole"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-pantonix" aria-hidden="true">
              <span className="medicine-box">
                <small>INCEPTA</small>
                <b>Pantonix</b>
                <em>20 mg</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Pantonix <small>20 mg</small>
            </h3>
          </a>
          <div className="mt">Incepta Pharmaceuticals Ltd.</div>
          <div className="pr">
            <b>৳ 88.20</b>
            <s>৳ 98.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="102" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="antiemetic"
          data-brand="Incepta Pharmaceuticals Ltd."
          data-price="47.25"
          data-discount="10"
          data-name="omidon domperidone"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-omidon" aria-hidden="true">
              <span className="medicine-box">
                <small>INCEPTA</small>
                <b>Omidon</b>
                <em>10 mg</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Omidon <small>10 mg</small>
            </h3>
          </a>
          <div className="mt">Incepta Pharmaceuticals Ltd.</div>
          <div className="pr">
            <b>৳ 47.25</b>
            <s>৳ 52.50</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="103" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="antiulcerant"
          data-brand="Eskayef Bangladesh Ltd."
          data-price="45"
          data-discount="10"
          data-name="losectil esomeprazole"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-losectil" aria-hidden="true">
              <span className="medicine-box">
                <small>SK+F</small>
                <b>Losectil</b>
                <em>20 mg</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Losectil <small>20 mg</small>
            </h3>
          </a>
          <div className="mt">Eskayef Bangladesh Ltd.</div>
          <div className="pr">
            <b>৳ 45.00</b>
            <s>৳ 50.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="104" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="antacid"
          data-brand="Square Pharmaceuticals PLC."
          data-price="36"
          data-discount="10"
          data-name="antacid plus"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-antacid" aria-hidden="true">
              <span className="medicine-box">
                <small>SQUARE</small>
                <b>Antacid</b>
                <em>Chewable</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Antacid Plus <small>500 mg</small>
            </h3>
          </a>
          <div className="mt">Square Pharmaceuticals PLC.</div>
          <div className="pr">
            <b>৳ 36.00</b>
            <s>৳ 40.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="105" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="ors"
          data-brand="Beximco Pharmaceuticals Ltd."
          data-price="12.6"
          data-discount="10"
          data-name="orsaline n oral rehydration salts"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-ors" aria-hidden="true">
              <span className="medicine-box">
                <small>BEXIMCO</small>
                <b>Orsaline-N</b>
                <em>ORS sachet</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Orsaline-N <small>ORS</small>
            </h3>
          </a>
          <div className="mt">Beximco Pharmaceuticals Ltd.</div>
          <div className="pr">
            <b>৳ 12.60</b>
            <s>৳ 14.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="106" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="amoebiasis"
          data-brand="Square Pharmaceuticals PLC."
          data-price="63"
          data-discount="10"
          data-name="metro metronidazole"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-metro" aria-hidden="true">
              <span className="medicine-box">
                <small>SQUARE</small>
                <b>Metro</b>
                <em>400 mg</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Metro <small>400 mg</small>
            </h3>
          </a>
          <div className="mt">Square Pharmaceuticals PLC.</div>
          <div className="pr">
            <b>৳ 63.00</b>
            <s>৳ 70.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="107" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
        <article
          className="pc category-card"
          data-category="laxative"
          data-brand="Incepta Pharmaceuticals Ltd."
          data-price="108"
          data-discount="10"
          data-name="lactulose laxative syrup"
        >
          <span className="od">10% Off</span>
          <a href="product.html" className="category-product-link">
            <div className="category-art art-lactulose" aria-hidden="true">
              <span className="medicine-box">
                <small>INCEPTA</small>
                <b>Lactulose</b>
                <em>200 ml</em>
              </span>
              <span className="blister"></span>
            </div>
            <h3>
              Lactulose <small>200 ml</small>
            </h3>
          </a>
          <div className="mt">Incepta Pharmaceuticals Ltd.</div>
          <div className="pr">
            <b>৳ 108.00</b>
            <s>৳ 120.00</s>
          </div>
          <form action="/cart/add" method="post">
            <input type="hidden" name="product_id" value="108" />
            <button className="btn btn-m w-100" type="submit">
              Add to cart
            </button>
          </form>
        </article>
      </div>
      <p className="category-empty" id="category-empty" hidden>
        No products match these filters. Try changing your search or filters.
      </p>
    </div>
  );
}

export default SingleProducts;
