import { Note } from "@/lib/api/api";
import Link from "next/link";
import css from "./NoteItem.module.css";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li className={css.noteItem}>
      <Link href={`/notes/${item.id}`} className={css.noteLink}>
        {item.title}
      </Link>
    </li>
  );
};

export default NoteItem;
