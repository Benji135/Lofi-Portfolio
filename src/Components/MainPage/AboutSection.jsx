import React from 'react';
import { Reveal } from './Reveal';

export const AboutSection = ({ theme, visitedSections }) => {
  return (
    <section className="snap-section flex items-center justify-center p-6 overflow-hidden">
      <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
        
        {/* Image Side: Polaroid */}
        <div className="relative order-2 md:order-1 flex justify-center group mt-4 md:mt-0">
          <Reveal visible={visitedSections.has(1)} type="pop" className="w-full flex justify-center">
            <div className="relative bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 rotate-2 max-w-[250px] md:max-w-sm w-full">
              {/* Tape Effect */}
              <div className="tape-corner opacity-80 scale-75 md:scale-100 origin-top-left"></div>
              
              <div className="aspect-square overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://picsum.photos/600/600?grayscale" alt="Me" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <p className="font-marker text-xl md:text-2xl opacity-80 rotate-1">Me @ 2025</p>
              </div>
            </div>
          </Reveal>
          
          {/* Sticker Decor */}
          <Reveal visible={visitedSections.has(1)} delay="delay-300" type="elastic">
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-yellow-300 text-black font-bold p-3 md:p-4 rounded-full shadow-lg transform rotate-12 animate-pulse font-cloudy text-xs md:text-base">
              Open for Work!
            </div>
          </Reveal>
        </div>

        {/* Content Side: Notebook */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <Reveal visible={visitedSections.has(1)} delay="delay-100" type="elastic">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 relative inline-block font-cloudy">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-4 opacity-30 -rotate-1" style={{ backgroundColor: theme.secondary }}></span>
            </h2>
          </Reveal>
          
          <Reveal visible={visitedSections.has(1)} delay="delay-200" type="blur">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed opacity-90">
              <p>
                Hey there! I'm a developer who loves the space between engineering and design. 
                I treat code like poetry and UIs like cozy living rooms.
              </p>
              <p>
                When I'm not pushing pixels or debugging async functions, I'm probably 
                curating <span className="font-bold underline decoration-wavy" style={{ textDecorationColor: theme.secondary }}>Lo-fi playlists</span>, 
                brewing third-wave coffee, or tinkering with my mechanical keyboard.
              </p>
            </div>
          </Reveal>

          <Reveal visible={visitedSections.has(1)} delay="delay-400" type="pop">
            <div className="mt-8 md:mt-10 flex gap-4 justify-center md:justify-start">
                <div className="p-3 md:p-4 bg-white/40 rounded-lg border border-white/60 min-w-[100px]">
                  <span className="block font-bold text-xl md:text-2xl font-cloudy">4+</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-wide opacity-60">Years Exp.</span>
                </div>
                <div className="p-3 md:p-4 bg-white/40 rounded-lg border border-white/60 min-w-[100px]">
                  <span className="block font-bold text-xl md:text-2xl font-cloudy">20+</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-wide opacity-60">Projects</span>
                </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};