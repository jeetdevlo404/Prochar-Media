import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, Award, CheckCircle } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const { lang, teamMembers } = useApp();

  // If no team members have been added by admin yet, don't show dummy/placeholder members
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  // Leadership vs Core Team
  const leaders = teamMembers.filter((m) => m.role.toLowerCase().includes('ceo') || m.role.toLowerCase().includes('founder'));
  const otherMembers = teamMembers.filter((m) => !m.role.toLowerCase().includes('ceo') && !m.role.toLowerCase().includes('founder'));

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FAF6EE] relative border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Users className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8A5A00]">
              {lang === 'bn' ? 'আমাদের দক্ষ টিম' : 'Meet Our Team'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] font-serif-royal">
            {lang === 'bn' ? (
              <>
                প্রচার মিডিয়ার পেছনের <span className="gold-gradient-text">দক্ষ বিশেষজ্ঞ দল</span>
              </>
            ) : (
              <>
                The Passionate Experts <br />
                <span className="gold-gradient-text">Behind Prochar Media</span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#554E44]">
            {lang === 'bn'
              ? 'ডিজিটাল স্ট্র্যাটেজি, হেলথকেয়ার মার্কেটিং, ভিডিও প্রোডাকশন এবং আধুনিক টেকনোলজির সমন্বয়ে আপনার প্রবৃদ্ধি নিশ্চিত করি।'
              : 'Our united leadership, creative storytellers, meta ads specialists and developers dedicated to your digital growth.'}
          </p>
        </div>

        {/* 1. Leadership (CEO & Founder) on Top if any */}
        {leaders.length > 0 && (
          <div className="mb-10">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#8A5A00] bg-[#FFF2B2]/60 px-4 py-1 rounded-full border border-[#D4AF37]/40">
                Leadership
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {leaders.map((member) => (
                <div
                  key={member.id}
                  className="p-6 rounded-3xl bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFF9EE] border-2 border-[#D4AF37]/60 shadow-lg hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center"
                >
                  {/* Photo with Gold Frame */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#FAF4E6]">
                      <img
                        src={member.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute -bottom-2 -right-2 bg-[#111111] text-[#D4AF37] p-1.5 rounded-full border border-[#D4AF37] shadow-sm">
                      <Award className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="inline-block bg-[#111111] text-[#F5DE93] text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border border-[#D4AF37]/50 mb-2">
                    {member.role}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#8A5A00] mt-1">
                    {member.department}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#D4AF37]/25 w-full flex items-center justify-center gap-1.5 text-[11px] text-[#666666]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>{member.company || 'Prochar Media'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Other Core Team Members */}
        {otherMembers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-2xl gold-glossy-card hover:border-[#D4AF37] transition-all duration-300 text-center flex flex-col items-center justify-between group hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="relative mb-3.5">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-sm bg-[#FAF4E6]">
                      <img
                        src={member.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#111111] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37] text-[10px]">
                      ✓
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#111111] leading-tight">
                    {member.name}
                  </h4>

                  <div className="text-xs font-semibold text-[#8A5A00] mt-1 leading-snug">
                    {member.role}
                  </div>

                  <div className="text-[11px] text-[#666666] mt-1 leading-relaxed">
                    {member.department}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 w-full text-[10px] text-[#777777] font-medium">
                  {member.company || 'Prochar Media'}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
