import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../app.css';

import { db } from '../../firebaseConnection';
import { collection, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const navigate = useNavigate();

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
    <div className="container-post">
      {posts.map((post) => (
        <div className="post-home" key={post.id}>
          <h2 className="post-titulo">{post.titulo}</h2>
          <p className="post-conteudo">{post.resumo}</p>
          <button
            className="ver-mais"
            onClick={() => navigate(`/post/${post.id}`)}
          >
            Ver matéria completa
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
