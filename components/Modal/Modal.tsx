'use client';

import css from "./Modal.module.css"

import { useRouter } from 'next/navigation';

type Props = {
  readonly children: React.ReactNode;
};

function Modal({ children }: Props) {
  const router = useRouter();
  
  const close = () => router.back();


  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;