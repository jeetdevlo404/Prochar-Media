import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Sparkles, Folder, FolderOpen, Play, CheckCircle2, ShieldCheck, Phone, MessageCircle, Video, Stethoscope, Award, Film, Layout, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

interface PortfolioDedicatedPageProps {
  onBackToHome: () => void;
}

interface PortfolioItemExtended {
  id: string;
  titleEn?: string;
  titleBn?: string;
  category: string;
  descEn?: string;
  descBn?: string;
  imageUrl: string;
  caption?: string;
  client?: string;
  videoUrl?: string;
}

const defaultPortfolioCategories = [
  {
    id: 'youtube-seo',
    titleBn: 'ইউটিউব এসইও গ্রোথ',
    titleEn: 'YouTube SEO & Growth',
    descBn: 'ইউটিউব চ্যানেল অপ্টিমাইজেশন, ভিডিও এসইও এবং অর্গানিক ভিউজ ও সাবস্ক্রাইবার বৃদ্ধি।',
    descEn: 'YouTube channel optimization, video SEO and organic growth.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    icon: Video,
  },
  {
    id: 'doctor-boosting',
    titleBn: 'ডক্টর পেজ বুস্টিং ও বিফোর-আফটার',
    titleEn: 'Doctor Page & Before/After',
    descBn: 'ডাক্তারদের চেম্বার প্রমোশন, পেজ বুস্টিং এবং রোগীর বিফোর-আফটার সাকসেস কেস স্টাডি।',
    descEn: 'Doctor chamber promotion, page boosting and patient before/after success stories.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
    icon: Stethoscope,
  },
  {
    id: 'branding-logos',
    titleBn: 'প্রচার মিডিয়া ব্র্যান্ডিং ও লোগো',
    titleEn: 'Branding & Logos',
    descBn: 'ক্লিনিক, হাসপাতাল ও বিভিন্ন প্রতিষ্ঠানের জন্য প্রিমিয়াম গোল্ডেন লোগো ও ব্র্যান্ড আইডেন্টিটি।',
    descEn: 'Premium golden logos and brand identity for clinics, hospitals and businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    icon: Award,
  },
  {
    id: 'videos-reels',
    titleBn: 'ভিডিও ও রিলস কাজ',
    titleEn: 'Videos & Reels',
    descBn: 'ভাইরাল হেলথকেয়ার রিলস, শর্ট ভিডিও এডিটিং এবং প্রমোশনাল ভিডিও প্রোডাকশন।',
    descEn: 'Viral healthcare reels, short video editing and promotional video production.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    icon: Film,
  },
  {
    id: 'healthcare-banners',
    titleBn: 'চিকিৎসা ব্যানার ডিজাইন',
    titleEn: 'Healthcare Banners & Graphics',
    descBn: 'দাঁত, শিশু ও বিভিন্ন চিকিৎসার সচেতনতামূলক ইনফোগ্রাফিক ব্যানার ও সোশ্যাল পোস্ট।',
    descEn: 'Dental, pediatric and medical awareness infographic banners and social posts.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80',
    icon: Layout,
  },
];

const defaultPortfolioItems: PortfolioItemExtended[] = [
  {
    id: 'p-1',
    category: 'youtube-seo',
    titleBn: 'কার্ডিওলজি ভিডিও এসইও ও র‍্যাঙ্কিং',
    titleEn: 'Cardiology Video SEO & Ranking',
    caption: 'হৃদরোগ বিশেষজ্ঞদের সচেতনতামূলক ভিডিও ইউটিউবে টপ র‍্যাংকে পৌঁছে দেওয়া',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    client: 'Cardiology TV BD'
  },
  {
    id: 'p-2',
    category: 'youtube-seo',
    titleBn: 'মেডিকেল চ্যানেল গ্রোথ স্ট্র্যাটেজি',
    titleEn: 'Medical Channel Growth Strategy',
    caption: 'মাত্র ৩০ দিনে অর্গানিক সাবস্ক্রাইবার ও ভিউজ দ্বিগুণ করার প্রজেক্ট',
    imageUrl: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&auto=format&fit=crop&q=80',
    client: 'Health Care Broadcast'
  },
  {
    id: 'p-3',
    category: 'doctor-boosting',
    titleBn: 'ডক্টর পেজ বুস্টিং (১০০ থেকে ৩০০০+ ফলোয়ার)',
    titleEn: 'Doctor Page Boosting (100 to 3000+ Followers)',
    caption: 'গাইনি চিকিৎসকের পেজে মাত্র ৭ দিনে ১০০০ থেকে ৩০০০+ রিয়েল পেশেন্ট রিচ',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
    client: 'Dr. Farhana Akter Chamber'
  },
  {
    id: 'p-4',
    category: 'doctor-boosting',
    titleBn: 'বিফোর-আফটার স্কিন কেয়ার কেস স্টাডি',
    titleEn: 'Before-After Skin Care Case Study',
    caption: 'ডার্মাটোলজি চিকিৎসার সফল ফলাফল নিয়ে বিশ্বস্ততার ক্যাম্পেইন',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
    client: 'Skin Glow Aesthetics'
  },
  {
    id: 'p-5',
    category: 'branding-logos',
    titleBn: 'প্রোচার মিডিয়া গোল্ডেন লোগো ডিজাইন',
    titleEn: 'Prochar Media Golden Logo Branding',
    caption: 'স্বাস্থ্যসেবা ও ডিজিটাল এজেন্সির প্রিমিয়াম লোগো ও ব্র্যান্ড আইডেন্টিটি',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    client: 'Prochar Media Brand'
  },
  {
    id: 'p-6',
    category: 'branding-logos',
    titleBn: 'মেডিকেল ব্র্যান্ডিং ও ভিউয়াল আইডেন্টিটি',
    titleEn: 'Medical Branding & Visual Identity',
    caption: 'ক্লিনিক ও ডায়াগনস্টিক সেন্টারের জন্য প্রিমিয়াম গোল্ড এন্ড ব্লু লোগো',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
    client: 'MediLife Diagnostics'
  },
  {
    id: 'p-7',
    category: 'videos-reels',
    titleBn: 'ভাইরাল হেলথকেয়ার রিলস ও ভিডিও এডিটিং',
    titleEn: 'Viral Healthcare Reels & Video Editing',
    caption: 'দাঁতের যত্ন ও সচেতনতা নিয়ে ভাইরাল শর্ট ভিডিও প্রোডাকশন',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    client: 'Smile Dental Care'
  },
  {
    id: 'p-8',
    category: 'videos-reels',
    titleBn: 'ক্লিনিকাল প্রমোশনাল ভিডিও প্রোডাকশন',
    titleEn: 'Clinical Promotional Video Production',
    caption: 'হাসপাতালের সেবা ও আধুনিক যন্ত্রপাতি নিয়ে প্রমোশনাল ভিডিও',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
    client: 'Care Point Hospital'
  },
  {
    id: 'p-9',
    category: 'healthcare-banners',
    titleBn: 'ডেন্টাল ও পেডিয়াট্রিক ইনফোগ্রাফিক ব্যানার',
    titleEn: 'Dental & Pediatric Infographic Banners',
    caption: 'দাঁতে পোকা ও শিশুর চিকিৎসা সচেতনতামূলক ডিজাইন ব্যানার',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80',
    client: 'Khulna Dental Clinic'
  },
  {
    id: 'p-10',
    category: 'healthcare-banners',
    titleBn: 'বিশেষজ্ঞ চিকিৎসকের চেম্বার ব্যানার',
    titleEn: 'Specialist Doctor Chamber Banner',
    caption: 'প্রেসক্রিপশন প্যাড, ভিজিটিং কার্ড ও চেম্বার সাইনবোর্ড ডিজাইন',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80',
    client: 'Prof. Dr. Rahman Chamber'
  }
];

export const AllPortfolioPage: React.FC<PortfolioDedicatedPageProps> = ({ onBackToHome }) => {
  const { lang, siteSettings } = useApp();
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  const [items, setItems] = useState<PortfolioItemExtended[]>(defaultPortfolioItems);

  // Fetch from Firestore if available
  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, 'portfolio'), (snapshot) => {
        if (!snapshot.empty) {
          const fetched: PortfolioItemExtended[] = [];
          snapshot.forEach((doc) => {
            fetched.push({ id: doc.id, ...doc.data() } as PortfolioItemExtended);
          });
          setItems([...fetched, ...defaultPortfolioItems]);
        }
      }, (err) => {
        console.warn('Portfolio fetch note:', err);
      });
      return () => unsub();
    } catch (e) {}
  }, []);

  const currentCategory = defaultPortfolioCategories.find(c => c.id === selectedCatId);
  const categoryItems = selectedCatId === 'all' || !selectedCatId
    ? items
    : items.filter(i => i.category === selectedCatId);

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] selection:bg-[#E5C378] selection:text-[#111111]">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#1C1814]/95 backdrop-blur-md border-b border-[#D4AF37]/30 text-white px-3 sm:px-8 py-3 flex items-center justify-between shadow-lg">
        <button
          onClick={() => {
            if (selectedCatId) {
              setSelectedCatId(null);
            } else {
              onBackToHome();
            }
          }}
          className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFDF73] text-xs font-bold border border-[#D4AF37]/40 transition whitespace-nowrap"
        >
          {lang === 'bn' ? (selectedCatId ? 'Back' : 'Back') : (selectedCatId ? 'Back' : 'Back')}
        </button>

        <div className="flex items-center gap-2 min-w-0">
          <img
            src={siteSettings.logoUrl || "https://i.supaimg.com/88cac59e-85c9-44fa-970b-faf486de12c5/0680d662-cbd5-4267-b0de-f0460d72ffd3.jpg"}
            alt="Prochar Media"
            className="w-8 h-8 rounded-xl object-cover border border-[#D4AF37]/60 shadow-md shrink-0"
          />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase font-serif-royal truncate max-w-[130px] sm:max-w-none">
            Prochar Media
          </span>
        </div>

        <a
          href={`https://wa.me/+88${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </header>

      {/* Hero Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1C1814] via-[#2A2318] to-[#111111] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#FFDF73] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'bn' ? 'প্রচারেই প্রসার — অফিশিয়াল পোর্টফোলিও গ্যালারি' : 'Official Success Showcase'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif-royal tracking-tight leading-tight">
            {selectedCatId && currentCategory ? (
              <span className="gold-gradient-text">{lang === 'bn' ? currentCategory.titleBn : currentCategory.titleEn}</span>
            ) : (
              lang === 'bn' ? (
                <>
                  আমাদের সফল <span className="gold-gradient-text">কাজের ক্যাটাগরি</span>
                </>
              ) : (
                <>
                  Our Success <span className="gold-gradient-text">Portfolio Categories</span>
                </>
              )
            )}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {selectedCatId && currentCategory ? (
              lang === 'bn' ? currentCategory.descBn : currentCategory.descEn
            ) : (
              lang === 'bn'
                ? 'ই-কমার্স স্টাইলের ইমেজের মাধ্যমে নিচের ক্যাটাগরিগুলো ব্রাউজ করুন এবং প্রতিটি বিভাগের সমস্ত কাজ একসাথে দেখুন।'
                : 'Browse our specialized categories below in a 2-column e-commerce layout and explore all related works together.'
            )}
          </p>
        </div>
      </section>

      {/* VIEW A: IF NO CATEGORY SELECTED, SHOW 2-COLUMN E-COMMERCE STYLE GRID WITH 1:1 IMAGES */}
      {!selectedCatId ? (
        <section className="py-10 sm:py-16 bg-[#FCFAF7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Animated "All Works" Button */}
            <div className="mb-10 flex justify-center">
              <button
                onClick={() => setSelectedCatId('all')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8A5A00] text-white font-bold text-xs shadow-xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 animate-pulse border border-[#FFF0B2]"
              >
                <FolderOpen className="w-4 h-4 text-[#FFFDF9]" />
                <span>{lang === 'bn' ? 'সকল কাজ দেখুন (All Works)' : 'View All Works'}</span>
              </button>
            </div>

            {/* 2-Column Product/Category Card Grid (Left & Right layout with 1:1 Image Aspect Ratio) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {defaultPortfolioCategories.map((cat) => {
                const catCount = items.filter(i => i.category === cat.id).length || 3;
                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCatId(cat.id)}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1.5"
                  >
                    {/* 1:1 Image Aspect Ratio */}
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                      <img
                        src={cat.imageUrl}
                        alt={cat.titleBn}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                      
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FFDF73] text-[10px] font-bold border border-[#D4AF37]/50 uppercase">
                        {catCount} + {lang === 'bn' ? 'প্রজেক্ট' : 'Projects'}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#8A5A00] transition-colors font-serif-royal">
                        {lang === 'bn' ? cat.titleBn : cat.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {lang === 'bn' ? cat.descBn : cat.descEn}
                      </p>

                      <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs font-bold text-[#8A5A00]">
                        <span>{lang === 'bn' ? 'গ্যালারি খুলুন' : 'Open Gallery'}</span>
                        <span className="w-8 h-8 rounded-xl bg-[#FAF4E6] group-hover:bg-[#D4AF37] group-hover:text-white flex items-center justify-center transition-colors">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      ) : (
        /* VIEW B: SELECTED CATEGORY FULL PAGE GALLERY WITH HEADER BANNER */
        <section className="py-10 sm:py-16 bg-[#FCFAF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Banner Image Header */}
            {currentCategory && (
              <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden mb-10 shadow-lg border border-[#D4AF37]/40">
                <img
                  src={currentCategory.imageUrl}
                  alt={currentCategory.titleBn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white space-y-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-wider">
                    {categoryItems.length} {lang === 'bn' ? 'প্রজেক্ট ও ফ্রেম' : 'Projects'}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black font-serif-royal">
                    {lang === 'bn' ? currentCategory.titleBn : currentCategory.titleEn}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-200 max-w-xl font-normal">
                    {lang === 'bn' ? currentCategory.descBn : currentCategory.descEn}
                  </p>
                </div>
              </div>
            )}

            {categoryItems.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#D4AF37] p-8">
                <div className="text-4xl mb-3">📁</div>
                <h3 className="text-base font-bold text-gray-800">এই ক্যাটাগরিতে এখনো কোনো কাজ যোগ করা হয়নি</h3>
                <p className="text-xs text-gray-500 mt-1">অ্যাডমিন প্যানেল থেকে খুব সহজেই নতুন ছবি ও প্রজেক্ট যোগ করতে পারবেন।</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {categoryItems.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Image Frame */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                      <img
                        src={item.imageUrl}
                        alt={item.caption || item.titleBn || 'Portfolio work'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>
                      
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FFDF73] text-[10px] font-bold border border-[#D4AF37]/50 uppercase">
                        {item.category}
                      </div>
                    </div>

                    {/* Content & Caption */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 font-serif-royal">
                          {lang === 'bn' ? (item.titleBn || item.caption) : (item.titleEn || item.caption)}
                        </h3>
                        {item.caption && (
                          <p className="text-xs text-[#554E44] leading-relaxed font-normal">
                            {item.caption}
                          </p>
                        )}
                      </div>

                      {item.client && (
                        <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-gray-500">
                          <span className="font-semibold text-[#8A5A00]">Client: {item.client}</span>
                          <span className="text-[#D4AF37] font-bold">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-[#1C1814] text-gray-400 text-center text-xs border-t border-[#D4AF37]/30">
        <p>© 2026 Prochar Media. All rights reserved. | প্রচারেই প্রসার</p>
      </footer>

    </div>
  );
};
