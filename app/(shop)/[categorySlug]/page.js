import Link from "next/link";
import Icon from "../../components/Icon";
import ProductCard from "../../components/ProductCard";
import { API_URL } from "@/lib/config";

async function getCategoryProduct(slug) {
  "use cache";

  const res = await fetch(
    `${API_URL}categories/${slug}`,
  );

  return res.json();
}

// Metadata
export async function generateMetadata({params}) {
const { categorySlug } = await params;
const data = await getCategoryProduct(categorySlug);
const category = data.category[0];

return {
  title: category.name + " Products",
}
}

async function SingleProducts({ params }) {
  const { categorySlug } = await params;

  const data = await getCategoryProduct(categorySlug);

  const category = data.category[0];

  // console.log(category.products);

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
        {category.products.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
      </div>
      <p className="category-empty" id="category-empty" hidden>
        No products match these filters. Try changing your search or filters.
      </p>
    </div>
  );
}

export default SingleProducts;
