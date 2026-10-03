import { Review, SiteSettings, ServiceItem, PortfolioItem } from '../types';

export const initialSiteSettings: SiteSettings = {
  id: 'main',
  logoUrl: 'https://i.supaimg.com/88cac59e-85c9-44fa-970b-faf486de12c5/0680d662-cbd5-4267-b0de-f0460d72ffd3.jpg',
  phone: '01351-711437',
  whatsapp: '01351-711437',
  email: 'procharmediaofficial@gmail.com',
  address: 'khalishpur, Khulna, Supper Market - shop no:100 (Main Office)',
  secondaryAddress: 'Khalishpur, Khulna Ward number 10 Notun rasta - Office',
  facebookUrl: 'https://www.facebook.com/share/1Dtd3KeHYb/',
  instagramUrl: 'https://www.facebook.com/share/1Dtd3KeHYb/',
  linkedinUrl: 'https://www.facebook.com/share/1Dtd3KeHYb/',
  youtubeUrl: 'https://www.facebook.com/share/1Dtd3KeHYb/',
  heroHeadlineEn: 'Grow Your Brand. Expand Your Reach.',
  heroHeadlineBn: 'আপনার ব্র্যান্ডকে এগিয়ে নিন। আপনার প্রসার বাড়ান।',
  heroSubtitleEn: 'Data-driven digital marketing, healthcare doctor branding, creative visual content, and modern web development designed to build long-term digital growth.',
  heroSubtitleBn: 'ডিজিটাল মার্কেটিং, ডাক্তার ও হেলথকেয়ার ব্র্যান্ডিং, ক্রিয়েটিভ কনটেন্ট এবং আধুনিক প্রযুক্তি সমাধানের মাধ্যমে আপনার ব্যবসাকে আরও শক্তিশালী ডিজিটাল উপস্থিতি তৈরি করতে সহায়তা করি।',
  statsProjects: '50+',
  statsClients: '30+',
  statsServices: '14+',
  statsSolutions: '5+',
  bridgeTitleEn: 'The Golden Bridge Between Doctors & Patients — Right Digital Marketing',
  bridgeTitleBn: 'রোগী ও চিকিৎসকের সেতুবন্ধন — সঠিক ডিজিটাল মার্কেটিং',
  bridgeSubtitleEn: 'We bridge patient trust and medical expertise through data-driven digital marketing and personal branding.',
  bridgeSubtitleBn: 'প্রচারেই প্রসার! আধুনিক প্রযুক্তির মাধ্যমে সঠিক রোগীর কাছে সঠিক চিকিৎসকের বার্তা পৌঁছে দেওয়া আমাদের মূল লক্ষ্য।',
  updatedAt: new Date().toISOString()
};

// No default reviews as requested: "রিভিউগুলো সরিয়ে দাও। কোনো রিভিউ থাকবে না, আমি এডমিন প্যানেল থেকে এড করবো ওইগুলো"
export const initialReviews: Review[] = [];

export const allServices: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    titleEn: 'Digital Marketing',
    titleBn: 'ডিজিটাল মার্কেটিং',
    descEn: 'Data-driven digital marketing strategies designed to increase visibility, engagement and customer reach.',
    descBn: 'ডাটা-ভিত্তিক আধুনিক ডিজিটাল মার্কেটিং কৌশল যা আপনার ব্র্যান্ডের দৃশ্যমানতা, এনগেজমেন্ট এবং গ্রাহক বৃদ্ধি নিশ্চিত করে।',
    iconName: 'TrendingUp',
    tag: 'Core'
  },
  {
    id: '02',
    number: '02',
    titleEn: 'Social Media Management',
    titleBn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট',
    descEn: 'Professional management of Facebook, Instagram, LinkedIn and other social platforms with tailored content calendars.',
    descBn: 'ফেসবুক, ইনস্টাগ্রামসহ বিভিন্ন প্ল্যাটফর্মে নিয়মিত প্রফেশনাল পোস্ট ও ফলোয়ার বৃদ্ধির সার্বিক ব্যবস্থাপনা।',
    iconName: 'Share2',
    tag: 'Social'
  },
  {
    id: '03',
    number: '03',
    titleEn: 'Facebook Page Management',
    titleBn: 'ফেসবুক পেজ ম্যানেজমেন্ট',
    descEn: 'Complete page management, optimization, content planning, automated inbox responses and audience engagement.',
    descBn: 'কমপ্লিট পেজ অপ্টিমাইজেশন, রেগুলার কনটেন্ট পোস্ট, স্বয়ংক্রিয় মেসেজ সেটআপ এবং পেশেন্ট/কাস্টমার সাপোর্ট।',
    iconName: 'Facebook',
    tag: 'Social'
  },
  {
    id: '04',
    number: '04',
    titleEn: 'Content Creation & Design',
    titleBn: 'কনটেন্ট ক্রিয়েশন ও ডিজাইন',
    descEn: 'Creative graphics, social media posts, promotional banners and brand visuals that command immediate attention.',
    descBn: 'আকর্ষণীয় গ্রাফিক্স, সোশ্যাল মিডিয়া ব্যানার, প্রমোশনাল ডিজাইন ও ইউনিক ব্র্যান্ড ভিজ্যুয়াল তৈরি।',
    iconName: 'Palette',
    tag: 'Creative'
  },
  {
    id: '05',
    number: '05',
    titleEn: 'Video Editing & Reels',
    titleBn: 'ভিডিও এডিটিং ও রিলস',
    descEn: 'Short-form video editing, Reels, YouTube Shorts, promotional videos and viral social content.',
    descBn: 'শর্ট-ফর্ম ভিডিও, রিলস, প্রচারমূলক ভিডিও এবং হেলথকেয়ার টিপস সমৃদ্ধ আকর্ষণীয় ভিডিও এডিটিং।',
    iconName: 'Video',
    tag: 'Media'
  },
  {
    id: '06',
    number: '06',
    titleEn: 'Facebook & Instagram Ads',
    titleBn: 'ফেসবুক ও ইনস্টাগ্রাম অ্যাডস',
    descEn: 'Targeted advertising campaigns designed around specific ROI, lead generation and patient footfall.',
    descBn: 'সঠিক টার্গেটিং, বাজেট অপ্টিমাইজেশন এবং হাই-কনভার্টিং অ্যাড ক্যাম্পেইনের মাধ্যমে কাঙ্ক্ষিত লিড ও সেলস বৃদ্ধি।',
    iconName: 'Target',
    tag: 'Ads'
  },
  {
    id: '07',
    number: '07',
    titleEn: 'Google Marketing',
    titleBn: 'গুগল মার্কেটিং ও অ্যাডস',
    descEn: 'Google Search Ads, Performance Max campaigns and Google Maps Business profile ranking.',
    descBn: 'গুগল সার্চ অ্যাডস, ইউটিউব বিজ্ঞাপন এবং গুগল ম্যাপে আপনার প্রতিষ্ঠানকে সবার শীর্ষে পৌঁছে দেওয়ার সমাধান।',
    iconName: 'Globe',
    tag: 'Search'
  },
  {
    id: '08',
    number: '08',
    titleEn: 'Personal & Business Branding',
    titleBn: 'পার্সোনাল ও বিজনেস ব্র্যান্ডিং',
    descEn: 'Build a recognizable, trustworthy and prestigious digital identity that sets you apart from competitors.',
    descBn: 'ব্যক্তিগত বা প্রাতিষ্ঠানিক ক্ষেত্রে একটি মর্যাদাপূর্ণ, আকর্ষণীয় এবং আস্থার ব্র্যান্ড আইডেন্টিটি গঠন।',
    iconName: 'Award',
    tag: 'Branding'
  },
  {
    id: '09',
    number: '09',
    titleEn: 'Doctor & Healthcare Marketing',
    titleBn: 'ডক্টর ও হেলথকেয়ার মার্কেটিং',
    descEn: 'Digital marketing and branding solutions specifically designed for doctors, clinics, diagnostics and healthcare professionals.',
    descBn: 'চিকিৎসক, হাসপাতাল ও ডায়াগনস্টিক সেন্টারের জন্য বিশেষায়িত ডিজিটাল মার্কেটিং ও রেপুটেশন ম্যানেজমেন্ট।',
    iconName: 'Stethoscope',
    tag: 'Specialized'
  },
  {
    id: '10',
    number: '10',
    titleEn: 'Patient Growth & Practice Promotion',
    titleBn: 'পেশেন্ট গ্রোথ ও প্র্যাকটিস প্রমোশন',
    descEn: 'Strategic marketing to build patient trust, improve appointment bookings and drive consistent chamber growth.',
    descBn: 'চেম্বারে নতুন রোগী বৃদ্ধি, নিয়মিত ফলো-আপ এবং টেলিমেডিসিন সেবার ডিজিটাল প্রসারে ফলপ্রসূ কৌশল।',
    iconName: 'Users',
    tag: 'Healthcare'
  },
  {
    id: '11',
    number: '11',
    titleEn: 'Website Development',
    titleBn: 'ওয়েবসাইট ডেভেলপমেন্ট',
    descEn: 'Fast, secure, responsive and conversion-focused websites engineered with modern web technologies.',
    descBn: 'আধুনিক, দ্রুতগতির এবং মোবাইল-রেসপন্সিভ ওয়েবসাইট যা আপনার ভিজিটরকে স্থায়ী কাস্টমারে রূপান্তর করে।',
    iconName: 'Code',
    tag: 'Tech'
  },
  {
    id: '12',
    number: '12',
    titleEn: 'SEO & Online Presence Management',
    titleBn: 'এসইও ও অনলাইন উপস্থিতি',
    descEn: 'Search Engine Optimization, local search dominance and complete digital reputation monitoring.',
    descBn: 'গুগল সার্চে প্রথম পাতায় র‍্যাংক করা এবং আপনার প্রতিষ্ঠানের অনলাইন সুনাম সুরক্ষার দায়িত্ব।',
    iconName: 'Search',
    tag: 'SEO'
  },
  {
    id: '13',
    number: '13',
    titleEn: 'Social Media Strategy',
    titleBn: 'সোশ্যাল মিডিয়া স্ট্র্যাটেজি',
    descEn: 'Strategic content roadmaps, competitor analysis and high-converting growth funnels.',
    descBn: 'প্রতিযোগীদের বিশ্লেষণ করে সুনির্দিষ্ট প্ল্যানিং ও কনটেন্ট স্ট্র্যাটেজির মাধ্যমে দীর্ঘমেয়াদী সাফল্য।',
    iconName: 'Compass',
    tag: 'Strategy'
  },
  {
    id: '14',
    number: '14',
    titleEn: 'Business Growth Consultation',
    titleBn: 'বিজনেস গ্রোথ কনসালটেশন',
    descEn: 'One-on-one expert digital strategy consultation tailored precisely to your business stage and goals.',
    descBn: 'আপনার ব্যবসার লক্ষ্য অনুযায়ী ওয়ান-টু-ওয়ান বিশেষজ্ঞ পরামর্শ ও ডিজিটাল স্কেলিং রোডম্যাপ।',
    iconName: 'Briefcase',
    tag: 'Consultation'
  }
];

export const portfolioWorks: PortfolioItem[] = [
  {
    id: 'work-1',
    titleEn: 'Doctor Chamber Patient Growth Campaign',
    titleBn: 'ডক্টর চেম্বার পেশেন্ট গ্রোথ ক্যাম্পেইন',
    category: 'Healthcare',
    descEn: 'Complete patient acquisition funnel and educational video series for top cardiologists.',
    descBn: 'শীর্ষস্থানীয় হৃদরোগ বিশেষজ্ঞের চেম্বার বুকিং বৃদ্ধি ও স্বাস্থ্য সচেতনতামূলক ভিডিও সিরিজ ক্যাম্পেইন।',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
    client: 'Care Point Specialized Hospital'
  },
  {
    id: 'work-2',
    titleEn: 'Aesthetic Dermatology Brand Identity',
    titleBn: 'এস্থেটিক ডার্মাটোলজি ব্র্যান্ড আইডেন্টিটি',
    category: 'Branding',
    descEn: 'Luxury visual identity, patient appointment flow and Instagram aesthetic feed transformation.',
    descBn: 'লাক্সারি ভিজ্যুয়াল আইডেন্টিটি, পেশেন্ট অ্যাপয়েন্টমেন্ট ফ্লো এবং ইন্সটাগ্রাম ফিড ট্রান্সফর্মেশন।',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
    client: 'Skin Glow Clinic'
  },
  {
    id: 'work-3',
    titleEn: 'Smart Diagnostic Center Digital Lead Ads',
    titleBn: 'স্মার্ট ডায়াগনস্টিক সেন্টার ডিজিটাল লিড অ্যাডস',
    category: 'Digital Marketing',
    descEn: 'High-converting targeted Meta ads delivering 3.4x ROI for pathology and test packages.',
    descBn: 'মেডিসিন ও প্যাথলজি প্যাকেজের জন্য ফেসবুক ও গুগল লিড বিজ্ঞাপনে রেকর্ড পরিমাণ রেসপন্স।',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
    client: 'MediLife Diagnostics'
  },
  {
    id: 'work-4',
    titleEn: 'Hospital & Clinic Appointment Web App',
    titleBn: 'হাসপাতাল ও ক্লিনিক অ্যাপয়েন্টমেন্ট ওয়েব সিস্টেম',
    category: 'Web Development',
    descEn: 'Real-time patient schedule booking system, doctor chamber directory and automated SMS confirmations.',
    descBn: 'লাইভ পেশেন্ট শিডিউল বুকিং, ডক্টর ডিরেক্টরি এবং অটোমেটেড কনফার্মেশন সম্বলিত আধুনিক ওয়েব পোর্টাল।',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    client: 'HealthPulse Network'
  },
  {
    id: 'work-5',
    titleEn: 'Viral Healthcare Reels & Educational Video Series',
    titleBn: 'ভাইরাল হেলথকেয়ার রিলস ও সচেতনতামূলক ভিডিও প্রোডাকশন',
    category: 'Creative',
    descEn: 'Engaging, doctor-explained short videos generating over 500k genuine patient views.',
    descBn: 'বিশেষজ্ঞ চিকিৎসকের পরামর্শ সংবলিত শর্ট ভিডিও ও রিলস যা সোশ্যাল মিডিয়ায় ব্যাপক সমাদৃত।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    client: 'Prochar Media Originals'
  },
  {
    id: 'work-6',
    titleEn: 'Corporate Medical Equipment Branding',
    titleBn: 'কর্পোরেট মেডিকেল ইকুইপমেন্ট ব্র্যান্ডিং',
    category: 'Branding',
    descEn: 'Premium catalog, executive pitch decks and high-impact digital presence.',
    descBn: 'মেডিকেল ডিভাইস ও ইকুইপমেন্ট প্রস্তুতকারী প্রতিষ্ঠানের আন্তর্জাতিক মানের ব্র্যান্ডিং ও প্রেজেন্টেশন।',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
    client: 'BioMed Tech BD'
  }
];

export const faqList = [
  {
    qEn: 'What services does Prochar Media provide?',
    qBn: 'প্রচার মিডিয়া কী কী সেবা প্রদান করে?',
    aEn: 'We provide end-to-end digital growth solutions: Digital Marketing, Doctor & Healthcare Branding, Social Media Management, Facebook & Instagram Ads, Google Marketing, Creative Content & Design, Video Editing & Reels, Custom Website Development, and Business Strategy Consultation.',
    aBn: 'আমরা ডিজিটাল মার্কেটিং, ডক্টর ও হেলথকেয়ার ব্র্যান্ডিং, ফেসবুক পেজ ও সোশ্যাল মিডিয়া ম্যানেজমেন্ট, টার্গেটেড ফেসবুক ও গুগল অ্যাডস, ক্রিয়েটিভ গ্রাফিক্স ডিজাইন, রিলস ও ভিডিও এডিটিং, আধুনিক ওয়েবসাইট ডেভেলপমেন্ট এবং বিজনেস গ্রোথ কনসালটেশন প্রদান করি।'
  },
  {
    qEn: 'Do you specialize in Doctor and Healthcare Marketing?',
    qBn: 'আপনারা কি ডাক্তার এবং স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য বিশেষায়িত সেবা দেন?',
    aEn: 'Yes! Healthcare marketing is one of our primary core expertises. We help doctors, clinics, diagnostics, and hospitals build patient trust, elevate personal chamber branding, and ethically grow their patient base through respectful, informative content.',
    aBn: 'হ্যাঁ, স্বাস্থ্যসেবা ও ডক্টর ব্র্যান্ডিং আমাদের বিশেষ দক্ষতার ক্ষেত্র। আমরা চিকিৎসক, ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টারের বিশ্বস্ততা বৃদ্ধি এবং সঠিক প্রচারের মাধ্যমে চেম্বারে রোগী বৃদ্ধির জন্য পূর্ণাঙ্গ সহায়তা দেই।'
  },
  {
    qEn: 'Do you build responsive, conversion-focused websites?',
    qBn: 'আপনারা কি আধুনিক ও দ্রুতগতির ওয়েবসাইট তৈরি করেন?',
    aEn: 'Absolutely. We develop responsive, ultra-fast websites, doctor appointment portals, healthcare management interfaces, and corporate web platforms with sleek design and SEO optimization.',
    aBn: 'অবশ্যই। আমরা দ্রুতগতির, মোবাইল-রেসপন্সিভ ওয়েবসাইট, ডক্টর অ্যাপয়েন্টমেন্ট পোর্টাল, ক্লিনিক ম্যানেজমেন্ট সিস্টেম ও কর্পোরেট ওয়েবসাইট তৈরি করি যা ভিজিটরদের কাস্টমারে রূপান্তর করতে সক্ষম।'
  },
  {
    qEn: 'Can you completely manage our Facebook and Instagram pages?',
    qBn: 'আপনারা কি আমাদের ফেসবুক ও ইনস্টাগ্রাম পেজ সম্পূর্ণ পরিচালনা করবেন?',
    aEn: 'Yes. Our team handles content strategy, graphic design, video production, caption writing, audience engagement, inbox automation, and paid ad optimization.',
    aBn: 'হ্যাঁ। কনটেন্ট প্ল্যানিং, নিয়মিত আকর্ষণীয় পোস্ট ডিজাইন, ক্যাপশন লেখা, মেসেজ রেসপন্স ও অ্যাড ক্যাম্পেইন পরিচালনা সহ আপনার পেজের সব দায়িত্ব আমাদের টিম নিখুঁতভাবে পালন করে।'
  },
  {
    qEn: 'How can I get started or contact Prochar Media?',
    qBn: 'প্রচার মিডিয়ার সাথে কীভাবে আলোচনা শুরু করতে পারি?',
    aEn: 'You can directly message us on WhatsApp at 01351-711437, visit our office at Khalishpur, Khulna (Supper Market, Shop 100), or email us at procharmediaofficial@gmail.com.',
    aBn: 'আপনি সরাসরি আমাদের হোয়াটসঅ্যাপ নম্বরে (01351-711437) মেসেজ পাঠাতে পারেন, আমাদের খালিশপুর, খুলনা অফিসে সরাসরি আসতে পারেন (সুপার মার্কেট - শপ ১০০), অথবা ইমেইল করতে পারেন।'
  }
];

export const processSteps = [
  {
    number: '01',
    titleEn: 'Discover',
    titleBn: 'ডিসকভার (অনুসন্ধান)',
    descEn: 'We deeply study your brand, target audience, competitors and medical/business goals.',
    descBn: 'আপনার ব্যবসা বা চেম্বারের বর্তমান অবস্থা, সম্ভাব্য অডিয়েন্স এবং লক্ষ্য গভীরভাবে বিশ্লেষণ করি।'
  },
  {
    number: '02',
    titleEn: 'Strategize',
    titleBn: 'স্ট্র্যাটেজি (কৌশল নির্ধারণ)',
    descEn: 'Crafting tailored content funnels, ad budgets, and patient-acquisition roadmaps.',
    descBn: 'সঠিক বাজেট, উপযুক্ত প্ল্যাটফর্ম এবং ফলাফলমুখী ডিজিটাল রোডম্যাপ তৈরি করি।'
  },
  {
    number: '03',
    titleEn: 'Create',
    titleBn: 'ক্রিয়েট (সৃষ্টি ও নির্মাণ)',
    descEn: 'Developing royal visual branding, persuasive copywriting, videos and tech platforms.',
    descBn: 'উচ্চমানের গ্রাফিক্স, প্রমোশনাল ভিডিও, রিলস ও কনভার্সন-ফ্রেন্ডলি টেকনোলজি ডেভেলপ করি।'
  },
  {
    number: '04',
    titleEn: 'Launch',
    titleBn: 'লঞ্চ (প্রচার শুরু)',
    descEn: 'Executing campaigns with precision targeting, continuous A/B testing and active page management.',
    descBn: 'টার্গেটেড অডিয়েন্সের কাছে ক্যাম্পেইন লাইভ করি এবং প্রতিটি ফলাফল গভীরভাবে ট্র্যাক করি।'
  },
  {
    number: '05',
    titleEn: 'Grow',
    titleBn: 'গ্রো (প্রসার ও স্কেলিং)',
    descEn: 'Analyzing data, scaling successful campaigns and securing long-term patient loyalty.',
    descBn: 'ডাটা অ্যানালাইসিস করে ক্যাম্পেইন স্কেল করি এবং আপনার দীর্ঘস্থায়ী প্রবৃদ্ধি নিশ্চিত করি।'
  }
];
