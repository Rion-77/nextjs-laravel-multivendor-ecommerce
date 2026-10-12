import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./components/layout/Sidebar";
import Link from "next/link";
import Icon from "./components/Icon";
import Carousel from "./components/layout/Carousel";

async function getHomeContent() {
  "use cache";
  const res = await fetch("http://multivendor-ecommerce.test/api/frontend/home");

  return res.json();
}

export default async function Home() {
 

  const data = await getHomeContent();

  const categories = data.categories;

  const topCategories = data.topCategories;

  // console.log(topCategories);

  // console.log(data);

  return (
    <>
      <div id="home">
        <div id="hero" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              data-bs-target="#hero"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#hero"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide-wrapper h1">
                <h1>Genuine medicines, delivered home</h1>
                <p>
                  Pharmacist-checked orders with same-day delivery in major
                  cities.
                </p>
                <button className="wbtn">Shop now</button>
                <div className="art">
                  <Icon name="capsule" size={180} />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-wrapper h2">
                <h1>Give yourself a little extra care</h1>
                <p>Up to 50% off skin care this week.</p>
                <button className="wbtn">See deals</button>
                <div className="art">
                  <Icon name="bottle" size={180} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec">
          <h2>Product Categories</h2>
          <a href="index.html">See All</a>
        </div>
        {/* Categories */}
        <div className="wrap-x">
          <div className="row-x cats">
            {categories.map((category) => (
              <a key={category.id} href="index.html" className="cat">
                <span>
                  <Icon name="capsule" />
                </span>
                {category.name}
              </a>
            ))}
          </div>
        </div>

        {/* Category Products */}
        {topCategories.map((category) => (
          <div key={category.id}>
            <div className="sec">
              <h2>{category.name}</h2>
              <a href="index.html">See All</a>
            </div>
            {/* Products */}
            <Carousel>
              {category.products.map((product) => (
                <article key={product.id} className="pc">
                  <span className="od">
                    {((product.offer_price / product.base_price) * 100).toFixed(
                      2,
                    )}
                    % Off
                  </span>
                  <Link href="/products/1">
                    <div className="im">
                      <img
                        className="product-image"
                        src={
                          product.media.length > 0
                            ? product.media[0].original_url
                            : "https://placehold.co/600x400"
                        }
                        alt={product.name}
                      />
                    </div>
                    <h3>{product.name}</h3>
                  </Link>
                  <div className="mt">Beximco Pharmaceuticals Ltd.</div>
                  <div className="pr">
                    <b>৳ {product.offer_price}</b>
                    <s>৳ {product.base_price}</s>
                  </div>
                  <form action="/cart/add" method="post">
                    <input type="hidden" name="product_id" value="1" />
                    <button className="btn btn-m w-100" type="submit">
                      Add to cart
                    </button>
                  </form>
                </article>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </>
  );
}
