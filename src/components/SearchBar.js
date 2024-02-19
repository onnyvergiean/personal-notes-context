import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';
export default function SearchBar({ keyword, keywordChange, locale }) {
  const onKeywordChange = (e) => {
    keywordChange(e.target.value);
  };
  return (
    <div className="p-4">
      <input
        type="text"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
        placeholder={locale === 'id' ? 'Cari catatan...' : 'Search notes...'}
        value={keyword}
        onChange={onKeywordChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
