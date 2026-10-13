import Link from "next/link";

function ProductCard({product}) {
  return (
    <article className="pc">
      <span className="od">{(100 - (product.offer_price / product.base_price * 100)).toFixed(2)}% Off</span>
      <Link href={`/products/${product.id}`}>
        <div className="im">
          <img
            className="product-image"
            src={product.media.length > 0 ? product.media[0].original_url : "https://placehold.co/600x400"}
            alt={product.name}
          />
        </div>
        <h3>{product.name}</h3>
      </Link>
      <div className="mt">{product.brand.name}</div>
      <div className="pr">
        <b>৳ {product.offer_price}</b>
        <s>৳ {product.base_price}</s>
      </div>
      <form action="/cart/add" method="post">
        <input type="hidden" name="product_id" value="1" />
        <Link href={`/products/${product.id}`} className="btn btn-m w-100">
          Add to cart
        </Link>
      </form>
    </article>
  );
}

export default ProductCard;
