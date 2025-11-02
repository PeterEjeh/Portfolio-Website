import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl font-bold text-center mb-16 text-[#ccd6f6]">
        <span className="text-[#64ffda] mr-2">02.</span>Skills
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {SKILLS_DATA.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4 border-b border-[#233554] pb-2">{category.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="bg-[#112240] text-[#8892b0] text-sm font-mono px-3 py-1.5 rounded-md flex items-center transition-colors hover:text-[#64ffda]">
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-5 h-5 mr-2 object-contain"
                    />
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;