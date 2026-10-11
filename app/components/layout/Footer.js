import Icon from "../Icon";

function Footer() {
  return (
    <footer>
      <div className="container-xxl">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="logo mb-2">
              <b><Icon name="medical-cross" /></b>CareKart
            </div>
            <p>
              Online pharmacy &amp; healthcare platform. Medicines, supplements and care products delivered to your
              door.
            </p>
            <div className="d-flex gap-2 flex-wrap mb-3">
              <a className="sb" href="#">
                <Icon name="apple" size={20} />
                <span>
                  Download on the<b>App Store</b>
                </span>
              </a>
              <a className="sb" href="#">
                ▶
                <span>
                  Get it on<b>Google Play</b>
                </span>
              </a>
            </div>
            <div>
              <span className="small me-2">FOLLOW US</span>
              <a className="soc soc-fb" href="#">
                f
              </a>
              <a className="soc soc-ig" href="#">
                ig
              </a>
              <a className="soc soc-yt" href="#">
                ▶
              </a>
              <a className="soc soc-in" href="#">
                in
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h6>SHOP</h6>
            <a href="#">Prescription Medicine</a>
            <a href="#">OTC Medicine</a>
            <a href="#">Vitamins &amp; Supplements</a>
            <a href="#">Baby Care</a>
            <a href="#">Skin Care</a>
            <a href="#">All Categories</a>
          </div>
          <div className="col-6 col-lg-2">
            <h6>COMPANY</h6>
            <a href="#">About Us</a>
            <a href="#">Online Doctor Consultation</a>
            <a href="#">Health Articles</a>
            <a href="#">Careers</a>
          </div>
          <div className="col-6 col-lg-2">
            <h6>HELP</h6>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">Return &amp; Refund Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="col-6 col-lg-2">
            <h6>CONTACT</h6>
            <a href="#">+880 1000-000000 · 24/7</a>
            <a href="#">support@example.com</a>
            <a href="#">Your address, Dhaka</a>
          </div>
        </div>
        <div className="row g-2 mt-3">
          <div className="col-md-4">
            <div className="reg">
              <span>TRADE LICENCE</span>
              <b>XXXX/0000/2026</b>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reg">
              <span>DIGITAL BUSINESS ID</span>
              <b>DBID 000000000</b>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reg">
              <span>SECURE PAYMENTS · SSL ENCRYPTED</span>
              <b>Cash on delivery, bKash, cards</b>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">© 2026 CareKart Healthcare Limited. All rights reserved. | Made with <Icon name="heart" size={14} /> in Bangladesh</div>
    </footer>
  );
}

export default Footer;
