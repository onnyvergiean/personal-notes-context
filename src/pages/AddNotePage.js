import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/api';
import useInput from '../hooks/useInput';
import '../styles/styles.css';

export default function AddNotePage() {
  const [title, setTitle] = useInput('');
  const [body, setBody] = useInput('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
    });
    navigate('/');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="p-4 bg-gray-50 dark:bg-gray-900 h-screen text-gray-900  ">
        <input
          type="text"
          className="w-full mb-3 h-50 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50  focus:outline-none focus:border-slate-800"
          placeholder="Masukkan Judul"
          value={title}
          onChange={setTitle}
        />
        <div
          id="message"
          placeholder="Masukkan Isi Catatan"
          className="add_note__input border border-gray-300 rounded-lg px-4 py-2 bg-gray-50  focus:outline-none focus:border-slate-800"
          contentEditable
          value={body}
          onChange={setBody}
        ></div>
        <button className="mt-2 w-full h-12 px-6 text-white transition-colors duration-150 bg-slate-600 rounded-lg focus:shadow-outline hover:bg-slate-800 dark:hover:text-gray-900 dark:hover:bg-gray-200">
          Save
        </button>
      </div>
    </form>
  );
}
