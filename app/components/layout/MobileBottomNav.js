function MobileBottomNav() {
  return (
    <nav className="mnav d-lg-none" aria-label="Mobile">
      <button data-bs-toggle="offcanvas" data-bs-target="#cats-oc">
        <span className="i">🗂️</span>Categories
      </button>
      <a href="#">
        <span className="i">🩺</span>Doctor
      </a>
      <a href="index.html" className="home" aria-label="Home">
        ✚
      </a>
      <button data-bs-toggle="offcanvas" data-bs-target="#cart">
        <span className="i">🛒</span>Cart
      </button>
      <a href="#">
        <span className="i">👤</span>Account
      </a>
    </nav>
  );
}

export default MobileBottomNav;
