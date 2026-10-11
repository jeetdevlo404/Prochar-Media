import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  Shield,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Award,
  FileText,
  Scale,
  Lock,
} from 'lucide-react';
import { ProcharLogo } from './BrandVisuals';

export const AboutUsPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, siteSettings } = useApp();

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="text-center space-y-3 pb-8 border-b border-[#D4AF37]/25">
          <ProcharLogo size="lg" className="justify-center" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7E6] border border-[#D4AF37]/40 text-[#8A5A00] text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ভেরিফাইড ও প্রফেশনাল ডিজিটাল এজেন্সি' : 'Certified Digital Growth & Healthcare Agency'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'আমাদের সম্পর্কে (About Us)' : 'About Prochar Media'}
          </h1>
          <div className="text-lg font-bold gold-gradient-text font-bengali">
            “প্রচারেই প্রসার — We Promote, You Grow”
          </div>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-[#443E36] leading-relaxed">
          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xs">
            <h2 className="text-xl font-bold text-[#111111] font-bengali mb-3">
              {lang === 'bn' ? 'আমাদের পরিচয় ও লক্ষ্য' : 'Our Identity & Mission'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'প্রচার মিডিয়া বাংলাদেশের একটি সুপ্রতিষ্ঠিত ডিজিটাল গ্রোথ, ডক্টর ও হেলথকেয়ার ব্র্যান্ডিং এবং প্রযুক্তি সলিউশন এজেন্সি। আমাদের মূল মন্ত্র হলো—"প্রচারেই প্রসার"। সঠিক ও নৈতিক প্রচার ছাড়া শ্রেষ্ঠ চিকিৎসা সেবা কিংবা ব্যবসাও অনেকের অগোচরে থেকে যায়। আমরা আধুনিক কৌশল ও সৃজনশীলতার মাধ্যমে আপনার ব্র্যান্ডকে মানুষের আস্থার জায়গায় পৌঁছে দিই।'
                : 'Prochar Media is a premier Bangladesh-based digital growth, doctor branding, and technology solutions agency. Built upon the timeless principle "প্রচারেই প্রসার" (We Promote, You Grow), we bridge the gap between exceptional professionals and the audiences who need them.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xs">
            <h2 className="text-xl font-bold text-[#111111] font-bengali mb-3">
              {lang === 'bn' ? 'চিকিৎসক ও স্বাস্থ্যসেবা ব্র্যান্ডিংয়ে আমাদের বিশেষত্ব' : 'Our Specialization in Healthcare & Doctor Branding'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'সাধারণ পণ্যের বিজ্ঞাপনের চেয়ে স্বাস্থ্যসেবার প্রচার সম্পূর্ণ আলাদা। চিকিৎসক, ক্লিনিক ও ডায়াগনস্টিক সেন্টারের ক্ষেত্রে আমরা পেশাগত মর্যাদা, বিএমডিসি (BMDC) নীতিমালা, মেডিকেল এথিকস এবং রোগীর বিশ্বাসের প্রতি সর্বোচ্চ শ্রদ্ধা রেখে কাজ করি। তথ্যবহুল ভিডিও কনটেন্ট, স্বাস্থ্য সচেতনতামূলক রিলস এবং টার্গেটেড ডিজিটাল ক্যাম্পেইনের মাধ্যমে আমরা রোগী ও চিকিৎসকের মাঝে একটি নির্ভরযোগ্য সেতুবন্ধন তৈরি করি।'
                : 'Healthcare communication requires dignity, accuracy, and strict ethical compliance. We craft educational health content, awareness reels, and verified digital profiles that help patients find the right specialist doctor with confidence.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-[#111111] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                <span>{lang === 'bn' ? 'প্রমাণিত মান ও স্বচ্ছতা' : 'Verified Quality & Transparency'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#666666]">
                {lang === 'bn'
                  ? 'প্রতিটি প্রজেক্টে সুনির্দিষ্ট পরিকল্পনা, রিয়েল-টাইম রিপোর্ট এবং দীর্ঘমেয়াদী টেকনিক্যাল সাপোর্ট প্রদান করা হয়।'
                  : 'Every campaign and software project is backed by transparent analytics, ethical standards, and dedicated support.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-[#111111] mb-2">
                <Shield className="w-4 h-4 text-[#B8860B]" />
                <span>{lang === 'bn' ? 'ডেটা ও ব্র্যান্ড সুরক্ষা' : 'Data & Brand Protection'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#666666]">
                {lang === 'bn'
                  ? 'ক্লায়েন্টের পেজ, ওয়েবসাইট ও তথ্যের শতভাগ নিরাপত্তা ও গোপনীয়তা বজায় রেখে আমরা কাজ পরিচালনা করি।'
                  : 'We maintain strict confidentiality and security protocols for all client digital assets and accounts.'}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xs">
            <h2 className="text-xl font-bold text-[#111111] font-bengali mb-3">
              {lang === 'bn' ? 'আমাদের অফিসিয়াল কার্যালয়' : 'Our Official Headquarters'}
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#555555]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <span><strong>প্রধান কার্যালয়:</strong> {siteSettings.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A5A00] flex-shrink-0 mt-0.5" />
                <span><strong>শাখা কার্যালয়:</strong> {siteSettings.secondaryAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8A5A00] flex-shrink-0" />
                <span><strong>হটলাইন:</strong> {siteSettings.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8A5A00] flex-shrink-0" />
                <span><strong>অফিসিয়াল ইমেইল:</strong> {siteSettings.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactUsPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, siteSettings } = useApp();

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="border-b border-[#D4AF37]/25 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'যোগাযোগ করুন (Contact Us)' : 'Contact Prochar Media'}
          </h1>
          <p className="text-xs sm:text-sm text-[#666666] mt-2">
            {lang === 'bn'
              ? 'যেকোনো পরামর্শ, সার্ভিস বুকিং বা কাস্টম প্রজেক্টের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।'
              : 'Get in touch with our official team for digital marketing, healthcare branding, or custom web solutions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/35 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#111111] font-bengali">
              {lang === 'bn' ? 'সরাসরি কথা বলুন' : 'Direct Communication Channels'}
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/25">
                <Phone className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">{lang === 'bn' ? 'হটলাইন নম্বর' : 'Official Hotline'}</div>
                  <a href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`} className="text-[#8A5A00] font-mono font-bold text-sm hover:underline">
                    {siteSettings.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/25">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">{lang === 'bn' ? 'হোয়াটসঅ্যাপ হেল্পডেস্ক' : 'WhatsApp Business Desk'}</div>
                  <a
                    href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#188040] font-mono font-bold text-sm hover:underline"
                  >
                    {siteSettings.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/25">
                <Mail className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">{lang === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Official Email'}</div>
                  <a href={`mailto:${siteSettings.email}`} className="text-[#8A5A00] font-medium hover:underline break-all">
                    {siteSettings.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/35 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#111111] font-bengali">
              {lang === 'bn' ? 'অফিস ঠিকানা ও সময়সূচি' : 'Office Locations & Hours'}
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#444444]">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/25">
                <MapPin className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">{lang === 'bn' ? 'প্রধান কার্যালয় (Main Office)' : 'Main Office'}</div>
                  <div className="mt-0.5">{siteSettings.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/25">
                <MapPin className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">{lang === 'bn' ? 'শাখা অফিস (Branch Office)' : 'Branch Office'}</div>
                  <div className="mt-0.5">{siteSettings.secondaryAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/25">
                <Clock className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">{lang === 'bn' ? 'অফিস ও সাপোর্ট সময়' : 'Support Hours'}</div>
                  <div className="mt-0.5">
                    {lang === 'bn' ? 'শনিবার – বৃহস্পতিবার: সকাল ১০:০০ – রাত ৯:০০ (অনলাইন সাপোর্ট ২৪/৭)' : 'Sat – Thu: 10:00 AM – 9:00 PM (24/7 Online Support)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, siteSettings } = useApp();

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="border-b border-[#D4AF37]/25 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A5A00] mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Confidentiality Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'গোপনীয়তা ও ডেটা সুরক্ষা নীতিমালা (Privacy Policy)' : 'Privacy & Data Protection Policy'}
          </h1>
          <p className="text-xs text-gray-500 mt-2">কার্যকর ও সর্বশেষ পরিমার্জন: অক্টোবর ২০২৬ • Prochar Media Official</p>
        </div>

        <div className="space-y-6 text-sm text-[#4A453E] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">১. তথ্যের গোপনীয়তা ও সংগ্রহ</h2>
            <p>
              প্রচার মিডিয়া তার গ্রাহক, ব্যবসায়িক পার্টনার ও শ্রদ্ধেয় চিকিৎসকদের তথ্যের সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেয়। আমাদের ওয়েবসাইটে রিভিউ প্রদান বা যোগাযোগের সময় প্রদত্ত নাম, পদবী, ফোন নম্বর, হোয়াটসঅ্যাপ নম্বর বা ইমেইল ঠিকানা শুধুমাত্র সেবা প্রদান ও যাচাইকরণের উদ্দেশ্যে সংরক্ষিত থাকে।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">২. স্বাস্থ্যসেবা ও পেশেন্ট ডেটা নিরাপত্তা (Healthcare Compliance)</h2>
            <p>
              চিকিৎসক, ক্লিনিক ও হাসপাতালের ডিজিটাল প্রচারণার ক্ষেত্রে কোনো রোগীর ব্যক্তিগত গোপনীয় তথ্য বা অনুমতিহীন মেডিকেল রেকর্ড প্রকাশ করা হয় না। স্বাস্থ্যসেবা নৈতিকতা এবং প্রফেশনাল প্রাইভেসি স্ট্যান্ডার্ড শতভাগ রক্ষা করা হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">৩. তৃতীয় পক্ষের কাছে তথ্য হস্তান্তর নিষিদ্ধ</h2>
            <p>
              আমরা কোনো ক্লায়েন্টের বিজনেস ডেটা, অ্যাড একাউন্ট তথ্য, পেজ অ্যাক্সেস বা ব্যক্তিগত যোগাযোগ নম্বর কোনো তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">৪. অফিসিয়াল যোগাযোগের চ্যানেল</h2>
            <p>
              আমাদের অফিসিয়াল হোয়াটসঅ্যাপ নম্বর <strong>{siteSettings.whatsapp}</strong> এবং ইমেইল <strong>{siteSettings.email}</strong> ছাড়া প্রচার মিডিয়া কোনো অননুমোদিত নম্বর থেকে আর্থিক লেনদেন বা গোপন তথ্য চায় না।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const TermsOfServicePage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, siteSettings } = useApp();

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="border-b border-[#D4AF37]/25 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A5A00] mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Agreement & Legal Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'সেবার শর্তাবলী (Terms of Service)' : 'Terms of Service'}
          </h1>
          <p className="text-xs text-gray-500 mt-2">Prochar Media Official Service Governance</p>
        </div>

        <div className="space-y-6 text-sm text-[#4A453E] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">১. সেবার পরিধি ও মানদণ্ড</h2>
            <p>
              প্রচার মিডিয়া ডিজিটাল মার্কেটিং, ডক্টর ও হেলথকেয়ার ব্র্যান্ডিং, সোশ্যাল মিডিয়া ম্যানেজমেন্ট, প্রফেশনাল ভিডিও প্রোডাকশন এবং ওয়েবসাইট ও সফটওয়্যার ডেভেলপমেন্ট সেবা প্রদান করে থাকে। প্রতিটি প্রজেক্টের শুরুতে নির্ধারিত কর্মপরিকল্পনা অনুযায়ী ডেলিভারি নিশ্চিত করা হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">২. কনটেন্ট ও বিজ্ঞাপন নীতিমালা</h2>
            <p>
              সোশ্যাল মিডিয়া ক্যাম্পেইন বা মেটা/গুগল বিজ্ঞাপনের ক্ষেত্রে আন্তর্জাতিক বিজ্ঞাপন নীতিমালা এবং বাংলাদেশের প্রচলিত আইন ও মেডিকেল এথিকস অনুসরণ করা হয়। কোনো বিভ্রান্তিকর বা অনৈতিক প্রচারণা আমরা গ্রহণ করি না।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">৩. মেধাস্বত্ব ও ব্র্যান্ডিং</h2>
            <p>
              “PROCHAR MEDIA” এবং “প্রচারেই প্রসার” আমাদের নিবন্ধিত ও সুরক্ষিত ব্র্যান্ড পরিচয়। ক্লায়েন্টের জন্য নির্মিত কাস্টম গ্রাফিক্স, ভিডিও ও ওয়েবসাইট চুক্তি সম্পন্ন হওয়ার পর ক্লায়েন্টের ব্যবহারের জন্য হস্তান্তর করা হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">৪. অফিসিয়াল ঠিকানা ও বিচারিক এলাকা</h2>
            <p>
              প্রধান কার্যালয়: {siteSettings.address}। যেকোনো দাপ্তরিক বা আইনি বিষয়াদি বাংলাদেশের প্রচলিত আইন অনুযায়ী নিষ্পত্তিযোগ্য।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const DisclaimerPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang } = useApp();

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="border-b border-[#D4AF37]/25 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A5A00] mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>Medical Marketing Ethics & Disclaimer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'মেডিকেল এথিকস ও ডিসক্লেইমার (Disclaimer)' : 'Medical Ethics & Disclaimer'}
          </h1>
          <p className="text-xs text-gray-500 mt-2">Ethical Healthcare Communication Guidelines</p>
        </div>

        <div className="space-y-6 text-sm text-[#4A453E] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">১. নৈতিক স্বাস্থ্য সচেতনতা</h2>
            <p>
              প্রচার মিডিয়া কর্তৃক নির্মিত সকল স্বাস্থ্যবিষয়ক পোস্টার, ভিডিও ও কনটেন্ট জনসচেতনতা এবং সঠিক বিশেষজ্ঞ চিকিৎসকের তথ্য সাধারণ মানুষের কাছে পৌঁছে দেওয়ার উদ্দেশ্যে তৈরি। কোনো কনটেন্ট সরাসরি চিকিৎসকের পরামর্শের বিকল্প নয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">২. চিকিৎসকের পেশাগত মর্যাদা</h2>
            <p>
              আমরা প্রতিটি চিকিৎসকের ডিগ্রি, পদবী ও চেম্বারের তথ্য যাচাইপূর্বক প্রচার করি এবং কোনো ধরনের অতিরঞ্জিত বা অবৈজ্ঞানিক দাবি প্রচার থেকে বিরত থাকি।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
