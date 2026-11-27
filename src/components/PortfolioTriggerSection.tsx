import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, ArrowRight, Sparkles, Star } from 'lucide-react';

interface PortfolioTriggerSectionProps {
  onNavigatePortfolio: () => void;
}

export const PortfolioTriggerSection: React.FC<PortfolioTriggerSectionProps> = ({ onNavigatePortfolio }) => {
  const { lang } = useApp();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onNavigatePortfolio();
    }, 350);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#FCFAF7] relative overflow-hidden border-t border-[#D4AF37]/25">
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#B8860B]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'আমাদের সফল কাজ ও পোর্টফোলিও' : 'Our Success Portfolio'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#111111] font-serif-royal tracking-tight leading-tight">
            {lang === 'bn' ? (
              <>
                আমাদের কাজের <span className="gold-gradient-text">সোনালী নিদর্শন</span>
              </>
            ) : (
              <>
                Explore Our <span className="gold-gradient-text">Masterpiece Portfolio</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-[#665D52] max-w-xl mx-auto leading-relaxed">
            {lang === 'bn'
              ? 'ইউটিউব এসইও গ্রোথ, ডক্টর পেজ বুস্টিং, বিফোর-আফটার কেস স্টাডি, লোগো ব্র্যান্ডিং ও ভিডিও রিলসের চমৎকার কালেকশন দেখতে নিচে ক্লিক করুন।'
              : 'Discover our proven success stories in YouTube SEO growth, doctor page boosting, before-after case studies, branding and video reels.'}
          </p>
        </div>

        {/* 3-Page Stacked Card Trigger (Compact & Zoom Opening Animation) */}
        <div className="max-w-3xl mx-auto cursor-pointer group" onClick={handleClick}>
          <div
            className={`relative h-[220px] sm:h-[280px] md:h-[320px] w-full transition-all duration-400 ease-out ${isOpening ? 'scale-110 opacity-0 rotate-1' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Layer 3 (Bottom background page) */}
            <div className={`absolute inset-x-6 bottom-0 h-[80%] rounded-2xl bg-gradient-to-tr from-[#2A2318] to-[#1C1814] border border-[#D4AF37]/30 shadow-xl transition-all duration-500 ease-out ${isHovered ? 'translate-y-5 rotate-3 scale-95 opacity-50' : 'translate-y-3 rotate-2 opacity-60'}`}></div>

            {/* Layer 2 (Middle background page) */}
            <div className={`absolute inset-x-3 bottom-0 h-[88%] rounded-2xl bg-gradient-to-tr from-[#3D3222] to-[#241E17] border border-[#D4AF37]/50 shadow-xl transition-all duration-400 ease-out ${isHovered ? 'translate-y-2.5 -rotate-2 scale-98 opacity-80' : 'translate-y-1.5 -rotate-1 opacity-80'}`}></div>

            {/* Layer 1 (Top primary interactive page) */}
            <div className={`absolute inset-0 rounded-2xl bg-white border-2 border-[#D4AF37] shadow-xl overflow-hidden transition-all duration-400 ease-out ${isHovered ? '-translate-y-2.5 scale-102 shadow-[0_20px_50px_-15px_rgba(184,134,11,0.35)]' : 'translate-y-0 shadow-lg'}`}>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent z-10"></div>
              
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80"
                alt="Prochar Media Portfolio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Content on Top Card */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-8 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D4AF37] text-white text-[10px] sm:text-xs font-bold shadow-sm">
                    <Layers className="w-3 h-3" />
                    <span>{lang === 'bn' ? '৩ টি পেজের কালেকশন' : '3-Page Gallery'}</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-black text-white font-serif-royal">
                    {lang === 'bn' ? 'প্রোচার মিডিয়া পোর্টফোলিও গ্যালারি' : 'Prochar Media Portfolio Showcase'}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-gray-200 max-w-lg font-normal line-clamp-1 sm:line-clamp-none">
                    {lang === 'bn'
                      ? 'ইউটিউব এসইও, ডক্টর পেজ বুস্টিং (১০০ থেকে ৩০০০+ ফলোয়ার), ব্র্যান্ড লোগো এবং চিকিৎসা ব্যানার।'
                      : 'Explore YouTube SEO, doctor page boosting, logos & healthcare banners.'}
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:brightness-110 transition shrink-0">
                  <span>{lang === 'bn' ? 'পোর্টফোলিও খুলুন' : 'Open Portfolio'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#FFDF73] text-[11px] font-bold border border-[#D4AF37]/50 flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#FFDF73]" />
                <span>{lang === 'bn' ? '৫,০০০+ কাজ সফল' : '500+ Works'}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
