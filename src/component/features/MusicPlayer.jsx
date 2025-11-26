import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

export const MusicPlayer = ({ theme }) => {
  const [isPlaying, setIsPlaying] = useState(true);   // autoplay ON
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  // Auto-play when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay, so set playing to false
        setIsPlaying(false);
      });
    }
  }, []);

  // Sync Play/Pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Sync Volume + Mute
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume / 100;
  }, [volume, isMuted]);


  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(50);
    } else {
      setIsMuted(true);
    }
  };

  return (
    <div
      className={`fixed z-[55] transition-all duration-700
        top-4 left-4 
        md:top-auto md:left-auto md:right-8 md:bottom-8
      `}
    >
      {/* --- Hidden Audio Element --- */}
      <audio ref={audioRef} src="/audio/lofi.mp3" loop />

      <div
        className={`
          relative overflow-hidden transition-all duration-300
          bg-[#FDF6E3] border-2
          shadow-[4px_4px_0px_rgba(0,0,0,0.05)]
          flex rounded-full p-1.5 pr-3 items-center gap-2.5
          max-w-[calc(100vw-32px)]
          md:flex-col md:rounded-3xl md:p-0
          md:items-stretch md:gap-0 md:w-[320px]
        `}
        style={{ borderColor: theme.secondary }}
      >

        {/* --- VINYL ART --- */}
        <div
          className={`
            relative flex items-center justify-center shrink-0
            bg-gray-900 border-2 border-gray-100 shadow-sm
            rounded-full transition-all
            ${isPlaying ? 'animate-spin-slow' : ''}
            w-8 h-8 md:w-16 md:h-16 md:ml-4 md:mt-4
          `}
        >
          <div
            className="rounded-full flex items-center justify-center w-2 h-2 md:w-6 md:h-6"
            style={{ backgroundColor: theme.primary }}
          >
            <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 rounded-full bg-white/50"></div>
          </div>

          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent"></div>
        </div>

        {/* --- INFO + CONTROLS --- */}
        <div className="flex flex-1 items-center justify-between md:block md:w-full overflow-hidden">

          {/* INFO TEXT */}
          <div className="flex flex-col justify-center min-w-0 md:px-4 md:mb-1 mr-2 md:mr-0">
            <div className="hidden md:flex items-center gap-2 mb-1">
              <Music size={12} className="text-gray-400" />
              <span className="font-mono text-[10px] uppercase text-gray-400 tracking-wider">
                Now Playing
              </span>
            </div>

            <p className="font-cloudy font-bold text-gray-800 text-xs md:text-lg truncate leading-tight">
              {isPlaying ? "LofiBeats" : "Paused"}
            </p>

            <p className="font-mono text-xs text-gray-500 truncate hidden md:block">
              Lofi Girl • 24/7 Radio
            </p>
          </div>

          {/* --- MOBILE PLAY BUTTON --- */}
          <div className="md:hidden shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm active:scale-95 transition-transform"
              style={{ backgroundColor: theme.primary }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>
          </div>

          {/* --- DESKTOP CONTROLS --- */}
          <div className="hidden md:flex px-4 pb-4 pt-2 flex-col gap-3">

            {/* Progress (fake visual) */}
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
              <div
                className={`h-full ${isPlaying ? 'w-2/3' : 'w-1/3'} transition-all duration-1000`}
                style={{ backgroundColor: theme.secondary }}
              ></div>
            </div>

            <div className="flex items-center justify-between mt-1">

              {/* Volume Controls */}
              <div className="flex items-center gap-2">
                <button onClick={toggleMute} className="text-gray-400 hover:text-gray-600 transition-colors">
                  {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <div className="relative w-20 h-4 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-75"
                      style={{
                        width: `${isMuted ? 0 : volume}%`,
                        backgroundColor: theme.secondary
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <button className="text-gray-300 hover:text-gray-500"><SkipBack size={18} /></button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0px_4px_0px_rgba(0,0,0,0.15)] active:shadow-none active:translate-y-[4px] hover:brightness-110 transition-all"
                  style={{ backgroundColor: theme.primary }}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                </button>

                <button className="text-gray-300 hover:text-gray-500"><SkipForward size={18} /></button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
