import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProcharLogo } from './BrandVisuals';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC<{
  onSwitchLang: (newLang: 'en' | 'bn') => void;
  onNavigateHome: () => void;
}> = ({ onSwitchLang, onNavigateHome }) => {
  const { lang, siteSettings } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameEn: 'Home', nameBn: 'হোম', href: '#home' },
    { nameEn: 'About', nameBn: 'পরিচিতি', href: '#about' },
    { nameEn: 'Services', nameBn: 'সেবাসমূহ', href: '#services' },
    { nameEn: 'Healthcare', nameBn: 'হেলথকেয়ার', href: '#healthcare' },
    { nameEn: 'Team', nameBn: 'টিম মেম্বার', href: '#team' },
    { nameEn: 'Our Work', nameBn: 'পোর্টফোলিও', href: '#work' },
    { nameEn: 'Contact', nameBn: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-md py-2.5'
          : 'bg-[#FCFAF7]/85 backdrop-blur-xs py-3.5 border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            if (window.location.pathname !== '/') {
              e.preventDefault();
              onNavigateHome();
            }
          }}
          className="hover:opacity-95 transition-opacity"
        >
          <ProcharLogo size={isScrolled ? 'sm' : 'md'} customLogoUrl={siteSettings.logoUrl} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-[#222222] hover:text-[#B8860B] hover:bg-[#FFF9EE] transition-colors"
            >
              {lang === 'bn' ? link.nameBn : link.nameEn}
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher - Clean inline toggle */}
          <div className="flex items-center bg-white border border-[#D4AF37]/35 rounded-full p-1 shadow-xs">
            <button
              onClick={() => onSwitchLang('bn')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'bn'
                  ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#111111]'
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => onSwitchLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-xs'
                  : 'text-[#444444] hover:text-[#111111]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Call */}
          <a
            href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF7E6] border border-[#D4AF37]/30 text-[#8A5A00] text-xs font-bold hover:bg-[#FFF0CC] transition-colors"
            title="Call Prochar Media"
          >
            <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="hidden xl:inline">{siteSettings.phone}</span>
            <span className="xl:hidden">{lang === 'bn' ? 'কল' : 'Call'}</span>
          </a>

          {/* Consultation CTA */}
          <a
            href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20would%20like%20to%20discuss%20our%20growth.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-[#996515] via-[#B8860B] to-[#D4AF37] hover:from-[#8A5A00] hover:to-[#B8860B] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>{lang === 'bn' ? 'পরামর্শ নিন' : 'Consultation'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Action and Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => onSwitchLang(lang === 'bn' ? 'en' : 'bn')}
            className="px-2.5 py-1 rounded-full bg-[#FFF7E6] border border-[#D4AF37]/40 text-[#8A5A00] text-xs font-bold"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#D4AF37]/30 text-[#111111]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#B8860B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFAF7] border-b border-[#D4AF37]/30 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#222222] hover:bg-[#FFF8E7] hover:text-[#8A5A00] transition-colors"
              >
                {lang === 'bn' ? link.nameBn : link.nameEn}
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
              >
                <span>WhatsApp: {siteSettings.whatsapp}</span>
              </a>

              <a
                href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-sm shadow-md"
              >
                <span>{lang === 'bn' ? 'সরাসরি কল করুন' : 'Call Directly'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
