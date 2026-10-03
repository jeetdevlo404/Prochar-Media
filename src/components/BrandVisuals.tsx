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

  const logoDimension = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg md:text-xl';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Brand Logo Icon */}
      <div className={`relative rounded-xl overflow-hidden shadow-md flex-shrink-0 border border-[#D4AF37]/50 ${logoDimension} bg-[#0A0A0A]`}>
        <img
          src={logoSrc}
          alt="Prochar Media"
          className="w-full h-full object-contain p-0.5"
          onError={(e) => {
            // fallback if offline
            (e.currentTarget as HTMLImageElement).src = '/logo.jpg';
          }}
        />
      </div>

      {/* Brand Typography with Fixed Contrast */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif-royal font-extrabold tracking-[0.2em] uppercase ${
              darkTheme ? 'text-[#FFFFFF] drop-shadow-md' : 'text-[#111111]'
            } ${titleSize}`}
          >
            PROCHAR
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.28em] text-[#D4AF37] uppercase">
            MEDIA
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`text-[9.5px] md:text-[11px] font-medium tracking-wide ${
              darkTheme ? 'text-[#D0C8B8]' : 'text-[#666666]'
            }`}
          >
            We promote, you grow
          </span>
          <span className="text-[10px] text-[#D4AF37] font-bold">•</span>
          <span className="text-[10px] md:text-[11.5px] font-bold text-[#F5DE93] font-bengali">
            প্রচারেই প্রসার
          </span>
        </div>
      </div>
    </div>
  );
};

// Recreation of the supplied "Golden Bridge Connecting Doctor & Patients" (Poster 6)
export const GoldenBridgeIllustration: React.FC<{ customImage?: string }> = ({ customImage }) => {
  if (customImage) {
    return (
      <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
        <img src={customImage} alt="রোগী ও চিকিৎসকের সেতুবন্ধন" className="w-full h-auto object-cover" />
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] border border-[#D4AF37]/35 shadow-2xl p-5 sm:p-8">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#8A5A00]">
            Prochar Signature Strategic Funnel
          </span>
        </div>
        <span className="text-xs font-bengali font-bold text-[#AA771C] bg-[#FFF2B2]/60 px-3 py-1 rounded-full border border-[#D4AF37]/30">
          প্রচারেই প্রসার!
        </span>
      </div>

      {/* Main Bridge Graphic Canvas */}
      <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF9EE] to-[#EFE2CE] flex flex-col justify-between p-4 sm:p-6 border border-[#E5C378]/30">
        
        {/* Title inside graphic */}
        <div className="text-center z-10">
          <h4 className="text-lg sm:text-2xl font-extrabold text-[#1A1816] font-bengali">
            রোগী ও চিকিৎসকের সেতুবন্ধন — <span className="gold-gradient-text font-black">সঠিক ডিজিটাল মার্কেটিং</span>
          </h4>
          <p className="text-[11px] sm:text-xs text-[#735A2D] mt-0.5 font-medium">
            Healthcare Branding for Doctors, Hospitals & Diagnostic Centers
          </p>
        </div>

        {/* Scenic Center: Doctor on Left, Golden Arch Bridge, Patients on Right */}
        <div className="relative flex-1 flex items-end justify-between px-2 sm:px-6 pb-2">
          
          {/* Doctor Side (Left) */}
          <div className="z-10 flex flex-col items-center">
            <div className="relative group">
              <div className="w-18 h-24 sm:w-24 sm:h-34 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-white flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80"
                  alt="Doctor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2.5 inset-x-0 mx-auto w-fit bg-[#111111] text-[#F5DE93] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#D4AF37] whitespace-nowrap shadow-md">
                চিকিৎসক (Doctor)
              </div>
            </div>
          </div>

          {/* Golden Arch Bridge in Center */}
          <div className="flex-1 mx-2 sm:mx-4 flex flex-col items-center justify-end relative pb-1">
            <svg viewBox="0 0 400 160" className="w-full max-w-[380px] drop-shadow-md" fill="none">
              <defs>
                <linearGradient id="bridgeGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#B8860B" />
                  <stop offset="30%" stopColor="#F5DE93" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#FFE082" />
                  <stop offset="100%" stopColor="#AA771C" />
                </linearGradient>
                <linearGradient id="glowSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              <path d="M 40 140 Q 200 40 360 140" fill="url(#glowSheen)" />
              <path d="M 30 145 Q 200 45 370 145" stroke="#996515" strokeWidth="8" strokeLinecap="round" />
              <path d="M 40 135 Q 200 35 360 135" stroke="url(#bridgeGold)" strokeWidth="6" strokeLinecap="round" />
              
              {[80, 120, 160, 200, 240, 280, 320].map((x) => {
                const yArch = 135 - Math.sin(((x - 40) / 320) * Math.PI) * 95;
                return (
                  <line
                    key={x}
                    x1={x}
                    y1={yArch}
                    x2={x}
                    y2={145}
                    stroke="url(#bridgeGold)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              })}

              <path d="M 20 152 Q 200 52 380 152" stroke="url(#bridgeGold)" strokeWidth="10" strokeLinecap="round" />
            </svg>

            <div className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8A5A00] text-white text-[9px] sm:text-[11px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-md tracking-wider border border-[#FFF2B2]/60 -mt-2 z-20">
              MARKETING STRATEGY
            </div>
          </div>

          {/* Patients Side (Right) */}
          <div className="z-10 flex flex-col items-center">
            <div className="relative group">
              <div className="w-18 h-24 sm:w-24 sm:h-34 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-white flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&auto=format&fit=crop&q=80"
                  alt="Patients"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2.5 inset-x-0 mx-auto w-fit bg-[#111111] text-[#F5DE93] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#D4AF37] whitespace-nowrap shadow-md">
                রোগী ও পরিবার (Patients)
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Underneath the Bridge */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#D4AF37]/25 bg-white/85 backdrop-blur-xs rounded-xl p-2">
          <div className="text-center">
            <div className="text-[10px] sm:text-[11px] font-bold text-[#111111]">🎯 Targeted Reach</div>
            <div className="text-[8.5px] text-[#666666]">সঠিক রোগীর কাছে প্রচার</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] sm:text-[11px] font-bold text-[#111111]">💬 Engagement</div>
            <div className="text-[8.5px] text-[#666666]">আস্থা ও নিয়মিত যোগাযোগ</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] sm:text-[11px] font-bold text-[#111111]">📈 Ongoing Growth</div>
            <div className="text-[8.5px] text-[#666666]">ধারাবাহিক চেম্বার প্রসার</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] sm:text-[11px] font-bold text-[#111111]">🤝 Patient Trust</div>
            <div className="text-[8.5px] text-[#666666]">রোগীদের গভীর বিশ্বাস</div>
          </div>
        </div>
      </div>

      {/* Bottom Hotline info bar */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#444444] px-1">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] font-bold">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.088-.178.183-.076.357.101.174.45 1.742 1.488 2.368.809.488 1.139.56 1.353.64.214.08.347.069.476-.08.13-.149.55-.64.694-.858.144-.217.29-.181.492-.106.202.075 1.284.606 1.503.715.219.109.364.163.418.257.054.094.054.545-.09.95z"/>
            </svg>
          </span>
          <span className="font-bold text-[#111111]">WhatsApp: 01351-711437</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#666666]">
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
      className="group relative cursor-pointer rounded-2xl overflow-hidden gold-glossy-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF6EE]">
        <img
          src={imageUrl}
          alt={titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#111111]/90 text-[#F5DE93] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50 backdrop-blur-xs">
            {tag}
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 z-10">
          <h4 className="text-white text-base font-bold font-bengali leading-snug drop-shadow-md">
            {titleBn}
          </h4>
          <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mt-0.5">
            {titleEn}
          </p>
          <p className="text-gray-200 text-xs mt-1 font-bengali line-clamp-2 opacity-90">
            {subtitleBn}
          </p>

          <div className="mt-2 flex items-center gap-1.5 text-[#F5DE93] text-[11px] font-semibold group-hover:translate-x-1 transition-transform">
            <span>ভিউ পোস্টার / View Details</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};
