import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { LocationPage } from './pages/LocationPage';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import 'animate.css';

export default function App() {
  // Routes => Container tout les chemin à définir
  // Route => Definir le chemin (path) et le composant (page)
  // À utiliser pour le chemin défini dans la `path`

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
