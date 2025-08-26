import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import CriarPost from './pages/CriarPost';
import EditarPost from './pages/EditarPost';
import DetalhePost from './pages/DetalhePost';
import Cadastro from './pages/Cadastro';

import Erro from './pages/Erro';

import Header from './components/Header';
import PrivateRoute from './PrivateRoute';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/novo-post"
          element={
            <PrivateRoute>
              <CriarPost />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<DetalhePost />} />
        <Route
          path="/editar/:id"
          element={
            <PrivateRoute>
              <EditarPost />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
