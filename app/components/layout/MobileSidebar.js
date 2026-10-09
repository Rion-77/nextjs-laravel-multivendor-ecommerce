function MobileSidebar() {
  return (
    <div className="offcanvas offcanvas-start" id="cats-oc" tabIndex="-1">
      <div className="offcanvas-header">
        <h5 className="fw-bold m-0">Categories</h5>
        <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body pt-0">
        <nav className="side side-static" aria-label="Categories">
          <a href="index.html">
            <span>💊</span>OTC Medicine<em>›</em>
          </a>
          <a href="index.html">
            <span>🌸</span>Feminine Care<em>›</em>
          </a>
          <a href="index.html">
            <span>🌿</span>Herbal & Traditional Medicine<em>›</em>
          </a>
          <a href="index.html">
            <span>🧴</span>Skin Care<em>›</em>
          </a>
          <a href="index.html">
            <span>💇</span>Hair Care<em>›</em>
          </a>
          <a href="index.html">
            <span>👶</span>Baby Care<em>›</em>
          </a>
          <a href="index.html">
            <span>🩸</span>Diabetes Care<em>›</em>
          </a>
          <a href="index.html">
            <span>🍊</span>Vitamins & Supplements<em>›</em>
          </a>
          <a href="index.html">
            <span>🦷</span>Oral Care<em>›</em>
          </a>
          <a href="index.html">
            <span>🥣</span>Food & Nutrition<em>›</em>
          </a>
          <a href="index.html">
            <span>🌡️</span>Health Devices<em>›</em>
          </a>
          <a href="index.html">
            <span>🏷️</span>Exclusive Deals<em>›</em>
          </a>
          <a href="index.html">
            <span>🧼</span>Personal Care<em>›</em>
          </a>
          <a href="index.html">
            <span>🤕</span>Pain & Cold Relief<em>›</em>
          </a>
          <a href="index.html">
            <span>🩹</span>First Aid & Wound Care<em>›</em>
          </a>
          <a href="index.html">
            <span>💄</span>Makeup & Cosmetics<em>›</em>
          </a>
          <a href="index.html">
            <span>🏠</span>Home Care<em>›</em>
          </a>
          <a href="index.html">
            <span>📄</span>Prescription Medicine<em>›</em>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MobileSidebar;
