import React from 'react';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Skills = () => {
  const skillCategories = {
    // Categorize skills
    'Front End Development': [
      skills.find((s) => s.name === 'JavaScript'),
      skills.find((s) => s.name === 'React.js'),
      skills.find((s) => s.name === 'Next.js'),
      skills.find((s) => s.name === 'Node.js'),
      skills.find((s) => s.name === 'Express.js'),
      skills.find((s) => s.name === 'MongoDB')
    ].filter(Boolean),

    'Back End & APIs': [
      skills.find((s) => s.name === 'Node.js'),
      skills.find((s) => s.name === 'Express.js'),
      skills.find((s) => s.name === 'REST APIs'),
      skills.find((s) => s.name === 'MongoDB')
    ].filter(Boolean),

    'Tools & Others': [
      skills.find((s) => s.name === 'Git & GitHub'),
      skills.find((s) => s.name === 'Responsive Web Design'),
      skills.find((s) => s.name === 'Vite'),
      skills.find((s) => s.name === 'Amazon Web Services'),
    ].filter(Boolean)
  };

  // Get proficiency percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      'Expert': 95,
      'Advanced': 80,
      'Intermediate': 65
    };
    return levels[level] || 50;
  };

  // Get Level Color
  const getLevelColor = (level) => {
    const colors = {
      'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
      'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
      'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
    };
    return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
  };

  return (
    <div>Skills</div>
  );
};

export default Skills;
