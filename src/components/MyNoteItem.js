import React from 'react';
import { Link } from 'react-router-dom';
import ArchiveButton from './ArchiveButton';
import UnArchiveButton from './UnArchiveButton';
import DeleteButton from './DeleteButton';
import MyNoteBody from './MyNoteBody';
import MyNoteTitle from './MyNoteTitle';

export default function MyNoteItem({
  id,
  title,
  body,
  createdAt,
  onArchive,
  onUnArchive,
  archived,
  onDelete,
}) {
  return (
    <>
      <div className="p-6 h-full border-2 border-gray-200 border-opacity-60 rounded-lg">
        <div className="cursor-pointer">
          <Link to={`/notes/${id}`}>
            <MyNoteTitle title={title} />
            <MyNoteBody body={body} createdAt={createdAt} />
          </Link>
        </div>
        <div className="flex items-center flex-wrap ">
          {archived ? (
            <UnArchiveButton id={id} onUnArchive={onUnArchive} />
          ) : (
            <ArchiveButton id={id} onArchive={onArchive} />
          )}
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
      </div>
    </>
  );
}
