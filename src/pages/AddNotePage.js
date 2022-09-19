import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { addNote } from '../utils/local-data';

export default function AddNotePage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
    });
    setTitle('');
    setBody('');
    navigate('/');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="p-4">
        <input
          type="text"
          className="w-full mb-3 h-50 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50  focus:outline-none focus:border-slate-800"
          placeholder="Masukkan Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          id="message"
          placeholder="Masukkan Isi Catatan"
          className="add_note__input border border-gray-300 rounded-lg px-4 py-2 bg-gray-50  focus:outline-none focus:border-slate-800"
          contentEditable
          value={body}
          onInput={(e) => setBody(e.target.innerHTML)}
        ></div>
        <button className="mt-2 w-full h-12 px-6 text-white transition-colors duration-150 bg-slate-600 rounded-lg focus:shadow-outline hover:bg-slate-800">
          Save
        </button>
      </div>
    </form>
  );
}
