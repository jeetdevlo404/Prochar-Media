import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Shield, CheckCircle2, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import { ProcharLogo } from './BrandVisuals';

export const AboutUsPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, siteSettings } = useApp();

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center space-y-3 pb-8 border-b border-[#D4AF37]/25">
          <ProcharLogo size="lg" className="justify-center" />
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'আমাদের সম্পর্কে ও গল্প' : 'About Prochar Media'}
          </h1>
          <div className="text-lg font-bold gold-gradient-text font-bengali">
            “প্রচারেই প্রসার — We Promote, You Grow”
          </div>
        </div>

        {/* Narrative & Philosophy */}
        <div className="space-y-6 text-sm sm:text-base text-[#443E36] leading-relaxed">
          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xs">
            <h2 className="text-xl font-bold text-[#111111] font-bengali mb-3">
              {lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি ও সূচনা' : 'Our Vision & Purpose'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'প্রচার মিডিয়া বাংলাদেশের একটি সুপ্রতিষ্ঠিত ডিজিটাল গ্রোথ, ডক্টর ও হেলথকেয়ার ব্র্যান্ডিং এবং প্রযুক্তি সলিউশন কোম্পানি। আমাদের জন্ম হয়েছিল একটি সহজ কিন্তু অত্যন্ত শক্তিশালী সত্যের ওপর ভিত্তি করে—"প্রচারেই প্রসার"। সঠিক প্রচার ছাড়া শ্রেষ্ঠ মেধাও অনেকের অগোচরে থেকে যায়।'
                : 'Prochar Media is a premier Bangladesh-based digital growth and healthcare branding company. Built upon a timeless truth: "প্রচারেই প্রসার" (We Promote, You Grow). Without strategic marketing, even clinical mastery remains undiscovered.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xs">
            <h2 className="text-xl font-bold text-[#111111] font-bengali mb-3">
              {lang === 'bn' ? 'চিকিৎসকদের জন্য আমাদের বিশেষ নিবেদন' : 'Our Dedication to Healthcare'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'আমরা সাধারণ পণ্যের বিজ্ঞাপনের চেয়ে আলাদা। চিকিৎসকদের ক্ষেত্রে আমরা তাদের পেশাগত মর্যাদা, নৈতিকতা ও রোগীর বিশ্বাসের প্রতি সর্বোচ্চ শ্রদ্ধা রেখে কাজ করি। আধুনিক ভিডিও কনটেন্ট, স্বাস্থ্য সচেতনতামূলক রিলস এবং ডাটা-ভিত্তিক ফেসবুক ও গুগল প্রচারের মাধ্যমে রোগী ও চিকিৎসকের মাঝে একটি নিরাপদ সেতুবন্ধন তৈরি করি।'
                : 'Healthcare is distinct from retail merchandising. We honor clinical ethics, patient confidentiality, and medical dignity. We build the trusted bridge between physicians and patients seeking specialized care.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xs">
            <h2 className="text-xl font-bold text-[#111111] font-bengali mb-3">
              {lang === 'bn' ? 'আমাদের মূল কার্যালয়' : 'Our Headquarters'}
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-[#555555]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8A5A00]" />
                <span>{siteSettings.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8A5A00]" />
                <span>{siteSettings.secondaryAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8A5A00]" />
                <span>{siteSettings.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8A5A00]" />
                <span>{siteSettings.email}</span>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="border-b border-[#D4AF37]/25 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'গোপনীয়তা ও ডেটা নীতিমালা (Privacy Policy)' : 'Privacy Policy'}
          </h1>
          <p className="text-xs text-gray-500 mt-2">সর্বশেষ পরিমার্জন: অক্টোবর ২০২৬ • Prochar Media</p>
        </div>

        <div className="space-y-6 text-sm text-[#4A453E] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">১. তথ্যের গোপনীয়তা</h2>
            <p>
              প্রচার মিডিয়া তার গ্রাহক, ক্লায়েন্ট ও চিকিৎসকদের তথ্যের সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেয়। আমাদের সাথে যোগাযোগের সময় প্রদত্ত নাম, ফোন নম্বর, হোয়াটসঅ্যাপ নম্বর বা ইমেইল ঠিকানা শুধুমাত্র সেবা প্রদানের উদ্দেশ্যে ব্যবহৃত হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">২. স্বাস্থ্যসেবা ও পেশেন্ট ডেটা নিরাপত্তা</h2>
            <p>
              চিকিৎসক ও হাসপাতালের ডিজিটাল প্রচারণার ক্ষেত্রে কোনো রোগীর ব্যক্তিগত তথ্য বা অনুমতিহীন চিকিৎসাবিবরণী প্রকাশ করা হয় না। স্বাস্থ্যসেবা নৈতিকতা ও প্রফেশনাল স্ট্যান্ডার্ড সম্পূর্ণরূপে রক্ষা করা হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">৩. যোগাযোগের চ্যানেল</h2>
            <p>
              আমাদের অফিসিয়াল হোয়াটসঅ্যাপ নম্বর <strong>{siteSettings.whatsapp}</strong> এবং ইমেইল <strong>{siteSettings.email}</strong> ছাড়া প্রচার মিডিয়া কোনো অননুমোদিত উৎস থেকে যোগাযোগ করে না।
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        <div className="border-b border-[#D4AF37]/25 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'ব্যবহারের শর্তাবলী (Terms of Service)' : 'Terms of Service'}
          </h1>
          <p className="text-xs text-gray-500 mt-2">Prochar Media Official Terms</p>
        </div>

        <div className="space-y-6 text-sm text-[#4A453E] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">১. সেবার পরিধি</h2>
            <p>
              প্রচার মিডিয়া ডিজিটাল মার্কেটিং, ডক্টর ব্র্যান্ডিং, সোশ্যাল মিডিয়া ম্যানেজমেন্ট, ভিডিও প্রোডাকশন ও ওয়েবসাইট ডেভেলপমেন্ট সংক্রান্ত সেবা প্রদান করে থাকে। প্রতিটি প্রজেক্টের চুক্তি অনুযায়ী ডেলিভারি নিশ্চিত করা হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">২. অফিসিয়াল সত্ত্বা ও ট্রেডমার্ক</h2>
            <p>
              “PROCHAR MEDIA” এবং “প্রচারেই প্রসার” আমাদের সুরক্ষিত ব্র্যান্ড নাম ও বুদ্ধিবৃত্তিক সম্পদ।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">৩. অফিস ও আইনি এলাকা</h2>
            <p>
              প্রধান কার্যালয়: {siteSettings.address}। যেকোনো আইনি বা প্রফেশনাল চুক্তির ক্ষেত্রে এটি বাংলাদেশের প্রচলিত আইন দ্বারা পরিচালিত।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
