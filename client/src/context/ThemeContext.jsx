import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const THEME_STORAGE_KEY = 'bmsit_theme';

const ThemeContext = createContext(null);

const applyThemeToDocument = (nextTheme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', nextTheme);
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const setTheme = (nextTheme) => {
    const resolvedTheme = nextTheme === 'dark' ? 'dark' : 'light';
    applyThemeToDocument(resolvedTheme);
    setThemeState(resolvedTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      applyThemeToDocument(nextTheme);
      return nextTheme;
    });
  };

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};
