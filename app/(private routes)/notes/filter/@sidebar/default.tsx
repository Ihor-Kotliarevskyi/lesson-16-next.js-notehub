import Link from "next/link";
import { getCategories } from "@/lib/api/clientApi";
import css from "./NotesSidebar.module.css";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className={css.sidebar}>
      <Link href="/notes/action/create" className={css.createButton}>
        + Create Note
      </Link>
      <ul className={css.categoryList}>
        <li className={css.categoryItem}>
          <Link href={`/notes/filter/all`} className={css.categoryLink}>
            All notes
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id} className={css.categoryItem}>
            <Link
              href={`/notes/filter/${category.id}`}
              className={css.categoryLink}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NotesSidebar;
