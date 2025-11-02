import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold text-center mb-16 text-[#ccd6f6]">
        <span className="text-[#64ffda] mr-2">04.</span>Some Things I've Built
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="group relative bg-[#112240] rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-20"
                loading="lazy"
                decoding="async" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{project.title}</h3>
              <p className="text-[#8892b0] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#0a192f] text-xs text-[#64ffda] px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Live Demo</a>
                 <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;