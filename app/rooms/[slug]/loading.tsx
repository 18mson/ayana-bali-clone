import { FiCalendar, FiUsers, FiMaximize, FiHome } from 'react-icons/fi';

export default function RoomLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="relative h-full bg-gray-300" />
        {/* Image Gallery Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex space-x-4 overflow-x-auto">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="relative w-32 h-24 shrink-0 bg-gray-400"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Information */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="h-12 bg-gray-300 w-3/4 mb-4" />
            <div className="h-8 bg-gray-300 w-1/2 mb-8" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mb-12">
              {[FiMaximize, FiUsers, FiHome, FiCalendar].map((Icon, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon className="text-gray-400" />
                  <div className="h-4 bg-gray-300 w-16" />
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-300 w-full" />
              <div className="h-4 bg-gray-300 w-5/6" />
              <div className="h-4 bg-gray-300 w-4/6" />
            </div>

            {/* Amenities */}
            <div className="space-y-8">
              {[1, 2].map((section) => (
                <div key={section}>
                  <div className="h-6 bg-gray-300 w-1/4 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[...Array(6)].map((_, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        <div className="h-4 bg-gray-300 w-24" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="mt-12">
              <div className="h-8 bg-gray-300 w-1/3 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-6 bg-gray-300 w-1/2 mb-2" />
                    <div className="h-4 bg-gray-300 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="h-8 bg-gray-300 w-1/2 mb-4" />
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-300 w-24" />
                  <div className="h-6 bg-gray-300 w-16" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-300 w-20" />
                  <div className="h-4 bg-gray-300 w-24" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-300 w-20" />
                  <div className="h-4 bg-gray-300 w-24" />
                </div>
              </div>

              <div className="h-12 bg-gray-300 rounded-lg mb-6" />

              <div className="mt-6 space-y-2">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="h-4 bg-gray-300 w-5/6" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}