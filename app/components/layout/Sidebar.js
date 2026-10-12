import Link from "next/link";
import Icon from "../Icon";

async function getAllCategories() {
  "use cache";
  const res = await fetch("http://multivendor-ecommerce.test/api/frontend/categories");

  return res.json();
}

async function Sidebar() {
  const data = await getAllCategories();
  const categories = data.categories;

  console.log(categories);
  return (
    <aside className="sidew d-none d-lg-block">
      <nav className="side" aria-label="Categories">
        {categories.map((category) => (
          <Link href={`/${category.slug}`} className="category-link" key={category.id}  >
            <span className="categoy-icon">
              <Icon name="capsule" />
            </span>
            {category.name}<em>›</em>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
