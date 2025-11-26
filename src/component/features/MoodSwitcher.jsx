import React from 'react';
import { Music, Coffee, Palette, Terminal } from 'lucide-react';
import { THEMES } from '../../data/constants';
import { MoodType } from '../../types';

export const MoodSwitcher = ({ activeMood, setActiveMood }) => {
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col items-end">
      <div className="flex gap-2 p-1.5 rounded-full glass-panel shadow-sm">
        {Object.values(MoodType).map((mood) => (
          <button
            key={mood}
            onClick={() => setActiveMood(mood)}
            className={`p-2 rounded-full transition-all duration-500 ${
              activeMood === mood
                ? 'bg-white shadow-sm scale-100'
                : 'hover:bg-white/40 scale-90 opacity-50'
            }`}
          >
            {mood === MoodType.CHILL && (
              <Music size={14} color={THEMES.Chill.primary} />
            )}

            {mood === MoodType.FOCUS && (
              <Terminal size={14} color={THEMES.Focus.primary} />
            )}

            {mood === MoodType.CREATIVE && (
              <Palette size={14} color={THEMES.Create.primary} />
            )}

            {mood === MoodType.COFFEE && (
              <Coffee size={14} color={THEMES.Coffee.primary} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
