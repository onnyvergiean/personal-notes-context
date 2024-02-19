import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';
import LoginInput from '../components/LoginInput';
import LanguageButton from '../components/LanguageButton';
import ThemeButton from './../components/ThemeButton';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';
export default function LoginPage({ loginSuccess }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const onLogin = async (user) => {
    const { error, data } = await login(user);
    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="font-bold leading-tight flex items-center mb-6 text-2xl text-gray-900 dark:text-white">
          {locale === 'id' ? 'Aplikasi Catatan Pribadi' : 'Personal Notes App'}
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {locale === 'id' ? 'Masuk ke Akun Anda' : 'Login to your account'}
            </h1>
            <LoginInput login={onLogin} locale={locale} />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {locale === 'id'
                ? 'Belum punya akun? '
                : 'Don’t have an account ? '}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                {locale === 'id' ? 'Daftar Disini' : 'Register here'}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex pt-7 text-sm space-x-16 leading-tight tracking-tight text-gray-900  dark:text-white">
          <ThemeButton
            isDarkMode={false}
            size={28}
            locale={locale}
            toggleTheme={toggleTheme}
            theme={theme}
          />
          <LanguageButton
            size={28}
            toggleLocale={toggleLocale}
            locale={locale}
          />
        </div>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};
