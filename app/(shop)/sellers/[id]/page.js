import { API_URL, WEBSITE_NAME } from "@/lib/config";
import Icon from "../../../components/Icon";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import { cacheLife } from "next/cache";

// Api request for data
async function getSingleVendor(id) {
  "use cache";
  cacheLife("seller")
  const res = await fetch(`${API_URL}vendors/${id}`);

  return res.json();
}

// Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await getSingleVendor(id);
  const vendor = data.vendor;

  return {
    title: vendor.shop_name + "- Seller - " + WEBSITE_NAME,
  };
}

async function SellerSinglePage({ params }) {
  const { id } = await params;
  const data = await getSingleVendor(id);
  const vendor = data.vendor;
  const products = data.vendor.products;

  return (
    <main className="container-xxl shell">
      <div className="crumb">
        <Link href="/">Home</Link> › <Link href="/sellers">Sellers</Link> › <b>{vendor.shop_name}</b>
      </div>
      <section className="s-hero">
        <div className="s-cover"></div>
        <div className="s-body">
          <div className="shop-logo lg sl-e overflow-hidden" aria-hidden="true">
            <Image
              src={vendor.logo_url}
              alt={vendor.shop_name}
              width={96}
              height={96}
              unoptimized
            />
          </div>
          <div className="flex-grow-1">
            <h1 className="h4 fw-bold mb-1">
              {vendor.shop_name}
              <span className="chip-s ok-s">
                <Icon name="check" size={14} /> Verified seller
              </span>
            </h1>
            <div className="small text-secondary">
              <Icon name="map-pin" size={14} /> Dhaka · <Icon name="star" size={14} /> 4.5 rating
            </div>
          </div>
          <div className="s-stats">
            <div>
              <b>{vendor.products_count}</b>
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
            <p className="small text-secondary mb-0">{vendor.description}</p>
          </div>
        </aside>
        <div className="col-lg-9">
          <div className="sec mt-0">
            <h2>All products ({vendor.products_count})</h2>
            <Link href="/sellers">All sellers</Link>
          </div>
          <div className="pgrid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SellerSinglePage;
