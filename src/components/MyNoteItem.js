import React from 'react';
import PropTypes from 'prop-types';
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
            <UnArchiveButton id={id} onUnArchive={onUnArchive} size={30} />
          ) : (
            <ArchiveButton id={id} onArchive={onArchive} size={30} />
          )}
          <DeleteButton id={id} onDelete={onDelete} size={30} />
        </div>
      </div>
    </>
  );
}

MyNoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onArchive: PropTypes.func,
  onUnArchive: PropTypes.func,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};
