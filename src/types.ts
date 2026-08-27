export interface PersonalDetails {
  fullName: string;
  vietnameseName: string;
  title: {
    en: string;
    vi: string;
  };
  headline: {
    en: string;
    vi: string;
  };
  summary: {
    en: string;
    vi: string;
  };
  location: string;
  phone: string;
  email: string;
  skype: string;
  linkedin: string;
  github: string;
  status: {
    en: string;
    vi: string;
  };
  experienceYears: number;
  completedProjects: number;
  internationalClients: number;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: 'framework' | 'ui' | 'testing' | 'devops' | 'softskill';
  badge?: string;
  description?: {
    en: string;
    vi: string;
  };
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    vi: string;
  };
  icon: string;
  skills: SkillItem[];
}

export interface ProjectInfo {
  id: string;
  title: {
    en: string;
    vi: string;
  };
  company: string;
  time?: string;
  clientOrigin: string;
  clientFlag: string;
  domain: string;
  role: {
    en: string;
    vi: string;
  };
  overview: {
    en: string;
    vi: string;
  };
  responsibilities: {
    en: string[];
    vi: string[];
  };
  techStack: string[];
  category: 'react' | 'angular' | 'mobile' | 'enterprise' | 'ecommerce';
  featured?: boolean;
}

export interface EmploymentHistory {
  id: string;
  company: string;
  role: {
    en: string;
    vi: string;
  };
  location: string;
  period: {
    en: string;
    vi: string;
  };
  isCurrent?: boolean;
  summary: {
    en: string;
    vi: string;
  };
  projects: ProjectInfo[];
}

export interface EducationItem {
  degree: {
    en: string;
    vi: string;
  };
  institution: string;
  period: string;
  location: string;
  description: {
    en: string;
    vi: string;
  };
}

export interface LanguageSkill {
  name: {
    en: string;
    vi: string;
  };
  level: string;
  percent: number;
  note: {
    en: string;
    vi: string;
  };
}

export type Language = 'vi' | 'en';
