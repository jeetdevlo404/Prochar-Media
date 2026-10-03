import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Sparkles, MessageCircle, CheckCircle2, TrendingUp, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, siteSettings } = useApp();

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 pb-14 overflow-hidden">
      
      {/* Lightweight GPU-composited Gold Radiance (No heavy canvas CPU loop) */}
      <div className="absolute inset-0 bg-radial-[circle_at_50%_20%] from-[#FFF3D1]/60 via-[#FCFAF7]/20 to-transparent pointer-events-none"></div>

      {/* Subtle floating ambient gold particles using pure CSS GPU keyframes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#D4AF37]/50 blur-xs animate-float-particle"></div>
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-[#D4AF37]/40 blur-xs animate-float-particle [animation-delay:2s]"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 blur-xs animate-float-particle [animation-delay:4s]"></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 rounded-full bg-[#D4AF37]/45 blur-xs animate-float-particle [animation-delay:6s]"></div>
      </div>

      {/* Subtle decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
      
      {/* Light sheen glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-gradient-to-b from-[#FFF2B2]/50 via-[#F5DE93]/15 to-transparent blur-3xl pointer-events-none -z-1"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center">
        
        {/* Brand Royal Crest Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#D4AF37]/45 shadow-xs mb-5 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8A5A00]">
            {lang === 'bn' ? 'প্রিমিয়াম ডিজিটাল গ্রোথ এজেন্সি' : 'Premium Digital Growth Agency'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span className="text-[11px] font-bengali font-bold text-[#111111]">
            প্রচারেই প্রসার!
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.18] max-w-4xl">
          {lang === 'bn' ? (
            <>
              আপনার ব্র্যান্ডকে <span className="gold-gradient-text font-black">এগিয়ে নিন।</span>
              <br className="hidden sm:inline" />
              আপনার প্রসার <span className="underline decoration-[#D4AF37]/50 underline-offset-6">বাড়ান।</span>
            </>
          ) : (
            <>
              Grow Your <span className="gold-gradient-text font-black">Brand.</span>
              <br className="hidden sm:inline" />
              Expand Your <span className="underline decoration-[#D4AF37]/50 underline-offset-6">Reach.</span>
            </>
          )}
        </h1>

        {/* Supporting Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#4A453E] max-w-2xl leading-relaxed font-normal">
          {lang === 'bn' ? siteSettings.heroSubtitleBn : siteSettings.heroSubtitleEn}
        </p>

        {/* Primary and Secondary Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Main WhatsApp Direct Chat CTA */}
          <a
            href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20am%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#996515] via-[#B8860B] to-[#D4AF37] hover:from-[#8A5A00] hover:to-[#B8860B] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{lang === 'bn' ? 'আলোচনা শুরু করুন (WhatsApp)' : 'Start on WhatsApp'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Call Directly */}
          <a
            href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-bold text-[#111111] bg-white border border-[#D4AF37]/50 hover:bg-[#FFF9EE] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span>{lang === 'bn' ? `কল করুন: ${siteSettings.phone}` : `Call: ${siteSettings.phone}`}</span>
          </a>
        </div>

        {/* Trust Highlight Pills */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl w-full">
          <div className="flex items-center gap-3 p-3 rounded-2xl gold-glossy-card text-left">
            <div className="w-9 h-9 rounded-xl bg-[#FFF2B2]/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#8A5A00] flex-shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">
                {lang === 'bn' ? 'ডক্টর ও হেলথকেয়ার স্পেশালিস্ট' : 'Doctor & Healthcare Specialist'}
              </div>
              <div className="text-[10.5px] text-[#666666]">
                {lang === 'bn' ? 'চিকিৎসকদের জন্য নির্ভরযোগ্য প্রচার' : 'Trusted medical practice growth'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl gold-glossy-card text-left">
            <div className="w-9 h-9 rounded-xl bg-[#FFF2B2]/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#8A5A00] flex-shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">
                {lang === 'bn' ? 'ডাটা-ড্রিভেন ROI অ্যাডস' : 'Data-Driven ROI Ads'}
              </div>
              <div className="text-[10.5px] text-[#666666]">
                {lang === 'bn' ? 'সুনির্দিষ্ট লিড জেনারেশন' : 'High-converting targeted funnels'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl gold-glossy-card text-left">
            <div className="w-9 h-9 rounded-xl bg-[#FFF2B2]/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#8A5A00] flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">
                {lang === 'bn' ? 'ফুল-স্ট্যাক ডিজিটাল পার্টনার' : 'Full-Stack Digital Partner'}
              </div>
              <div className="text-[10.5px] text-[#666666]">
                {lang === 'bn' ? 'মার্কেটিং, ভিডিও, ডিজাইন ও টেক' : 'Design, Video, Ads & Web Tech'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
