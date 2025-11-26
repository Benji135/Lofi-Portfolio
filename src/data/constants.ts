import { MoodType, ThemeColors, Project } from '../types';

export const THEMES: Record<MoodType, ThemeColors> = {
  [MoodType.CHILL]: { primary: '#5D576B', secondary: '#81B29A', accent: '#E8DCC4', bg: '#FDF6E3' },
  [MoodType.FOCUS]: { primary: '#2D3748', secondary: '#4A5568', accent: '#A0AEC0', bg: '#F1F5F9' },
  [MoodType.CREATIVE]: { primary: '#FF6B6B', secondary: '#FFD93D', accent: '#4ECDC4', bg: '#FFFEF5' },
  [MoodType.COFFEE]: { primary: '#432818', secondary: '#BB9457', accent: '#FFE6A7', bg: '#FAF3E0' },
};

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Retro Notes', 
    description: 'A markdown note-taking app inspired by 90s OS aesthetics. Features local storage persistence, drag-and-drop organization, and custom themes.', 
    tags: ['React', 'TS', 'Tailwind'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000'
    ]
  },
  { 
    id: '2', 
    title: 'Zen Timer', 
    description: 'Minimalist Pomodoro focus tool with ambient soundscapes. Includes customizable timer intervals and a distraction-free mode.', 
    tags: ['Vue', 'Pinia', 'Audio API'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1000',
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1000'
    ]
  },
  { 
    id: '3', 
    title: 'Cloud Draw', 
    description: 'Real-time collaborative whiteboard for remote teams. Supports infinite canvas, drawing tools, and image export.', 
    tags: ['Next.js', 'Socket.io', 'Canvas'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000'
    ]
  }
];