import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal, Coffee } from 'lucide-react';
import { Reveal } from './Reveal';
import { StaggerText } from './StaggerText';

export const HeroSection = ({ theme, mousePos, visitedSections, scrollToSection }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building cozy digital spaces...";

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="snap-section flex flex-col items-center justify-center relative p-4 md:p-6 min-h-screen"> {/* Changed to min-h-screen and removed pt-* */}
      <div className="relative z-10 text-center w-full max-w-5xl px-4" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
        {/* Terminal Window */}
        <Reveal visible={visitedSections.has(0)} type="pop">
          <div className="inline-block mb-4 md:mb-8 bg-gray-800 rounded-lg p-3 md:p-4 shadow-2xl text-left transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-full">
            <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"/>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"/>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"/>
            </div>
            <code className="font-pixel text-green-400 text-sm md:text-lg break-all whitespace-pre-wrap">
              &gt; {displayText}<span className="animate-pulse">_</span>
            </code>
          </div>
        </Reveal>

        {/* Main Headline */}
        <div className="mb-4 leading-none select-none mix-blend-multiply opacity-90 font-cloudy">
          <div className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <StaggerText text="CREATIVE" visible={visitedSections.has(0)} />
          </div>
          <div className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter"
               style={{ color: theme.secondary, filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}>
            <StaggerText text="DEVELOPER" visible={visitedSections.has(0)} />
          </div>
        </div>
        
        {/* Subtitle */}
        <Reveal visible={visitedSections.has(0)} delay="delay-500" type="blur">
          <p className="text-base sm:text-lg md:text-2xl font-medium opacity-70 max-w-xl mx-auto mt-4 md:mt-6 px-4">
            Crafting cozy interfaces & robust systems with a touch of magic.
          </p>
        </Reveal>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute left-4 md:left-10 top-20 opacity-20 animate-float hidden sm:block">
        <Terminal size={64} style={{ transform: 'rotate(-10deg)' }} />
      </div>
      <div className="absolute right-4 md:right-20 bottom-32 opacity-20 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
        <Coffee size={80} style={{ transform: 'rotate(10deg)' }} />
      </div>

      {/* Scroll Down Arrow */}
      <div 
        onClick={() => scrollToSection(1)}
        className="absolute bottom-10 cursor-pointer animate-bounce opacity-60 hover:opacity-100 transition-opacity"
      >
        <ArrowDown size={28} className="md:w-8 md:h-8" />
      </div>
    </section>
  );
};