import { rooms } from '@/data/mockData';
import RoomDetailContent from '@/components/rooms/RoomDetailContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = rooms.map((room) => ({
    slug: room.id,
  }));
  return slugs;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find(r => r.id === slug);
  
  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F3E7]">
      <RoomDetailContent slug={slug} />
    </div>
  );
}