import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import CriarPost from './pages/CriarPost';
import DetalhePost from './pages/DetalhePost';
import Erro from './pages/Erro';

import Header from './components/Header';

const RoutesApp = ({ posts, addPost }) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/novo-post" element={<CriarPost addPost={addPost} />} />
        <Route path="/post/:id" element={<DetalhePost />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
