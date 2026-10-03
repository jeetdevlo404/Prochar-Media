import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../context/AppContext';
import { Review } from '../types';
import { Star, CheckCircle, Upload, X, ArrowLeft, MessageSquarePlus, Filter, Search } from 'lucide-react';
import confetti from 'canvas-confetti';

// Modal for any visitor to write a review (enters 'pending' state in Firestore)
export const WriteReviewModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { lang, addPublicReview } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    textBn: '',
    textEn: '',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lock body scroll and listen to Esc key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 800000) {
      alert('ছবির সাইজ ৮০০KB এর কম রাখুন');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, avatarUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.textBn) return;

    setIsSubmitting(true);
    try {
      await addPublicReview({
        name: formData.name,
        role: formData.role || 'Client / Doctor',
        organization: formData.organization || 'General Practice',
        textBn: formData.textBn,
        textEn: formData.textEn || formData.textBn,
        rating: formData.rating,
        avatarUrl: formData.avatarUrl,
        isVerified: false,
      });

      confetti({
        particleCount: 50,
        spread: 60,
        colors: ['#D4AF37', '#FFDF73', '#FFFFFF'],
      });

      setIsSuccess(true);
    } catch (err) {
      console.warn('Error submitting review:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render via React Portal directly into document.body to prevent mobile displacement
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[999999] bg-black/85 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative bg-[#FCFAF7] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto border-2 border-[#D4AF37] shadow-2xl p-5 sm:p-7 m-auto animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3 border border-green-300">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-bengali">
              {lang === 'bn' ? 'ধন্যবাদ! আপনার রিভিউ জমা হয়েছে' : 'Thank You! Review Submitted'}
            </h3>
            <p className="text-xs sm:text-sm text-[#554E44] mt-2 max-w-sm mx-auto leading-relaxed">
              {lang === 'bn'
                ? 'আপনার মূল্যবান মন্তব্যটি আমাদের ডাটাবেজে জমা হয়েছে। অ্যাডমিন প্যানেল থেকে অ্যাপ্রুভালের পর এটি ওয়েবসাইটে প্রদর্শিত হবে।'
                : 'Your review has been submitted. It will be displayed on the website after admin approval.'}
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              {lang === 'bn' ? 'ঠিক আছে' : 'OK'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MessageSquarePlus className="w-5 h-5 text-[#B8860B]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#111111] font-bengali">
                {lang === 'bn' ? 'আপনার মূল্যবান রিভিউ দিন' : 'Share Your Review'}
              </h3>
            </div>
            <p className="text-xs text-[#666666] mb-4">
              {lang === 'bn'
                ? 'প্রচার মিডিয়া সম্পর্কে আপনার অভিজ্ঞতা বা মন্তব্য শেয়ার করুন।'
                : 'Please provide your honest feedback about Prochar Media services.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: ডা. তানভীর আহমেদ' : 'e.g., Dr. Tanvir Ahmed'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-white text-xs sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Role & Org Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1">
                    {lang === 'bn' ? 'পদবী / স্পেশালিটি' : 'Role / Specialty'}
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder={lang === 'bn' ? 'যেমন: স্পেশালিস্ট সার্জন' : 'e.g., Specialist Surgeon'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-white text-xs sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1">
                    {lang === 'bn' ? 'প্রতিষ্ঠান / ক্লিনিক' : 'Clinic / Organization'}
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={lang === 'bn' ? 'যেমন: খুলনা মেডিকেল' : 'e.g., Khulna Medical'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-white text-xs sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  {lang === 'bn' ? 'আপনার রেটিং' : 'Your Rating'}
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= formData.rating
                            ? 'fill-[#D4AF37] text-[#D4AF37]'
                            : 'fill-gray-200 text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#8A5A00]">
                    {formData.rating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  {lang === 'bn' ? 'আপনার মন্তব্য / রিভিউ বক্তব্য *' : 'Your Review *'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.textBn}
                  onChange={(e) => setFormData({ ...formData, textBn: e.target.value })}
                  placeholder={
                    lang === 'bn'
                      ? 'প্রচার মিডিয়ার সেবা কেমন লেগেছে বিস্তারিত লিখুন...'
                      : 'Share your genuine experience with Prochar Media...'
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D4AF37]/50 bg-white text-xs sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  {lang === 'bn' ? 'আপনার ছবি যুক্ত করুন (ঐচ্ছিক)' : 'Your Photo (Optional)'}
                </label>
                <div className="flex items-center gap-3">
                  <img
                    src={formData.avatarUrl}
                    alt="Preview"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37] bg-white flex-shrink-0"
                  />
                  <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#D4AF37]/60 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] cursor-pointer transition-colors shadow-xs">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'ছবি আপলোড করুন' : 'Upload Photo'}</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] hover:from-[#996515] hover:to-[#B8860B] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting
                    ? lang === 'bn'
                      ? 'জমা হচ্ছে...'
                      : 'Submitting...'
                    : lang === 'bn'
                    ? 'রিভিউ জমা দিন'
                    : 'Submit Review'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// All Reviews Page
export const AllReviewsPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, approvedReviews } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter reviews
  const filtered = approvedReviews.filter((rev) => {
    const matchesSearch =
      rev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rev.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rev.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rev.textBn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = selectedRating === 'all' || rev.rating === selectedRating;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#111111] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/50 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'মূল ওয়েবসাইটে ফিরে যান' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#D4AF37]/30">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B] mb-1">
              Verified Client Feedback
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
              {lang === 'bn' ? 'সকল ক্লায়েন্ট ও ডক্টর রিভিউ' : 'All Client & Doctor Reviews'}
            </h1>
            <p className="mt-2 text-sm text-[#554E44]">
              {lang === 'bn'
                ? 'আমাদের সেবা গ্রহণকারী শ্রদ্ধেয় চিকিৎসক ও পার্টনারদের সরাসরি অভিজ্ঞতা।'
                : 'Direct experiences from respected physicians and enterprise clients.'}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{lang === 'bn' ? '+ আপনার রিভিউ লিখুন' : '+ Write a Review'}</span>
          </button>
        </div>

        {/* Search & Filters */}
        <div className="my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'bn' ? 'নাম, পদবী বা প্রতিষ্ঠান খুঁজুন...' : 'Search by name or clinic...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1">
            <span className="text-xs font-bold text-[#8A5A00] flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'রেটিং:' : 'Rating:'}</span>
            </span>
            <button
              onClick={() => setSelectedRating('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedRating === 'all'
                  ? 'bg-[#111111] text-[#F5DE93] border border-[#D4AF37]'
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {lang === 'bn' ? 'সকল' : 'All'}
            </button>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRating(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedRating === r
                    ? 'bg-[#111111] text-[#F5DE93] border border-[#D4AF37]'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                ⭐ {r} Star
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#D4AF37]/30 p-8">
            <p className="text-base text-gray-600 font-medium">
              {lang === 'bn' ? 'কোনো রিভিউ পাওয়া যায়নি।' : 'No reviews match your query.'}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-5 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold cursor-pointer"
            >
              {lang === 'bn' ? 'প্রথম রিভিউটি আপনি দিন' : 'Be the first to review'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < (rev.rating || 5)
                            ? 'fill-[#D4AF37] text-[#D4AF37]'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs font-bold text-[#8A5A00]">
                      {rev.rating}.0 / 5.0
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    "{lang === 'bn' ? rev.textBn : rev.textEn || rev.textBn}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <img
                    src={rev.avatarUrl || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D4AF37] bg-white flex-shrink-0"
                  />
                  <div className="truncate">
                    <h4 className="text-xs sm:text-sm font-bold text-[#111111] truncate font-bengali">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-[#8A5A00] truncate">
                      {rev.role}
                    </p>
                    <p className="text-[10px] text-gray-500 truncate">
                      {rev.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Write Review Modal */}
      <WriteReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
