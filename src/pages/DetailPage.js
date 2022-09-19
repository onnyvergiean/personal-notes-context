import React from 'react';
import parse from 'html-react-parser';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/local-data';
import { showFormattedDate } from '../utils';
import PageNotFound from './PageNotFound';
import ArchiveButton from '../components/ArchiveButton';
import UnArchiveButton from '../components/UnArchiveButton';
import DeleteButton from '../components/DeleteButton';

export default function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();
  const onDeleteHandler = (id) => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    navigate('/notes/archived');
  };
  const onUnArchiveHandler = (id) => {
    unarchiveNote(id);
    navigate('/');
  };
  if (!note) {
    return <PageNotFound />;
  }

  return (
    <div className="p-4">
      <h2 className="font-medium leading-tight text-4xl mt-8 mb-2">
        {note.title}
      </h2>
      <p className="leading-relaxed mb-6">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="font-medium leading-tight mb-2 ">{parse(note.body)}</p>
      <div className="flex justify-between mt-96 ">
        {note.archived ? (
          <UnArchiveButton
            id={note.id}
            onUnArchive={onUnArchiveHandler}
            size={45}
          />
        ) : (
          <ArchiveButton id={note.id} onArchive={onArchiveHandler} size={45} />
        )}
        <DeleteButton id={note.id} onDelete={onDeleteHandler} size={45} />
      </div>
    </div>
  );
}
