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
      
      {/* 1. Brand Intro Signature Section - Harmonious spacing */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FBF8F2] relative border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-extrabold text-[#B8860B] mb-2 sm:mb-3">
            The Prochar Philosophy
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase font-serif-royal leading-tight">
            PROCHAR MEDIA
          </h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4 my-3 sm:my-4">
            <span className="h-[2px] w-8 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
            <span className="text-base sm:text-xl md:text-2xl font-bold text-[#8A5A00] tracking-wide">
              We Promote. You Grow.
            </span>
            <span className="h-[2px] w-8 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
          </div>

          <div className="text-xl sm:text-3xl font-extrabold gold-gradient-text font-bengali my-2 sm:my-3 drop-shadow-xs">
            “প্রচারেই প্রসার”
          </div>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#554E44] max-w-2xl mx-auto leading-relaxed font-normal">
            {lang === 'bn'
              ? 'আমরা বিশ্বাস করি—সঠিক প্রচারের মাধ্যমেই যেকোনো প্রতিষ্ঠান বা চিকিৎসকের সেবা পৌঁছে যেতে পারে মানুষের হৃদয়ে। স্ট্র্যাটেজিক ডিজিটাল মার্কেটিং, হেলথকেয়ার ব্র্যান্ডিং এবং অত্যাধুনিক প্রযুক্তির সমন্বয়ে আমরা তৈরি করি দীর্ঘস্থায়ী সাফল্য।'
              : 'We combine digital marketing, doctor and healthcare branding, creative content and modern technology to help businesses and medical practices build visibility, credibility and long-term digital growth.'}
          </p>
        </div>
      </section>

      {/* 2. Trust / Statistics Section */}
      <section ref={statsRef} className="py-12 sm:py-16 md:py-20 bg-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            
            {/* Stat 1 */}
            <div className="gold-glossy-card p-4 sm:p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-xs">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.projects : siteSettings.statsProjects}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider leading-snug">
                {lang === 'bn' ? 'সফল প্রজেক্ট ডেলিভারি' : 'Successful Projects'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'মার্কেটিং ও ব্র্যান্ডিং উদ্যোগ' : 'Completed with excellence'}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="gold-glossy-card p-4 sm:p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-xs">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.clients : siteSettings.statsClients}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider leading-snug">
                {lang === 'bn' ? 'সন্তুষ্ট ক্লায়েন্ট ও চিকিৎসক' : 'Happy Clients & Doctors'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'দীর্ঘমেয়াদী পার্টনারশিপ' : 'Long-term trusted partners'}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="gold-glossy-card p-4 sm:p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-xs">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.services : siteSettings.statsServices}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider leading-snug">
                {lang === 'bn' ? 'বিশেষায়িত ডিজিটাল সেবা' : 'Digital Growth Services'}
              </div>
              <p className="mt-1 text-[11px] text-[#777777] hidden sm:block">
                {lang === 'bn' ? 'মার্কেটিং, ভিডিও ও সফটওয়্যার' : 'Complete 360° agency suite'}
              </p>
            </div>

            {/* Stat 4 */}
            <div className="gold-glossy-card p-4 sm:p-6 rounded-2xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-xs">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
                {hasAnimated ? counts.solutions : siteSettings.statsSolutions}
                <span className="text-[#D4AF37]">+</span>
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-bold text-[#8A5A00] uppercase tracking-wider leading-snug">
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
      <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#FCFAF7] relative border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs">
                <Award className="w-4 h-4 text-[#B8860B]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A5A00]">
                  {lang === 'bn' ? 'আমাদের পরিচিতি' : 'About Prochar Media'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-serif-royal leading-tight sm:leading-snug">
                {lang === 'bn' ? (
                  <>
                    আমরা শুধু বিজ্ঞাপন দিই না, <br />
                    গড়ে তুলি <span className="gold-gradient-text">আস্থার শক্তিশালী ভিত্তি</span>
                  </>
                ) : (
                  <>
                    We Don't Just Run Ads, <br />
                    We Build <span className="gold-gradient-text">Lasting Patient & Brand Trust</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-[#554E44] leading-relaxed">
                {lang === 'bn'
                  ? 'প্রচার মিডিয়া খুলনা ও দেশব্যাপী পরিচালিত একটি বিশ্বস্ত ডিজিটাল মার্কেটিং ও ক্রিয়েটিভ টেকনোলজি এজেন্সি। আমরা চিকিৎসা সেবা ও আধুনিক ব্যবসাকে ডাটা-ড্রাইভেন ক্যাম্পেইন এবং আকর্ষণীয় ভিজ্যুয়াল কনটেন্টের মাধ্যমে এগিয়ে নিয়ে যাই।'
                  : 'Prochar Media is a forward-thinking digital marketing and technology agency rooted in Khulna and serving partners across Bangladesh. We craft purposeful digital marketing, clinical branding, and bespoke technology architectures.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="p-3.5 sm:p-4 rounded-xl gold-glossy-card flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2B2] flex items-center justify-center text-[#8A5A00] flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                      {lang === 'bn' ? 'সঠিক টার্গেটিং' : 'Precision Targeting'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#666666] mt-0.5 leading-relaxed">
                      {lang === 'bn' ? 'নির্দিষ্ট ডেমোগ্রাফিক ও এলাকায় প্রচার।' : 'Targeted campaigns to the right demographics.'}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl gold-glossy-card flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2B2] flex items-center justify-center text-[#8A5A00] flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                      {lang === 'bn' ? 'দ্রুত ফলপ্রসূ ফলাফল' : 'Data-Driven ROI'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#666666] mt-0.5 leading-relaxed">
                      {lang === 'bn' ? 'পেশেন্ট অ্যাপয়েন্টমেন্ট ও গ্রোথ বৃদ্ধি।' : 'Measurable appointment growth.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual (Cols 8-12) */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1C1814] via-[#2A2318] to-[#111111] text-white border-2 border-[#D4AF37]/60 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8A5A00] p-0.5 flex items-center justify-center shadow-md">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                        Prochar Media Standard
                      </h4>
                      <p className="text-xs text-[#D4AF37]">
                        {lang === 'bn' ? 'নৈতিক ও প্রফেশনাল মানদণ্ড' : 'Ethical & Certified Quality'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      <span>{lang === 'bn' ? 'মেডিকেল এথিকস ও প্রফেশনালিজম সংরক্ষণ' : 'Preserving Medical Ethics & Dignity'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      <span>{lang === 'bn' ? 'কাস্টমাইজড কনটেন্ট ও ডেডিকেটেড টিম' : 'Customized Strategic Content & Dedicated Team'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      <span>{lang === 'bn' ? '২৪/৭ সাপোর্ট ও রেগুলার পারফরম্যান্স রিপোর্ট' : 'Ongoing Support & Weekly Reporting'}</span>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400">Headquarters</div>
                      <div className="font-bold text-[#F5DE93]">Khalishpur, Khulna</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-gray-400">Hotline</div>
                      <div className="font-bold font-mono text-white">{siteSettings.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
