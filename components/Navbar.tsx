import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close mobile menu on click
    };
    
    useEffect(() => {
        const sections = ['home', ...navLinks.map(link => link.href.substring(1)), 'resume'];
        
        const handleScroll = () => {
            // Handle background blur on scroll
            setIsScrolled(window.scrollY > 50);

            // Handle active link highlighting
            let current = 'home';
            for (const id of sections) {
                const section = document.getElementById(id);
                // Offset of 150px to trigger the change a bit before the section top hits the viewport top
                if (section && window.scrollY >= section.offsetTop - 150) {
                    current = id;
                }
            }
            setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism shadow-lg' : ''}`}>
            <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-[#64ffda] tracking-wider">PI</a>
                
                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((link, index) => (
                        <li key={link.href}>
                            <a 
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)} 
                                className={`transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-[#64ffda]' : 'text-[#ccd6f6] hover:text-[#64ffda]'}`}
                            >
                                <span className="text-[#64ffda] mr-1">0{index + 1}.</span>{link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a 
                            href="#resume"
                            onClick={(e) => handleNavClick(e, '#resume')}
                            className={`border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors duration-300 ${activeSection === 'resume' ? 'bg-[#64ffda] bg-opacity-10' : ''}`}
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Nav Button */}
                <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 bg-[#64ffda] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-[#64ffda] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-[#64ffda] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Nav Menu */}
                <div className={`fixed top-0 right-0 h-full w-3/4 bg-[#112240] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                     <ul className="flex flex-col items-center justify-center h-full space-y-8">
                        {navLinks.map((link, index) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href} 
                                    onClick={(e) => handleNavClick(e, link.href)} 
                                    className={`text-xl transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-[#64ffda]' : 'text-[#ccd6f6] hover:text-[#64ffda]'}`}
                                >
                                    <span className="text-[#64ffda] mr-2">0{index + 1}.</span>{link.label}
                                </a>
                            </li>
                        ))}
                         <li>
                            <a 
                                href="#resume" 
                                onClick={(e) => handleNavClick(e, '#resume')}
                                className={`border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded text-xl hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors duration-300 ${activeSection === 'resume' ? 'bg-[#64ffda] bg-opacity-10' : ''}`}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;