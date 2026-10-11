import Icon from "../Icon";

function MobileBottomNav() {
  return (
    <nav className="mnav d-lg-none" aria-label="Mobile">
      <button data-bs-toggle="offcanvas" data-bs-target="#cats-oc">
        <span className="i"><Icon name="grid" /></span>Categories
      </button>
      <a href="#">
        <span className="i"><Icon name="stethoscope" /></span>Doctor
      </a>
      <a href="index.html" className="home" aria-label="Home">
        <Icon name="medical-cross" />
      </a>
      <button data-bs-toggle="offcanvas" data-bs-target="#cart">
        <span className="i"><Icon name="cart" /></span>Cart
      </button>
      <a href="#">
        <span className="i"><Icon name="user" /></span>Account
      </a>
    </nav>
  );
}

export default MobileBottomNav;
