import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { archiveNote, deleteNote, getActiveNotes } from '../utils/api';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';
import MyNoteList from '../components/MyNoteList';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';

import '../styles/styles.css';
export default function HomePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const fetchNotes = async () => {
    const { data } = await getActiveNotes();
    setNotes(data);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    fetchNotes();
  }, [setIsLoading]);

  const onKeywordHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    fetchNotes();
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <h1 className="font-medium leading-tight text-3xl p-5 text-gray-900  dark:text-white ">
        {locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}
      </h1>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordHandler}
        locale={locale}
      />
      {isLoading ? (
        <div className="pt-36 flex justify-center ">
          <Spinner
            type="spinningBubbles"
            color={theme === 'light' ? 'dark' : 'white'}
          />
        </div>
      ) : (
        <MyNoteList
          notes={filteredNotes}
          onArchive={onArchiveHandler}
          onDelete={onDeleteHandler}
          locale={locale}
        />
      )}
    </section>
  );
}
