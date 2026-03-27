import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'bmsit_language';
const GOOGLE_TRANSLATE_SCRIPT_ID = 'google-translate-script';
const GOOGLE_TRANSLATE_CONTAINER_ID = 'google_translate_element';
const GOOGLE_TRANSLATE_CALLBACK = 'googleTranslateElementInitBMSIT';

const translations = {
  en: {
    nav: {
      about: 'About',
      admissions: 'Admissions',
      academics: 'Academics',
      departments: 'Departments',
      facilities: 'Facilities',
      campusLife: 'Campus Life',
      placement: 'Placement',
      publications: 'Publications',
      tour3d: '3D Tour',
      tour3dCampus: '3D Campus Tour',
      login: 'Log In',
      portals: 'Portals',
      staffPortal: 'Staff Portal',
      studentPortal: 'Student Portal',
    },
    hero: {
      welcome: 'Welcome',
      line1: "Building engineering's future.",
      line2: 'One student, one innovation,',
      line3: 'one purpose at a time.',
    },
  },
  kn: {
    nav: {
      about: 'ಪರಿಚಯ',
      admissions: 'ಪ್ರವೇಶಗಳು',
      academics: 'ಶೈಕ್ಷಣಿಕ',
      departments: 'ವಿಭಾಗಗಳು',
      facilities: 'ಸೌಕರ್ಯಗಳು',
      campusLife: 'ಕ್ಯಾಂಪಸ್ ಜೀವನ',
      placement: 'ನಿಯೋಜನೆ',
      publications: 'ಪ್ರಕಟನೆಗಳು',
      tour3d: '3D ಪ್ರವಾಸ',
      tour3dCampus: '3D ಕ್ಯಾಂಪಸ್ ಪ್ರವಾಸ',
      login: 'ಲಾಗಿನ್',
      portals: 'ಪೋರ್ಟಲ್‌ಗಳು',
      staffPortal: 'ಸಿಬ್ಬಂದಿ ಪೋರ್ಟಲ್',
      studentPortal: 'ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್',
    },
    hero: {
      welcome: 'ಸ್ವಾಗತ',
      line1: 'ಇಂಜಿನಿಯರಿಂಗ್‌ನ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ.',
      line2: 'ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿ, ಒಂದು ಹೊಸತನ,',
      line3: 'ಒಂದು ಗುರಿ ಒಂದೇ ಸಮಯದಲ್ಲಿ.',
    },
  },
  hi: {
    nav: {
      about: 'परिचय',
      admissions: 'प्रवेश',
      academics: 'अकादमिक',
      departments: 'विभाग',
      facilities: 'सुविधाएं',
      campusLife: 'कैंपस जीवन',
      placement: 'प्लेसमेंट',
      publications: 'प्रकाशन',
      tour3d: '3D टूर',
      tour3dCampus: '3D कैंपस टूर',
      login: 'लॉग इन',
      portals: 'पोर्टल',
      staffPortal: 'स्टाफ पोर्टल',
      studentPortal: 'स्टूडेंट पोर्टल',
    },
    hero: {
      welcome: 'स्वागत है',
      line1: 'इंजीनियरिंग का भविष्य बना रहे हैं।',
      line2: 'एक छात्र, एक नवाचार,',
      line3: 'एक उद्देश्य, एक समय में।',
    },
  },
};

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'kn', label: 'ಕನ್ನಡ' },
  { value: 'hi', label: 'हिन्दी' },
];

const LanguageContext = createContext(null);

const getNestedValue = (obj, key) => key.split('.').reduce((acc, part) => acc?.[part], obj);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (saved && translations[saved]) {
    return saved;
  }

  return 'en';
};

const hideGoogleTranslateUi = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const selectors = [
    '.goog-te-banner-frame',
    'iframe.goog-te-banner-frame',
    '.goog-te-balloon-frame',
    '#goog-gt-tt',
    '.VIpgJd-ZVi9od-ORHb-OEVmcd',
    '.VIpgJd-ZVi9od-aZ2wEe-wOHMyf',
    'iframe.VIpgJd-ZVi9od-xl07Ob-OEVmcd',
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.style.setProperty('display', 'none', 'important');
      node.style.setProperty('visibility', 'hidden', 'important');
      node.style.setProperty('height', '0', 'important');
      node.style.setProperty('width', '0', 'important');
      node.style.setProperty('pointer-events', 'none', 'important');
      node.style.setProperty('z-index', '-1', 'important');
    });
  });

  document.body.style.setProperty('top', '0px', 'important');
  document.documentElement.style.setProperty('top', '0px', 'important');
};

const initializeGoogleTranslateElement = () => {
  if (
    typeof window === 'undefined' ||
    !window.google?.translate?.TranslateElement ||
    window.__bmsitGoogleTranslateInitialized
  ) {
    return false;
  }

  const container = document.getElementById(GOOGLE_TRANSLATE_CONTAINER_ID);
  if (!container) {
    return false;
  }

  // Hidden widget used only as an engine for page translation.
  // eslint-disable-next-line no-new
  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,kn,hi',
      autoDisplay: false,
      multilanguagePage: true,
    },
    GOOGLE_TRANSLATE_CONTAINER_ID
  );

  window.__bmsitGoogleTranslateInitialized = true;
  return true;
};

const loadGoogleTranslate = () => {
  if (typeof window === 'undefined') {
    return Promise.resolve(false);
  }

  if (window.google?.translate?.TranslateElement) {
    initializeGoogleTranslateElement();
    hideGoogleTranslateUi();
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    window[GOOGLE_TRANSLATE_CALLBACK] = () => {
      initializeGoogleTranslateElement();
      hideGoogleTranslateUi();
      resolve(true);
    };

    const existingScript = document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID);
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
    script.src = `https://translate.google.com/translate_a/element.js?cb=${GOOGLE_TRANSLATE_CALLBACK}`;
    script.async = true;
    document.body.appendChild(script);
  });
};

const applyGoogleLanguage = (nextLanguage) => {
  hideGoogleTranslateUi();

  const combo = document.querySelector('.goog-te-combo');
  if (!combo) {
    return false;
  }

  if (combo.value !== nextLanguage) {
    combo.value = nextLanguage;
    combo.dispatchEvent(new Event('change'));
  }

  return true;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window === 'undefined' || !document.body) {
      return undefined;
    }

    hideGoogleTranslateUi();
    const observer = new MutationObserver(() => {
      hideGoogleTranslateUi();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const applyLanguage = useCallback((targetLanguage) => {
    const safeLanguage = translations[targetLanguage] ? targetLanguage : 'en';

    loadGoogleTranslate().then(() => {
      if (applyGoogleLanguage(safeLanguage)) {
        hideGoogleTranslateUi();
        return;
      }

      let retryCount = 0;
      const retryTimer = setInterval(() => {
        retryCount += 1;
        if (applyGoogleLanguage(safeLanguage) || retryCount > 20) {
          clearInterval(retryTimer);
          hideGoogleTranslateUi();
        }
      }, 250);
    });
  }, []);

  const setLanguage = (nextLanguage) => {
    const safeLanguage = translations[nextLanguage] ? nextLanguage : 'en';
    setLanguageState(safeLanguage);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, safeLanguage);
    }
  };

  useEffect(() => {
    applyLanguage(language);
  }, [language, applyLanguage]);

  const t = (key) =>
    getNestedValue(translations[language], key) ?? getNestedValue(translations.en, key) ?? key;

  const value = useMemo(
    () => ({ language, setLanguage, t, languageOptions, applyLanguage }),
    [language, applyLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
