import { LucideIcon } from 'lucide-react';

export enum MoodType {
  CHILL = 'Chill',
  FOCUS = 'Focus',
  CREATIVE = 'Create',
  COFFEE = 'Coffee'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;      // <-- added
  image: string;
  gallery?: string[];   // <-- added
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
}
