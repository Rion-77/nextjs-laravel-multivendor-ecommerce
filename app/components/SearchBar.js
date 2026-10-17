"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { API_URL } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();

  // Close Searchbar
  const closeSearch = () => {
    setSearchText("");
  };

  // Search
  useEffect(() => {
    const search = async () => {
      if (searchText.length < 1) {
        return;
      } else if (searchText.length >= 1 && searchText.length <= 3) {
        setMessage("Enter at least 3 characters to search.");
        setProducts([]);
        setCategories([]);
        return;
      } else {
        setMessage("");
        setLoading(true);

        try {
          const res = await fetch(`${API_URL}search?text=${searchText}`);
          const data = await res.json();
          console.log(data);

          // If no result found
          if (res.status == 404) {
            setMessage(data.message);
            setProducts([]);
            setCategories([]);
          }

          if (res.status == 200) {
            setProducts(data.products);
            setCategories(data.categories);
          }
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      }
    };

    search();
  }, [searchText]);

  useEffect(() => {
    setSearchText("");
  }, [pathname]);

  return (
    <div className="srch" role="search">
      {/* Search Input */}
      <input
        type="search"
        placeholder="Search products, e.g. Napa"
        aria-label="Search products"
        name="q"
        value={searchText}
        aria-controls="search-results"
        onChange={(e) => {
          setSearchText(e.target.value.trim());
        }}
        aria-expanded="false"
      />
      <button disabled aria-label="Search">
        <Icon name="search" />
      </button>
      {/* Search Result */}
      {searchText.length > 0 && (
        <>
          <div className="search-results" id="search-results" role="list" aria-label="Search suggestions">
            {/* Message */}
            {message.length > 1 && (
              <p className="search-feedback" role="status">
                <Icon name="search" size={18} />
                <span>{message}</span>
              </p>
            )}

            {/* Loading */}
            {loading && (
              <div className="search-loading" role="status" aria-live="polite">
                <span className="spinner search-spinner" aria-hidden="true">
                  <span className="spin-ring"></span>
                  <b className="spin-logo">
                    <Icon name="search" size={12} />
                  </b>
                </span>
                <span>Searching products and categories...</span>
              </div>
            )}

            {/* Products */}
            {products.map((product) => (
              <Link className="search-result" href={`/products/${product.slug}`} role="listitem" key={product.id}>
                <span className="search-result-image">
                  <img className="cart-product-image" src={product.thumbnail_url} />
                </span>
                <span className="search-result-copy">
                  <strong>{product.name}</strong>
                  <span>{product.category.name}</span>
                  <span>{product.brand.name}</span>
                </span>
              </Link>
            ))}

            {/* Categories */}
            {categories.map((category) => (
              <Link className="search-result" href={`/${category.slug}`} role="listitem">
                <span className="search-result-image">
                  <img style={{ width: "48px", height: "auto" }} src={category.icon_url} />
                </span>
                <span className="search-result-copy">
                  <strong>{category.name}</strong>
                  <span className="search-result-type">Category</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="search-overlay" onClick={closeSearch}></div>
        </>
      )}
    </div>
  );
}

export default SearchBar;
