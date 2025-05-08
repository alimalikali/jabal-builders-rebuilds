import './globals.css';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 animate-pulse space-y-6">
      {/* Navbar */}
      <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-full" />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-6">
          {/* Page title */}
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
