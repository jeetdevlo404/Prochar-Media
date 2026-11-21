declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __procharGaInitializedId?: string;
  }
}

export function trackGaPageView(path: string) {
  try {
    if (typeof window === 'undefined') return;
    if (path.includes('admin.html')) return;

    if (window.gtag && window.__procharGaInitializedId) {
      window.gtag('event', 'page_view', {
        page_path: path || '/',
        page_title: document.title,
      });
    }
  } catch {
    // Silent fallback
  }
}

export function initGoogleAnalytics(measurementId?: string) {
  try {
    if (typeof window === 'undefined' || !measurementId) return;
    const cleanId = measurementId.trim();
    if (!/^G-[A-Z0-9]+$/i.test(cleanId)) return;
    if (window.__procharGaInitializedId === cleanId) return;

    window.__procharGaInitializedId = cleanId;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${cleanId}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${cleanId}`;
      document.head.appendChild(script);
    }

    window.gtag('js', new Date());
    window.gtag('config', cleanId, {
      page_path: window.location.pathname || '/',
    });
  } catch {
    // Silent fallback
  }
}
