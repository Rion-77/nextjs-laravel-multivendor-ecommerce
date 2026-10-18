import Link from "next/link";
import Icon from "../../../components/Icon";
import { API_URL, WEBSITE_NAME } from "@/lib/config";
import AddToCartButton from "@/app/components/buttons/AddToCart";
import ProductQuantitySelector from "@/app/components/ProductPriceCard";
import ProductPriceCard from "@/app/components/ProductPriceCard";
import { cacheLife } from "next/cache";

// Api request for data
async function getSingleProduct(id) {
  "use cache";
  cacheLife("product");
  const res = await fetch(
    `${API_URL}products/${id}`,
  );

  return res.json();
}

// Metadata
export async function generateMetadata({params}) {
const { id } = await params;
  const data = await getSingleProduct(id);
  const product = data.product;

return {
  title: product.name+ " - " + WEBSITE_NAME,
}
}

async function SingleProducts({ params }) {
  const { id } = await params;
  const data = await getSingleProduct(id);
  const product = data.product;
  
  // console.log(product);

  return (
    <div className="flex-grow-1 main-col">
      <div className="crumb">
        <Link href="/"> Home </Link> › {product.category.name} ›
        <b> {product.name} </b>
      </div>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="gal box-shadow-primary">
            <img
              className="product-image"
              src={product.image_url}
              alt={product.name}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box">
            <h1 className="h5 fw-bold mb-1">{product.name}</h1>
            <div className="small text-secondary mb-3">
              {product.category.name}
            </div>
            <div className="small">
              By&nbsp;
              <Link
                className="fw-semibold text-decoration-underline"
                href={`/sellers/${product.vendor.slug}`}
              >
                {product.vendor.shop_name}
              </Link>
            </div>
          </div>
          <ProductPriceCard product={product}/>
        </div>
      </div>

      {/* Key Details */}
      <details className="box mt-2">
        <summary className="d-flex justify-content-between align-items-center">
          <h2 className="h6 fw-bold m-0">Key facts</h2>
          <span className="toggle">Show details</span>
        </summary>
        <p className="small text-secondary mt-2 mb-0">{product.description}</p>
      </details>

      {/* Descrption */}
      <div className="box ov">
        <h2 className="h6 fw-bold m-0">
          <Icon name="clipboard" size={18} /> Product overview
        </h2>
        <h4>Description</h4>

        <p>{product.description}</p>

        <h4>Frequently Asked Questions</h4>
        <div className="faq">
          <p>
            <b>
              Q: Is Freyias Sunscreen SPF PA 50 ++ For Oily Skin 50ml genuine?
            </b>
            <br />
            A: Yes. Products are sourced from licensed distributors and checked
            before dispatch.
          </p>
          <p>
            <b>Q: How fast is delivery?</b>
            <br />
            A: Same-day in major cities and 2-3 days nationwide.
          </p>
        </div>
      </div>
      <div className="disc">
        <b>Disclaimer</b>The information provided is accurate to the best of our
        knowledge, but packaging, ingredients and specifications may change
        without notice. Check the pack before use and consult a professional for
        any concerns.
      </div>
    </div>
  );
}

export default SingleProducts;
