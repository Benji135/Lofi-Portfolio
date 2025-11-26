import React from 'react';
import { Home, User, Briefcase, Cpu, Mail } from 'lucide-react';

export const Navigation = ({ activeSection, scrollToSection, theme }) => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'Bio' },
    { icon: Briefcase, label: 'Work' },
    { icon: Cpu, label: 'Skills' },
    { icon: Mail, label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        {['Start', 'Bio', 'Work', 'Skills', 'Contact'].map((label, idx) => (
          <div key={idx} className="group flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection(idx)}>
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === idx ? 'scale-150' : 'opacity-40 group-hover:opacity-100'
              }`}
              style={{ backgroundColor: theme.primary }}
            />
            <span 
              className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 origin-left ${
                activeSection === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] z-50">
        <div className="bg-[#FFF8E7]/90 backdrop-blur-xl border-2 border-white/40 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-2 px-6 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none"></div>
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button 
                key={idx}
                onClick={() => scrollToSection(idx)}
                className="relative group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300"
              >
                <div 
                  className={`absolute -top-1 w-1 h-1 rounded-full transition-all duration-300 ${
                    activeSection === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ backgroundColor: theme.primary }}
                />
                <div 
                  className={`transition-all duration-300 ${
                    activeSection === idx ? 'transform -translate-y-1 scale-110' : 'opacity-50 hover:opacity-80'
                  }`}
                  style={{ color: activeSection === idx ? theme.primary : theme.primary }}
                >
                  <Icon size={22} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};