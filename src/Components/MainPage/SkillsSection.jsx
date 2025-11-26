import React from 'react';
import { Code, Terminal, Database, Zap, Palette, Star, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';

export const SkillsSection = ({ theme, visitedSections }) => {
  const coreSkills = [
    { name: 'React', icon: Code, color: '#61DAFB', desc: 'UI Library' },
    { name: 'TypeScript', icon: Terminal, color: '#3178C6', desc: 'Type Safety' },
    { name: 'Node.js', icon: Database, color: '#339933', desc: 'Backend' },
    { name: 'Next.js', icon: Zap, color: '#000000', desc: 'Framework' }
  ];

  const creativeSkills = [
    { name: 'Tailwind', icon: Palette, color: '#06B6D4', desc: 'Styling' },
    { name: 'Figma', icon: Star, color: '#F24E1E', desc: 'Design' },
    { name: 'Git', icon: Code, color: '#F05032', desc: 'Version' },
    { name: 'Docker', icon: Cpu, color: '#2496ED', desc: 'Container' }
  ];

  return (
    <section className="snap-section bg-pegboard flex flex-col items-center justify-center p-6 relative shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]">
      <div className="container max-w-6xl relative w-full">
        <Reveal visible={visitedSections.has(3)} type="pop">
          <div className="absolute -top-16 md:-top-32 left-1/2 -translate-x-1/2 bg-white/95 px-6 md:px-10 py-3 md:py-5 rounded-b-xl shadow-lg border-t-0 border-4 border-dashed border-gray-300 z-20 text-center w-64 md:w-80">
            <h2 className="text-2xl md:text-4xl font-black tracking-widest uppercase text-gray-800 font-cloudy">The Gear</h2>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mt-1">Inventory / Skills</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12 md:mt-8 pb-10">
          {/* Left Panel: Core Tech */}
          <Reveal visible={visitedSections.has(3)} delay="delay-100" type="elastic">
            <div className="bg-white/95 p-6 md:p-10 rounded-2xl shadow-2xl transform md:rotate-1 border-4 border-gray-100 relative h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-300 shadow-inner ring-4 ring-white"></div>
              <h3 className="font-pixel text-xl md:text-3xl mb-6 md:mb-8 border-b-4 border-dashed border-gray-200 pb-3 text-gray-400 flex items-center justify-between">
                <span>Core_Systems</span>
                <Cpu size={24} className="md:w-7 md:h-7" />
              </h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {coreSkills.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="bg-gray-50 rounded-xl p-3 md:p-4 border border-gray-100 hover:border-blue-400 transition-all hover:shadow-md group cursor-default">
                      <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                          <Icon size={24} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                          <span className="block font-bold text-base md:text-lg text-gray-800 font-cloudy">{skill.name}</span>
                          <span className="text-[10px] md:text-xs uppercase font-mono text-gray-400 tracking-wide">{skill.desc}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right Panel: Tools & Design */}
          <Reveal visible={visitedSections.has(3)} delay="delay-300" type="elastic">
            <div className="bg-white/95 p-6 md:p-10 rounded-2xl shadow-2xl transform md:-rotate-1 border-4 border-gray-100 relative h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-300 shadow-inner ring-4 ring-white"></div>
              <h3 className="font-pixel text-xl md:text-3xl mb-6 md:mb-8 border-b-4 border-dashed border-gray-200 pb-3 text-gray-400 flex items-center justify-between">
                <span>Creative_Suite</span>
                <Palette size={24} className="md:w-7 md:h-7" />
              </h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {creativeSkills.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="bg-gray-50 rounded-xl p-3 md:p-4 border border-gray-100 hover:border-orange-400 transition-all hover:shadow-md group cursor-default">
                      <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                          <Icon size={24} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                          <span className="block font-bold text-base md:text-lg text-gray-800 font-cloudy">{skill.name}</span>
                          <span className="text-[10px] md:text-xs uppercase font-mono text-gray-400 tracking-wide">{skill.desc}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Decorative Cables */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
          <path d="M 200 150 Q 400 300 600 150" stroke="#333" strokeWidth="4" fill="none" />
        </svg>
      </div>
    </section>
  );
};