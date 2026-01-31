import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import css from './NotesByCategory.module.css';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotes(category);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>
          Notes
        </h1>
      </header>
      {response?.notes?.length > 0 ? (
        <NoteList notes={response.notes} />
      ) : (
        <div className={css.emptyState}>
          <div className={css.emptyIcon}>📝</div>
          <p>No notes found in this category</p>
        </div>
      )}
    </div>
  );
};

export default NotesByCategory;