import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Coffee, Sparkles, Cloud } from 'lucide-react';

export const BioSection = ({ visible, theme }) => {
  return (
    <section className="snap-section flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden relative">
      
      {/* Background Fidgets - Coffee Theme */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Small Coffee Cup */}
        <div className="absolute top-[15%] left-[10%] text-[#8C7A6B] opacity-10 animate-float" style={{ animationDelay: '0s' }}>
          <Coffee size={32} />
        </div>

        {/* Tiny Cloud */}
        <div className="absolute top-[20%] right-[15%] text-[#8C7A6B] opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Cloud size={40} />
        </div>

        {/* Sparkles */}
        <div className="absolute bottom-[15%] left-[8%] text-[#BB9457] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles size={24} />
        </div>
        
        {/* Hand-drawn swirl */}
        <svg className="absolute bottom-[20%] right-[10%] w-12 h-12 text-[#8C7A6B] opacity-10 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 50 m-20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0" />
        </svg>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        
        {/* Polaroid */}
        <div className="relative flex justify-center md:justify-end">
           <Reveal visible={visible} type="pop" className="relative z-10">
             <div className="relative bg-white p-3 pb-16 shadow-xl transform -rotate-2 w-[280px] sm:w-[320px] rounded-sm transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                
                {/* Tape */}
                <div className="tape-corner bg-white/40 backdrop-blur-sm h-8 w-32 absolute -top-3 -left-8 rotate-[-30deg] shadow-sm z-20"></div>
                
                {/* Image */}
                <div className="bg-gray-200 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                   <img 
                     src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop" 
                     alt="Profile" 
                     className="w-full h-full object-cover"
                   />
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-4 left-0 w-full text-center">
                   <p className="font-marker text-2xl text-gray-600 opacity-80 rotate-1">ME @ 2025</p>
                </div>

                {/* Sticker */}
                <div className="absolute -bottom-6 -right-10 w-24 h-24 bg-[#FDE047] rounded-full shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-12 hover:scale-110 transition-transform cursor-pointer group">
                   <div className="text-center leading-none">
                     <span className="block font-cloudy text-xs font-bold text-yellow-800 group-hover:-translate-y-0.5 transition-transform">Open</span>
                     <span className="block font-cloudy text-sm font-black text-yellow-900 group-hover:translate-y-0.5 transition-transform">for Work!</span>
                   </div>
                </div>
             </div>
           </Reveal>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
           
           <Reveal visible={visible} delay="delay-200" type="elastic">
             <h2 className="text-5xl md:text-6xl font-black font-cloudy text-[#5D576B] drop-shadow-sm">
               About Me
               <div className="h-3 w-1/2 bg-[#D4E4BC] -mt-3 ml-4 rounded-full opacity-60 -z-10 hidden md:block"></div>
             </h2>
           </Reveal>
           
           <Reveal visible={visible} delay="delay-300" type="blur">
             <div className="prose prose-lg text-gray-500 font-medium leading-relaxed">
               <p className="mb-4">
                 Hey there! I'm a developer who loves the space between engineering and design. 
                 I treat code like poetry and UIs like cozy living rooms.
               </p>
               <p>
                 When I'm not pushing pixels or debugging async functions, I'm probably curating{' '}
                 <span className="relative inline-block font-bold text-gray-700 cursor-pointer group">
                    Lo-fi playlists
                    <svg className="absolute bottom-0 left-0 w-full h-2 text-[#81B29A] opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                 </span>
                 , brewing third-wave coffee, or tinkering with my mechanical keyboard.
               </p>
             </div>
           </Reveal>

           {/* Stats */}
           <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              
              <Reveal visible={visible} delay="delay-400" type="pop">
                 <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-[#E8E8E8] shadow-sm w-32 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-default relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-150"></div>
                    <span className="font-cloudy text-3xl font-black text-[#5D576B]">CS</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mt-1">Student</span>
                 </div>
              </Reveal>

              <Reveal visible={visible} delay="delay-500" type="pop">
                 <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-[#E8E8E8] shadow-sm w-32 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-default relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-green-100 rounded-tr-full opacity-50 transition-transform group-hover:scale-150"></div>
                    <span className="font-cloudy text-3xl font-black text-[#5D576B]">Web</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mt-1">Focus</span>
                 </div>
              </Reveal>

              <Reveal visible={visible} delay="delay-600" type="pop">
                 <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-[#E8E8E8] shadow-sm w-32 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-default relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-pink-100 rounded-br-full opacity-50 transition-transform group-hover:scale-150"></div>
                    <span className="font-cloudy text-3xl font-black text-[#5D576B]">UI/UX</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mt-1">Design</span>
                 </div>
              </Reveal>

           </div>
        </div>

      </div>
    </section>
  );
};
