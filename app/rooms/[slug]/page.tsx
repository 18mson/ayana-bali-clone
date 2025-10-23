import { rooms } from '@/data/mockData';
import RoomDetailContent from '@/components/rooms/RoomDetailContent';
import { Suspense } from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all rooms
export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.id,
  }));
}

export default async function RoomDetailPage({ params }: PageProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Suspense fallback={null}>
      <RoomDetailContent slug={params.slug} />
    </Suspense>
  );
}