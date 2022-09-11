import React from 'react';

import MyNoteBody from './MyNoteBody';
import MyNoteTitle from './MyNoteTitle';

export default function MyNoteItem({ title, body, createdAt }) {
  return (
    <>
      <div class="p-6 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <MyNoteTitle title={title} />
        <MyNoteBody body={body} createdAt={createdAt} />
      </div>
    </>
  );
}
