import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PosterCard } from './BrandVisuals';
import {
  Stethoscope,
  Sparkles,
  CheckCircle,
  Eye,
  X,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export const HealthcareSection: React.FC = () => {
  const { lang, siteSettings } = useApp();
  const [selectedPoster, setSelectedPoster] = useState<{
    titleBn: string;
    titleEn: string;
    descBn: string;
    descEn: string;
    imageUrl: string;
    hotline: string;
    tag: string;
  } | null>(null);

  // 4 supplied poster showcases
  const posters = [
    {
      id: 'keyboard',
      titleBn: 'আপনার রোগীরা অনলাইনে আছেন, তাদের ফিডে পৌঁছান',
      titleEn: 'Reach Patients Inside Their Daily Feeds',
      subtitleBn: 'Healthcare Branding for Doctors, Hospitals & Diagnostic Centers',
      tag: 'Doctor Reach',
      accent: '#D4AF37',
      imageUrl:
        siteSettings.keyboardPosterUrl ||
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      descBn:
        'রোগীরা প্রতিদিন ঘণ্টার পর ঘণ্টা ফেসবুক ও ইনস্টাগ্রামে সক্রিয় থাকেন। স্বাস্থ্য সংক্রান্ত নির্ভরযোগ্য তথ্যের জন্য তারা এমন চিকিৎসকের শরণাপন্ন হতে চান যাকে তারা সোশ্যাল মিডিয়ায় বিশ্বাস করেন। সঠিক কনটেন্ট ও রিলস দিয়ে তাদের আস্থা অর্জন করুন।',
      descEn:
        'Patients are actively browsing daily social feeds. When seeking medical care, they choose doctors they already trust online. We help medical professionals become the primary health voice in their community.',
    },
    {
      id: 'shell',
      titleBn: 'আপনার ব্র্যান্ডের ভেতরের সম্ভাবনাকে জাগিয়ে তুলুন',
      titleEn: 'Discover the Power Inside Your Brand',
      subtitleBn: 'Stronger Brands • Healthier Tomorrow • Prochar Media',
      tag: 'Brand Identity',
      accent: '#B8860B',
      imageUrl:
        siteSettings.shellPosterUrl ||
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
      descBn:
        'প্রতিটি দক্ষ চিকিৎসকের মধ্যেই রয়েছে অনন্য মেধা ও অভিজ্ঞতা। প্রচার মিডিয়া আপনার সেই ক্লিনিক্যাল মেধার সঠিক প্রকাশ ঘটিয়ে আপনাকে একটি সম্মানিত ব্র্যান্ড হিসেবে প্রতিষ্ঠিত করে।',
      descEn:
        'Every experienced medical professional possesses distinct clinical prestige. We translate your medical mastery into an elevated, respectful personal brand.',
    },
    {
      id: 'memorable',
      titleBn: 'আপনার সেবার গল্পটি কি মানুষ মনে রাখছে?',
      titleEn: 'Make Healthcare Memorable',
      subtitleBn: 'Brand Story • Visual Identity • Digital Growth for Hospitals & Clinics',
      tag: 'Hospital Growth',
      accent: '#AA771C',
      imageUrl:
        siteSettings.memorablePosterUrl ||
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
      descBn:
        'ডায়াগনস্টিক রিপোর্ট বা চিকিৎসার মান যতই ভালো হোক, মানুষ মনে রাখে তার অনুভূতি ও বিশ্বস্ততাকে। আধুনিক ভিজ্যুয়াল আইডেন্টিটি এবং সহানুভূতিশীল কমিউনিকেশনের মাধ্যমে আপনার সেবাকে স্মরণীয় করে তুলুন।',
      descEn:
        'Beyond clinical equipment and diagnostic facilities, patient loyalty thrives on memorable empathy and reputable visual storytelling.',
    },
    {
      id: 'page-ready',
      titleBn: 'আপনার হেলথকেয়ার পেজ কি পেশেন্টের প্রথম ভরসা?',
      titleEn: 'Is Your Medical Page Ready to Convert?',
      subtitleBn: 'Identity • Content • Consistency — তিনটেই ঠিক থাকলে ব্র্যান্ড নজরে পড়ে',
      tag: 'Page Optimization',
      accent: '#D4AF37',
      imageUrl:
        siteSettings.phonePosterUrl ||
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
      descBn:
        'আইডেন্টিটি, কনটেন্ট এবং ধারাবাহিকতা—এই তিনটি নিয়ম মানলে আপনার ফেসবুক পেজ রোগীদের জন্য প্রথম আস্থার জায়গা হয়ে দাঁড়ায়। প্রচার মিডিয়া নিয়মিত কনটেন্ট ও পেজ অপ্টিমাইজেশন পরিচালনা করে।',
      descEn:
        'Identity, Content, and Consistency. When these three align, your medical practice page commands authority and converts inquiries into confirmed chamber appointments.',
    },
  ];

  return (
    <section id="healthcare" className="py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#F8F4EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF2B2]/60 border border-[#D4AF37]/50 shadow-xs mb-4">
            <Stethoscope className="w-4 h-4 text-[#8A5A00]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'বিশেষায়িত ডক্টর ও হেলথকেয়ার ব্র্যান্ডিং' : 'Doctor & Healthcare Branding'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal leading-tight">
            {lang === 'bn' ? (
              <>
                আপনার চিকিৎসা সেবার <br className="hidden sm:inline" />
                <span className="gold-gradient-text">ডিজিটাল উপস্থিতিকে আরও শক্তিশালী করুন</span>
              </>
            ) : (
              <>
                Build a Stronger Digital Presence <br className="hidden sm:inline" />
                <span className="gold-gradient-text">For Your Medical Practice</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#554E44] max-w-2xl mx-auto">
            {lang === 'bn'
              ? 'চিকিৎসক, হাসপাতাল ও ডায়াগনস্টিক সেন্টারের নৈতিক মর্যাদা বজায় রেখে রোগীদের আস্থা বৃদ্ধি এবং চেম্বার প্রচারের পূর্ণাঙ্গ সলিউশন।'
              : 'Empowering physicians, hospitals and diagnostic networks to expand patient trust through ethical, high-standard digital marketing.'}
          </p>
        </div>

        {/* 4 Supplied Creative Posters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Strategic Checklist for Healthcare Success */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                Why Healthcare Needs Prochar
              </div>
              <h3 className="text-2xl font-bold text-[#111111] font-bengali mt-1">
                {lang === 'bn'
                  ? 'চিকিৎসকদের জন্য কেন বিশেষায়িত এজেন্সি প্রয়োজন?'
                  : 'Why Medical Practitioners Trust Prochar Media'}
              </h3>
              <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'সাধারণ পণ্যের মার্কেটিং আর স্বাস্থ্যসেবার প্রচার এক নয়। এখানে নৈতিকতা, বিশ্বাস এবং সঠিক মেডিকেল টার্মিনোলজি অত্যন্ত গুরুত্বপূর্ণ।'
                  : 'Healthcare is distinct from retail products. It requires clinical ethics, empathy, and professional dignity in every communication.'}
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-5 h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'ব্যক্তিগত চেম্বার ও ডক্টর ব্র্যান্ডিং' : 'Personal Chamber Branding'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1">
                    {lang === 'bn' ? 'সিনিয়র কনসালট্যান্টদের জন্য আকর্ষণীয় পার্সোনাল প্রোফাইল।' : 'Building clinical authority in your medical specialty.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-5 h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'পেশেন্ট আস্থা ও কনভার্সন' : 'Patient Inquiry Growth'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1">
                    {lang === 'bn' ? 'মেডিকেল পরামর্শের সঠিক প্ল্যাটফর্ম ও অ্যাপয়েন্টমেন্ট বৃদ্ধি।' : 'Guiding patients seamlessly into verified chamber consultations.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-5 h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'হেলথকেয়ার ইনফোগ্রাফিক ও ভিডিও' : 'Medical Infographics & Reels'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1">
                    {lang === 'bn' ? 'রোগ প্রতিরোধ ও সচেতনতামূলক শর্ট ভিডিও প্রোডাকশন।' : 'Educational health tips and patient awareness video series.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/20">
                <CheckCircle className="w-5 h-5 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {lang === 'bn' ? 'সোশ্যাল পেজ কমপ্লিট ম্যানেজমেন্ট' : 'Full Page Management'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-1">
                    {lang === 'bn' ? 'মেডিকেল অ্যাসিস্ট্যান্টদের দিয়ে দ্রুত ইনবক্স রেসপন্স।' : 'Dedicated prompt message response and appointment booking.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Poster View */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-[#FCFAF7] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#D4AF37] shadow-2xl">
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] bg-black">
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#111111]/90 text-[#F5DE93] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]">
                  {selectedPoster.tag}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#111111] font-bengali">
                {selectedPoster.titleBn}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] mt-1">
                {selectedPoster.titleEn}
              </p>

              <p className="mt-4 text-sm text-[#444444] leading-relaxed">
                {lang === 'bn' ? selectedPoster.descBn : selectedPoster.descEn}
              </p>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                    selectedPoster.titleEn
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-md hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Inquire</span>
                </a>

                <button
                  onClick={() => setSelectedPoster(null)}
                  className="px-5 py-2.5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
