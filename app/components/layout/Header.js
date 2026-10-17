import Link from "next/link";
import Icon from "../Icon";
import CartButton from "../buttons/CartButton";

function Header() {
  
  return (
    <header className="hd">
      <div className="container-xxl">
        <div className="hrow">
          <Link className="logo" href="/">
            <b><Icon name="medical-cross" /></b>CareKart
          </Link>
          <form className="srch" action="index.html" method="get" role="search">
            <input type="search" placeholder="Search products, e.g. Napa" aria-label="Search products" name="q" />
            <button aria-label="Search"><Icon name="search" /></button>
          </form>
          <div className="tools">
            <div className="lang">
              <button className="on">English</button>
              <button>বাংলা</button>
            </div>
            <Link className="pill d-none d-lg-inline-flex" href="/sellers">
              <Icon name="store" /> Sellers
            </Link>
            <Link className="pill d-none d-lg-inline-flex" href="/order-tracking">
              <Icon name="phone" /> Track Your Order
            </Link>
            <CartButton/>
            
            <a className="pill signin" href="#">
              <i><Icon name="user" /></i>
              <span className="d-none d-md-inline">Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
