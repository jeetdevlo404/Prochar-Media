import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, Award } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const { lang, teamMembers } = useApp();

  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section id="team" className="py-14 sm:py-20 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FAF6EE] relative border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-2.5">
            <Users className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'আমাদের দক্ষ টিম' : 'Meet Our Team'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? (
              <>
                প্রচার মিডিয়ার পেছনের <span className="gold-gradient-text">দক্ষ বিশেষজ্ঞ দল</span>
              </>
            ) : (
              <>
                The Passionate Experts <span className="gold-gradient-text">Behind Prochar Media</span>
              </>
            )}
          </h2>
        </div>

        {/* Compact Multi-Column Team Grid: 2-3 per row on mobile, 3-4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto">
          {teamMembers.map((member) => {
            const isLeader =
              member.role.toLowerCase().includes('ceo') ||
              member.role.toLowerCase().includes('founder');

            return (
              <div
                key={member.id}
                className="p-3 sm:p-4 rounded-2xl gold-glossy-card hover:border-[#D4AF37] transition-all duration-300 text-center flex flex-col items-center justify-between group hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="relative mb-2.5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#D4AF37]/70 shadow-xs bg-[#FAF4E6]">
                      <img
                        src={member.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {isLeader && (
                      <span className="absolute -bottom-1 -right-1 bg-[#111111] text-[#D4AF37] p-1 rounded-full border border-[#D4AF37] shadow-xs">
                        <Award className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-tight line-clamp-1">
                    {member.name}
                  </h4>

                  <div className="text-[10px] sm:text-xs font-semibold text-[#8A5A00] mt-0.5 leading-snug line-clamp-1">
                    {member.role}
                  </div>

                  {member.department && (
                    <div className="text-[9px] sm:text-[11px] text-[#666666] mt-0.5 leading-tight line-clamp-1">
                      {member.department}
                    </div>
                  )}
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#D4AF37]/20 w-full text-[9px] sm:text-[10px] text-[#777777] font-medium truncate">
                  {member.company || 'Prochar Media'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
