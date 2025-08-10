import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Erro from './pages/Erro';

import Header from './components/Header';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
