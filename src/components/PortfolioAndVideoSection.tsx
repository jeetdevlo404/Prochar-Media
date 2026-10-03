import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { portfolioWorks } from '../data/initialData';
import { PortfolioItem } from '../types';
import { FolderGit2, Video, Play, X, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

export const PortfolioAndVideoSection: React.FC = () => {
  const { lang, siteSettings } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const categories = ['All', 'Healthcare', 'Branding', 'Digital Marketing', 'Web Development', 'Creative'];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioWorks
      : portfolioWorks.filter((p) => p.category === activeCategory);

  return (
    <div id="work" className="py-24 sm:py-32 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#F8F4EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-4">
            <FolderGit2 className="w-4 h-4 text-[#B8860B]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'আমাদের পোর্টফোলিও' : 'Our Work'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal leading-tight sm:leading-snug">
            {lang === 'bn' ? (
              <>
                বাস্তব সাফল্যের <span className="gold-gradient-text">প্রমাণিত গল্প</span>
              </>
            ) : (
              <>
                Stories That Move People & <br />
                <span className="gold-gradient-text">Deliver Measurable Impact</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#554E44] leading-relaxed">
            {lang === 'bn'
              ? 'ডাক্তারদের চেম্বার গ্রোথ, ক্লিনিক ব্র্যান্ডিং এবং কর্পোরেট মার্কেটিংয়ে আমাদের উল্লেখযোগ্য প্রজেক্ট।'
              : 'Explore a curated selection of our doctor chamber campaigns, clinical branding, and digital growth executions.'}
          </p>

          {/* Filter Categories */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-md scale-105'
                    : 'bg-white border border-[#D4AF37]/35 text-[#444444] hover:text-[#111111] hover:bg-[#FFF9EE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group relative rounded-2xl overflow-hidden gold-glossy-card cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF6EE]">
                <img
                  src={item.imageUrl}
                  alt={item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

                <div className="absolute top-3 left-3">
                  <span className="bg-[#111111]/90 text-[#F5DE93] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 text-white">
                  <h3 className="text-base font-bold font-bengali leading-snug line-clamp-1">
                    {lang === 'bn' ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2 opacity-85">
                    {lang === 'bn' ? item.descBn : item.descEn}
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs font-bold text-[#8A5A00]">
                <span>{item.client || 'Client Case Study'}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{lang === 'bn' ? 'বিস্তারিত' : 'View'}</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Production Cinematic Feature Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0F0E0C] via-[#1C1814] to-[#0F0E0C] text-white border border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2318] border border-[#D4AF37]/40 text-[#F5DE93] text-xs font-bold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5" />
                <span>Cinematic Reels & Medical Video Studio</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-bengali">
                {lang === 'bn'
                  ? 'ভিডিও কনটেন্ট যা রোগীদের মনে রাখে এবং বিশ্বস্ততা তৈরি করে'
                  : 'Stories That Move People & Build Instant Trust'}
              </h3>

              <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                {lang === 'bn'
                  ? 'আমরা চিকিৎসকদের জটিল মেডিকেল বিষয়গুলোকে সহজ ভাষায় স্ক্রিপ্ট করে উচ্চমানের শর্ট রিলস, ফেসবুক ভিডিও এবং চেম্বার ডকুমেন্টারি তৈরি করি।'
                  : 'We script, direct and produce high-engagement short-form medical reels and hospital brand films that spark organic engagement.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="group relative flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] hover:from-[#996515] hover:to-[#B8860B] text-white font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
                <span>{lang === 'bn' ? 'শো-রিল দেখুন' : 'Watch Showreel'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-[#FCFAF7] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#D4AF37] shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#111111] text-[#F5DE93] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#111111] font-bengali">
                {lang === 'bn' ? selectedProject.titleBn : selectedProject.titleEn}
              </h3>
              <p className="text-xs font-semibold text-[#8A5A00] mt-1">
                Client: {selectedProject.client || 'Prochar Media Strategic Partner'}
              </p>

              <p className="mt-4 text-sm text-[#554E44] leading-relaxed">
                {lang === 'bn' ? selectedProject.descBn : selectedProject.descEn}
              </p>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/30 flex items-center justify-between">
                <a
                  href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20am%20interested%20in%20a%20similar%20project%20like%20${encodeURIComponent(
                    selectedProject.titleEn
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
                >
                  <span>{lang === 'bn' ? 'অনুরূপ প্রজেক্ট নিয়ে কথা বলুন' : 'Inquire for Similar Project'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-xs font-bold hover:bg-gray-300"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Showreel Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-[#111111] rounded-3xl max-w-3xl w-full overflow-hidden border border-[#D4AF37] shadow-2xl p-6 text-white text-center">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] rounded-2xl bg-black flex flex-col items-center justify-center p-8 border border-[#D4AF37]/30 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mb-4 animate-pulse">
                <Play className="w-8 h-8 text-[#F5DE93] fill-current ml-1" />
              </div>
              <h4 className="text-xl font-bold font-bengali">
                {lang === 'bn' ? 'প্রচার মিডিয়া অফিসিয়াল শো-রিল' : 'Prochar Media Official Showreel'}
              </h4>
              <p className="text-xs text-gray-400 mt-1 max-w-md">
                {lang === 'bn'
                  ? 'ডক্টর ব্র্যান্ডিং, হেলথকেয়ার রিলস ও কর্পোরেট ভিডিও প্রোডাকশনের এক্সক্লুসিভ কালেকশন।'
                  : 'A montage of our short-form reels, doctor tips, and hospital campaign visual stories.'}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href={`https://wa.me/88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prochar%20Media,%20I%20want%20video%20production%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20bd5a]"
              >
                হোয়াটসঅ্যাপে ভিডিও স্যাম্পল চান
              </a>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-gray-800 text-gray-300 text-xs font-bold hover:bg-gray-700"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
