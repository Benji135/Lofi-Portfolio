import React from 'react';
import { Linkedin, Github, Send, Stamp } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const ContactSection = ({ visible, theme }) => {
  return (
    <section className="snap-section flex flex-col items-center justify-center p-4 md:p-6 pb-24 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#E6DCC3]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full flex justify-center items-center">
        
        {/* Vintage Airmail Postcard */}
        <Reveal visible={visible} type="elastic">
          <div className="relative group perspective-1000 w-full max-w-2xl">

            <div className="bg-[#FAF9F6] p-1 rounded-sm shadow-xl transform rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
              
              {/* Airmail Border Pattern */}
              <div className="absolute inset-0 p-2 pointer-events-none z-10">
                <div
                  className="w-full h-full border-[6px] border-dashed"
                  style={{
                    borderImage:
                      'repeating-linear-gradient(45deg, #EF4444 0, #EF4444 10px, transparent 10px, transparent 15px, #3B82F6 15px, #3B82F6 25px, transparent 25px, transparent 30px) 30'
                  }}
                ></div>
              </div>

              <div className="bg-[#FAF9F6] p-6 md:p-10 h-full flex flex-col relative overflow-hidden">
                
                {/* Paper texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                {/* Header */}
                <div className="flex justify-between items-start mb-8 relative z-20">
                  <div>
                    <h2 className="font-marker text-3xl md:text-5xl text-gray-800 rotate-[-2deg]">Say Hello!</h2>
                    <p className="font-mono text-xs text-gray-400 mt-2 tracking-widest uppercase">
                      Via Airmail • Priority
                    </p>
                  </div>

                  {/* Stamp */}
                  <div className="w-20 h-24 md:w-24 md:h-28 bg-gray-100 border-4 border-dotted border-gray-300 relative flex items-center justify-center shadow-inner transform rotate-3">
                    <Stamp size={32} className="text-gray-300 opacity-50" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <div className="w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center transform -rotate-12">
                        <span className="font-mono text-[8px] text-gray-800 text-center leading-tight">
                          POSTAGE<br />PAID<br />2025
                        </span>
                      </div>
                      <div className="absolute w-24 h-0.5 bg-gray-800 rotate-[-12deg] wave-line"></div>
                    </div>
                  </div>
                </div>

                {/* Message body */}
                <div className="flex-1 border-l-2 border-gray-200/50 pl-6 ml-6 md:ml-0 md:border-l-0 md:pl-0 relative z-20 mb-4">
                  <p className="font-cloudy text-gray-500 text-lg md:text-xl leading-relaxed mb-8">
                    Dear Developer,<br /><br />
                    I checked out your portfolio and I'd love to collaborate on a project!
                  </p>

                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#E07A5F] text-white font-bold font-mono rounded-lg shadow-md hover:bg-[#D0694E] hover:-translate-y-1 transition-all active:translate-y-0 text-sm md:text-base"
                  >
                    <Send size={18} /> SEND MESSAGE
                  </a>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center relative z-20">
                  <span className="font-marker text-gray-400 text-sm">From: You</span>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-[#0077B5] transition-colors hover:scale-110 transform">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors hover:scale-110 transform">
                      <Github size={24} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
