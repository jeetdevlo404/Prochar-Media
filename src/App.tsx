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
import { AllReviewsPage } from './components/ReviewModalAndPage';
import { AllPortfolioPage } from './components/PortfolioDedicatedPage';
import {
  AboutUsPage,
  ContactUsPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  DisclaimerPage,
} from './components/InfoPages';
import { initGoogleAnalytics, trackGaPageView } from './utils/visitorTracker';
import { Analytics } from '@vercel/analytics/react';

function MainRouter() {
  const { lang, setLang, siteSettings } = useApp();

  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    if (siteSettings?.gaMeasurementId) {
      initGoogleAnalytics(siteSettings.gaMeasurementId);
    }
  }, [siteSettings?.gaMeasurementId]);

  useEffect(() => {
    trackGaPageView(currentPath);
  }, [currentPath]);

  const handleSwitchLang = (newLang: 'en' | 'bn') => {
    if (newLang === lang) return;
    setLang(newLang);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. All Reviews Dedicated Page
  if (currentPath === '/reviews' || currentPath === '/reviews/') {
    return <AllReviewsPage onBackToHome={() => navigateTo('/')} />;
  }

  // 1.5. All Portfolio Dedicated Page
  if (currentPath === '/portfolio' || currentPath === '/portfolio/') {
    return <AllPortfolioPage onBackToHome={() => navigateTo('/')} />;
  }

  // 2. About Us Dedicated Page
  if (currentPath === '/about-us' || currentPath === '/about-us/') {
    return <AboutUsPage onBackToHome={() => navigateTo('/')} />;
  }

  // 3. Contact Us Dedicated Page
  if (currentPath === '/contact-us' || currentPath === '/contact-us/') {
    return <ContactUsPage onBackToHome={() => navigateTo('/')} />;
  }

  // 4. Privacy Policy Page
  if (currentPath === '/privacy-policy' || currentPath === '/privacy-policy/') {
    return <PrivacyPolicyPage onBackToHome={() => navigateTo('/')} />;
  }

  // 5. Terms of Service Page
  if (currentPath === '/terms-of-service' || currentPath === '/terms-of-service/') {
    return <TermsOfServicePage onBackToHome={() => navigateTo('/')} />;
  }

  // 6. Disclaimer Page
  if (currentPath === '/disclaimer' || currentPath === '/disclaimer/') {
    return <DisclaimerPage onBackToHome={() => navigateTo('/')} />;
  }

  // Primary High-Performance Website
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1816] relative selection:bg-[#E5C378] selection:text-[#111111] overflow-x-hidden">
      
      {/* Sticky Header with Real Logo */}
      <Navbar
        onSwitchLang={handleSwitchLang}
        onNavigateHome={() => navigateTo('/')}
      />

      {/* Main content */}
      <main key={lang} className="lang-transition-container">
        <Hero />
        <BrandIntroAndStats onNavigatePortfolio={() => navigateTo('/portfolio')} />
        <ServicesSection />
        <HealthcareSection />
        <BridgeSection />
        <WebDevAndSystemsSection />
        <PortfolioAndVideoSection />
        <WhyUsAndProcess />
        <TestimonialsSection onNavigateReviews={() => navigateTo('/reviews')} />
        <TeamSection />
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
      <Analytics />
    </AppProvider>
  );
}
