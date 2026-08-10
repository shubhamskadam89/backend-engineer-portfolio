import React, { useState, useEffect } from 'react';
import { Home, Compass, Briefcase, FolderGit2, Wrench, Award, Lightbulb, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Home', icon: Home },
    { id: 'philosophy', label: 'Story & Mindset', icon: Compass },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'case-studies', label: 'Case Studies', icon: FolderGit2 },
    { id: 'tech-stack', label: 'Capabilities', icon: Wrench },
    { id: 'evidence', label: 'Ownership & Impact', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none opacity-0 animate-reveal">
      <div className={`pointer-events-auto transition-all duration-300 rounded-full border bg-[#121212]/90 backdrop-blur-md px-2 py-1.5 flex items-center justify-center gap-1.5 max-w-max shadow-2xl ${
        scrolled ? 'border-[#333333] shadow-[#E0FF00]/5' : 'border-[#222222]'
      }`}>
        
        {/* Navigation Icons Capsule Menu */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`p-2.5 rounded-full transition-all duration-300 relative group ${
                  isActive
                    ? 'bg-[#E0FF00] text-black font-black shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
                }`}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
                
                {/* CSS Tooltip on Hover */}
                <span className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#121212] text-[#E0FF00] text-[10px] font-mono rounded-lg border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
};
