import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
export default function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  if (!note) {
    return <h1>404 - Not Found</h1>;
  }

  return (
    <>
      <h1>{note.title}</h1>
      <h1>{note.body}</h1>
    </>
  );
}
