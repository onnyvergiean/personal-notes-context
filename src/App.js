import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';

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
        </Routes>
      </main>
    </div>
  );
}
