import React from 'react';
import PropTypes from 'prop-types';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeButton({ theme, size, toggleTheme }) {
  return (
    <button className="flex" onClick={toggleTheme}>
      {theme === 'light' ? (
        <MdDarkMode size={size} />
      ) : (
        <MdLightMode size={size} />
      )}
    </button>
  );
}

ThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
