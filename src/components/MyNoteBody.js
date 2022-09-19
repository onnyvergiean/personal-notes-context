import React from 'react';
import { showFormattedDate } from '../utils';
import '../styles/styles.css';

export default function MyNoteBody({ body, createdAt }) {
  return (
    <>
      <h2 className="text-base font-medium text-300 mb-1">
        {showFormattedDate(createdAt)}
      </h2>
      <p className="leading-relaxed mb-3">
        {body.length > 150 ? body.substring(0, 150) + '...' : body}
      </p>
    </>
  );
}
