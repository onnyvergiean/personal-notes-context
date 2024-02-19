import React from 'react';
import PropTypes from 'prop-types';
import { IoLanguageSharp } from 'react-icons/io5';
export default function LanguageButton({ toggleLocale, size }) {
  return (
    <button className="flex" onClick={toggleLocale}>
      <IoLanguageSharp size={size} />
    </button>
  );
}

LanguageButton.propTypes = {
  toggleLocale: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
