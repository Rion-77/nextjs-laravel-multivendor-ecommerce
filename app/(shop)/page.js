import Image from "next/image";
import styles from "../page.module.css";
import Sidebar from "../components/layout/Sidebar";
import Link from "next/link";
import Icon from "../components/Icon";
import Carousel from "../components/layout/Carousel";
import ProductCard from "../components/ProductCard";
import { API_URL } from "@/lib/config";
import { cacheLife } from "next/cache";

async function getHomeContent() {
  "use cache";
  cacheLife("home");
  const res = await fetch(API_URL + "home");

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
        {/* Hero Section */}
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
              <Link href="#" className="d-block">
                <Image
                  src="/image/promo-banner-1.avif"
                  width={1976}
                  height={688}
                  alt="Featured promotion"
                  className="d-block w-100 h-auto"
                />
              </Link>
            </div>
            <div className="carousel-item">
              <Link href="#" className="d-block">
                <Image
                  src="/image/promo-banner-2.avif"
                  width={1976}
                  height={688}
                  alt="Featured promotion"
                  className="d-block w-100 h-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="sec">
          <h2>Product Categories</h2>
          {/* <a href="index.html">See All</a> */}
        </div>
        {/* Categories */}
        <div className="wrap-x">
          <div className="row-x cats">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="cat"
              >
                <span>
                  <img
                    style={{ width: "25px", height: "auto" }}
                    src={category.icon_url}
                    alt=""
                  />
                </span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Category Products */}
        {topCategories.map((category) => (
          <div key={category.id}>
            <div className="sec">
              <h2>{category.name}</h2>
              {/* <Link href={`/${category.slug}`}>See All</Link> */}
            </div>
            {/* Products */}
            <Carousel>
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </>
  );
}
