import React from 'react';
import { useApp } from '../context/AppContext';
import { allServices } from '../data/initialData';
import {
  TrendingUp,
  Share2,
  Facebook,
  Palette,
  Video,
  Target,
  Globe,
  Award,
  Stethoscope,
  Users,
  Code,
  Search,
  Compass,
  Briefcase,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Facebook: <Facebook className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  const { lang, siteSettings } = useApp();

  return (
    <section id="services" className="py-24 bg-[#FCFAF7] relative">
      {/* Decorative Gold Grid in Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'আমাদের বিশেষত্ব' : 'What We Do'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? (
              <>
                আপনার ব্র্যান্ডের জন্য <span className="gold-gradient-text">প্রিমিয়াম ডিজিটাল সেবা</span>
              </>
            ) : (
              <>
                Everything Your Brand Needs <br />
                <span className="gold-gradient-text">To Grow Digitally</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base text-[#5E574B]">
            {lang === 'bn'
              ? 'ডিজিটাল মার্কেটিং, ডাক্তার ও হেলথকেয়ার ব্র্যান্ডিং থেকে শুরু করে অত্যাধুনিক ওয়েব সিস্টেম—সবকিছু এক ছাতার নিচে।'
              : 'From strategic digital campaigns and doctor branding to high-performance web systems.'}
          </p>
        </div>

        {/* 14 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service) => {
            const isHealthcare = service.id === '09' || service.id === '10';

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isHealthcare
                    ? 'bg-gradient-to-br from-[#FFFDF8] via-[#FFF9EE] to-[#FFF3DF] border-2 border-[#D4AF37]/60 shadow-md'
                    : 'gold-glossy-card hover:border-[#D4AF37]'
                }`}
              >
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#FAF4E6] text-[#8A5A00] border border-[#D4AF37]/30">
                    {service.number}
                  </span>

                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                      isHealthcare
                        ? 'bg-[#111111] text-[#F5DE93] border border-[#D4AF37]'
                        : 'bg-[#FFF2B2]/60 text-[#8A5A00]'
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Service Icon with Glow */}
                <div className="w-13 h-13 rounded-xl bg-white border border-[#D4AF37]/40 flex items-center justify-center text-[#B8860B] group-hover:scale-110 group-hover:text-[#8A5A00] group-hover:bg-[#FFF2B2]/50 transition-all duration-300 shadow-xs mb-4">
                  {iconMap[service.iconName] || <TrendingUp className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#111111] font-bengali group-hover:text-[#8A5A00] transition-colors leading-snug">
                  {lang === 'bn' ? service.titleBn : service.titleEn}
                </h3>
                <p className="text-xs text-[#8A5A00] font-medium tracking-wide mt-0.5">
                  {lang === 'bn' ? service.titleEn : service.titleBn}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-[#554E44] leading-relaxed">
                  {lang === 'bn' ? service.descBn : service.descEn}
                </p>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-bold text-[#8A5A00]">
                  <a
                    href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20am%20interested%20in%20${encodeURIComponent(
                      service.titleEn
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#111111] group-hover:translate-x-1 transition-transform"
                  >
                    <span>{lang === 'bn' ? 'পরামর্শ নিন' : 'Inquire Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[10px] text-gray-400 font-mono">PROCHAR</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#111111] via-[#1E1B18] to-[#111111] text-white border border-[#D4AF37]/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Need a Custom Solution?
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-bengali mt-1">
              {lang === 'bn'
                ? 'আপনার চেম্বার বা ব্যবসার জন্য কোন সেবাটি উপযুক্ত জানতে চান?'
                : 'Unsure which growth strategy fits your practice?'}
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              {lang === 'bn'
                ? 'আমাদের স্ট্র্যাটেজি টিম আপনার সাথে কথা বলে ফ্রি কনসালটেশন প্রদান করবে।'
                : 'Schedule a direct one-on-one session with our senior digital strategist.'}
            </p>
          </div>

          <a
            href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20need%20a%20growth%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
          >
            <span>{lang === 'bn' ? 'ফ্রি কনসালটেশন নিন' : 'Book Free Consultation'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
