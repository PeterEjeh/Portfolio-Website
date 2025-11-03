import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#ccd6f6]">
        <span className="text-[#64ffda] mr-2">01.</span>About Me
      </h2>
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3 text-lg text-[#8892b0] space-y-4">
          <p>
            I’m a passionate Information Technology student at Abubakar Tafawa Balewa University, specializing in Computer Science. Over the years, I’ve developed a strong interest in data analytics, machine learning, and cloud-based web applications.
          </p>
          <p>
            I enjoy solving real-world problems by combining data insights with efficient technology solutions — whether it’s predicting outcomes, automating workflows, or building modern platforms that connect people and businesses. Currently, I’m exploring how AI and serverless technologies can transform sectors like agriculture, finance, and sustainability in Africa.
          </p>
          <p>
            When I’m not coding or analyzing data, I enjoy teaching, reading mindset books, and working on creative projects that blend technology and impact.
          </p>
        </div>
        <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
                src="/images/profile.png" 
                alt="Peter E."
                className="relative rounded-lg w-full h-full object-cover"
            />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;