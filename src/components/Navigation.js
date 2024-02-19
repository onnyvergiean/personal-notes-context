import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaArchive, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/styles.css';
import LanguageButton from './LanguageButton';
import ThemeButton from './ThemeButton';
export default function Navigation({ logout, name }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="p-4 bg-gray-50 dark:bg-gray-900 h-full text-gray-900  dark:text-white">
      <div className="container flex flex-wrap justify-between items-center ">
        <Link to="/" className="flex items-center">
          <h1 className="self-center text-5xl font-semibold whitespace-nowrap ">
            {locale === 'id' ? 'Catatan Pribadi' : 'Personal Notes'}
          </h1>
        </Link>

        <div className="w-full md:block md:w-auto">
          <ul className="flex mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent  ">
            <li>
              <Link to="/notes/new" className="block py-2 pr-4 ">
                <AiFillPlusCircle size={30} />
              </Link>
            </li>
            <li>
              <Link to="/notes/archived" className="block py-2 pr-4 ">
                <FaArchive size={30} />
              </Link>
            </li>
            <li>
              <div className="py-2 pr-4 flex text-2xl">
                <ThemeButton
                  toggleTheme={toggleTheme}
                  size={30}
                  theme={theme}
                />
              </div>
            </li>
            <li>
              <div className="py-2 pr-4 flex text-2xl">
                <LanguageButton
                  toggleLocale={toggleLocale}
                  size={30}
                  locale={locale}
                />
              </div>
            </li>
            <li>
              <button onClick={logout} className="py-2 pr-4 flex">
                <FaSignOutAlt size={30} />
                <p className="pl-2 text-2xl">{name}</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
