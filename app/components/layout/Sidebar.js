import Link from "next/link";
import Icon from "../Icon";
import { API_URL } from "@/lib/config";
import Image from "next/image";
import { cacheLife } from "next/cache";

async function getAllCategories() {
  "use cache";
  cacheLife("categories");
  const res = await fetch(API_URL + "categories");

  return res.json();
}

async function Sidebar() {
  const data = await getAllCategories();
  const categories = data.categories;

  // console.log(categories);
  return (
    <aside className="sidew d-none d-lg-block">
      <nav className="side" aria-label="Categories">
        {categories.map((category) => (
          <Link
            href={`/${category.slug}`}
            className="category-link"
            key={category.id}
          >
            <span className="categoy-icon">
              <img
                style={{ width: "25px", height: "auto" }}
                src={category.icon_url}
                alt=""
              />
            </span>
            {category.name}
            <em>›</em>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
