import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/api';
import { LocaleContextProvider } from './contexts/LocaleContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import PageNotFound from './pages/PageNotFound';
import AddNotePage from './pages/AddNotePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

export default function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchAuthedUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchAuthedUser();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <ThemeContextProvider>
          <LocaleContextProvider>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </LocaleContextProvider>
        </ThemeContextProvider>
      </>
    );
  }

  return (
    <>
      <ThemeContextProvider>
        <LocaleContextProvider>
          <Navigation logout={onLogout} name={authedUser.name} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/notes/archived" element={<ArchivedPage />} />
            <Route path="/notes/new" element={<AddNotePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </LocaleContextProvider>
      </ThemeContextProvider>
    </>
  );
}
