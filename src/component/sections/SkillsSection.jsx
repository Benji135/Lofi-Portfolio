import React from 'react';
import { 
  Cpu, Palette, Code, Terminal, Zap, Database, 
  GitBranch, Box, Layout, Star 
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const SkillsSection = ({ visible }) => {
  return (
    <section className="snap-section bg-pegboard flex flex-col items-center justify-center p-4 md:p-6 pb-24 lg:pb-32 overflow-hidden relative">
      <div className="container max-w-7xl w-full relative z-10">
        
        {/* Header */}
        <Reveal visible={visible} type="pop">
          <div className="flex flex-col items-start mb-12 md:mb-16 pl-4 md:pl-12">
            <div className="bg-white px-8 py-5 rounded-2xl shadow-sm border-b-4 border-gray-100 transform -rotate-1 relative group hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-1 border-2 border-dashed border-gray-100 rounded-xl pointer-events-none"></div>
              
              <h2 className="text-4xl md:text-5xl font-black font-cloudy text-gray-800 tracking-wide text-center uppercase relative z-10">
                The Gear
              </h2>
              <p className="text-center font-mono text-xs text-gray-400 tracking-[0.3em] mt-1 font-bold relative z-10">
                INVENTORY / SKILLS
              </p>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start relative px-2 lg:pr-40">

          {/* Cable */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-48 h-32 z-0 pointer-events-none -ml-12">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" className="overflow-visible">
              <path d="M-20 60 Q 40 90, 120 -15" stroke="rgba(0,0,0,0.05)" strokeWidth="6" strokeLinecap="round" />
              <path d="M-20 60 Q 40 90, 120 -15" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
              <circle cx="-20" cy="60" r="4" fill="#D1D5DB" />
              <circle cx="120" cy="-15" r="4" fill="#D1D5DB" />
            </svg>
          </div>

          {/* Card 1 */}
          <Reveal visible={visible} delay="delay-100" type="elastic">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-gray-200/40 border-[3px] border-white relative group mt-8 lg:mt-0">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mb-6 border-b-2 border-dashed border-gray-100 pb-4 pt-2">
                <h3 className="font-pixel text-xl md:text-2xl text-gray-400 tracking-wide">Core_Systems</h3>
                <Cpu size={24} className="text-gray-300" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {[
                  { name: 'React', desc: 'UI LIBRARY', icon: <Code className="text-blue-400" size={28} /> },
                  { name: 'TypeScript', desc: 'TYPE SAFETY', icon: <Terminal className="text-blue-600" size={28} /> },
                  { name: 'Node.js', desc: 'BACKEND', icon: <Database className="text-green-500" size={28} /> },
                  { name: 'Next.js', desc: 'FRAMEWORK', icon: <Zap className="text-gray-800" size={28} /> }
                ].map(skill => (
                  <div 
                    key={skill.name} 
                    className="bg-gray-50/80 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 rounded-3xl p-5 flex flex-col items-center text-center gap-3 group/item cursor-default"
                  >
                    <div className="p-3 bg-white rounded-2xl shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <span className="block font-cloudy font-bold text-gray-800 text-lg md:text-xl">{skill.name}</span>
                      <span className="block font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider mt-1">{skill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal visible={visible} delay="delay-300" type="elastic" className="lg:-mt-32">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-gray-200/40 border-[3px] border-white relative group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mb-6 border-b-2 border-dashed border-gray-100 pb-4 pt-2">
                <h3 className="font-pixel text-xl md:text-2xl text-gray-400 tracking-wide">Creative_Suite</h3>
                <Palette size={24} className="text-gray-300" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {[
                  { name: 'Tailwind', desc: 'STYLING', icon: <Layout className="text-cyan-400" size={28} /> },
                  { name: 'Figma', desc: 'DESIGN', icon: <Star className="text-orange-400" size={28} /> },
                  { name: 'Git', desc: 'VERSION', icon: <GitBranch className="text-red-500" size={28} /> },
                  { name: 'Docker', desc: 'CONTAINER', icon: <Box className="text-blue-500" size={28} /> }
                ].map(skill => (
                  <div 
                    key={skill.name} 
                    className="bg-gray-50/80 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 rounded-3xl p-5 flex flex-col items-center text-center gap-3 group/item cursor-default"
                  >
                    <div className="p-3 bg-white rounded-2xl shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <span className="block font-cloudy font-bold text-gray-800 text-lg md:text-xl">{skill.name}</span>
                      <span className="block font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider mt-1">{skill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
