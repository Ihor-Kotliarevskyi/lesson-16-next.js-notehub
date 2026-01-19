'use client';

import { useRouter } from 'next/navigation';
import { Category, createNote, NewNoteData } from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import css from './NoteForm.module.css';

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();
  
  const handleCancel = () => router.push('/notes/filter/all');

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push('/notes/filter/all');
    },
  });

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);
  };
  
  return (
    <form action={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label className={css.label}>
          Title
          <input 
            type="text" 
            name="title" 
            className={css.input}
            placeholder="Enter note title..."
            required
          />
        </label>
      </div>

      <div className={css.formGroup}>
        <label className={css.label}>
          Content
          <textarea 
            name="content" 
            className={css.textarea}
            placeholder="Write your note content..."
            required
          />
        </label>
      </div>

      <div className={css.formGroup}>
        <label className={css.label}>
          Category
          <select name="category" className={css.select} required>
            <option value="">Select a category...</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={css.buttonGroup}>
        <button type="submit" className={css.submitButton}>
          Create Note
        </button>
        <button type="button" onClick={handleCancel} className={css.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;