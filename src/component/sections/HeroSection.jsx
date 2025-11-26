import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { StaggerText } from '../ui/StaggerText';

export const HeroSection = ({ visible, theme, mousePos, onScrollDown }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building cozy digital spaces...";

  useEffect(() => {
    if (visible) {
      let i = 0;
      setDisplayText('');
      const interval = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <section className="snap-section flex flex-col items-center justify-center relative p-6">
      <div
        className="relative z-10 text-center w-full max-w-5xl px-4"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
        }}
      >
        <Reveal visible={visible} type="pop">
          <div className="inline-flex items-center gap-3 mb-6 md:mb-10 px-4 py-1.5 bg-white/40 rounded-full border border-white/50 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400 opacity-60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-60" />
              <div className="w-2 h-2 rounded-full bg-green-400 opacity-60" />
            </div>
            <code className="font-mono text-gray-500 text-xs md:text-sm">
              {displayText}
              <span className="animate-pulse">|</span>
            </code>
          </div>
        </Reveal>

        <div className="mb-6 md:mb-8 leading-tight select-none font-cloudy">
          <div className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-gray-800">
            <StaggerText text="CREATIVE" visible={visible} />
          </div>

          <div
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mt-1 md:mt-[-0.2em]"
            style={{ color: theme.secondary }}
          >
            <StaggerText text="DEVELOPER" visible={visible} />
          </div>
        </div>

        <Reveal visible={visible} delay="delay-500" type="blur">
          <p className="text-base md:text-xl font-medium text-gray-500 max-w-lg mx-auto leading-relaxed">
            Crafting interfaces that feel like home.
          </p>
        </Reveal>
      </div>

      <div
        onClick={onScrollDown}
        className="absolute bottom-10 cursor-pointer animate-bounce opacity-40 hover:opacity-80 transition-opacity"
      >
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
