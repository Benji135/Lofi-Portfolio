import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Info, BookOpen, PenTool } from 'lucide-react';

export const AboutSection = ({ visible }) => {
  const stack = [
    "React", "TypeScript", "Tailwind", "Node.js",
    "Gemini", "Three.js", "Figma", "Git"
  ];

  const journey = [
    { year: '2026', title: 'BS Computer Science', place: 'University', desc: 'Expected Graduation' },
    { year: '2022', title: 'Intermediate', place: 'College', desc: 'Pre-Engineering / CS' },
    { year: '2020', title: 'Matriculation', place: 'High School', desc: 'Science Group' },
  ];

  return (
    <section className="snap-section flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      
      {/* Background Fidgets */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 left-10 text-[#8C7A6B] opacity-10 animate-float">
          <BookOpen size={32} />
        </div>

        <div className="absolute bottom-24 right-12 text-[#8C7A6B] opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>
          <PenTool size={28} />
        </div>

        <div
          className="absolute bottom-[40%] left-[5%] w-16 h-16 border-4 border-[#8C7A6B] rounded-full opacity-5 animate-spin-slow"
          style={{ borderStyle: 'dashed' }}
        ></div>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 relative z-10">
        
        {/* Left Column: Tech Stack */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <Reveal visible={visible} type="pop">
            <div className="bg-[#FFF9F0] rounded-[2rem] p-6 shadow-soft border border-[#E6DCC3] h-full relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-yellow-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-center gap-2 mb-6 opacity-60 relative">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500">Skills.json</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white border border-[#E6DCC3] rounded-lg font-mono text-xs font-bold text-gray-600 shadow-sm hover:scale-105 transition-transform cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-[#E6DCC3] relative">
                <p className="font-cloudy text-gray-800 text-lg leading-tight">
                  "I build things that feel good to use."
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Academic Logbook Table */}
        <div className="w-full md:w-2/3">
          <Reveal visible={visible} delay="delay-200" type="elastic">
            <div className="bg-white rounded-[2rem] shadow-soft border border-[#E6DCC3] overflow-hidden relative min-h-[400px]">
              
              <div className="bg-[#F5F1E8] p-6 border-b border-[#E6DCC3] flex justify-between items-center">
                <h3 className="font-pixel text-2xl text-gray-700">Academic_Log.txt</h3>
                <Info size={20} className="text-gray-400" />
              </div>

              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="p-4 pl-6 font-marker text-gray-400 font-normal text-sm w-20">Year</th>
                      <th className="p-4 font-marker text-gray-400 font-normal text-sm">Milestone</th>
                      <th className="p-4 font-marker text-gray-400 font-normal text-sm hidden sm:table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {journey.map((item, idx) => (
                      <tr
                        key={idx}
                        className="group hover:bg-[#FDFBF7] transition-colors border-b border-gray-50 last:border-0"
                      >
                        <td className="p-4 pl-6 font-pixel text-lg text-[#81B29A]">{item.year}</td>
                        <td className="p-4">
                          <div className="font-bold text-gray-800 font-cloudy text-sm sm:text-base">
                            {item.title}
                          </div>
                          <div className="text-xs font-mono text-gray-400 mt-0.5">{item.place}</div>
                          <div className="sm:hidden text-xs font-mono text-gray-400 mt-1 italic">{item.desc}</div>
                        </td>
                        <td className="p-4 hidden sm:table-cell">
                          <span className="inline-block px-2 py-1 bg-gray-50 rounded-md text-xs font-mono text-gray-500 border border-gray-100">
                            {item.desc}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,#E6DCC3,#E6DCC3_10px,transparent_10px,transparent_20px)] opacity-50"></div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
