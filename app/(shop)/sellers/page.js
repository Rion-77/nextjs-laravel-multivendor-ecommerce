import Link from "next/link";
import Icon from "../../components/Icon";
import { API_URL, WEBSITE_NAME } from "@/lib/config";
import Image from "next/image";
import { cacheLife } from "next/cache";

// Api request for data
async function getSellers() {
  "use cache";
  cacheLife("seller");
  const res = await fetch(`${API_URL}vendors`);

  return res.json();
}

// Metadata
export const metadata = {
  title: "Sellers - " + WEBSITE_NAME,
};

async function SellersPage() {
  const data = await getSellers();
  const vendors = data.vendors;
  // console.log(vendors);

  return (
    <main className="container-xxl shell">
      <div className="crumb">
        <Link href="/">Home</Link> › <b>Sellers</b>
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
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
        {vendors.map((vendor) => (
          <div className="col" key={vendor.id}>
            <article className="seller" >
              {/* <div className="shop-logo sl-a" aria-hidden="true">
                </div> */}
              <Image src={vendor.logo_url} width={64} height={64} alt={vendor.shop_name} unoptimized/>
              {/* <img
                className="shop-logo sl-a"
                src={vendor.media.length > 0 ? vendor.media[0].original_url : "https://placehold.co/600x400"}
                alt={vendor.shop_name}
              /> */}

              <div className="flex-grow-1">
                <h2 className="h6 fw-bold mb-1">
                  <Link href={`/sellers/${vendor.slug}`}>{vendor.shop_name}</Link>
                </h2>
                <div className="small text-secondary">
                  <Icon name="map-pin" size={14} /> Dhaka · <Icon name="star" size={14} /> 4.8
                </div>
                <div className="seller-meta">
                  <span className="chip-s">
                    <Icon name="package" size={14} /> {vendor.products_count} products
                  </span>
                </div>
                <Link className="btn btn-m btn-sm py-2 px-3 mt-3" href={`/sellers/${vendor.slug}`}>
                  Visit store
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SellersPage;
