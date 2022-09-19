import React from 'react';
import PropTypes from 'prop-types';
import MyNoteItem from './MyNoteItem';

export default function MyNoteList({
  notes,
  onArchive,
  onUnArchive,
  onDelete,
}) {
  if (notes.length === 0) {
    return (
      <p className="p-4 flex justify-center items-center font-semibold text-lg">
        No notes found
      </p>
    );
  }
  return (
    <>
      <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {notes.map((note, index) => (
          <div
            className=" hover:bg-slate-800 hover:text-white transition duration-300 ease-in rounded-lg"
            key={index}
          >
            <MyNoteItem
              key={note.id}
              {...note}
              onArchive={onArchive}
              onUnArchive={onUnArchive}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
}

MyNoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func,
  onUnArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};
