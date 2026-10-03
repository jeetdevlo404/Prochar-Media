import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntroAndStats } from './components/BrandIntroAndStats';
import { ServicesSection } from './components/ServicesSection';
import { HealthcareSection } from './components/HealthcareSection';
import { BridgeSection } from './components/BridgeSection';
import { WebDevAndSystemsSection } from './components/WebDevAndSystemsSection';
import { PortfolioAndVideoSection } from './components/PortfolioAndVideoSection';
import { WhyUsAndProcess } from './components/WhyUsAndProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeamSection } from './components/TeamSection';
import { FaqAndContactSection } from './components/FaqAndContactSection';
import { Footer, FloatingWidgets } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { AllReviewsPage } from './components/ReviewModalAndPage';
import { AboutUsPage, PrivacyPolicyPage, TermsOfServicePage } from './components/InfoPages';

function MainRouter() {
  const { lang, setLang } = useApp();

  // Current active route based on window.location.pathname or hash
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
      return '/admin';
    }
    return window.location.pathname || '/';
  });

  const handleSwitchLang = (newLang: 'en' | 'bn') => {
    if (newLang === lang) return;
    setLang(newLang);
  };

  // Listen to popstate and route navigation
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setCurrentPath('/admin');
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (path === '/admin') {
      window.location.hash = 'admin';
    } else if (window.location.hash === '#admin') {
      window.location.hash = '';
    }
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Direct Full-Page Admin Panel when URL is /admin or #admin
  if (currentPath === '/admin' || currentPath === '/admin/' || window.location.hash === '#admin') {
    return (
      <AdminDashboard
        onExitAdmin={() => {
          navigateTo('/');
        }}
      />
    );
  }

  // 2. All Reviews Dedicated Page
  if (currentPath === '/reviews' || currentPath === '/reviews/') {
    return <AllReviewsPage onBackToHome={() => navigateTo('/')} />;
  }

  // 3. About Us Dedicated Page
  if (currentPath === '/about-us' || currentPath === '/about-us/') {
    return <AboutUsPage onBackToHome={() => navigateTo('/')} />;
  }

  // 4. Privacy Policy Page
  if (currentPath === '/privacy-policy' || currentPath === '/privacy-policy/') {
    return <PrivacyPolicyPage onBackToHome={() => navigateTo('/')} />;
  }

  // 5. Terms of Service Page
  if (currentPath === '/terms-of-service' || currentPath === '/terms-of-service/') {
    return <TermsOfServicePage onBackToHome={() => navigateTo('/')} />;
  }

  // 6. Primary High-Performance Website
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] relative selection:bg-[#E5C378] selection:text-[#111111] overflow-x-hidden">
      
      {/* Sticky Header with Real Logo */}
      <Navbar
        onSwitchLang={handleSwitchLang}
        onNavigateHome={() => navigateTo('/')}
      />

      {/* Main content with smooth directional text transition on language change */}
      <main key={lang} className="lang-transition-container">
        {/* Hero Section */}
        <Hero />

        {/* Brand Philosophy & Stats */}
        <BrandIntroAndStats />

        {/* 14 Core Services */}
        <ServicesSection />

        {/* Healthcare Doctor Branding & Supplied Posters */}
        <HealthcareSection />

        {/* Signature “প্রচারেই প্রসার” Golden Bridge */}
        <BridgeSection />

        {/* Web Development & Clinic Systems */}
        <WebDevAndSystemsSection />

        {/* Portfolio & Video Studio */}
        <PortfolioAndVideoSection />

        {/* Why Choose Prochar Media & 5-Step Process */}
        <WhyUsAndProcess />

        {/* Client & Doctor Testimonials (Shows only admin-approved reviews) */}
        <TestimonialsSection onNavigateReviews={() => navigateTo('/reviews')} />

        {/* Team Members Section (Displays members added by admin from admin panel) */}
        <TeamSection />

        {/* FAQ & Direct Office & WhatsApp Hub */}
        <FaqAndContactSection />
      </main>

      {/* Footer with High-Contrast Branding & Page Links */}
      <Footer onNavigatePage={navigateTo} />

      {/* Floating WhatsApp Hotline & Back-to-Top */}
      <FloatingWidgets />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
