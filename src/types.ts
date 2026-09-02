export type Theme = 'dark' | 'light';
export type Language = 'en' | 'fr';

export type MathVisualizerMode = 'harmonic' | 'lorenz' | 'vectorField';

export interface SkillItem {
  name: string;
  subtext: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  accentColor: 'sky' | 'teal' | 'gold' | 'indigo';
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mathTopic: string;
  technologies: string[];
  githubUrl: string;
  iconName: string;
  keyFeatures: string[];
  formula?: string;
  complexity?: {
    time: string;
    space: string;
  };
  sampleCode?: {
    language: string;
    filename: string;
    code: string;
  };
  theoreticalNotes?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  coursework: string[];
  isCurrent?: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'copied';
  text: string;
}
