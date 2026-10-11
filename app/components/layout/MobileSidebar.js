import Icon from "../Icon";

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
            <span><Icon name="capsule" /></span>OTC Medicine<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="flower" /></span>Feminine Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="leaf" /></span>Herbal & Traditional Medicine<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="bottle" /></span>Skin Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="scissors" /></span>Hair Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="baby" /></span>Baby Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="droplet" /></span>Diabetes Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="citrus" /></span>Vitamins & Supplements<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="tooth" /></span>Oral Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="bowl" /></span>Food & Nutrition<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="thermometer" /></span>Health Devices<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="tag" /></span>Exclusive Deals<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="soap" /></span>Personal Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="medical-cross" /></span>Pain & Cold Relief<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="bandage" /></span>First Aid & Wound Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="lipstick" /></span>Makeup & Cosmetics<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="home" /></span>Home Care<em>›</em>
          </a>
          <a href="index.html">
            <span><Icon name="file" /></span>Prescription Medicine<em>›</em>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MobileSidebar;
