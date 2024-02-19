import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes, unarchiveNote, deleteNote } from '../utils/api';
import MyNoteList from '../components/MyNoteList';
import SearchBar from '../components/SearchBar';
import { ThemeContext } from './../contexts/ThemeContext';
import { LocaleContext } from './../contexts/LocaleContext';
import Spinner from './../components/Spinner';
import '../styles/styles.css';
export default function ArchivedPage() {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const defaultKeyword = searchParams.get('keyword');
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const fetchArchivedNotes = async () => {
    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    fetchArchivedNotes();
  }, [setIsLoading]);

  const onKeywordHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const onUnArchivedHandler = async (id) => {
    await unarchiveNote(id);
    fetchArchivedNotes();
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    fetchArchivedNotes();
  };
  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen ">
      <h1 className="font-medium leading-tight text-3xl p-5 text-gray-900  dark:text-white ">
        {locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}
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
          onUnArchive={onUnArchivedHandler}
          onDelete={onDeleteHandler}
        />
      )}
    </section>
  );
}
