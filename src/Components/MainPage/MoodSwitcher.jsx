import React from 'react';
import { Music, Terminal, Palette, Coffee } from 'lucide-react';
import { THEMES } from '../../Pages/constants/themes';

export const MoodSwitcher = ({ activeMood, setActiveMood, theme }) => {
  const moods = [
    { key: 'CHILL', icon: Music },
    { key: 'FOCUS', icon: Terminal }, 
    { key: 'CREATIVE', icon: Palette },
    { key: 'COFFEE', icon: Coffee }
  ];

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex flex-col items-end gap-4">
      <div className="flex gap-1 md:gap-2 p-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm scale-90 md:scale-100 origin-top-right">
        {moods.map((mood) => {
          const Icon = mood.icon;
          return (
            <button
              key={mood.key}
              onClick={() => setActiveMood(mood.key)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeMood === mood.key ? 'bg-white shadow-sm scale-100' : 'hover:bg-white/50 scale-90 opacity-60'
              }`}
            >
              <Icon size={16} color={THEMES[mood.key].primary} />
            </button>
          );
        })}
      </div>
    </div>
  );
};