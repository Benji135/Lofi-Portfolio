import React, { useState, useRef, useEffect } from 'react';
import { THEMES } from '../data/constants';

// Features
import { MoodSwitcher } from './features/MoodSwitcher';
import { MusicPlayer } from './features/MusicPlayer';
import { FloppyDiskResume } from './features/FloppyDiskResume';

// Navigation
import { DesktopNav } from './navigation/DesktopNav';
import { MobileDock } from './navigation/MobileDock';

// Sections
import { HeroSection } from './sections/HeroSection';
import { BioSection } from './sections/BioSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';

// ENUM REMOVED — now using string values
import { MoodType } from '../types';

export const MainPage = ({ isReady }) => {
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
      const container = scrollRef.current;
      if (container) {
        const scrollPos = container.scrollTop;
        const viewportHeight = window.innerHeight;
        const sections = Array.from(container.children);

        let currentIdx = 0;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section.offsetTop <= scrollPos + viewportHeight * 0.4) {
            currentIdx = i;
          }
        }

        setActiveSection(currentIdx);
        setVisitedSections((prev) => {
          if (prev.has(currentIdx)) return prev;
          const newSet = new Set(prev);
          newSet.add(currentIdx);
          return newSet;
        });
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => ref && ref.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const container = scrollRef.current;
    if (container) {
      const section = container.children[index];
      if (section) {
        container.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }
    }
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
            transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full blur-[100px] opacity-10 transition-transform duration-700 ease-out"
          style={{
            backgroundColor: theme.accent,
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
        />
      </div>

      {/* Floating UI */}
      <MoodSwitcher activeMood={activeMood} setActiveMood={setActiveMood} />
      <DesktopNav activeSection={activeSection} scrollToSection={scrollToSection} theme={theme} />
      <MobileDock activeSection={activeSection} scrollToSection={scrollToSection} theme={theme} />
      <MusicPlayer theme={theme} />
      <FloppyDiskResume theme={theme} />

      {/* Scroll Container */}
      <div ref={scrollRef} className="snap-container no-scrollbar relative z-10">
        {/* 0: Hero */}
        <HeroSection
          visible={isReady && visitedSections.has(0)}
          theme={theme}
          mousePos={mousePos}
          onScrollDown={() => scrollToSection(1)}
        />

        {/* 1: Bio */}
        <BioSection visible={visitedSections.has(1)} theme={theme} />

        {/* 2: About */}
        <AboutSection visible={visitedSections.has(2)} />

        {/* 3: Projects */}
        <ProjectsSection visible={visitedSections.has(3)} />

        {/* 4: Skills */}
        <SkillsSection visible={visitedSections.has(4)} />

        {/* 5: Contact */}
        <ContactSection visible={visitedSections.has(5)} theme={theme} />
      </div>
    </div>
  );
};
