import React from 'react';
import { useApp } from '../context/AppContext';
import { GoldenBridgeIllustration } from './BrandVisuals';
import { Sparkles } from 'lucide-react';

export const BridgeSection: React.FC = () => {
  const { lang, siteSettings } = useApp();

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#F8F4EC] via-[#FFFDF9] to-[#FCFAF7] relative overflow-hidden">
      {/* Glossy light reflection behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#FFF2B2]/30 via-[#F5DE93]/15 to-transparent blur-3xl pointer-events-none -z-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with clean balanced spacing */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F5DE93] border border-[#D4AF37] shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
              Signature Visual Concept
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] font-serif-royal leading-tight sm:leading-snug">
            {lang === 'bn' ? siteSettings.bridgeTitleBn : siteSettings.bridgeTitleEn}
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#554E44] max-w-2xl mx-auto leading-relaxed">
            {lang === 'bn' ? siteSettings.bridgeSubtitleBn : siteSettings.bridgeSubtitleEn}
          </p>
        </div>

        {/* Golden Bridge Main Visual */}
        <div className="max-w-5xl mx-auto">
          <GoldenBridgeIllustration customImage={siteSettings.bridgeImageUrl} />
        </div>

        {/* 3 Step Bridge Breakdown with balanced spacing */}
        <div className="mt-8 sm:mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-2xl gold-glossy-card border-l-4 border-l-[#B8860B]">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] text-[#8A5A00] font-mono font-bold flex items-center justify-center text-xs sm:text-sm border border-[#D4AF37]/40 shadow-xs">
                01
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] leading-snug">
                {lang === 'bn' ? 'চিকিৎসকের প্রোফাইল প্রতিষ্ঠা' : 'Clinical Authority'}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              {lang === 'bn'
                ? 'আপনার বিশেষজ্ঞ মেধা ও অভিজ্ঞতাকে প্রফেশনাল ডিজিটাল প্রেজেন্টেশনের মাধ্যমে তুলে ধরা।'
                : 'Showcasing your medical expertise and chamber credentials with dignified prestige.'}
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl gold-glossy-card border-l-4 border-l-[#D4AF37]">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] text-[#8A5A00] font-mono font-bold flex items-center justify-center text-xs sm:text-sm border border-[#D4AF37]/40 shadow-xs">
                02
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] leading-snug">
                {lang === 'bn' ? 'সঠিক ডিজিটাল সেতু (মার্কেটিং)' : 'The Marketing Bridge'}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              {lang === 'bn'
                ? 'টার্গেটেড সোশ্যাল ক্যাম্পেইন, হেলথ টিপস রিলস ও সচেতনতামূলক কনটেন্টের মাধ্যমে রোগীদের সংযুক্ত করা।'
                : 'Targeted demographic campaigns, educational health reels, and ethical social outreach.'}
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl gold-glossy-card border-l-4 border-l-[#8A5A00]">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] text-[#8A5A00] font-mono font-bold flex items-center justify-center text-xs sm:text-sm border border-[#D4AF37]/40 shadow-xs">
                03
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] leading-snug">
                {lang === 'bn' ? 'রোগীদের বিশ্বাস ও সেবা গ্রহণ' : 'Patient Trust & Care'}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              {lang === 'bn'
                ? 'সঠিক তথ্যের ভিত্তিতে রোগীরা সরাসরি আপনার চেম্বার বা ক্লিনিকে যোগাযোগ ও অ্যাপয়েন্টমেন্ট নিশ্চিত করেন।'
                : 'Empowering informed patients to seamlessly book appointments and seek timely medical care.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
