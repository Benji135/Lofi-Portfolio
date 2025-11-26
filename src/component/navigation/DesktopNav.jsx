import React from 'react';
import { Home, User, BookOpen, Briefcase, Cpu, Mail } from 'lucide-react';

export const DesktopNav = ({ activeSection, scrollToSection, theme }) => {
  const navItems = [
    { label: 'Home', icon: <Home size={18} /> },
    { label: 'Bio', icon: <User size={18} /> },
    { label: 'Academic', icon: <BookOpen size={18} /> },
    { label: 'Projects', icon: <Briefcase size={18} /> },
    { label: 'Skills', icon: <Cpu size={18} /> },
    { label: 'Contact', icon: <Mail size={18} /> }
  ];
  
  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 p-2 bg-white/40 backdrop-blur-md border border-white/40 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:bg-white/60">
      {navItems.map((item, idx) => {
        const isActive = activeSection === idx;

        return (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className={`
              group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out
              ${isActive ? 'bg-white shadow-sm scale-100' : 'hover:bg-white/50 scale-90 hover:scale-100 opacity-60 hover:opacity-100'}
            `}
            style={{
              color: isActive ? theme.primary : '#64748B',
            }}
            aria-label={`Scroll to ${item.label}`}
          >
            {item.icon}

            {/* Tooltip */}
            <span
              className="absolute left-full ml-3 px-2 py-1 bg-gray-800/90 text-white text-[10px] font-bold tracking-wide rounded opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-sm backdrop-blur-sm"
            >
              {item.label}
            </span>

            {/* Active Dot */}
            {isActive && (
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full border border-white shadow-sm transition-transform duration-300 animate-in zoom-in"
                style={{ backgroundColor: theme.secondary }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
