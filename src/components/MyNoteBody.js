import React from 'react';
import { showFormattedDate } from '../utils';
import '../styles/styles.css';
export default function MyNoteBody({ body, createdAt }) {
  return (
    <>
      <h2 class="text-base font-medium text-300 mb-1">
        {showFormattedDate(createdAt)}
      </h2>
      <p class="leading-relaxed mb-3">{body}</p>
    </>
  );
}
