import React from 'react';
import './criarPost.css';

import { useNavigate } from 'react-router-dom';

// Página Criar Post (/novo-post)

// Um formulário com campos Título e Conteúdo (e opcionalmente Data).
// Um botão para salvar o post.
// Ao salvar, o post deve ser adicionado no seu estado global (ou Firestore, se já quiser integrar).
// Depois do cadastro, você pode redirecionar para a Home ou limpar os campos para cadastrar outro.

// Recebe a função addPost via props, que vem do componente pai (App).
// Essa função adiciona o novo post no estado global de posts.
const CriarPost = ({ addPost }) => {
  const [titulo, setTitulo] = React.useState('');
  const [conteudo, setConteudo] = React.useState('');

  const navegacao = useNavigate();

  function salvarPost(event) {
    event.preventDefault();

    // cria novo post com id simples
    const novoPost = {
      id: Date.now(),
      titulo,
      conteudo,
    };

    addPost(novoPost);
    setTitulo('');
    setConteudo('');

    navegacao('/');
    // aqui vai para a página home
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
        <br />
        <label> Conteúdo: </label>
        <textarea
          placeholder="Digite o conteúdo do post"
          value={conteudo}
          onChange={(event) => setConteudo(event.target.value)}
          required
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CriarPost;
