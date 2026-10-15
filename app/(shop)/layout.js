import Header from "../components/layout/Header";
import TrustBar from "../components/layout/TrustBar";
import Footer from "../components/layout/Footer";
import MobileBottomNav from "../components/layout/MobileBottomNav";
import MobileSidebar from "../components/layout/MobileSidebar";
import CartDrawer from "../components/layout/CartDrawer";
import Sidebar from "../components/layout/Sidebar";


export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-xxl shell">
        <div className="d-flex gap-3">
          <Sidebar />
          <div className="flex-grow-1 main-col">{children}</div>
        </div>
      </div>
      <TrustBar />
      <Footer />
      <MobileBottomNav />
      <MobileSidebar />
      <CartDrawer />
    </>
  );
}
