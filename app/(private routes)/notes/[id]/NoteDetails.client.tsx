"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSingleNote } from "@/lib/api/clientApi";
import css from "./NoteDetailsClient.module.css";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <div className={css.loading}>
        <div className={css.loadingSpinner}></div>
        <p>Loading note...</p>
      </div>
    );
  }

  if (error || !note) {
    return (
      <div className={css.error}>
        <div className={css.errorIcon}>⚠️</div>
        <p>Unable to load note. Please try again.</p>
      </div>
    );
  }

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <article className={css.container}>
      <header className={css.header}>
        <h2 className={css.title}>{note.title}</h2>
        <div className={css.metadata}>
          <span className={css.dateIcon}>🕒</span>
          <time>{formattedDate}</time>
        </div>
      </header>
      <p className={css.content}>{note.content}</p>
    </article>
  );
};

export default NoteDetailsClient;
