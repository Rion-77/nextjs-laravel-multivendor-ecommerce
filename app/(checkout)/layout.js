import Link from "next/link";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Icon from "../components/Icon";

export default function RootLayout({ children }) {
  return (
    <>
    <header className="hd">
      <div className="container-xxl">
        <div className="hrow">
          <Link className="logo" href="/">
            <b><Icon name="medical-cross" /></b>CareKart
          </Link>
          <div className="tools">
            <div className="lang">
              <button className="on">English</button>
              <button>বাংলা</button>
            </div>
            <Link className="pill d-none d-lg-inline-flex" href="/sellers">
              <Icon name="store" /> Sellers
            </Link>
            <a className="pill d-none d-lg-inline-flex" href="#">
              <Icon name="phone" /> Get the app
            </a>    
            <a className="pill signin" href="#">
              <i><Icon name="user" /></i>
              <span className="d-none d-md-inline">Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div className="container-xxl shell">
      <div className="d-flex gap-3">
        <div className="flex-grow-1 main-col">{children}</div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
