import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Movie, Person, Search } from '../../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };