import React from 'react';

export interface Skill {
  name: string;
  icon: string; // URL to the icon
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}