import React from 'react';
import MyNoteItem from './MyNoteItem';
export default function MyNoteList({ notes }) {
  return (
    <>
      <div class="p-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <div class=" hover:bg-indigo-700 hover:text-white transition duration-300 ease-in rounded-lg">
            <MyNoteItem key={note.id} {...note} />
          </div>
        ))}
      </div>
    </>
  );
}
