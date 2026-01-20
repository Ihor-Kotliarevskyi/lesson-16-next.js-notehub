'use client';

import css from "./Modal.module.css";
import { useRouter } from 'next/navigation';

type Props = {
  readonly children: React.ReactNode;
};

function Modal({ children }: Props) {
  const router = useRouter();
  
  const close = () => router.back();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {children}
        <button onClick={close} className={css.closeButton} aria-label="Close modal">
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;