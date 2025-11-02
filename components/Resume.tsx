
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Resume: React.FC = () => {
  return (
    <AnimatedSection id="resume" className="text-center !min-h-0 py-24">
      <h2 className="text-3xl font-bold mb-4 text-[#ccd6f6]">My Resume</h2>
      <p className="text-lg text-[#8892b0] mb-8 max-w-xl mx-auto">
        Download my latest CV/Resume to explore my academic background, work experience, and technical expertise.
      </p>
      <a
        href="/resume.pdf" // Placeholder link
        download
        className="inline-block border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors duration-300 text-lg"
      >
        Download CV
      </a>
    </AnimatedSection>
  );
};

export default Resume;
