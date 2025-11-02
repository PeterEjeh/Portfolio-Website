import React from 'react';
import { SocialIcons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-[#8892b0] text-sm">
      {/* Social links for desktop */}
      <div className="fixed bottom-0 left-8 z-10 hidden md:flex flex-col items-center space-y-4">
          <a href="https://github.com/peterejeh" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:-translate-y-1">{SocialIcons.github}</a>
          <a href="https://linkedin.com/in/peteriprtexample" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:-translate-y-1">{SocialIcons.linkedin}</a>
          <div className="w-px h-24 bg-[#8892b0] mt-4"></div>
      </div>
      {/* Email link for desktop */}
       <div className="fixed bottom-0 right-8 z-10 hidden md:flex flex-col items-center space-y-4">
            <a href="mailto:petes-tech@proton.me" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300" style={{ writingMode: 'vertical-rl' }}>
                petes-tech@proton.me
            </a>
            <div className="w-px h-24 bg-[#8892b0] mt-4"></div>
       </div>

      <p>Designed & Built by Peter Ejeh.</p>
      <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;