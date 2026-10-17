"use client";
import { useState } from "react";
import Icon from "./Icon";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

 // Close    
  const closeSearch = () => {
     setSearchText('');
  }
  return (
    <form className="srch" action="index.html" method="get" role="search">
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
      <button aria-label="Search">
        <Icon name="search" />
      </button>
      {/* Search Result */}
      {searchText.length > 0 && (
        <>
          <div
            className="search-results"
            id="search-results"
            role="list"
            aria-label="Search suggestions"
          >
            <a className="search-result" href="product.html" role="listitem">
              <span className="search-result-image">
                <svg className="ui-icon" aria-hidden="true" focusable="false">
                  <use href="icons.svg#capsule"></use>
                </svg>
              </span>
              <span className="search-result-copy">
                <strong>
                  Fast <small>60 ml</small>
                </strong>
                <span className="search-result-type">Oral Suspension</span>
                <span>Paracetamol</span>
                <span>ACME Laboratories Ltd.</span>
              </span>
            </a>
            <a className="search-result" href="product.html" role="listitem">
              <span className="search-result-image">
                <svg className="ui-icon" aria-hidden="true" focusable="false">
                  <use href="icons.svg#capsule"></use>
                </svg>
              </span>
              <span className="search-result-copy">
                <strong>
                  Fastel <small>120 mg</small>
                </strong>
                <span className="search-result-type">Tablet</span>
                <span>Fexofenadine Hydrochloride</span>
                <span>Radiant Pharmaceuticals Ltd.</span>
              </span>
            </a>
            <a className="search-result" href="product.html" role="listitem">
              <span className="search-result-image">
                <svg className="ui-icon" aria-hidden="true" focusable="false">
                  <use href="icons.svg#capsule"></use>
                </svg>
              </span>
              <span className="search-result-copy">
                <strong>
                  Fast <small>500 mg</small>
                </strong>
                <span className="search-result-type">Tablet</span>
                <span>Paracetamol</span>
                <span>ACME Laboratories Ltd.</span>
              </span>
            </a>
            <a className="search-result" href="product.html" role="listitem">
              <span className="search-result-image">
                <svg className="ui-icon" aria-hidden="true" focusable="false">
                  <use href="icons.svg#capsule"></use>
                </svg>
              </span>
              <span className="search-result-copy">
                <strong>
                  Fast XR <small>665 mg</small>
                </strong>
                <span className="search-result-type">Tablet</span>
                <span>Paracetamol</span>
                <span>ACME Laboratories Ltd.</span>
              </span>
            </a>
          </div>
          <div className="search-overlay" onClick={closeSearch}></div>
        </>
      )}
    </form>
  );
}

export default SearchBar;
