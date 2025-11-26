import React, { useState } from 'react';
import { Music, Play, Pause, SkipForward, SkipBack } from 'lucide-react';

export const MusicPlayer = ({ theme }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed z-50 transition-all duration-500 top-4 left-4 right-auto bottom-auto w-auto md:top-auto md:left-auto md:right-6 md:bottom-6 md:w-56">
      <div className="bg-white/90 backdrop-blur-xl shadow-xl border border-white/60 transition-all duration-500 rounded-full p-1 pr-3 flex items-center gap-2 md:rounded-xl md:p-3 md:block md:hover:scale-[1.02]">
        {/* Music player content */}
        Lofi-Soft
      </div>
    </div>
  );
};