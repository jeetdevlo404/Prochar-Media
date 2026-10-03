import React from 'react';
import { useApp } from '../context/AppContext';
import { processSteps } from '../data/initialData';
import { Lightbulb, Compass, Cpu, UserCheck, Handshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyUsAndProcess: React.FC = () => {
  const { lang } = useApp();

  const reasons = [
    {
      titleEn: 'Strategy First',
      titleBn: 'আগে স্ট্র্যাটেজি, তারপর ক্যাম্পেইন',
      descEn: 'We deeply study your medical specialty or business unit before formulating the digital campaign.',
      descBn: 'আমরা গতানুগতিক পোস্ট দেওয়ার আগে আপনার প্রতিষ্ঠান বা চেম্বারের নির্দিষ্ট লক্ষ্য ও অডিয়েন্স গভীরভাবে বিশ্লেষণ করি।',
      icon: <Compass className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Creative Thinking',
      titleBn: 'স্বতন্ত্র ক্রিয়েটিভ চিন্তাভাবনা',
      descEn: 'Combining scientific credibility with scroll-stopping visual design and respectful messaging.',
      descBn: 'সাধারণ টেমপ্লেট নয়, বরং প্রতিটি কাজের জন্য প্রিমিয়াম রয়্যাল আর্টওয়ার্ক ও তথ্যবহুল কনটেন্ট তৈরি করি।',
      icon: <Lightbulb className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Technology + Marketing',
      titleBn: 'টেকনোলজি ও মার্কেটিংয়ের মেলবন্ধন',
      descEn: 'From Meta lead funnels to responsive doctor portals, marketing and tech work in perfect harmony.',
      descBn: 'শুধু ফেসবুকেই সীমাবদ্ধ নয়, আধুনিক ওয়েবসাইট ও অটোমেশন দিয়ে আপনার ডিজিটাল ইনফ্রাস্ট্রাকচার সাজিয়ে দিই।',
      icon: <Cpu className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Personalized Solutions',
      titleBn: 'কাস্টমাইজড ব্যক্তিগত সমাধান',
      descEn: 'Every practitioner and business receives a tailored strategy matching their exact growth stage.',
      descBn: 'কোনো এক-আকারের সমাধান নয়, আপনার বাজেট ও সক্ষমতা অনুযায়ী সুনির্দিষ্ট পরিকল্পনা বাস্তবায়ন করি।',
      icon: <UserCheck className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Long-Term Support',
      titleBn: 'দীর্ঘমেয়াদী নির্ভরযোগ্য পার্টনারশিপ',
      descEn: 'We measure our success through your enduring patient loyalty and sustainable brand prestige.',
      descBn: 'সাময়িক কোনো বুস্টিং নয়, আপনার ব্র্যান্ডকে দীর্ঘমেয়াদে শীর্ষস্থানে টিকিয়ে রাখার লক্ষ্যে কাজ করি।',
      icon: <Handshake className="w-5 h-5 text-[#8A5A00]" />,
    },
  ];

  return (
    <div id="why-us" className="py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Prochar Media */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'কেন আমরা সেরা' : 'Why Prochar Media'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? (
              <>
                কেন সফল প্রতিষ্ঠানগুলো <br />
                <span className="gold-gradient-text">প্রচার মিডিয়াকে বেছে নেয়?</span>
              </>
            ) : (
              <>
                Why Trusted Brands & Doctors <br />
                <span className="gold-gradient-text">Partner With Prochar Media</span>
              </>
            )}
          </h2>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl gold-glossy-card hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#D4AF37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111111] font-bengali">
                {lang === 'bn' ? r.titleBn : r.titleEn}
              </h3>
              <p className="text-xs text-[#8A5A00] font-medium mt-0.5">
                {lang === 'bn' ? r.titleEn : r.titleBn}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#554E44] leading-relaxed">
                {lang === 'bn' ? r.descBn : r.descEn}
              </p>
            </div>
          ))}

          {/* 6th Spotlight Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#111111] via-[#241F1A] to-[#111111] text-white border border-[#D4AF37] shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                CORE PROMISE
              </span>
              <h3 className="text-xl font-bold font-bengali mt-2">
                {lang === 'bn' ? '“প্রচারেই প্রসার” — আমাদের মূল প্রতিশ্রুতি' : 'We Promote, You Grow'}
              </h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'আপনার প্রতিটি টাকার বাজেট যেন সঠিক রিটার্ন নিয়ে আসে, সেই লক্ষ্যে আমাদের প্রতিটি টিম দায়বদ্ধতার সাথে কাজ করে।'
                  : 'Every taka of your marketing budget is optimized to generate maximum patient trust and brand prestige.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center gap-2 text-[#F5DE93] text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>১০০% ডেডিকেটেড সাপোর্ট ও রেগুলার মিটিং</span>
            </div>
          </div>
        </div>

        {/* Section 23: Process Timeline */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
              Step-by-Step Roadmap
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111111] font-bengali mt-1">
              {lang === 'bn' ? 'আমাদের কার্যপ্রণালী (Our 5-Step Process)' : 'How We Deliver Digital Growth'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] mt-1.5">
              {lang === 'bn'
                ? 'একটি সফল ক্যাম্পেইন বাস্তবায়নে আমাদের ধারাবাহিক ৫টি ধাপ'
                : 'A structured methodology that guarantees consistency and measurable milestones.'}
            </p>
          </div>

          {/* Timeline steps */}
          <div className="relative">
            {/* Golden Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#AA771C] via-[#D4AF37] to-[#8A5A00] -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white p-6 rounded-2xl border border-[#D4AF37]/40 shadow-md text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-mono font-extrabold text-base flex items-center justify-center shadow-md mb-4 border-2 border-white">
                    {step.number}
                  </div>
                  <h4 className="text-base font-bold text-[#111111] font-bengali">
                    {lang === 'bn' ? step.titleBn : step.titleEn}
                  </h4>
                  <p className="mt-2 text-xs text-[#554E44] leading-relaxed">
                    {lang === 'bn' ? step.descBn : step.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
