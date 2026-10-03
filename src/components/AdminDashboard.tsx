import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Review, SiteSettings, TeamMember } from '../types';
import { ProcharLogo } from './BrandVisuals';
import {
  Shield,
  Star,
  Trash2,
  Edit,
  Save,
  Globe,
  Phone,
  Mail,
  CheckCircle2,
  ArrowLeft,
  Users,
  Settings,
  Upload,
  LogOut,
  LogIn,
  Check,
  XCircle,
  AlertCircle,
  Plus,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export const AdminDashboard: React.FC<{ onExitAdmin: () => void }> = ({ onExitAdmin }) => {
  const {
    siteSettings,
    updateSiteSettings,
    reviews,
    approvedReviews,
    pendingReviews,
    approveReview,
    rejectReview,
    deleteReview,
    updateReview,
    addPublicReview,
    clearAllDemoReviews,
    teamMembers,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
    currentUser,
    loginWithGoogle,
    logout,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'pending-reviews' | 'approved-reviews' | 'add-review' | 'team' | 'settings'>('pending-reviews');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Editing state for reviews
  const [editingReview, setEditingReview] = useState<Review | null>(null);

  // Manual Add Review state (Admin direct add)
  const [manualReviewForm, setManualReviewForm] = useState({
    name: '',
    role: '',
    organization: '',
    textBn: '',
    textEn: '',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
  });

  // Team Member Add Form
  const [teamForm, setTeamForm] = useState({
    name: '',
    role: '',
    department: '',
    company: 'Prochar Media',
    image: '',
    order: 1,
  });
  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(null);

  // Settings Form State
  const [settingsForm, setSettingsForm] = useState<SiteSettings>({ ...siteSettings });

  const showFeedback = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 4000);
  };

  const handleApprove = async (id: string) => {
    await approveReview(id);
    showFeedback('রিভিউটি সফলভাবে এপ্রুভ ও পাবলিশ করা হয়েছে!');
  };

  const handleRejectOrDelete = async (id: string) => {
    if (confirm('আপনি কি নিশ্চিত যে এই রিভিউটি বাতিল বা মুছে ফেলতে চান?')) {
      await deleteReview(id);
      showFeedback('রিভিউটি মুছে ফেলা হয়েছে।');
    }
  };

  const handleClearDemo = async () => {
    if (confirm('আপনি কি সব ডেমো রিভিউ সম্পূর্ণ মুছে ফেলতে চান?')) {
      await clearAllDemoReviews();
      showFeedback('সকল রিভিউ মুছে ফেলা হয়েছে!');
    }
  };

  const handleManualAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualReviewForm.name || !manualReviewForm.textBn) {
      alert('নাম এবং বাংলা রিভিউ টেক্সট আবশ্যক');
      return;
    }

    await addPublicReview({
      name: manualReviewForm.name,
      role: manualReviewForm.role || 'Client / Doctor',
      organization: manualReviewForm.organization || 'General Practice',
      textBn: manualReviewForm.textBn,
      textEn: manualReviewForm.textEn || manualReviewForm.textBn,
      rating: manualReviewForm.rating,
      avatarUrl: manualReviewForm.avatarUrl,
      isVerified: true,
    });

    // Auto approve the one admin adds
    showFeedback('নতুন রিভিউ যুক্ত করা হয়েছে! পেন্ডিং ট্যাবে দেখুন অথবা এপ্রুভ করুন।');
    setManualReviewForm({
      name: '',
      role: '',
      organization: '',
      textBn: '',
      textEn: '',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
    });
  };

  const handleAddTeamMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamForm.name || !teamForm.role) {
      alert('টিম সদস্যের নাম এবং পদবী আবশ্যক');
      return;
    }

    if (editingTeamMember) {
      await updateTeamMember(editingTeamMember.id, {
        name: teamForm.name,
        role: teamForm.role,
        department: teamForm.department,
        company: teamForm.company,
        image: teamForm.image,
      });
      setEditingTeamMember(null);
      showFeedback('টিম সদস্য সফলভাবে আপডেট করা হয়েছে!');
    } else {
      await addTeamMember({
        name: teamForm.name,
        role: teamForm.role,
        department: teamForm.department,
        company: teamForm.company,
        image: teamForm.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
        order: teamMembers.length + 1,
      });
      showFeedback('নতুন টিম সদস্য সফলভাবে যুক্ত করা হয়েছে!');
    }

    setTeamForm({
      name: '',
      role: '',
      department: '',
      company: 'Prochar Media',
      image: '',
      order: 1,
    });
  };

  const handleQuickAddTeamMember = async (name: string, role: string, department: string) => {
    await addTeamMember({
      name,
      role,
      department,
      company: 'Prochar Media',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      order: teamMembers.length + 1,
    });
    showFeedback(`${name} সফলভাবে টিমে যুক্ত হয়েছেন!`);
  };

  const handleDeleteTeamMember = async (id: string) => {
    if (confirm('আপনি কি এই টিম সদস্যকে মুছে ফেলতে চান?')) {
      await deleteTeamMember(id);
      showFeedback('টিম সদস্য মুছে ফেলা হয়েছে।');
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSiteSettings(settingsForm);
    showFeedback('ওয়েবসাইটের সমস্ত তথ্য ও সেটিংস সেভ করা হয়েছে!');
  };

  // Quick Preset Members
  const presetMembers = [
    { name: 'Jony Islam', role: 'Founder', dept: 'Business Development & Digital Marketing' },
    { name: 'Masuma Afroj Mim', role: 'Chief Executive Officer (CEO)', dept: 'Business Operations & Social Media Management' },
    { name: 'Ovi Chandra Sarker', role: 'Video Editor', dept: 'Video Editing & Visual Content' },
    { name: 'Md Fahim Sharriyar Nihal', role: 'Digital Marketing & Social Media Executive', dept: 'Digital Marketing & Campaign Operations' },
    { name: 'Emanul Hasan Jihad', role: 'Digital Marketing & Graphic Design Executive', dept: 'Graphic Design & Visual Identity' },
    { name: 'Saleha Khanom', role: 'Digital Marketer & AI Video Creator', dept: 'AI Video Creation & Content Strategy' },
    { name: 'Mahibur Rahman Orikto', role: 'Consultant & Meta Ads Expert', dept: 'Strategic Consulting & Meta Ads' },
    { name: 'Md. Shariar Islam Shihab', role: 'Video Editor & Videographer', dept: 'Videography & Post-Production' },
    { name: 'Siam Al Shahid', role: 'Marketing Executive & Videographer', dept: 'Field Marketing & Videography' },
  ];

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#F3EFEA] flex flex-col font-sans">
      
      {/* Top Admin Header */}
      <header className="bg-[#141210] border-b border-[#D4AF37]/30 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <ProcharLogo darkTheme size="sm" customLogoUrl={siteSettings.logoUrl} />
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#241F18] border border-[#D4AF37]/40 text-[#F5DE93] text-xs font-bold">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>অ্যাডমিন ম্যানেজমেন্ট প্যানেল</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {currentUser ? (
            <button
              onClick={logout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-700/50 text-red-300 text-xs font-semibold hover:bg-red-900/60 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>লগআউট</span>
            </button>
          ) : (
            <button
              onClick={loginWithGoogle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#241F18] border border-[#D4AF37]/40 text-[#F5DE93] text-xs font-semibold hover:bg-[#332A20] transition-colors"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>গুগল লগইন</span>
            </button>
          )}

          <button
            onClick={onExitAdmin}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-extrabold hover:scale-105 transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ওয়েবসাইটে ফিরে যান</span>
          </button>
        </div>
      </header>

      {/* Notifications / Success Banner */}
      {saveSuccessMsg && (
        <div className="bg-emerald-950/90 border-b border-emerald-600/50 text-emerald-200 px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Dashboard Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#2A241C] mb-8">
          
          <button
            onClick={() => setActiveTab('pending-reviews')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'pending-reviews'
                ? 'bg-[#D4AF37] text-[#111111] shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#1C1814] text-[#C4B8A5] hover:bg-[#28221B] hover:text-white border border-[#2E271D]'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>পেন্ডিং রিভিউ চেক ({pendingReviews.length})</span>
            {pendingReviews.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center">
                {pendingReviews.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('approved-reviews')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'approved-reviews'
                ? 'bg-[#D4AF37] text-[#111111] shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#1C1814] text-[#C4B8A5] hover:bg-[#28221B] hover:text-white border border-[#2E271D]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>অনসাইট রিভিউ ({approvedReviews.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('add-review')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'add-review'
                ? 'bg-[#D4AF37] text-[#111111] shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#1C1814] text-[#C4B8A5] hover:bg-[#28221B] hover:text-white border border-[#2E271D]'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>নতুন রিভিউ যুক্ত করুন</span>
          </button>

          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'team'
                ? 'bg-[#D4AF37] text-[#111111] shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#1C1814] text-[#C4B8A5] hover:bg-[#28221B] hover:text-white border border-[#2E271D]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>টিম মেম্বার ম্যানেজমেন্ট ({teamMembers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-[#D4AF37] text-[#111111] shadow-lg shadow-[#D4AF37]/20'
                : 'bg-[#1C1814] text-[#C4B8A5] hover:bg-[#28221B] hover:text-white border border-[#2E271D]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>ওয়েবসাইট তথ্য ও সেটিংস</span>
          </button>
        </div>

        {/* 1. PENDING REVIEWS TAB */}
        {activeTab === 'pending-reviews' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141210] p-6 rounded-2xl border border-[#D4AF37]/30">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
                  <span>পেন্ডিং রিভিউ মডারেশন (Pending Reviews)</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#A89F91] mt-1">
                  যে কেউ এসে ওয়েবসাইটে রিভিউ দিলে প্রথমে এখানে জমা হয়। লেখা যাচাই করে ঠিক থাকলে প্রকাশ (Approve) করুন অথবা আজেবাজে হলে ক্যানসেল/ডিলিট করে দিন।
                </p>
              </div>

              {reviews.length > 0 && (
                <button
                  onClick={handleClearDemo}
                  className="px-3.5 py-1.5 rounded-lg bg-red-950/70 border border-red-800 text-red-300 text-xs font-bold hover:bg-red-900 transition-colors"
                >
                  সব ডেমো রিভিউ সম্পূর্ণ মুছে ফেলুন
                </button>
              )}
            </div>

            {pendingReviews.length === 0 ? (
              <div className="text-center py-16 bg-[#141210] rounded-2xl border border-[#2A241C] p-8">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3 opacity-80" />
                <h3 className="text-lg font-bold text-white mb-1">কোনো পেন্ডিং রিভিউ নেই</h3>
                <p className="text-xs sm:text-sm text-[#888888] max-w-md mx-auto">
                  নতুন কোনো ভিজিটর রিভিউ দিলে তা সাথে সাথে এই তালিকায় দেখা যাবে।
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {pendingReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-6 rounded-2xl bg-[#171411] border border-[#D4AF37]/40 flex flex-col justify-between hover:border-[#D4AF37] transition-all"
                  >
                    <div>
                      {/* Rating and Pending Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rev.rating
                                  ? 'fill-[#D4AF37] text-[#D4AF37]'
                                  : 'fill-gray-700 text-gray-700'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-xs font-bold text-[#F5DE93]">
                            {rev.rating}.0
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-600/50 text-amber-300 text-[10px] font-bold">
                          পর্যালোচনার অপেক্ষায়
                        </span>
                      </div>

                      {/* Review message */}
                      <p className="text-sm text-[#F3EFEA] font-medium leading-relaxed mb-4 bg-[#0F0D0B] p-4 rounded-xl border border-[#262017]">
                        "{rev.textBn || rev.textEn}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.avatarUrl || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'}
                          alt={rev.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                          <p className="text-xs text-[#C4B8A5]">
                            {rev.role} • {rev.organization}
                          </p>
                          <span className="text-[10px] text-[#777777]">
                            জমা: {new Date(rev.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Moderation Actions */}
                    <div className="mt-6 pt-4 border-t border-[#2A241C] flex items-center justify-end gap-3">
                      <button
                        onClick={() => handleRejectOrDelete(rev.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-700 text-red-200 text-xs font-bold transition-all cursor-pointer"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>ক্যানসেল ও মুছে ফেলুন</span>
                      </button>

                      <button
                        onClick={() => handleApprove(rev.id)}
                        className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>অ্যাপ্রুভ ও প্রকাশ করুন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. APPROVED ON-SITE REVIEWS TAB */}
        {activeTab === 'approved-reviews' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141210] p-6 rounded-2xl border border-[#D4AF37]/30">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366]" />
                  <span>ওয়েবসাইটে প্রকাশিত রিভিউসমূহ ({approvedReviews.length} টি)</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#A89F91] mt-1">
                  এই রিভিউগুলো পাবলিক ওয়েবসাইটে দৃশ্যমান। আপনি চাইলে যেকোনো রিভিউ এডিট বা মুছে ফেলতে পারেন।
                </p>
              </div>

              <button
                onClick={() => setActiveTab('add-review')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>নতুন রিভিউ তৈরি করুন</span>
              </button>
            </div>

            {approvedReviews.length === 0 ? (
              <div className="text-center py-16 bg-[#141210] rounded-2xl border border-[#2A241C] p-8">
                <MessageSquare className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-60" />
                <h3 className="text-lg font-bold text-white mb-1">কোনো প্রকাশিত রিভিউ নেই</h3>
                <p className="text-xs sm:text-sm text-[#888888] max-w-md mx-auto mb-4">
                  পেন্ডিং রিভিউ থেকে অ্যাপ্রুভ করুন অথবা আপনি নিজে সরাসরি নতুন রিভিউ যোগ করতে পারেন।
                </p>
                <button
                  onClick={() => setActiveTab('add-review')}
                  className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#111111] text-xs font-bold hover:scale-105 transition-all"
                >
                  + এখনই রিভিউ যুক্ত করুন
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {approvedReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-[#171411] border border-[#2E271D] hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < rev.rating
                                  ? 'fill-[#D4AF37] text-[#D4AF37]'
                                  : 'fill-gray-700 text-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-600/40 text-emerald-300 text-[10px] font-bold">
                          লাইভ অনসাইট
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#F3EFEA] leading-relaxed mb-4">
                        "{rev.textBn || rev.textEn}"
                      </p>

                      <div className="flex items-center gap-3 pt-3 border-t border-[#262017]">
                        <img
                          src={rev.avatarUrl || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'}
                          alt={rev.name}
                          className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-white truncate">{rev.name}</h4>
                          <p className="text-[11px] text-[#A89F91] truncate">
                            {rev.role} • {rev.organization}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#262017] flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleRejectOrDelete(rev.id)}
                        className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-300 transition-colors"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. ADD NEW REVIEW TAB */}
        {activeTab === 'add-review' && (
          <div className="max-w-2xl mx-auto bg-[#141210] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#D4AF37]" />
              <span>সরাসরি নতুন ক্লায়েন্ট রিভিউ তৈরি করুন</span>
            </h2>
            <p className="text-xs text-[#A89F91] mb-6">
              এখানে তথ্য লিখে জমা দিলে রিভিউটি সরাসরি পেন্ডিং তালিকায় জমা হবে এবং আপনি তা অ্যাপ্রুভ করতে পারবেন।
            </p>

            <form onSubmit={handleManualAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  ক্লায়েন্ট / চিকিৎসকের নাম *
                </label>
                <input
                  type="text"
                  required
                  value={manualReviewForm.name}
                  onChange={(e) => setManualReviewForm({ ...manualReviewForm, name: e.target.value })}
                  placeholder="যেমন: Dr. Rafiqul Islam বা উদ্যোক্তার নাম"
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    পদবী / পেশা
                  </label>
                  <input
                    type="text"
                    value={manualReviewForm.role}
                    onChange={(e) => setManualReviewForm({ ...manualReviewForm, role: e.target.value })}
                    placeholder="যেমন: Dental Surgeon / Managing Director"
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    প্রতিষ্ঠান / চেম্বার
                  </label>
                  <input
                    type="text"
                    value={manualReviewForm.organization}
                    onChange={(e) => setManualReviewForm({ ...manualReviewForm, organization: e.target.value })}
                    placeholder="যেমন: Dhaka Smile Care"
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  রেটিং (স্টার)
                </label>
                <select
                  value={manualReviewForm.rating}
                  onChange={(e) => setManualReviewForm({ ...manualReviewForm, rating: Number(e.target.value) })}
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (৫ স্টার)</option>
                  <option value={4}>⭐⭐⭐⭐ (৪ স্টার)</option>
                  <option value={3}>⭐⭐⭐ (৩ স্টার)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  রিভিউ বক্তব্য (বাংলা) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={manualReviewForm.textBn}
                  onChange={(e) => setManualReviewForm({ ...manualReviewForm, textBn: e.target.value })}
                  placeholder="প্রচার মিডিয়ার সার্ভিস ও ফলাফল সম্পর্কে মতামত..."
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  প্রোফাইল ছবির লিংক (URL)
                </label>
                <input
                  type="url"
                  value={manualReviewForm.avatarUrl}
                  onChange={(e) => setManualReviewForm({ ...manualReviewForm, avatarUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-sm hover:scale-105 transition-all shadow-md cursor-pointer"
                >
                  রিভিউ সেভ করুন
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 4. TEAM MEMBER MANAGEMENT TAB */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="bg-[#141210] p-6 rounded-2xl border border-[#D4AF37]/30">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-[#D4AF37]" />
                <span>টিম মেম্বার ম্যানেজমেন্ট (Our Team Members)</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A89F91] mt-1">
                আপনি আপনার টিমের সদস্যদের তথ্য ও ছবি যুক্ত করতে পারেন। যুক্ত করার পর তারা স্বয়ংক্রিয়ভাবে ওয়েবসাইটের টিম সেকশনে সুন্দরভাবে প্রদর্শিত হবে।
              </p>

              {/* Quick Add Presets (1-Click button for user's members) */}
              <div className="mt-6 pt-5 border-t border-[#262017]">
                <div className="text-xs font-bold text-[#F5DE93] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>১-ক্লিকে টিম মেম্বার দ্রুত যুক্ত করার অপশন:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {presetMembers.map((m) => (
                    <button
                      key={m.name}
                      onClick={() => handleQuickAddTeamMember(m.name, m.role, m.dept)}
                      className="px-3 py-1.5 rounded-lg bg-[#201B15] hover:bg-[#2C241C] border border-[#D4AF37]/30 text-[#E5D7BE] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3 text-[#D4AF37]" />
                      <span>{m.name} ({m.role.split(' ')[0]})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form to Add / Edit Team Member */}
            <div className="bg-[#141210] p-6 sm:p-8 rounded-2xl border border-[#2E271D]">
              <h3 className="text-base font-bold text-white mb-4">
                {editingTeamMember ? 'টিম সদস্য এডিট করুন' : '+ নতুন টিম সদস্য যুক্ত করুন'}
              </h3>

              <form onSubmit={handleAddTeamMember} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={teamForm.name}
                    onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                    placeholder="যেমন: Jony Islam"
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    পদবী (Role) *
                  </label>
                  <input
                    type="text"
                    required
                    value={teamForm.role}
                    onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                    placeholder="যেমন: Founder / CEO / Video Editor"
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    ডিপার্টমেন্ট বা স্পেশালিটি
                  </label>
                  <input
                    type="text"
                    value={teamForm.department}
                    onChange={(e) => setTeamForm({ ...teamForm, department: e.target.value })}
                    placeholder="যেমন: Business Development & Digital Marketing"
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    ছবির লিংক (Image URL)
                  </label>
                  <input
                    type="text"
                    value={teamForm.image}
                    onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
                    placeholder="ছবির অনলাইন লিংক (URL) পেস্ট করুন"
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                  {editingTeamMember && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingTeamMember(null);
                        setTeamForm({ name: '', role: '', department: '', company: 'Prochar Media', image: '', order: 1 });
                      }}
                      className="px-4 py-2 rounded-xl bg-gray-800 text-gray-300 text-xs font-semibold"
                    >
                      বাতিল
                    </button>
                  )}
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-md cursor-pointer"
                  >
                    {editingTeamMember ? 'আপডেট করুন' : 'টিমে যুক্ত করুন'}
                  </button>
                </div>
              </form>
            </div>

            {/* Current Team Members List */}
            <div>
              <h3 className="text-base font-bold text-white mb-4">
                বর্তমান টিম সদস্য তালিকা ({teamMembers.length} জন)
              </h3>

              {teamMembers.length === 0 ? (
                <div className="text-center py-12 bg-[#141210] rounded-2xl border border-[#2A241C] p-6 text-[#888888] text-sm">
                  এখনও কোনো টিম সদস্য যুক্ত করা হয়নি। উপরের ফরম থেকে যুক্ত করুন।
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {teamMembers.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 rounded-xl bg-[#171411] border border-[#2E271D] flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={m.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'}
                          alt={m.name}
                          className="w-12 h-12 rounded-xl object-cover border border-[#D4AF37]/50"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white truncate">{m.name}</h4>
                          <p className="text-xs text-[#D4AF37] truncate">{m.role}</p>
                          <p className="text-[11px] text-[#888888] truncate">{m.department}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingTeamMember(m);
                            setTeamForm({
                              name: m.name,
                              role: m.role,
                              department: m.department,
                              company: m.company,
                              image: m.image,
                              order: m.order,
                            });
                          }}
                          className="p-1.5 rounded-lg bg-[#2A241C] text-[#F5DE93] hover:bg-[#383025] transition-colors"
                          title="এডিট"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteTeamMember(m.id)}
                          className="p-1.5 rounded-lg bg-red-950/60 text-red-300 hover:bg-red-900 transition-colors"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. WEBSITE SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="max-w-4xl mx-auto bg-[#141210] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Settings className="w-6 h-6 text-[#D4AF37]" />
              <span>ওয়েবসাইট তথ্য ও ব্রান্ড সেটিংস</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A89F91] mb-6">
              এখানে পরিবর্তিত যেকোনো তথ্য সাথে সাথে আপনার মূল ওয়েবসাইটে আপডেট হবে।
            </p>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    ফোন নম্বর (Phone)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    হোয়াটসঅ্যাপ নম্বর (WhatsApp)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    ইমেইল (Email)
                  </label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                    ফেসবুক পেজ লিংক (Facebook URL)
                  </label>
                  <input
                    type="url"
                    value={settingsForm.facebookUrl}
                    onChange={(e) => setSettingsForm({ ...settingsForm, facebookUrl: e.target.value })}
                    className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  প্রধান অফিস ঠিকানা (Main Office)
                </label>
                <input
                  type="text"
                  value={settingsForm.address}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  দ্বিতীয় অফিস ঠিকানা (Secondary Office)
                </label>
                <input
                  type="text"
                  value={settingsForm.secondaryAddress}
                  onChange={(e) => setSettingsForm({ ...settingsForm, secondaryAddress: e.target.value })}
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C4B8A5] mb-1">
                  লোগো ছবির লিংক (Logo URL)
                </label>
                <input
                  type="url"
                  value={settingsForm.logoUrl}
                  onChange={(e) => setSettingsForm({ ...settingsForm, logoUrl: e.target.value })}
                  className="w-full bg-[#1C1814] border border-[#2E271D] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-hidden"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-sm hover:scale-105 transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>সেটিংস সেভ করুন</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
