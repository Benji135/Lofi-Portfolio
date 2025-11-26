import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './component/LoadingScreen';
import { MainPage } from './component/MainPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Allow loader exit animation
      setTimeout(() => setShowContent(true), 100);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FFF5E1]">
      
      {/* Loading Screen */}
      <div
        className={`absolute inset-0 z-50 transition-all duration-1000 ease-in-out transform ${
          isLoading
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <LoadingScreen />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-1000 ease-out transform ${
          !isLoading
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        <MainPage isReady={showContent} />
      </div>
    </div>
  );
};

export default App;
