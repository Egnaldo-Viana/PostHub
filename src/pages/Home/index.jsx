// Página Home
// - Lista pública de todos os posts, mostrando título, autor e data.
// - Cada título é clicável e leva para a página de detalhes do post.

import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import { db } from '../../firebaseConnection';
import { collection, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
      let listaPost = [];

      snapshot.forEach((doc) => {
        listaPost.push({
          id: doc.id,
          titulo: doc.data().titulo,
          resumo: doc.data().resumo,
        });
      });
      setPosts(listaPost);
    });
    return () => unsub();
  }, []);

  return (
    <div className="conteiner-post">
      {posts.map((post) => {
        return (
          <Link to={`/post/${post.id}`} key={post.id}>
            <div className="post-home">
              <h2 className="post-titulo">{post.titulo}</h2>
              <p className="post-conteudo">{post.resumo}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
