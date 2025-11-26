import React, { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { PROJECTS } from '../../data/constants';
import { ExternalLink, Github, Coffee, Zap, Maximize2 } from 'lucide-react';
import { ProjectModal } from '../features/ProjectModal';

export const ProjectsSection = ({ visible }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="snap-section flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Background Fidgets - Work/Coffee Theme */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-[10%] left-[5%] font-mono text-2xl text-[#8C7A6B] opacity-10 font-bold animate-float rotate-[-10deg]">{`{ }`}</div>
         
         <div className="absolute bottom-[10%] right-[8%] text-[#BB9457] opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <Zap size={32} />
         </div>

         <div className="absolute top-[30%] right-[4%] text-[#8C7A6B] opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>
            <Coffee size={24} />
         </div>
      </div>

      <div className="container max-w-6xl w-full relative z-10">
        <Reveal visible={visible} type="elastic">
          <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black font-cloudy text-gray-800 relative inline-block">
              Selected Works

              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD93D] opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </h2>
            <p className="font-mono text-sm text-gray-400 mt-4 tracking-widest uppercase">From the Lab • Vol. 1</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-2 md:px-4 pb-24 md:pb-0">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} visible={visible} delay={`delay-${(idx + 1) * 200}`} type="pop">
              <div 
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-3xl p-4 shadow-soft border border-gray-100 hover:-translate-y-2 transition-transform duration-500 ease-out cursor-pointer"
              >

                <div 
                   className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#E8DCC4]/80 backdrop-blur-[1px] shadow-sm z-20 pointer-events-none"
                   style={{ 
                     transform: `translateX(-50%) rotate(${idx % 2 === 0 ? '-2deg' : '1deg'})`,
                     clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0 100%)'
                   }}
                ></div>

                <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 aspect-video group-hover:shadow-md transition-shadow">
                   <div className="absolute top-0 left-0 w-full h-8 bg-white/90 backdrop-blur-sm border-b border-gray-100 flex items-center px-3 gap-1.5 z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>

                      <div className="ml-2 px-3 py-0.5 bg-gray-100 rounded-full text-[8px] font-mono text-gray-400 flex-1 truncate text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        localhost:3000/{project.title.toLowerCase().replace(' ', '-')}
                      </div>
                   </div>

                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover pt-8 transition-transform duration-700 group-hover:scale-105" 
                   />
                   
                   <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px] pt-8">
                      <div className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold font-cloudy shadow-lg transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-2">
                        View Details <Maximize2 size={16} />
                      </div>
                   </div>
                </div>

                <div className="pt-6 px-2 pb-2">
                   <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold font-cloudy text-gray-800 leading-none">
                        {project.title}
                      </h3>

                      {project.github && (
                        <a 
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 hover:scale-110 transition-all text-gray-600"
                        >
                          <Github size={20} />
                        </a>
                      )}
                   </div>
                   
                   <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-6 line-clamp-2">
                     {project.description}
                   </p>

                   <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-3 py-1 bg-[#FAF9F6] border border-[#E6E6E6] rounded-lg text-xs font-bold text-gray-500 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
