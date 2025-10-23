export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/20 backdrop-blur-sm">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-t-teal-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
        <div className="absolute inset-2 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}