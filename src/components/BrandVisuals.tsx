import React from 'react';

// Official Prochar Media Brand Logo using the provided exact image asset
export const ProcharLogo: React.FC<{
  className?: string;
  darkTheme?: boolean;
  size?: 'sm' | 'md' | 'lg';
  customLogoUrl?: string;
}> = ({
  className = '',
  darkTheme = false,
  size = 'md',
  customLogoUrl,
}) => {
  const logoSrc = customLogoUrl || 'https://i.supaimg.com/88cac59e-85c9-44fa-970b-faf486de12c5/0680d662-cbd5-4267-b0de-f0460d72ffd3.jpg';

  const logoDimension = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12 sm:w-14 sm:h-14';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg sm:text-xl';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Brand Logo Icon */}
      <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md flex-shrink-0 border border-[#D4AF37]/60 ${logoDimension} bg-[#0A0A0A]`}>
        <img
          src={logoSrc}
          alt="Prochar Media"
          className="w-full h-full object-contain p-0.5"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/logo.jpg';
          }}
        />
      </div>

      {/* Brand Typography with Fixed Contrast */}
      <div className="flex flex-col leading-tight min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={`font-serif-royal font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase ${
              darkTheme ? 'text-[#FFFFFF] drop-shadow-md' : 'text-[#111111]'
            } ${titleSize}`}
          >
            PROCHAR
          </span>
          <span className="text-[11px] sm:text-xs font-black tracking-[0.22em] text-[#D4AF37] uppercase">
            MEDIA
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
          <span
            className={`text-[10px] sm:text-xs font-semibold tracking-wide truncate ${
              darkTheme ? 'text-[#D0C8B8]' : 'text-[#666666]'
            }`}
          >
            We promote, you grow
          </span>
          <span className="text-[10px] text-[#D4AF37] font-bold">•</span>
          <span className="text-[11px] sm:text-xs font-bold text-[#F5DE93] font-bengali whitespace-nowrap flex-shrink-0">
            প্রচারেই প্রসার
          </span>
        </div>
      </div>
    </div>
  );
};

// 100% Mobile-Friendly & Desktop-Responsive "Golden Bridge Connecting Doctor & Patients"
export const GoldenBridgeIllustration: React.FC<{ customImage?: string }> = ({ customImage }) => {
  if (customImage) {
    return (
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-xl">
        <img src={customImage} alt="রোগী ও চিকিৎসকের সেতুবন্ধন" className="w-full h-auto object-cover" />
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] border border-[#D4AF37]/40 shadow-xl p-3 sm:p-6 md:p-8">
      {/* Top Header Badge with bulletproof mobile line wrapping */}
      <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2.5 sm:pb-3.5 mb-3 sm:mb-5 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping flex-shrink-0"></span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-[#8A5A00] truncate">
            Strategic Healthcare Funnel
          </span>
        </div>
        <span className="whitespace-nowrap flex-shrink-0 text-[11px] sm:text-xs font-bengali font-bold text-[#AA771C] bg-[#FFF2B2]/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D4AF37]/40 shadow-xs">
          প্রচারেই প্রসার!
        </span>
      </div>

      {/* Main Bridge Graphic Canvas - Guaranteed to fit ANY mobile screen without clipping */}
      <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF9EE] to-[#EFE2CE] flex flex-col justify-between p-3 sm:p-5 md:p-7 border border-[#E5C378]/30 shadow-inner">
        
        {/* Title inside graphic */}
        <div className="text-center z-10 mb-2 sm:mb-4">
          <h4 className="text-base sm:text-xl md:text-2xl font-extrabold text-[#1A1816] font-bengali leading-snug">
            রোগী ও চিকিৎসকের সেতুবন্ধন — <span className="gold-gradient-text font-black">সঠিক ডিজিটাল মার্কেটিং</span>
          </h4>
          <p className="text-[10px] sm:text-xs text-[#735A2D] mt-0.5 font-medium hidden sm:block">
            Healthcare Branding for Doctors, Hospitals & Diagnostic Centers
          </p>
        </div>

        {/* Scenic Center: Doctor on Left, Golden Arch Bridge in Center, Real Patient/Family on Right (ALWAYS BOTH VISIBLE) */}
        <div className="relative flex items-end justify-between gap-1 sm:gap-3 px-1 sm:px-4 pb-2 sm:pb-4 w-full">
          
          {/* Doctor Side (Left) */}
          <div className="flex-shrink-0 flex flex-col items-center z-10">
            <div className="relative group">
              <div className="w-16 h-22 sm:w-28 sm:h-38 md:w-34 md:h-44 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-white flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=350&auto=format&fit=crop&q=80"
                  alt="Doctor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-2.5 inset-x-0 mx-auto w-fit bg-[#111111] text-[#F5DE93] text-[9px] sm:text-xs font-bold px-2 py-0.5 rounded-md border border-[#D4AF37] whitespace-nowrap shadow-xs">
                চিকিৎসক
              </div>
            </div>
          </div>

          {/* Golden Arch Bridge in Center (Dynamically scaling without overflowing) */}
          <div className="flex-1 min-w-0 flex flex-col items-center justify-end relative pb-1 sm:pb-2 px-1">
            <svg viewBox="0 0 300 130" className="w-full max-w-[280px] sm:max-w-[380px] drop-shadow-sm" fill="none">
              <defs>
                <linearGradient id="bridgeGoldMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B8860B" />
                  <stop offset="30%" stopColor="#F5DE93" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#FFE082" />
                  <stop offset="100%" stopColor="#AA771C" />
                </linearGradient>
                <linearGradient id="glowSheenMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              <path d="M 30 115 Q 150 25 270 115" fill="url(#glowSheenMobile)" />
              <path d="M 20 120 Q 150 30 280 120" stroke="#996515" strokeWidth="6" strokeLinecap="round" />
              <path d="M 28 112 Q 150 22 272 112" stroke="url(#bridgeGoldMobile)" strokeWidth="5" strokeLinecap="round" />
              
              {[60, 95, 130, 165, 200, 235].map((x) => {
                const yArch = 112 - Math.sin(((x - 28) / 244) * Math.PI) * 85;
                return (
                  <line
                    key={x}
                    x1={x}
                    y1={yArch}
                    x2={x}
                    y2={120}
                    stroke="url(#bridgeGoldMobile)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                );
              })}

              <path d="M 10 125 Q 150 35 290 125" stroke="url(#bridgeGoldMobile)" strokeWidth="8" strokeLinecap="round" />
            </svg>

            <div className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8A5A00] text-white text-[8px] sm:text-[11px] font-extrabold uppercase px-2 py-0.5 sm:px-3 sm:py-0.5 rounded-full shadow-md tracking-wider border border-[#FFF2B2]/80 -mt-1 sm:-mt-2 z-20 whitespace-nowrap">
              MARKETING STRATEGY
            </div>
          </div>

          {/* Patients & Family Side (Right) - ALWAYS 100% VISIBLE ON MOBILE */}
          <div className="flex-shrink-0 flex flex-col items-center z-10">
            <div className="relative group">
              <div className="w-16 h-22 sm:w-28 sm:h-38 md:w-34 md:h-44 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-white flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=350&auto=format&fit=crop&q=80"
                  alt="Patients & Families"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-2.5 inset-x-0 mx-auto w-fit bg-[#111111] text-[#F5DE93] text-[9px] sm:text-xs font-bold px-2 py-0.5 rounded-md border border-[#D4AF37] whitespace-nowrap shadow-xs">
                রোগী ও পরিবার
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Underneath the Bridge with Clean Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 pt-2.5 sm:pt-3.5 border-t border-[#D4AF37]/30 bg-white/90 backdrop-blur-xs rounded-xl sm:rounded-2xl p-2 sm:p-3 mt-1 sm:mt-2">
          <div className="text-center p-1">
            <div className="text-[10px] sm:text-xs font-bold text-[#111111]">🎯 Targeted Reach</div>
            <div className="text-[9px] sm:text-[11px] text-[#666666]">সঠিক রোগীর কাছে প্রচার</div>
          </div>
          <div className="text-center p-1">
            <div className="text-[10px] sm:text-xs font-bold text-[#111111]">💬 Engagement</div>
            <div className="text-[9px] sm:text-[11px] text-[#666666]">আস্থা ও নিয়মিত যোগাযোগ</div>
          </div>
          <div className="text-center p-1">
            <div className="text-[10px] sm:text-xs font-bold text-[#111111]">📈 Ongoing Growth</div>
            <div className="text-[9px] sm:text-[11px] text-[#666666]">ধারাবাহিক চেম্বার প্রসার</div>
          </div>
          <div className="text-center p-1">
            <div className="text-[10px] sm:text-xs font-bold text-[#111111]">🤝 Patient Trust</div>
            <div className="text-[9px] sm:text-[11px] text-[#666666]">রোগীদের গভীর বিশ্বাস</div>
          </div>
        </div>
      </div>

      {/* Bottom Hotline info bar */}
      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs text-[#444444] px-1 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] font-bold">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.088-.178.183-.076.357.101.174.45 1.742 1.488 2.368.809.488 1.139.56 1.353.64.214.08.347.069.476-.08.13-.149.55-.64.694-.858.144-.217.29-.181.492-.106.202.075 1.284.606 1.503.715.219.109.364.163.418.257.054.094.054.545-.09.95z"/>
            </svg>
          </span>
          <span className="font-bold text-[#111111]">WhatsApp: 01351-711437</span>
        </div>
        <div className="text-[11px] sm:text-xs text-[#666666]">
          <span>khalishpur, Khulna, Supper Market - shop no:100 (Main Office)</span>
        </div>
      </div>
    </div>
  );
};

export const PosterCard: React.FC<{
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  tag: string;
  imageUrl: string;
  accent: string;
  onClick?: () => void;
}> = ({ titleBn, titleEn, subtitleBn, tag, imageUrl, accent, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden gold-glossy-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF6EE]">
        <img
          src={imageUrl}
          alt={titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="bg-[#111111]/90 text-[#F5DE93] text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D4AF37]/60 shadow-xs">
            {tag}
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
          <h4 className="text-white text-base sm:text-lg font-bold font-bengali leading-snug drop-shadow-md">
            {titleBn}
          </h4>
          <p className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">
            {titleEn}
          </p>
          <p className="text-gray-200 text-xs mt-1.5 font-bengali line-clamp-2 opacity-90 leading-relaxed">
            {subtitleBn}
          </p>

          <div className="mt-2.5 flex items-center gap-1.5 text-[#F5DE93] text-xs font-bold group-hover:translate-x-1.5 transition-transform">
            <span>ভিউ পোস্টার / View Details</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};
