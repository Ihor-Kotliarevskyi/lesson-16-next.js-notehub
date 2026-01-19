import { Note } from "@/lib/api";
import NoteItem from "../NoteItem/NoteItem";
import css from "./NotesList.module.css";

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul className={css.noteList}>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
}

export default NoteList;