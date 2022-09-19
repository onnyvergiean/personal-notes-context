import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { showFormattedDate } from '../utils';
import '../styles/styles.css';

export default function MyNoteBody({ body, createdAt }) {
  return (
    <>
      <h2 className="text-base font-medium text-300 mb-1">
        {showFormattedDate(createdAt)}
      </h2>
      <div className="leading-relaxed mb-3">
        {parse(body.length > 150 ? body.substring(0, 150) + '...' : body)}
      </div>
    </>
  );
}

MyNoteBody.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
