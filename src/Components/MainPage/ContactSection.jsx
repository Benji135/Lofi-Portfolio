import React from 'react';
import { Heart, Linkedin, Github } from 'lucide-react';
import { Reveal } from './Reveal';
import { FloppyDiskResume } from './FloppyDiskResume';

export const ContactSection = ({ theme, visitedSections }) => {
  return (
    <section className="snap-section flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(${theme.primary} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-0">
        
        {/* Contact Form / Info */}
        <Reveal visible={visitedSections.has(4)} type="elastic">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-2 transform rotate-1 transition-transform hover:rotate-0 mt-8 md:mt-0" style={{ borderColor: theme.primary }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gray-800"></div>
            </div>

            <div className="text-center pt-2">
              <h2 className="font-marker text-3xl md:text-4xl mb-4 transform -rotate-2" style={{ color: theme.primary }}>Let's Connect!</h2>
              <p className="mb-6 md:mb-8 opacity-70 leading-relaxed text-sm">
                I'm currently available for freelance projects and remote roles.
                Got a cool idea? Let's brew something together.
              </p>

              <div className="flex flex-col gap-4 justify-center items-center">
                <a 
                  href="mailto:hello@example.com"
                  className="px-6 py-3 bg-black text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 group w-full justify-center"
                >
                  <span className="group-hover:animate-pulse">●</span> Drop me a line
                </a>
                <div className="flex gap-4 w-full">
                  <a href="#" className="flex-1 p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors flex justify-center">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="flex-1 p-3 bg-gray-100 rounded-xl hover:bg-gray-200 hover:text-black transition-colors flex justify-center">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Resume Download Feature */}
        <Reveal visible={visitedSections.has(4)} delay="delay-200" type="pop">
          <div className="flex flex-col items-center">
            <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/60 shadow-lg text-center w-full max-w-sm">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-cloudy">Grab a copy</h3>
              <FloppyDiskResume theme={theme} />
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="absolute bottom-24 md:bottom-6 text-center opacity-40 font-mono text-xs md:text-sm w-full">
        <p>Designed & Coded with <Heart size={10} className="inline mx-1 text-red-500 fill-current" /> by Dev</p>
      </footer>
    </section>
  );
};