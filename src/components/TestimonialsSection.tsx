import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, Quote, CheckCircle, ArrowRight, MessageSquarePlus, Sparkles } from 'lucide-react';
import { WriteReviewModal } from './ReviewModalAndPage';

export const TestimonialsSection: React.FC<{ onNavigateReviews: () => void }> = ({ onNavigateReviews }) => {
  const { lang, approvedReviews } = useApp();
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // Show up to 5 approved reviews on the homepage
  const displayReviews = approvedReviews.slice(0, 5);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FCFAF7] relative overflow-hidden">
      {/* Light sheen background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Quote className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'ক্লায়েন্ট ও ডক্টর রিভিউ' : 'Client Testimonials'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? (
              <>
                চিকিৎসক ও উদ্যোক্তাদের <span className="gold-gradient-text">বাস্তব আস্থার কথা</span>
              </>
            ) : (
              <>
                What Respected Doctors & <br />
                <span className="gold-gradient-text">Brands Say About Prochar</span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#554E44]">
            {lang === 'bn'
              ? 'আমাদের গ্রাহক ও বিশেষজ্ঞ চিকিৎসকদের যাচাইকৃত অভিজ্ঞতা ও সন্তুষ্টি।'
              : 'Authentic testimonials and verified feedback from doctors, clinics, and businesses.'}
          </p>

          {/* Action button to open Review submission modal */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D4AF37]/60 text-xs sm:text-sm font-bold text-[#8A5A00] hover:bg-[#FFF9EE] hover:border-[#D4AF37] transition-all shadow-xs cursor-pointer group"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#B8860B] group-hover:scale-110 transition-transform" />
              <span>{lang === 'bn' ? '+ আপনার রিভিউ লিখুন' : '+ Write a Review'}</span>
            </button>
          </div>
        </div>

        {/* If no reviews published yet */}
        {displayReviews.length === 0 ? (
          <div className="max-w-xl mx-auto text-center p-8 sm:p-10 rounded-3xl gold-glossy-card border border-[#D4AF37]/40">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF5DB] border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-4 text-[#B8860B]">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2 font-bengali">
              {lang === 'bn' ? 'আপনার মূল্যবান অভিজ্ঞতা শেয়ার করুন' : 'Share Your Experience With Us'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] mb-6 leading-relaxed">
              {lang === 'bn'
                ? 'আমাদের সেবা গ্রহণ করেছেন? আপনার মূল্যবান রিভিউ ও মতামত প্রদান করে অন্যদের সিদ্ধান্ত নিতে সাহায্য করুন।'
                : 'Have you worked with Prochar Media? Submit your feedback to help others learn about our service.'}
            </p>
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{lang === 'bn' ? 'রিভিউ প্রদান করুন' : 'Submit Review'}</span>
            </button>
          </div>
        ) : (
          <>
            {/* Reviews Display Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-6 rounded-3xl gold-glossy-card flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 relative group hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    {/* Star rating */}
                    <div className="flex items-center gap-1 mb-3.5">
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

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-normal">
                      "{lang === 'bn' ? rev.textBn : rev.textEn || rev.textBn}"
                    </p>
                  </div>

                  {/* Author Info with Photo */}
                  <div className="mt-5 pt-4 border-t border-[#D4AF37]/20 flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={rev.avatarUrl || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'}
                        alt={rev.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37] shadow-xs bg-white"
                      />
                      {rev.isVerified !== false && (
                        <span
                          title="Verified Client"
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#111111] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]"
                        >
                          <CheckCircle className="w-3 h-3 fill-[#D4AF37] text-[#111111]" />
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#111111] truncate font-bengali">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-[#8A5A00] font-medium truncate">
                        {rev.role}
                      </p>
                      <p className="text-[10px] text-[#666666] truncate">
                        {rev.organization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See All Reviews Button */}
            <div className="mt-10 text-center">
              <button
                onClick={onNavigateReviews}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] hover:from-[#996515] hover:to-[#B8860B] text-white text-xs sm:text-sm font-extrabold shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <span>{lang === 'bn' ? `সব রিভিউ দেখুন (${approvedReviews.length} টি)` : `See All Reviews (${approvedReviews.length})`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}

      </div>

      <WriteReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
      />
    </section>
  );
};
