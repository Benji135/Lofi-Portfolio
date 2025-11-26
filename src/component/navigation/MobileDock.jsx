import React from 'react';
import { Home, User, Briefcase, Cpu, Mail, BookOpen } from 'lucide-react';

export const MobileDock = ({ activeSection, scrollToSection, theme }) => {
  // 0: Home, 1: Bio(User), 2: Exp(Book), 3: Work(Briefcase), 4: Skills(Cpu), 5: Contact(Mail)
  const items = [
    { icon: <Home size={18} />, label: 'Home' },
    { icon: <User size={18} />, label: 'Bio' },
    { icon: <BookOpen size={18} />, label: 'Exp' },
    { icon: <Briefcase size={18} />, label: 'Work' },
    { icon: <Cpu size={18} />, label: 'Skills' },
    { icon: <Mail size={18} />, label: 'Contact' }
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] z-50">
      <div className="glass-panel rounded-full shadow-soft p-2 px-4 flex justify-between items-center relative overflow-hidden">
        {items.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => scrollToSection(idx)}
            className="relative group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-500 flex-1"
          >
            <div 
              className={`absolute -bottom-1 w-1 h-1 rounded-full transition-all duration-500 ${
                activeSection === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ backgroundColor: theme.primary }}
            />

            <div 
              className={`transition-all duration-500 ${
                activeSection === idx ? 'transform -translate-y-1' : 'opacity-40'
              }`}
              style={{ color: theme.primary }}
            >
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
