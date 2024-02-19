import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';

export const ThemeContext = createContext();
const LocalStorageName = 'theme';

const initialStateTheme = () => {
  const localData = localStorage.getItem(LocalStorageName);
  return localData ? localData : 'light';
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialStateTheme);

  useEffect(() => {
    localStorage.setItem(LocalStorageName, theme);
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
