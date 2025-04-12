import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from '../pages/search';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };