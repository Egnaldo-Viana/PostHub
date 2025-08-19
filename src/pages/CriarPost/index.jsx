import React from 'react';
import './criarPost.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';

// Página Criar Post (/novo-post)

// Um formulário com campos Título e Conteúdo (e opcionalmente Data).
// Um botão para salvar o post.
// Ao salvar, o post deve ser adicionado no seu estado global (ou Firestore, se já quiser integrar).
// Depois do cadastro, você pode redirecionar para a Home ou limpar os campos para cadastrar outro.

// Recebe a função addPost via props, que vem do componente pai (App).
// Essa função adiciona o novo post no estado global de posts.
const CriarPost = () => {
  const [autor, setAutor] = React.useState('');
  const [titulo, setTitulo] = React.useState('');
  const [conteudo, setConteudo] = React.useState('');
  const [resumo, setResumo] = React.useState('');

  const navegacao = useNavigate();

  async function salvarPost(event) {
    event.preventDefault();
    await addDoc(collection(db, 'posts'), {
      autor: autor,
      titulo: titulo,
      conteudo: conteudo,
      resumo: resumo,
    })
      .then(() => {
        setAutor('');
        setTitulo('');
        setConteudo('');
        setResumo('');
        navegacao('/');
      })
      .catch((error) => {
        alert('ocorreu um erro ao criar post ');
        navegacao('/');
      });
  }

  return (
    <div className="container">
      <form onSubmit={salvarPost} className="post">
        <label>Autor:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={autor}
          onChange={(event) => setAutor(event.target.value)}
          required
        />

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
