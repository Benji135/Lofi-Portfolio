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
    title: 'DisPakistan', 
    description: 'Production-grade digital invoicing platform for FBR & IRIS tax compliance. Features bulk Excel invoice submission with intelligent header detection, direct FBR API integration, multi-company support, sequential invoice numbering, printable tax invoices with QR codes, and interactive financial analytics.', 
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    link: '#',
    github: '#',
    image: '/images/dispakistan.png',
    gallery: [
      '/images/dispakistan-1.png',
      '/images/dispakistan-2.png'
    ],
    features: [
      'Bulk Excel & IRIS template upload with smart header detection',
      'Direct FBR API integration for real-time validation',
      'Multi-company support with dynamic database switching',
      'Printable sales tax invoices with QR codes',
      'Interactive financial analytics with Recharts',
      'OTP-based authentication with email verification'
    ]
  },
  { 
    id: '2', 
    title: 'TheOnline365', 
    description: 'Full-stack multi-portal prep services platform for Amazon, eBay & Walmart sellers. Dual-portal architecture with order lifecycle management, real-time inventory tracking, automated billing with tiered pricing, role-based access control, and sales reporting. Deployed with Nginx, Redis, PM2 & CI/CD.', 
    tags: ['MERN', 'Vite', 'Redis', 'Nginx', 'CI/CD'],
    link: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000'
    ],
    features: [
      'Dual-portal architecture (Customer + Admin)',
      'Inbound/Outbound/Return order lifecycle management',
      'Real-time inventory tracking with shelf location editing',
      'Automated billing engine with tiered FBM pricing',
      'Role-based access control & team management',
      'Deployed with Nginx, Redis, PM2 & GitHub Actions CI/CD'
    ]
  }
];