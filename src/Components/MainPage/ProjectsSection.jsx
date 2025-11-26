import React from 'react';
import { Reveal } from './Reveal';
import { PROJECTS } from '../../Pages/constants/projects';

export const ProjectsSection = ({ theme, visitedSections }) => {
  return (
    <section className="snap-section flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-sm">
      <div className="container max-w-6xl w-full">
        <Reveal visible={visitedSections.has(2)} type="elastic">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 border-b-2 pb-4 text-center md:text-left" style={{ borderColor: theme.primary }}>
            <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-cloudy">Selected Works</h2>
                <p className="font-pixel text-lg md:text-xl mt-2 opacity-70">Vol. 1 (2024-2025)</p>
            </div>
            <div className="hidden md:block">
                <span className="font-mono text-xs opacity-50">SCROLL FOR MORE</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-20 md:pb-0">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} visible={visitedSections.has(2)} delay={`delay-${(idx + 1) * 200}`} type="pop">
              <div className="group relative w-full aspect-square cursor-pointer perspective-1000 max-w-xs mx-auto md:max-w-none">
                {/* Vinyl Record */}
                <div 
                  className="vinyl-record absolute top-2 right-2 bottom-2 left-2 rounded-full shadow-2xl flex items-center justify-center"
                  style={{ 
                    background: 'radial-gradient(circle, #1a1a1a 0%, #000 100%)',
                    zIndex: 0
                  }}
                >
                  {/* Record Grooves */}
                  <div className="absolute inset-1 rounded-full border-2 border-gray-800 opacity-50"></div>
                  <div className="absolute inset-4 rounded-full border border-gray-800 opacity-40"></div>
                  <div className="absolute inset-8 rounded-full border border-gray-800 opacity-30"></div>
                  
                  {/* Label */}
                  <div className="w-1/3 h-1/3 rounded-full flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: theme.secondary }}>
                    <div className="absolute inset-0 border-4 border-black opacity-10 rounded-full"></div>
                    <span className="font-pixel text-white text-[8px] md:text-[10px] text-center px-1">{project.title}</span>
                    <div className="absolute w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Sleeve (Cover Art) */}
                <div 
                  className="vinyl-sleeve absolute inset-0 bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100 z-10 group-hover:-translate-x-4 group-hover:-translate-y-2 group-hover:-rotate-2"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-1 font-cloudy">{project.title}</h3>
                    <p className="text-white/80 text-xs md:text-sm font-mono mb-3">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
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