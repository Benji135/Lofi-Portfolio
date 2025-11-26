import React, { useState, useRef, useEffect } from 'react';

// Remove TS enum typing, just import normally
import { MoodType } from './types';
import { THEMES } from './constant';

// Features
import { MoodSwitcher } from '../Components/MainPage/MoodSwitcher';
import { MusicPlayer } from '../Components/MainPage/MusicPlayer';

// Navigation
import { DesktopNav } from './navigation/DesktopNav';
import { MobileDock } from './navigation/MobileDock';

// Sections
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';

export const MainPage = () => {
  const [activeMood, setActiveMood] = useState(MoodType.CHILL);
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [visitedSections, setVisitedSections] = useState(new Set([0]));
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const theme = THEMES[activeMood];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const idx = Math.round(scrollRef.current.scrollTop / window.innerHeight);
        setActiveSection(idx);
        setVisitedSections((prev) => {
          if (prev.has(idx)) return prev;
          const newSet = new Set(prev);
          newSet.add(idx);
          return newSet;
        });
      }
    };
    const ref = scrollRef.current;
    if (ref) ref.addEventListener('scroll', handleScroll);
    return () => ref && ref.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    scrollRef.current?.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div 
      className="relative w-full h-full transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: theme.bg, color: theme.primary }}
    >
      <div className="bg-noise" />

      {/* Parallax Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] opacity-20 transition-transform duration-700 ease-out"
          style={{ 
            backgroundColor: theme.secondary,
            transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` 
          }}
        />
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full blur-[100px] opacity-10 transition-transform duration-700 ease-out"
          style={{ 
            backgroundColor: theme.accent,
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` 
          }}
        />
      </div>

      <MoodSwitcher activeMood={activeMood} setActiveMood={setActiveMood} />
      
      <DesktopNav 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        theme={theme} 
      />

      <MobileDock 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        theme={theme} 
      />

      <MusicPlayer theme={theme} />

      {/* Scroll Container */}
      <div ref={scrollRef} className="snap-container no-scrollbar relative z-10">
        <HeroSection 
          visible={visitedSections.has(0)} 
          theme={theme} 
          mousePos={mousePos} 
          onScrollDown={() => scrollToSection(1)} 
        />
        
        <AboutSection visible={visitedSections.has(1)} />
        
        <ProjectsSection visible={visitedSections.has(2)} />
        
        <SkillsSection visible={visitedSections.has(3)} />
        
        <ContactSection visible={visitedSections.has(4)} theme={theme} />
      </div>
    </div>
  );
};
