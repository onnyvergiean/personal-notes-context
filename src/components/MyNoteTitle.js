import React from 'react';
import PropTypes from 'prop-types';

import '../styles/styles.css';
export default function MyNoteTitle({ title }) {
  return <h1 className="text-2xl font-semibold mb-3">{title}</h1>;
}

MyNoteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
