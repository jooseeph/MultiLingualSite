import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/Homepage';
import About from './pages/About';
import Page404 from './pages/404';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
