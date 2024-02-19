import React, { useState, useEffect, useContext } from 'react';
import parse from 'html-react-parser';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/api';
import { ThemeContext } from '../contexts/ThemeContext';
import { showFormattedDate } from '../utils';

import PageNotFound from './PageNotFound';
import ArchiveButton from '../components/ArchiveButton';
import UnArchiveButton from '../components/UnArchiveButton';
import DeleteButton from '../components/DeleteButton';
import Spinner from '../components/Spinner';

export default function DetailPage() {
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
        if (!data) {
          throw new Error('Note not found');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    fetchNote();
  }, [id]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    navigate('/notes/archived');
  };

  const onUnArchiveHandler = async (id) => {
    await unarchiveNote(id);
    navigate('/');
  };

  if (error) {
    return <PageNotFound />;
  }

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-50 dark:bg-gray-900 h-screen text-gray-900  dark:text-white ">
        <div className="pt-36 flex justify-center ">
          <Spinner
            type="spinningBubbles"
            color={theme === 'light' ? 'dark' : 'white'}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 h-screen text-gray-900  dark:text-white ">
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
