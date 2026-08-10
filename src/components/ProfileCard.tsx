import React, { useState } from 'react';
import { Mail, Github, Linkedin, Check, Copy } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import profileImg from '../assets/ChatGPT Image Aug 6, 2026, 01_26_24 PM.png';

interface ProfileCardProps {
  data: PortfolioData['personal'];
  onContactClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ data, onContactClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full lg:w-[360px] xl:w-[400px] shrink-0 opacity-0 animate-reveal">
      <div className="relative bg-white text-black rounded-[28px] p-5 shadow-2xl border border-neutral-200 overflow-hidden flex flex-col items-center text-center">

        {/* Scribble Canvas SVG Graphics behind photo and details */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          {/* Main Scribble Wave (Dashed) */}
          <path
            d="M 50,120 
               C 150,30 350,70 330,160 
               C 310,250 80,180 60,280 
               C 40,380 340,320 320,420 
               C 300,520 120,480 80,560
               C 40,640 280,620 320,580"
            fill="none"
            stroke="#FF5500"
            strokeWidth="2.2"
            strokeDasharray="6,4"
            opacity="0.36"
          />
          {/* Counter Scribble Wave (Solid, Thin) */}
          <path
            d="M 320,80 
               C 220,150 80,90 90,200 
               C 100,310 320,240 300,350 
               C 280,460 60,400 80,500 
               C 100,600 280,550 300,620"
            fill="none"
            stroke="#FF5500"
            strokeWidth="1.5"
            opacity="0.30"
          />
        </svg>

        {/* Profile Avatar Container with User Image */}
        <div className="relative z-10 w-full max-w-[180px] aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100 p-0.5 shadow-inner flex items-center justify-center group cursor-pointer border border-neutral-200">
          <div className="w-full h-full rounded-xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={profileImg}
              alt={data.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Name Header */}
        <div className="relative z-10 mb-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-black font-syne leading-tight">
            {data.name}
          </h1>
          <p className="mt-0.5 text-xs font-bold text-neutral-600 tracking-wide">
            {data.role}
          </p>
          <div className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 bg-neutral-100 rounded-full border border-neutral-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-semibold text-neutral-600 tracking-wide">
              {data.roleSubtitle}
            </span>
          </div>
        </div>

        {/* Bio Pitch */}
        <p className="relative z-10 text-neutral-500 text-xs leading-relaxed mb-4 font-medium max-w-[280px]">
          {data.bio}
        </p>

        {/* Action Buttons */}
        <div className="relative z-10 w-full flex flex-col gap-2">
          <button
            onClick={onContactClick}
            className="w-full py-2.5 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            <Mail className="w-3.5 h-3.5 text-[#E0FF00]" />
            <span>Discuss Engineering Role</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full py-2 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-neutral-200"
            title="Copy Email"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-neutral-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Footer */}
        <div className="relative z-10 w-full pt-3 mt-3 border-t border-neutral-200/80 flex items-center justify-center gap-4 text-neutral-500">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-neutral-100 hover:text-black transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-neutral-100 hover:text-black transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${data.email}`}
            className="p-2 rounded-lg hover:bg-neutral-100 hover:text-black transition-colors"
            title="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
