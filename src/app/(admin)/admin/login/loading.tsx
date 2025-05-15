export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="animate-pulse">
          {/* Logo and Header */}
          <div className="p-6 space-y-4">
            <div className="flex justify-center">
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-8 w-3/4 bg-gray-200 rounded mx-auto"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto"></div>
          </div>

          {/* Form Fields */}
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t">
            <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
