import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';

import '../../app.css';

const CriarPost = () => {
  const [titulo, setTitulo] = React.useState('');
  const [conteudo, setConteudo] = React.useState('');
  const [resumo, setResumo] = React.useState('');

  const navegacao = useNavigate();

  async function salvarPost(event) {
    event.preventDefault();

    if (!auth.currentUser) {
      alert('Você precisa estar logado para criar um post.');
      navegacao('/login');
      return;
    }

    await addDoc(collection(db, 'posts'), {
      autor: {
        id: auth.currentUser.uid,
        nome: auth.currentUser.displayName || auth.currentUser.email,
      },
      titulo,
      resumo,
      conteudo,
    })
      .then(() => {
        setTitulo('');
        setConteudo('');
        setResumo('');
        navegacao('/');
      })
      .catch((error) => {
        alert('ocorreu um erro ao criar post ');
      });
  }

  return (
    <div className="container">
      <form onSubmit={salvarPost} className="post">
        <label>Título:</label>
        <input
          type="text"
          placeholder="Digite o título do post"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          required
        />

        <label> Resumo: </label>
        <textarea
          placeholder="Digite o resumo do post"
          value={resumo}
          onChange={(event) => setResumo(event.target.value)}
          required
        />
        <label> Conteúdo: </label>
        <textarea
          placeholder="Digite o conteúdo do post"
          value={conteudo}
          onChange={(event) => setConteudo(event.target.value)}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CriarPost;
