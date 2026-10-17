import Link from "next/link";
import Icon from "../Icon";
function TrackYourOrderButton() {
  return (
    <Link className="pill d-none d-lg-inline-flex" href="/order-tracking">
      <Icon name="phone" /> Track Your Order
    </Link>
  );
}

export default TrackYourOrderButton;
