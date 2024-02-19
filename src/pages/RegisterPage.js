import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import LanguageButton from '../components/LanguageButton';
import ThemeButton from './../components/ThemeButton';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';
export default function RegisterPage() {
  const navigate = useNavigate();
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {locale === 'id' ? 'Buat Akun Baru' : 'Create an account'}
            </h1>
            <RegisterInput register={onRegisterHandler} locale={locale} />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {locale === 'id'
                ? 'Sudah punya akun? '
                : 'Already have an account? '}
              <Link
                to="/"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                {locale === 'id' ? 'Masuk Disini' : 'Login here'}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex text-sm pt-7 space-x-16 leading-tight tracking-tight text-gray-900  dark:text-white">
          <ThemeButton
            isDarkMode={false}
            size={28}
            locale={locale}
            theme={theme}
            toggleTheme={toggleTheme}
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
