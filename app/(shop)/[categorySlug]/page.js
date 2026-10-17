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
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href={`/${category.slug}`}>{category.name}</Link>
      </nav>

      {/* <form className="category-filters" role="search">
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
      </form> */}

      <div className="category-product-heading">
        <h2>Products</h2>
        <span id="product-count" aria-live="polite">
          {category.products.length} items
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
