// Página Detalhes do Post (/post/:id)
// Exibe título, autor e conteúdo.
// Se o usuário logado for o autor, mostra botões para editar ou excluir o post.
import React from 'react';
import './detalhe.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection';
import { doc, getDoc } from 'firebase/firestore';

const DetalhePost = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function buscarPost() {
      try {
        const postRef = doc(db, 'posts', id);
        const snapshot = await getDoc(postRef);
        if (snapshot.exists()) {
          setPost(snapshot.data());
          setError(null);
        } else {
          setError('Post não encontrado');
        }
      } catch {
        setError('Erro ao buscar post');
      } finally {
        setLoading(false);
      }
    }
    buscarPost();
  }, [id]);

  if (loading) {
    return <h1>Carregando detalhes do post...</h1>;
  }
  if (error) {
    return (
      <p>
        {error} <Link to="/"> Voltar para Home</Link>
      </p>
    );
  }

  const usuarioLogado = auth.currentUser;
  const donoPost = usuarioLogado && usuarioLogado.uid === post.autor.id;

  return (
    <div className="detalhe-container">
      <div className="detalhe-post">
        <div className="detalhe-titulo">
          <h1>{post.titulo}</h1>
          <h4>{post.resumo}</h4>
        </div>
        <div className="detalhe-conteudo">
          <article>{post.conteudo}</article>
          <h3>Autor: {post.autor}</h3>
          <div className="detalhe-button">
            {donoPost ? (
              <div>
                <Link to="/">Voltar para Home</Link>
                <Link to="">Editar Post</Link>
                <Link to="">Excluir Post</Link>
              </div>
            ) : (
              <div>
                <Link to="/">Voltar para Home</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhePost;
