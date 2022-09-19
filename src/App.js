import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import PageNotFound from './pages/PageNotFound';
import AddNotePage from './pages/AddNotePage';
export default function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/archived" element={<ArchivedPage />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}
