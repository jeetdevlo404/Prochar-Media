import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Sparkles, MessageCircle, HeartHandshake, CheckCircle2, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, siteSettings } = useApp();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating Golden Particles Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = window.innerWidth < 768 ? 20 : 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.1, Math.min(0.6, p.opacity))})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 pb-14 sm:pt-36 sm:pb-24 overflow-hidden">
      
      {/* Background Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

      {/* Radiant Golden Glow in background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[400px] bg-gradient-to-b from-[#FFF2B2]/40 via-[#F5DE93]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-1"></div>

      {/* Subtle architectural grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center">
        
        {/* Brand Royal Badge - Never breaks "প্রচারেই প্রসার!" on mobile */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/95 border border-[#D4AF37]/50 shadow-xs mb-5 sm:mb-6 max-w-full">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8860B] flex-shrink-0" />
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#8A5A00] truncate">
            {lang === 'bn' ? 'ডিজিটাল গ্রোথ এজেন্সি' : 'Digital Growth Agency'}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37] flex-shrink-0"></span>
          <span className="text-xs sm:text-sm font-bengali font-bold text-[#111111] whitespace-nowrap flex-shrink-0">
            প্রচারেই প্রসার!
          </span>
        </div>

        {/* Main Headline - Clean, responsive, no awkward gaps */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-royal font-black text-[#111111] tracking-tight leading-tight sm:leading-snug max-w-4xl">
          {lang === 'bn' ? (
            <>
              আপনার ব্র্যান্ডকে <span className="gold-gradient-text">এগিয়ে নিন।</span>{' '}
              <br className="hidden sm:inline" />
              আপনার প্রসার <span className="underline decoration-[#D4AF37]/60 underline-offset-6">বাড়ান।</span>
            </>
          ) : (
            <>
              Grow Your Brand.{' '}
              <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Expand Your Reach.</span>
            </>
          )}
        </h1>

        {/* Supporting Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#4A453E] max-w-2xl leading-relaxed font-normal">
          {lang === 'bn' ? siteSettings.heroSubtitleBn : siteSettings.heroSubtitleEn}
        </p>

        {/* Primary and Secondary Action CTAs - Responsive without gigantic gaps */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Main WhatsApp Direct Chat CTA */}
          <a
            href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20am%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#996515] via-[#B8860B] to-[#D4AF37] hover:from-[#8A5A00] hover:to-[#B8860B] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            <span>{lang === 'bn' ? 'আলোচনা শুরু করুন (WhatsApp)' : 'Start on WhatsApp'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Call Directly */}
          <a
            href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-bold text-[#111111] bg-white border border-[#D4AF37]/50 hover:bg-[#FFF9EE] shadow-xs hover:shadow-sm transition-all duration-300"
          >
            <span>{lang === 'bn' ? `কল করুন: ${siteSettings.phone}` : `Call: ${siteSettings.phone}`}</span>
          </a>
        </div>

        {/* Trust Highlight Cards - Balanced spacing on mobile */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl w-full">
          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl gold-glossy-card text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF2B2]/70 border border-[#D4AF37]/50 flex items-center justify-center text-[#8A5A00] flex-shrink-0 shadow-xs">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                {lang === 'bn' ? 'ডক্টর ও হেলথকেয়ার স্পেশালিস্ট' : 'Doctor & Healthcare Branding'}
              </div>
              <div className="text-[11px] text-[#666666] mt-0.5 leading-snug">
                {lang === 'bn' ? 'চিকিৎসকদের জন্য নির্ভরযোগ্য প্রচার' : 'Trusted medical practice growth'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl gold-glossy-card text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF2B2]/70 border border-[#D4AF37]/50 flex items-center justify-center text-[#8A5A00] flex-shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                {lang === 'bn' ? 'ক্রিয়েটিভ স্টোরিটেলিং' : 'Creative Storytelling & Reels'}
              </div>
              <div className="text-[11px] text-[#666666] mt-0.5 leading-snug">
                {lang === 'bn' ? 'উচ্চমানের ফটো ও ভিডিও প্রোডাকশন' : 'High-impact photo & video suites'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl gold-glossy-card text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF2B2]/70 border border-[#D4AF37]/50 flex items-center justify-center text-[#8A5A00] flex-shrink-0 shadow-xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                {lang === 'bn' ? 'আধুনিক প্রযুক্তি সলিউশন' : 'Modern Web & Tech Systems'}
              </div>
              <div className="text-[11px] text-[#666666] mt-0.5 leading-snug">
                {lang === 'bn' ? 'ফাস্ট ও নিরাপদ ওয়েবসাইট ডেভেলপমেন্ট' : 'Scalable high-performance platforms'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
