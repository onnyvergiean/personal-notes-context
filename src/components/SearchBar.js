import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';
export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="p-4">
      <input
        type="text"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
        placeholder="Search Notes"
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
