import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Code,
  Laptop,
  Smartphone,
  Server,
  Calendar,
  UserCheck,
  FileText,
  CreditCard,
  LayoutDashboard,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const WebDevAndSystemsSection: React.FC = () => {
  const { lang, siteSettings } = useApp();
  const [activeTab, setActiveTab] = useState<'tech' | 'clinic'>('clinic');

  const clinicModules = [
    {
      titleEn: 'Patient Management',
      titleBn: 'পেশেন্ট ম্যানেজমেন্ট',
      descEn: 'Digital registration, medical history, past prescriptions, and visit logs.',
      descBn: 'রোগীর ডিজিটাল রেজিস্ট্রেশন, প্রেসক্রিপশন হিস্ট্রি এবং পূর্ববর্তী ভিজিট রেকর্ড।',
      icon: <UserCheck className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Appointment Scheduling',
      titleBn: 'অ্যাপয়েন্টমেন্ট শিডিউলিং',
      descEn: 'Online chamber booking, serial tracking, automated SMS confirmations.',
      descBn: 'অনলাইন চেম্বার বুকিং, অটোমেটেড সিরিয়াল ট্র্যাকিং এবং এসএমএস কনফার্মেশন।',
      icon: <Calendar className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Doctor Chamber Roster',
      titleBn: 'ডক্টর রোস্টার ও চেম্বার শিডিউল',
      descEn: 'Multi-doctor clinic schedule management and chamber availability.',
      descBn: 'একাধিক ডাক্তারের চেম্বার টাইম ও শিডিউল রিয়েল-টাইমে পরিচালনার সুবিধা।',
      icon: <LayoutDashboard className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Digital EMR & Reports',
      titleBn: 'ডিজিটাল ইএমআর ও ল্যাব রিপোর্ট',
      descEn: 'Paperless electronic medical records and downloadable diagnostic reports.',
      descBn: 'কাগজবিহীন ডিজিটাল মেডিকেল রেকর্ড ও সরাসরি ডাউনলোডযোগ্য ল্যাব রিপোর্ট।',
      icon: <FileText className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Billing & Invoicing',
      titleBn: 'বিলিং ও পেমেন্ট রসিদ',
      descEn: 'Integrated payment processing, test charges, and accounts audit.',
      descBn: 'ডায়াগনস্টিক টেস্ট বিল, ডাক্তারের ভিজিট ফি এবং অনলাইন পেমেন্ট রসিদ।',
      icon: <CreditCard className="w-5 h-5 text-[#8A5A00]" />,
    },
    {
      titleEn: 'Admin Analytics Dashboard',
      titleBn: 'অ্যাডমিন অ্যানালিটিক্স ড্যাশবোর্ড',
      descEn: 'Daily revenue, patient flow charts, and department performance metrics.',
      descBn: 'দৈনিক আয়, রোগী সমাগম গ্রাফ এবং ক্লিনিকে সেবার মান পর্যালোচনা ড্যাশবোর্ড।',
      icon: <Server className="w-5 h-5 text-[#8A5A00]" />,
    },
  ];

  return (
    <section className="py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Code className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'প্রযুক্তি ও সফটওয়্যার' : 'Web & System Tech'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? (
              <>
                গ্রোথের জন্য নির্মিত <span className="gold-gradient-text">প্রিমিয়াম ডিজিটাল এক্সপেরিয়েন্স</span>
              </>
            ) : (
              <>
                Digital Experiences <span className="gold-gradient-text">Built For Growth</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base text-[#554E44]">
            {lang === 'bn'
              ? 'ব্যবসায়িক ওয়েবসাইট, পেশেন্ট বুকিং পোর্টাল কিংবা হাসপাতাল ম্যানেজমেন্ট সিস্টেম—আমরা তৈরি করি নিরাপদ ও দ্রুতগতির আধুনিক প্ল্যাটফর্ম।'
              : 'From high-converting web portals to full-scale clinic management systems with zero friction.'}
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex items-center bg-white p-1 rounded-full border border-[#D4AF37]/35 shadow-xs">
            <button
              onClick={() => setActiveTab('clinic')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'clinic'
                  ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#111111]'
              }`}
            >
              {lang === 'bn' ? 'ক্লিনিক ও হাসপাতাল সিস্টেম' : 'Clinic Management System'}
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'tech'
                  ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#111111]'
              }`}
            >
              {lang === 'bn' ? 'ওয়েবসাইট ডেভেলপমেন্ট' : 'Web Development'}
            </button>
          </div>
        </div>

        {/* Tab 1: Clinic / Hospital Management System */}
        {activeTab === 'clinic' && (
          <div className="animate-in fade-in duration-300">
            {/* Note banner per PRD Section 20 */}
            <div className="mb-8 p-3 rounded-xl bg-[#FFF9EE] border border-[#D4AF37]/30 text-center text-xs text-[#8A5A00] font-bold">
              ℹ️ {lang === 'bn' ? 'সমাধানসমূহ যা আমরা আপনার প্রতিষ্ঠানের চাহিদা অনুযায়ী তৈরি করে দিতে পারি (Solutions We Can Build For You)' : 'Custom-engineered software solutions available tailored to your exact clinic requirements.'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicModules.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl gold-glossy-card hover:border-[#D4AF37] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#D4AF37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] font-bengali">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#8A5A00] font-medium mt-0.5">
                    {lang === 'bn' ? item.titleEn : item.titleBn}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#554E44] leading-relaxed">
                    {lang === 'bn' ? item.descBn : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Custom Web Development Showcase */}
        {activeTab === 'tech' && (
          <div className="animate-in fade-in duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-bengali">
                {lang === 'bn' ? 'গতি, সৌন্দর্য ও কনভার্সন-ফ্রেন্ডলি আর্কিটেকচার' : 'Fast, Secure & Conversion-Engineered'}
              </h3>
              <p className="text-sm text-[#554E44] leading-relaxed">
                {lang === 'bn'
                  ? 'আমরা শুধুমাত্র আকর্ষণীয় ডিজাইনই করি না, বরং নিশ্চিত করি যাতে আপনার ওয়েবসাইটটি যেকোনো মোবাইল ফোনে ১ সেকেন্ডেরও কম সময়ে লোড হয়। এসইও অপ্টিমাইজড কাঠামো এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস আপনার ভিজিটরকে ক্লায়েন্টে রূপান্তরিত করে।'
                  : 'We construct ultra-responsive web applications with sub-second loading speeds, pixel-perfect luxury aesthetics, and proven conversion funnels.'}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A5A00]" />
                  <span>{lang === 'bn' ? '১০০% মোবাইল রেসপন্সিভ ডিজাইন' : '100% Mobile & Tablet Optimized'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A5A00]" />
                  <span>{lang === 'bn' ? 'গুগল সার্চ ও লোকাল এসইও ফ্রেন্ডলি' : 'Google Search & Local SEO Architecture'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A5A00]" />
                  <span>{lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপ ও কল ইন্টিগ্রেশন' : 'Instant WhatsApp & One-Tap Call Integration'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A5A00]" />
                  <span>{lang === 'bn' ? 'সহজ অ্যাডমিন প্যানেল দিয়ে কনটেন্ট পরিবর্তনের সুবিধা' : 'Intuitive Custom CMS for Easy Text & Photo Updates'}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20want%20to%20build%20a%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
                >
                  <span>{lang === 'bn' ? 'ওয়েবসাইট নিয়ে কথা বলুন' : 'Discuss Your Website Project'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Device Mockup */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto rounded-3xl p-3 bg-gradient-to-br from-[#111111] via-[#2A2621] to-[#111111] shadow-2xl border-2 border-[#D4AF37]/50 max-w-lg">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#D4AF37]/20 text-[10px] text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="bg-[#1F1D1A] px-4 py-0.5 rounded-md text-[#D4AF37] font-mono text-[9px]">
                    https://procharmedia.com/preview
                  </div>
                  <span className="text-[10px]">🔒 SSL</span>
                </div>

                {/* Device Screen Preview */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                    alt="Prochar Media Web Platform"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-bold text-[#F5DE93] uppercase tracking-widest">
                      Live Responsive Platform
                    </span>
                    <h4 className="text-base font-bold font-bengali">
                      প্রিমিয়াম ইউজার ইন্টারফেস ও ডায়নামিক পেশেন্ট পোর্টাল
                    </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
