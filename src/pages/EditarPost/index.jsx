import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import '../../app.css';

const EditarPost = () => {
  const { id } = useParams();
  const navegacao = useNavigate();

  const [titulo, setTitulo] = React.useState('');
  const [resumo, setResumo] = React.useState('');
  const [conteudo, setConteudo] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function buscarPost() {
      try {
        const postRef = doc(db, 'posts', id);
        const snapshot = await getDoc(postRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (!auth.currentUser || auth.currentUser.uid !== data.autor.id) {
            alert('Você não tem permissão para editar este post.');
            navegacao('/');
            return;
          }
          setTitulo(data.titulo);
          setResumo(data.resumo);
          setConteudo(data.conteudo);
        } else {
          alert('Post não encontrado.');
          navegacao('/');
        }
      } catch (e) {
        alert('Erro ao buscar post.');
        navegacao('/');
      } finally {
        setLoading(false);
      }
    }
    buscarPost();
  }, [id, navegacao]);

  async function salvarAlteracoes(event) {
    event.preventDefault();
    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, {
        titulo,
        resumo,
        conteudo,
      });
      alert('Post atualizado com sucesso!');
      navegacao('/');
    } catch (e) {
      alert('Erro ao atualizar post.');
    }
  }

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="container">
      <form onSubmit={salvarAlteracoes} className="post">
        <label>Título:</label>
        <input
          type="text"
          placeholder="Digite o título do post"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <label>Resumo:</label>
        <textarea
          placeholder="Digite o resumo do post"
          value={resumo}
          onChange={(e) => setResumo(e.target.value)}
          required
        />

        <label>Conteúdo:</label>
        <textarea
          placeholder="Digite o conteúdo do post"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          required
        />

        <button type="submit">Salvar Alterações</button>
        <Link to="/">Cancelar</Link>
      </form>
    </div>
  );
};

export default EditarPost;
