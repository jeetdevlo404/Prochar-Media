import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Target, Zap, ShieldCheck, Award } from 'lucide-react';

export const BrandIntroAndStats: React.FC = () => {
  const { lang, siteSettings } = useApp();
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  // Counter animation when scrolled into view
  const [counts, setCounts] = useState({ projects: 0, clients: 0, services: 0, solutions: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const targetProjects = parseInt(siteSettings.statsProjects) || 50;
          const targetClients = parseInt(siteSettings.statsClients) || 30;
          const targetServices = parseInt(siteSettings.statsServices) || 14;
          const targetSolutions = parseInt(siteSettings.statsSolutions) || 5;

          const duration = 1600;
          const steps = 30;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts({
              projects: Math.floor(targetProjects * progress),
              clients: Math.floor(targetClients * progress),
              services: Math.floor(targetServices * progress),
              solutions: Math.floor(targetSolutions * progress),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                projects: targetProjects,
                clients: targetClients,
                services: targetServices,
                solutions: targetSolutions,
              });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, siteSettings]);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. Brand Intro Signature Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FBF8F2] relative border-y border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-xs uppercase tracking-[0.35em] font-extrabold text-[#B8860B] mb-2">
            The Prochar Philosophy
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase font-serif-royal">
            PROCHAR MEDIA
          </h2>

          <div className="flex items-center justify-center gap-4 my-4">
            <span className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
            <span className="text-lg sm:text-2xl font-bold text-[#8A5A00] tracking-wide">
              We Promote. You Grow.
            </span>
            <span className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
          </div>

          <div className="text-2xl sm:text-4xl font-extrabold gold-gradient-text font-bengali my-3 drop-shadow-xs">
            “প্রচারেই প্রসার”
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#554E44] max-w-3xl mx-auto leading-relaxed font-normal">
            {lang === 'bn'
              ? 'আমরা বিশ্বাস করি—সঠিক প্রচারের মাধ্যমেই যেকোনো প্রতিষ্ঠান বা চিকিৎসকের সেবা পৌঁছে যেতে পারে মানুষের হৃদয়ে। স্ট্র্যাটেজিক ডিজিটাল মার্কেটিং, হেলথকেয়ার ব্র্যান্ডিং এবং অত্যাধুনিক প্রযুক্তির সমন্বয়ে আমরা তৈরি করি দীর্ঘস্থায়ী সাফল্য।'
              : 'We combine digital marketing, doctor and healthcare branding, creative content and modern technology to help businesses and medical practices build visibility, credibility and long-term digital growth.'}
          </p>
        </div>
      </section>

      {/* 2. Trust / Statistics Section */}
      <section ref={statsRef} className="py-14 bg-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Stat 1 */}
            <div className="gold-glossy-card p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.projects : siteSettings.statsProjects}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider">
                {lang === 'bn' ? 'সফল প্রজেক্ট ডেলিভারি' : 'Successful Projects'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'মার্কেটিং ও ব্র্যান্ডিং উদ্যোগ' : 'Completed with excellence'}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="gold-glossy-card p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.clients : siteSettings.statsClients}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider">
                {lang === 'bn' ? 'সন্তুষ্ট ক্লায়েন্ট ও চিকিৎসক' : 'Happy Clients & Doctors'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'দীর্ঘমেয়াদী পার্টনারশিপ' : 'Long-term trusted partners'}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="gold-glossy-card p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.services : siteSettings.statsServices}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider">
                {lang === 'bn' ? 'বিশেষায়িত ডিজিটাল সেবা' : 'Digital Growth Services'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'মার্কেটিং, ভিডিও ও সফটওয়্যার' : 'Complete 360° agency suite'}
              </p>
            </div>

            {/* Stat 4 */}
            <div className="gold-glossy-card p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.solutions : siteSettings.statsSolutions}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider">
                {lang === 'bn' ? 'স্মার্ট প্রযুক্তি সলিউশন' : 'Tech & System Solutions'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'ক্লিনিক ও বিজনেস ম্যানেজমেন্ট' : 'Scalable web applications'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About Prochar Media Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FCFAF7] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading with royal aesthetic */}
            <div className="lg:col-span-5 relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2]/60 border border-[#D4AF37]/40 text-[#8A5A00] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Prochar Media'}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight font-serif-royal">
                {lang === 'bn' ? (
                  <>
                    যেখানে <span className="gold-gradient-text font-black">স্ট্র্যাটেজি</span> ও <br />
                    <span className="underline decoration-[#D4AF37]/50 underline-offset-4">ক্রিয়েটিভিটির</span> মিলন ঘটে
                  </>
                ) : (
                  <>
                    Where <span className="gold-gradient-text font-black">Strategy</span> <br />
                    Meets <span className="underline decoration-[#D4AF37]/50 underline-offset-4">Creativity</span>
                  </>
                )}
              </h3>

              <div className="mt-6 flex items-start gap-4">
                {/* Gold Vertical Accent Line */}
                <div className="w-1 self-stretch bg-gradient-to-b from-[#D4AF37] via-[#AA771C] to-transparent rounded-full flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
                  {lang === 'bn'
                    ? 'প্রচার মিডিয়া বাংলাদেশের একটি শীর্ষস্থানীয় ডিজিটাল মার্কেটিং, হেলথকেয়ার ব্র্যান্ডিং, ক্রিয়েটিভ এবং টেকনোলজি সার্ভিস কোম্পানি। সাধারণ গতানুগতিক ধারার বাইরে গিয়ে আমরা প্রতিটি ব্র্যান্ডের নিজস্ব গল্প তুলে ধরি।'
                    : 'Prochar Media is a Bangladesh-based premier digital marketing, healthcare branding, creative content and technology company. We help businesses and doctors build authentic, sustainable digital dominance.'}
                </p>
              </div>

              {/* Founder quote badge */}
              <div className="mt-8 p-4 rounded-xl bg-white border border-[#D4AF37]/30 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#D4AF37] flex items-center justify-center font-bold text-lg flex-shrink-0">
                  PM
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111111]">
                    {lang === 'bn' ? 'লক্ষ্য একটাই — আপনার সর্বোচ্চ প্রবৃদ্ধি' : 'Our Mission: Measurable Real Growth'}
                  </div>
                  <div className="text-[11px] text-[#777777]">
                    {lang === 'bn' ? 'কোনো শর্টকাট নয়, খাঁটি স্ট্র্যাটেজি' : 'No gimmicks, data-backed executions'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Pillars & Visual Presentation */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs hover:border-[#D4AF37] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EE] text-[#B8860B] flex items-center justify-center mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {lang === 'bn' ? 'স্ট্র্যাটেজিক ডক্টর ব্র্যান্ডিং' : 'Doctor & Healthcare Focus'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    {lang === 'bn'
                      ? 'চিকিৎসকদের পেশাগত মর্যাদা অক্ষুণ্ণ রেখে রোগীদের আস্থা অর্জন ও চেম্বারে নতুন পেশেন্ট এনকোয়ারি বৃদ্ধি।'
                      : 'Preserving clinical prestige while establishing deep patient trust and chamber consultation growth.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs hover:border-[#D4AF37] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EE] text-[#B8860B] flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {lang === 'bn' ? 'ক্রিয়েটিভ কনটেন্ট ও রিলস' : 'Creative Content & Reels'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    {lang === 'bn'
                      ? 'সোশ্যাল মিডিয়া স্ক্রল থামিয়ে দেওয়ার মতো হাই-কোয়ালিটি পোস্টার, ইনফোগ্রাফিক এবং ভাইরাল রিলস।'
                      : 'Scroll-stopping visual assets, educational infographics, and short-form video productions.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs hover:border-[#D4AF37] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EE] text-[#B8860B] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {lang === 'bn' ? 'ফেসবুক ও গুগল অ্যাডস' : 'Meta & Google Precision Ads'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    {lang === 'bn'
                      ? 'অপ্রয়োজনীয় বাজেট অপচয় ছাড়াই সুনির্দিষ্ট অডিয়েন্স টার্গেটিং ও সর্বোচ্চ কনভার্সন রেট।'
                      : 'Laser-focused audience targeting, budget optimization, and verified lead flow.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs hover:border-[#D4AF37] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EE] text-[#B8860B] flex items-center justify-center mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {lang === 'bn' ? 'টেক ও ওয়েব সলিউশন' : 'Web & Clinic Tech Systems'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    {lang === 'bn'
                      ? 'পেশেন্ট অ্যাপয়েন্টমেন্ট পোর্টাল, রেসপন্সিভ ওয়েবসাইট ও আধুনিক ম্যানেজমেন্ট সিস্টেম নির্মাণ।'
                      : 'Responsive appointment portals, fast custom websites, and healthcare operations tech.'}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
