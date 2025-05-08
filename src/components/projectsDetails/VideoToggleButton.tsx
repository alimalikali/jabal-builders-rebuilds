'use client';

import { ZoomIn } from 'lucide-react';
import { useEffect, useState } from 'react';

export function VideoToggleButton({
  videoSrc,
  isVideo,
  setIsVideo,
  videoLoaded,
  setVideoLoaded
}: {
  videoSrc?: string;
  isVideo: boolean;
  setIsVideo: (val: boolean) => void;
  videoLoaded: boolean;
  setVideoLoaded: (val: boolean) => void;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!videoSrc || !isClient) return null;

  const handleToggle = () => {
    if (isVideo && !videoLoaded) return; // Prevent toggle while loading
    
    setVideoLoaded(false);
    setIsVideo(!isVideo);
  };

  return (
    <button 
      onClick={handleToggle}
      className={`
        absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 
        bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg 
        hover:bg-white transition-all flex items-center justify-center 
        min-h-[44px] min-w-[44px]
        ${isVideo && !videoLoaded ? 'animate-pulse' : ''}
      `}
      aria-label={isVideo ? "View Image" : "View Video"}
      disabled={isVideo && !videoLoaded}
    >
      <ZoomIn className="h-5 w-5" />
    </button>
  );
}