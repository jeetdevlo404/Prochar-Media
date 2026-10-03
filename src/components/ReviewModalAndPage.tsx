import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Review } from '../types';
import { Star, CheckCircle, Upload, X, ArrowLeft, MessageSquarePlus, Filter, Search } from 'lucide-react';
import confetti from 'canvas-confetti';

// Modal for any visitor to write a review (enters 'pending' state)
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

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-[#FCFAF7] rounded-3xl max-w-lg w-full overflow-hidden border border-[#D4AF37] shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-300">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#111111] font-bengali">
              {lang === 'bn' ? 'ধন্যবাদ! আপনার রিভিউ জমা হয়েছে' : 'Thank You! Review Submitted'}
            </h3>
            <p className="text-xs sm:text-sm text-[#554E44] mt-2 max-w-sm mx-auto leading-relaxed">
              {lang === 'bn'
                ? 'আপনার মূল্যবান মন্তব্যটি আমাদের অ্যাডমিন প্যানেলে জমা হয়েছে। পর্যালোচনার (Pending Review) পর এটি ওয়েবসাইটে দৃশ্যমান হবে।'
                : 'Your review has been submitted for verification. It will be published shortly after approval.'}
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold shadow-md"
              >
                {lang === 'bn' ? 'ঠিক আছে' : 'OK'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-[#D4AF37]/20 pb-3">
              <h3 className="text-xl font-bold text-[#111111] font-bengali flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-[#B8860B]" />
                <span>{lang === 'bn' ? 'আপনার রিভিউ লিখুন' : 'Write a Review'}</span>
              </h3>
              <p className="text-xs text-[#666666] mt-0.5">
                {lang === 'bn'
                  ? 'প্রচার মিডিয়া সম্পর্কে আপনার অভিজ্ঞতা সবার সাথে শেয়ার করুন'
                  : 'Share your feedback with future clients'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="যেমন: ডাঃ মোঃ রফিক"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D4AF37]/35 text-xs bg-white focus:border-[#B8860B] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">
                  পেশা / পদবি
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="যেমন: কনসালট্যান্ট / উদ্যোক্তা"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D4AF37]/35 text-xs bg-white focus:border-[#B8860B] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#222222] mb-1">
                প্রতিষ্ঠান বা চেম্বার
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="যেমন: স্কিন কেয়ার ক্লিনিক, খুলনা"
                className="w-full px-3.5 py-2 rounded-xl border border-[#D4AF37]/35 text-xs bg-white focus:border-[#B8860B] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">
                  রেটিং নির্বাচন করুন
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D4AF37]/35 text-xs bg-white focus:border-[#B8860B] outline-none"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ 5 Stars (অসাধারণ)</option>
                  <option value={4}>⭐⭐⭐⭐ 4 Stars (খুব ভালো)</option>
                  <option value={3}>⭐⭐⭐ 3 Stars (ভালো)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222222] mb-1">
                  আপনার ছবি যুক্ত করুন
                </label>
                <label className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-[#D4AF37]/40 bg-white text-[11px] font-bold text-[#8A5A00] cursor-pointer hover:bg-[#FFF9EE]">
                  <Upload className="w-3.5 h-3.5" />
                  <span>ছবি আপলোড করুন</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#222222] mb-1">
                আপনার রিভিউ বা মন্তব্য *
              </label>
              <textarea
                required
                rows={3}
                value={formData.textBn}
                onChange={(e) => setFormData({ ...formData, textBn: e.target.value })}
                placeholder="প্রচার মিডিয়া নিয়ে আপনার মতামত..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#D4AF37]/35 text-xs bg-white focus:border-[#B8860B] outline-none font-bengali"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-xs shadow-md hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'জমা হচ্ছে...' : 'রিভিউ সাবমিট করুন'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Full Dedicated Page for /reviews
export const AllReviewsPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const { lang, approvedReviews } = useApp();
  const [filterRating, setFilterRating] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const filtered = approvedReviews.filter((r) => {
    const matchesRating = filterRating === 0 || r.rating === filterRating;
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.textBn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRating && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/25 mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8A5A00] hover:bg-[#FFF9EE] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </button>

          <button
            onClick={() => setIsWriteModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{lang === 'bn' ? '+ নতুন রিভিউ দিন' : '+ Write a Review'}</span>
          </button>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? 'সকল ক্লায়েন্ট ও ডক্টর রিভিউ' : 'All Verified Client Reviews'}
          </h1>
          <p className="text-sm text-[#554E44] mt-2">
            {lang === 'bn'
              ? 'আমাদের সম্মানিত চিকিৎসক ও পার্টনারদের সরাসরি প্রতিক্রিয়া'
              : 'Authentic testimonials and chamber success feedback.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-[#D4AF37]/30 shadow-xs">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? 'নাম বা চেম্বার দিয়ে খুঁজুন...' : 'Search by name or clinic...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:border-[#B8860B] outline-none bg-[#FCFAF7]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-600">রেটিং:</span>
            {[0, 5, 4, 3].map((star) => (
              <button
                key={star}
                onClick={() => setFilterRating(star)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterRating === star
                    ? 'bg-[#111111] text-[#F5DE93] border border-[#D4AF37]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {star === 0 ? 'সব' : `${star} ⭐`}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl gold-glossy-card flex flex-col justify-between hover:border-[#D4AF37] transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (rev.rating || 5)
                          ? 'fill-[#D4AF37] text-[#D4AF37]'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-[#8A5A00]">
                    {rev.rating}.0
                  </span>
                </div>

                <p className="text-sm text-[#333333] leading-relaxed font-normal">
                  "{lang === 'bn' ? rev.textBn : rev.textEn || rev.textBn}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#D4AF37]/20 flex items-center gap-3">
                <img
                  src={rev.avatarUrl || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37] bg-white shadow-xs"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-[#111111] truncate font-bengali">
                    {rev.name}
                  </div>
                  <div className="text-xs text-[#8A5A00] font-medium truncate">
                    {rev.role}
                  </div>
                  <div className="text-[11px] text-gray-500 truncate">
                    {rev.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500 text-sm">
            কোনো রিভিউ পাওয়া যায়নি।
          </div>
        )}

        <WriteReviewModal
          isOpen={isWriteModalOpen}
          onClose={() => setIsWriteModalOpen(false)}
        />
      </div>
    </div>
  );
};
