import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProcharLogo } from './BrandVisuals';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from 'lucide-react';

export const Footer: React.FC<{
  onNavigatePage: (route: string) => void;
}> = ({ onNavigatePage }) => {
  const { lang, siteSettings } = useApp();

  return (
    <footer className="bg-[#0E0C0A] text-white pt-16 pb-12 border-t-2 border-[#D4AF37]/50 relative overflow-hidden">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-36 bg-gradient-to-b from-[#D4AF37]/15 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#181512] p-3 rounded-2xl border border-[#D4AF37]/40 inline-block shadow-md">
              <ProcharLogo darkTheme size="md" customLogoUrl={siteSettings.logoUrl} />
            </div>

            {/* High-Contrast Brand Line */}
            <div className="text-xl sm:text-2xl font-bold font-bengali text-[#F5DE93] drop-shadow-sm">
              “প্রচারেই প্রসার — We Promote, You Grow”
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
              {lang === 'bn'
                ? 'প্রচার মিডিয়া বাংলাদেশের অন্যতম বিশ্বস্ত ডিজিটাল গ্রোথ ও হেলথকেয়ার ব্র্যান্ডিং এজেন্সি। চিকিৎসক, হাসপাতাল এবং কর্পোরেট ব্র্যান্ডের অনলাইন উপস্থিতি বৃদ্ধিতে আমরা দৃঢ়প্রতিজ্ঞ।'
                : 'Prochar Media is a premier Bangladesh-based digital growth and healthcare branding agency. Dedicated to elevating doctors, hospitals and visionary enterprises.'}
            </p>

            {/* Social Media Links */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href={siteSettings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#201C17] border border-[#D4AF37]/50 flex items-center justify-center text-[#F5DE93] hover:bg-[#D4AF37] hover:text-[#111111] transition-all shadow-xs"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>

              <a
                href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#201C17] border border-[#25D366]/60 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-xs"
                title="WhatsApp Hotline"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#201C17] border border-[#D4AF37]/50 flex items-center justify-center text-[#F5DE93] hover:bg-[#D4AF37] hover:text-[#111111] transition-all shadow-xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteSettings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#201C17] border border-[#D4AF37]/50 flex items-center justify-center text-[#F5DE93] hover:bg-[#D4AF37] hover:text-[#111111] transition-all shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Separate Info Pages (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#D4AF37]">
              {lang === 'bn' ? 'গুরুত্বপূর্ণ পেইজসমূহ' : 'Important Pages'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigatePage('/about-us')}
                  className="hover:text-[#F5DE93] transition-colors text-left"
                >
                  {lang === 'bn' ? 'আমাদের সম্পর্কে (About Us)' : 'About Prochar Media'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('/reviews')}
                  className="hover:text-[#F5DE93] transition-colors text-left"
                >
                  {lang === 'bn' ? 'সকল ক্লায়েন্ট রিভিউ (All Reviews)' : 'Client Reviews (/reviews)'}
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5DE93] transition-colors">
                  {lang === 'bn' ? 'সেবাসমূহ (Services)' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#F5DE93] transition-colors">
                  {lang === 'bn' ? 'টিম মেম্বার (Team Members)' : 'Our Team Members'}
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('/privacy-policy')}
                  className="hover:text-[#F5DE93] transition-colors text-left"
                >
                  {lang === 'bn' ? 'গোপনীয়তা নীতি (Privacy Policy)' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('/terms-of-service')}
                  className="hover:text-[#F5DE93] transition-colors text-left"
                >
                  {lang === 'bn' ? 'শর্তাবলী (Terms of Service)' : 'Terms of Service'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#D4AF37]">
              {lang === 'bn' ? 'অফিসিয়াল যোগাযোগ' : 'Headquarters & Hotline'}
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-white">Main Office:</div>
                  <div>{siteSettings.address}</div>
                  <div className="text-[11px] text-gray-400">{siteSettings.secondaryAddress}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white font-mono text-sm font-bold">
                  {siteSettings.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-mono text-xs font-bold"
                >
                  WhatsApp: {siteSettings.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-white truncate text-xs">
                  {siteSettings.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} PROCHAR MEDIA. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#D4AF37] font-serif-royal">We Promote, You Grow</span>
            <span>•</span>
            <span className="font-bengali text-[#D4AF37] font-bold">প্রচারেই প্রসার</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export const FloatingWidgets: React.FC = () => {
  const { siteSettings, lang } = useApp();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/95 border border-[#D4AF37]/50 text-[#8A5A00] flex items-center justify-center shadow-lg hover:bg-[#FFF7E6] transition-all hover:-translate-y-1 cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Round Button */}
      <a
        href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden sm:group-hover:inline-block mr-3 px-3 py-1.5 rounded-xl bg-[#111111] text-[#F5DE93] text-xs font-bold whitespace-nowrap shadow-xl border border-[#D4AF37]/40 animate-in fade-in slide-in-from-right-2">
          {lang === 'bn' ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Chat on WhatsApp'}
        </span>

        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

        <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 fill-white text-white" />
        </div>
      </a>
    </div>
  );
};
