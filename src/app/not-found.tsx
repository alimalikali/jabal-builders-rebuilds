'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      typeof window !== 'undefined' ? window.location.pathname : 'unknown'
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jabal-gold via-white to-jabal-gold dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-12 animate-fadeIn">
      <div className="text-center max-w-md space-y-6">
        <div className="text-[5rem] font-extrabold text-gray-800 dark:text-white leading-none">404</div>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
          This page wandered off... and never came back.
        </p>
        <Link href="/">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-200"
          >
            Take me home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
