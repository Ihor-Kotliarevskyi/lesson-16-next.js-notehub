import NoteDetailsClient from '@/app/(public routes)/notes/[id]/NoteDetails.client';
import Modal from '@/components/Modal/Modal';
import { getSingleNote } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

type Props = {
  readonly params: Promise<{ id: string }>;
};

async function NotePreview({ params }: Props) {
  const { id } = await params;
const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
  });
  return (
    <Modal>
      <HydrationBoundary state={dehydrate(queryClient)}><NoteDetailsClient /></HydrationBoundary>
    </Modal>
  );
};

export default NotePreview;