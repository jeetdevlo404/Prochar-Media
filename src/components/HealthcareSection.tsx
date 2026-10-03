import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../context/AppContext';
import { PosterCard } from './BrandVisuals';
import {
  Stethoscope,
  Sparkles,
  CheckCircle,
  X,
  MessageCircle,
} from 'lucide-react';

export const HealthcareSection: React.FC = () => {
  const { lang, siteSettings } = useApp();

  // Selected Poster for Lightbox Preview
  const [selectedPoster, setSelectedPoster] = useState<{
    titleBn: string;
    titleEn: string;
    descBn: string;
    descEn: string;
    imageUrl: string;
    hotline: string;
    tag: string;
  } | null>(null);

  // Lock body scroll when modal is open, and add Esc listener
  useEffect(() => {
    if (selectedPoster) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedPoster(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPoster]);

  // 4 Core Doctor & Healthcare Campaign Posters
  const posters = [
    {
      id: 'poster-1',
      titleBn: 'আপনার রোগীর কাছে পৌঁছান সঠিক উপায়ে',
      titleEn: 'Reach Your Patients The Right Way',
      subtitleBn: 'প্রচারেই প্রসার! সোশ্যাল মিডিয়ার সঠিক ক্যাম্পেইনের মাধ্যমে সঠিক রোগীর কাছে সঠিক চিকিৎসকের বার্তা পৌঁছে দিন।',
      descBn: 'অনলাইন প্রেসেন্স ও টার্গেটেড প্রচারের মাধ্যমে আপনার চেম্বারের বিশ্বাসযোগ্যতা ও রোগীর সংখ্যা বৃদ্ধি করুন। সঠিক হেলথ কনটেন্ট রোগীদের সঠিক সিদ্ধান্ত নিতে উৎসাহিত করে।',
      descEn: 'Build patient trust and clinic appointments through strategic demographic targeting and professional healthcare content marketing.',
      tag: 'Doctor Reach',
      accent: 'gold',
      imageUrl:
        siteSettings.keyboardPosterUrl ||
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'poster-2',
      titleBn: 'Discover The Power of Digital Marketing',
      titleEn: 'Discover The Power of Digital Marketing',
      subtitleBn: 'আধুনিক হেলথকেয়ার মার্কেটিং ও ডিজিটাল ব্র্যান্ডিং এর শক্তি অনুভব করুন।',
      descBn: 'চিকিৎসা সেবায় সফল হতে ডিজিটাল পরিচিতি এখন অপরিহার্য। আপনার বিশেষজ্ঞ মেধা ও সেবা মানুষের কাছে পৌঁছাতে আমরা তৈরি করি অনন্য ভিজ্যুয়াল পরিচিতি।',
      descEn: 'Harness high-impact digital storytelling, patient-friendly visual design, and ethical clinical marketing to establish authority in your specialty.',
      tag: 'Brand Power',
      accent: 'royal',
      imageUrl:
        siteSettings.shellPosterUrl ||
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'poster-3',
      titleBn: 'Make Healthcare Memorable',
      titleEn: 'Make Healthcare Memorable',
      subtitleBn: 'উন্নত ডিজাইন ও নৈতিক প্রচারের মাধ্যমে মানুষের আস্থা ও স্মৃতিতে থাকুন।',
      descBn: 'একটি স্মরণীয় ভিজ্যুয়াল পরিচয় রোগীকে আশ্বস্ত করে। ক্লিনিকাল এথিকস মেনে প্রফেশনাল ফটো, ভিডিও ও সোশ্যাল কনটেন্ট প্রচারের মাধ্যমে আপনার সুনাম সুদৃঢ় করুন।',
      descEn: 'Transform clinical services into empathetic, trusted brands that patients remember and recommend during health emergencies.',
      tag: 'Memorable Identity',
      accent: 'emerald',
      imageUrl:
        siteSettings.memorablePosterUrl ||
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'poster-4',
      titleBn: 'Is Your Page Ready for Patients?',
      titleEn: 'Is Your Page Ready for Patients?',
      subtitleBn: 'আপনার ফেসবুক পেজ ও অনলাইন প্ল্যাটফর্ম কি নতুন রোগীদের স্বাগত জানাতে প্রস্তুত?',
      descBn: 'কমপ্লিট পেজ অপ্টিমাইজেশন, রেগুলার হেলথ টিপস পোস্ট, অটোমেটেড বুকিং ও পেশেন্ট মেসেজ রেসপন্সের মাধ্যমে আপনার চেম্বারের কার্যক্রম সহজ করুন।',
      descEn: 'Full Facebook page auditing, automated inbox appointment flows, verified branding badges, and responsive patient support setups.',
      tag: 'Page Optimization',
      accent: 'amber',
      imageUrl:
        siteSettings.phonePosterUrl ||
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="healthcare" className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#F8F4EC] relative overflow-hidden">
      {/* Light Golden Ambient Blur */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with balanced spacing */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8860B]" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#8A5A00]">
              {lang === 'bn' ? 'বিশেষায়িত ডক্টর ও হেলথকেয়ার ব্র্যান্ডিং' : 'Doctor & Healthcare Branding'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#111111] font-serif-royal leading-tight sm:leading-snug">
            {lang === 'bn' ? (
              <>
                আপনার চিকিৎসা সেবার <br className="hidden sm:inline" />
                <span className="gold-gradient-text">ডিজিটাল উপস্থিতিকে আরও শক্তিশালী করুন</span>
              </>
            ) : (
              <>
                Strengthen Your <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Healthcare Digital Presence</span>
              </>
            )}
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#554E44] max-w-2xl mx-auto leading-relaxed">
            {lang === 'bn'
              ? 'চিকিৎসক, হাসপাতাল ও ডায়াগনস্টিক সেন্টারের নৈতিক মর্যাদা বজায় রেখে রোগীদের আস্থা বৃদ্ধি এবং চেম্বার প্রচারের পূর্ণাঙ্গ সলিউশন।'
              : 'Empowering physicians, hospitals and diagnostic networks to expand patient trust through ethical, high-standard digital marketing.'}
          </p>
        </div>

        {/* 4 Creative Posters Grid - Tight, mobile-optimized gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posters.map((poster) => (
            <PosterCard
              key={poster.id}
              titleBn={poster.titleBn}
              titleEn={poster.titleEn}
              subtitleBn={poster.subtitleBn}
              tag={poster.tag}
              imageUrl={poster.imageUrl}
              accent={poster.accent}
              onClick={() =>
                setSelectedPoster({
                  titleBn: poster.titleBn,
                  titleEn: poster.titleEn,
                  descBn: poster.descBn,
                  descEn: poster.descEn,
                  imageUrl: poster.imageUrl,
                  hotline: siteSettings.phone,
                  tag: poster.tag,
                })
              }
            />
          ))}
        </div>

        {/* Strategic Checklist with balanced padding */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D4AF37]/35 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-1">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Why Healthcare Needs Prochar</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#111111] font-bengali leading-snug">
                {lang === 'bn'
                  ? 'চিকিৎসকদের জন্য কেন বিশেষায়িত এজেন্সি প্রয়োজন?'
                  : 'Why Medical Practitioners Trust Prochar Media'}
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'সাধারণ পণ্যের মার্কেটিং আর স্বাস্থ্যসেবার প্রচার এক নয়। এখানে নৈতিকতা, বিশ্বাস এবং সঠিক মেডিকেল টার্মিনোলজি অত্যন্ত গুরুত্বপূর্ণ।'
                  : 'Healthcare is distinct from retail products. It requires clinical ethics, empathy, and professional dignity in every communication.'}
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'ব্যক্তিগত চেম্বার ও ডক্টর ব্র্যান্ডিং' : 'Personal Chamber Branding'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-1 leading-relaxed">
                    {lang === 'bn' ? 'সিনিয়র কনসালট্যান্টদের জন্য আকর্ষণীয় পার্সোনাল প্রোফাইল ও পরিচিতি।' : 'Building clinical authority in your medical specialty.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'হাসপাতাল ও ডায়াগনস্টিক সেন্টার প্রচার' : 'Hospital & Diagnostics Reach'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-1 leading-relaxed">
                    {lang === 'bn' ? 'আধুনিক টেস্ট, ডাক্তার শিডিউল এবং হেলথ প্যাকেজের প্রমোশন।' : 'Showcasing facilities, doctor rosters and health packages.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'হেলথকেয়ার ইনফোগ্রাফিক ও ভিডিও' : 'Medical Infographics & Reels'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-1 leading-relaxed">
                    {lang === 'bn' ? 'রোগ প্রতিরোধ ও সচেতনতামূলক শর্ট ভিডিও প্রোডাকশন।' : 'Educational health tips and patient awareness video series.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'সোশ্যাল পেজ কমপ্লিট ম্যানেজমেন্ট' : 'Full Page Management'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-1 leading-relaxed">
                    {lang === 'bn' ? 'মেডিকেল অ্যাসিস্ট্যান্টদের দিয়ে দ্রুত ইনবক্স রেসপন্স ও বুকিং।' : 'Dedicated prompt message response and appointment booking.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Crystal Clear Lightbox Modal - Attached directly to body, Dead-center in viewport */}
      {selectedPoster &&
        createPortal(
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPoster(null);
            }}
            className="fixed inset-0 z-[999999] bg-black/85 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <div className="relative bg-[#FCFAF7] rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#D4AF37] shadow-2xl m-auto animate-in zoom-in-95 duration-150">
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111111]/80 hover:bg-[#111111] text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              <div className="relative aspect-[16/9] bg-black">
                <img
                  src={selectedPoster.imageUrl}
                  alt={selectedPoster.titleEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-[#111111]/90 text-[#F5DE93] text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D4AF37]">
                    {selectedPoster.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-7">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] font-bengali leading-snug">
                  {selectedPoster.titleBn}
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#B8860B] mt-0.5">
                  {selectedPoster.titleEn}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {lang === 'bn' ? selectedPoster.descBn : selectedPoster.descEn}
                </p>

                <div className="mt-5 pt-4 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                      selectedPoster.titleEn
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-md hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Inquire</span>
                  </a>

                  <button
                    onClick={() => setSelectedPoster(null)}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
