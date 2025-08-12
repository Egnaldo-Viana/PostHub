import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// Página Home
// - Lista pública de todos os posts, mostrando título, autor e data.
// - Cada título é clicável e leva para a página de detalhes do post.

const Home = ({ posts }) => {
  return (
    <div className="conteiner-post">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post-home">
            <Link to={`/post/${post.id}`}>
              <h2 className="post-titulo">{post.titulo}</h2>
              <p className="post-conteudo">{post.conteudo}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
