import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { faqList } from '../data/initialData';
import {
  HelpCircle,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export const FaqAndContactSection: React.FC = () => {
  const { lang, siteSettings } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. FAQ Section (Compact & Sleek) */}
      <section className="py-16 bg-[#FCFAF7] border-t border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-2.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8A5A00]">
                {lang === 'bn' ? 'সাধারণ প্রশ্ন ও উত্তর' : 'Frequently Asked Questions'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] font-serif-royal">
              {lang === 'bn' ? 'আপনার মনে থাকা কিছু জরুরি প্রশ্নের উত্তর' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-3">
            {faqList.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl gold-glossy-card overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#111111] hover:text-[#8A5A00] transition-colors"
                  >
                    <span className="font-bengali">{lang === 'bn' ? item.qBn : item.qEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B8860B] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-[#554E44] leading-relaxed border-t border-[#D4AF37]/15">
                      {lang === 'bn' ? item.aBn : item.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Direct Contact & Office Hub (Form removed per user request in favor of Direct WhatsApp & Phone) */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F5DE93] border border-[#D4AF37] shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                Direct Contact Hub
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal leading-tight">
              {lang === 'bn' ? (
                <>
                  সরাসরি কথা বলুন ও <br />
                  <span className="gold-gradient-text">আপনার ব্যবসার প্রসার শুরু করুন</span>
                </>
              ) : (
                <>
                  Connect Directly & <br />
                  <span className="gold-gradient-text">Accelerate Your Brand</span>
                </>
              )}
            </h2>

            <p className="mt-3 text-sm text-[#554E44] leading-relaxed">
              {lang === 'bn'
                ? 'আমাদের সাথে যোগাযোগের জন্য সরাসরি হোয়াটসঅ্যাপ বা ফোনে কথা বলুন। কোনো ফর্ম পূরণের ঝামেলা ছাড়াই তাৎক্ষণিক পরামর্শ পাবেন।'
                : 'Reach out directly on WhatsApp or call our senior strategist for instant, personalized guidance.'}
            </p>
          </div>

          {/* Prominent Office & WhatsApp Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Primary Action Card: WhatsApp Direct */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#111111] via-[#1C1814] to-[#111111] text-white border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/20 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-5 shadow-lg">
                  <MessageCircle className="w-7 h-7 fill-white" />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F5DE93]">
                  PRIMARY CHANNEL
                </span>

                <h3 className="text-xl font-bold font-bengali text-white mt-1">
                  {lang === 'bn' ? 'অফিসিয়াল হোয়াটসঅ্যাপ' : 'WhatsApp Consultation'}
                </h3>

                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  {lang === 'bn'
                    ? 'যেকোনো সেবা সম্পর্কে আলোচনা ও ফ্রি পরামর্শের জন্য সরাসরি হোয়াটসঅ্যাপে বার্তা দিন।'
                    : 'Chat directly with our growth advisors for rapid replies and tailored packages.'}
                </p>

                <div className="mt-4 text-lg font-black text-[#69F0AE] font-mono">
                  {siteSettings.whatsapp}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/30">
                <a
                  href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20want%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#D4AF37]/45 shadow-lg flex flex-col justify-between hover:border-[#D4AF37] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7E6] text-[#B8860B] border border-[#D4AF37]/40 flex items-center justify-center mb-5 shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8A5A00]">
                  DIRECT CALL
                </span>

                <h3 className="text-xl font-bold font-bengali text-[#111111] mt-1">
                  {lang === 'bn' ? 'সরাসরি ফোন কল' : 'Direct Phone Line'}
                </h3>

                <p className="text-xs text-[#554E44] mt-2 leading-relaxed">
                  {lang === 'bn'
                    ? 'জরুরি আলোচনা বা প্রকল্পের বিস্তারিত বোঝার জন্য সরাসরি কল করুন।'
                    : 'Call our team directly during office hours for an in-depth conversation.'}
                </p>

                <div className="mt-4 text-lg font-black text-[#111111] font-mono">
                  {siteSettings.phone}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
                <a
                  href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'এখনই কল করুন' : 'Call Now'}</span>
                </a>
              </div>
            </div>

            {/* Office Location Card (Prominently Highlighted as Requested) */}
            <div className="p-7 rounded-3xl bg-white border border-[#D4AF37]/45 shadow-lg flex flex-col justify-between hover:border-[#D4AF37] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7E6] text-[#B8860B] border border-[#D4AF37]/40 flex items-center justify-center mb-5 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8A5A00]">
                  OFFICIAL HEADQUARTERS
                </span>

                <h3 className="text-xl font-bold font-bengali text-[#111111] mt-1">
                  {lang === 'bn' ? 'আমাদের অফিস লোকেশন' : 'Main Office Location'}
                </h3>

                <div className="mt-3 p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/30 text-xs font-semibold text-[#111111] leading-relaxed">
                  <div className="font-bold text-[#8A5A00] mb-0.5">Main Office:</div>
                  <div>khalishpur, Khulna, Supper Market - shop no:100 (Main Office)</div>
                  <div className="mt-2 text-[11px] text-[#666666] pt-1.5 border-t border-[#D4AF37]/20">
                    Office 2: Khalishpur, Khulna Ward number 10 Notun rasta - Office
                  </div>
                </div>

                <div className="mt-3 text-xs text-[#554E44] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span className="font-medium text-[11px]">{siteSettings.email}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
                <a
                  href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20would%20like%20to%20visit%20your%20Khulna%20office.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#111111] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Clock className="w-3.5 h-3.5 text-[#8A5A00]" />
                  <span>অফিস ভিজিটের অ্যাপয়েন্টমেন্ট নিন</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
