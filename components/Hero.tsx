import React from 'react';

const Hero: React.FC = () => {
    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="h-screen flex flex-col justify-center">
            <div className="transition-all duration-500 section-visible">
                <p className="text-lg text-[#64ffda] mb-4">Hi, I’m</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#ccd6f6]">Peter Ejeh.</h1>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#8892b0]">a Data Analyst & Full Stack Developer.</h2>
                <p className="max-w-xl text-[#8892b0] mt-6 mb-8 text-lg">
                    I design data-driven digital solutions — from smart web applications to machine learning models that make business decisions faster, clearer, and smarter.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a 
                        href="#projects"
                        onClick={(e) => handleScrollToSection(e, '#projects')}
                        className="inline-block border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors duration-300 text-lg"
                    >
                        View My Projects
                    </a>
                     <a 
                        href="#contact"
                        onClick={(e) => handleScrollToSection(e, '#contact')}
                        className="inline-block border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors duration-300 text-lg"
                    >
                        Let’s Work Together
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;