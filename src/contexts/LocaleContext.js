import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
export const LocaleContext = createContext();

const LocalStorageName = 'locale';

const initialStateLocale = () => {
  const localData = localStorage.getItem(LocalStorageName);
  return localData ? localData : 'id';
};

export const LocaleContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(initialStateLocale);

  useEffect(() => {
    localStorage.setItem(LocalStorageName, locale);
    const rootElement = document.documentElement;
    rootElement.setAttribute('lang', locale);
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'id' : 'en'));
    localStorage.setItem('locale', locale);
  }, [locale]);

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale, toggleLocale]);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  );
};
