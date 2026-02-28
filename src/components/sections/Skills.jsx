import React from 'react';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Skills = () => {
  const skillCategories = {
    // Categorize skills
    Mastery: [
      skills.find((s) => s.name === 'HTML5'),
      skills.find((s) => s.name === 'CSS3'),
      skills.find((s) => s.name === 'JavaScript'),
      skills.find((s) => s.name === 'React.js'),
      skills.find((s) => s.name === 'Redux Toolkit'),
      skills.find((s) => s.name === 'Node.js'),
      skills.find((s) => s.name === 'Express.js'),
      skills.find((s) => s.name === 'REST APIs'),
      skills.find((s) => s.name === 'MongoDB'),
      skills.find((s) => s.name === 'Git & GitHub'),
    ].filter(Boolean),

    'In Progress': [
      skills.find((s) => s.name === 'Next.js'),
      skills.find((s) => s.name === 'TypeScript'),
      skills.find((s) => s.name === 'Tailwind CSS'),
      skills.find((s) => s.name === 'Vue.js'),
      skills.find((s) => s.name === 'Vite'),
      skills.find((s) => s.name === 'TanStack Start'),
    ].filter(Boolean),

    'Future Focus': [
      skills.find((s) => s.name === 'Python'),
      skills.find((s) => s.name === 'FastAPI'),
      skills.find((s) => s.name === 'GenAI LLM Models'),
      skills.find((s) => s.name === 'Amazon Web Services'),
      skills.find((s) => s.name === 'SQL')
    ].filter(Boolean)
  };

  return (
    <div>Skills</div>
  );
};

export default Skills;
