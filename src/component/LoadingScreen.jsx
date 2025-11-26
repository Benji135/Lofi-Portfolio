import React, { useState, useEffect } from 'react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Brewing vibes...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    const textInterval = setInterval(() => {
      const texts = [
        "Brewing vibes...",
        "Warming up...",
        "Lo-fi beats loading...",
        "Pouring coffee...",
      ];
      setLoadingText((prev) => {
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 1200);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#FFF5E1] text-[#5D576B]">
      {/* Animated Coffee Cup SVG */}
      <div className="relative mb-8 cursor-pointer group hover:scale-105 transition-transform duration-300">
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Enhanced Steam Paths */}
          <path
            className="steam-1"
            d="M45 30 Q 50 15, 45 0"
            stroke="#8C7A6B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            className="steam-2"
            d="M70 25 Q 75 10, 70 -5"
            stroke="#8C7A6B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            className="steam-3"
            d="M95 30 Q 100 15, 95 0"
            stroke="#8C7A6B"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Cup Body */}
          <g transform="translate(10, 10)">
            <path
              d="M20 40 H100 V80 C100 95 90 105 75 105 H45 C30 105 20 95 20 80 V40 Z"
              fill="#81B29A"
              stroke="#5D576B"
              strokeWidth="3"
            />
            <path d="M20 45 H100" stroke="#5D576B" strokeWidth="2" strokeOpacity="0.2" />

            {/* Cup Handle */}
            <path
              d="M100 50 H110 C115 50 120 55 120 65 C120 75 115 80 110 80 H100"
              stroke="#5D576B"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Kawaii Face */}
            <circle cx="45" cy="75" r="3" fill="#5D576B" />
            <circle cx="75" cy="75" r="3" fill="#5D576B" />
            <path
              d="M55 80 Q60 85 65 80"
              stroke="#5D576B"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Cheeks */}
            <circle cx="40" cy="80" r="3" fill="#FFB7B2" opacity="0.6" />
            <circle cx="80" cy="80" r="3" fill="#FFB7B2" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Retro Loading Text */}
      <h2 className="text-3xl font-cloudy mb-6 tracking-wide text-[#8C7A6B] h-10 animate-pulse">
        {loadingText}
      </h2>

      {/* Loading Bar */}
      <div className="w-64 h-5 bg-[#E8DCC4] rounded-full overflow-hidden border-2 border-[#8C7A6B] relative shadow-sm">
        <div
          className="h-full bg-[#9E8FB2] transition-all duration-300 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white opacity-30"></div>

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
              backgroundSize: "1rem 1rem",
            }}
          />
        </div>
      </div>

      <p className="mt-4 font-pixel text-lg text-[#BFA588]">{Math.round(progress)}%</p>
    </div>
  );
};
