import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const LangTransitionModal: React.FC<{
  isTransitioning: boolean;
  targetLang: 'en' | 'bn';
}> = ({ isTransitioning, targetLang }) => {
  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Golden Curtain Wipe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1814] via-[#2A2318] to-[#111111] animate-in fade-in zoom-in-105 duration-300"></div>

      {/* Radiant Light Burst */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/25 blur-3xl animate-pulse"></div>

      {/* Center Emblem & Message */}
      <div className="relative z-10 text-center flex flex-col items-center animate-in zoom-in-90 duration-300">
        <div className="w-20 h-20 rounded-2xl border-2 border-[#D4AF37] p-2 bg-[#0A0A0A] shadow-2xl mb-4">
          <img
            src="https://i.supaimg.com/88cac59e-85c9-44fa-970b-faf486de12c5/0680d662-cbd5-4267-b0de-f0460d72ffd3.jpg"
            alt="Prochar Media"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F5DE93] uppercase mb-1">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Switching Language</span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-black text-white font-bengali">
          {targetLang === 'bn' ? 'বাংলায় রূপান্তর হচ্ছে...' : 'Switching to English...'}
        </h3>

        <div className="mt-4 px-4 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFE082] text-xs font-bold">
          {targetLang === 'bn' ? '“প্রচারেই প্রসার”' : '“We Promote, You Grow”'}
        </div>
      </div>
    </div>
  );
};

export const FloatingScrollDot: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed right-3 sm:right-4 z-40 pointer-events-none transition-all duration-100 ease-out hidden sm:block"
      style={{
        top: `calc(15% + ${scrollPercent * 0.7}%)`,
      }}
    >
      <div className="relative group">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-full bg-[#D4AF37] blur-xs opacity-70 animate-pulse"></div>

        {/* Distinctive Golden Gem Dot */}
        <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE79A] via-[#D4AF37] to-[#8A5A00] border-2 border-white shadow-lg flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#111111]"></div>
        </div>
      </div>
    </div>
  );
};
