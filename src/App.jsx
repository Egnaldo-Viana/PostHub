import RoutesApp from './routes';

// 🧠 Desafio: Blog Colaborativo com Autenticação e CRUD Protegido
// Objetivo: Criar um blog onde usuários podem se cadastrar, logar e gerenciar seus próprios posts (criar, editar, excluir). Os posts dos outros usuários aparecem na lista, mas só o dono pode alterar.

// 📌 Requisitos:

// Página Home

// Lista pública de todos os posts, mostrando título, autor e data.

// Cada título é clicável e leva para a página de detalhes do post.

// Página Cadastro de Usuário / Login

// Formulários para criar conta e fazer login usando Firebase Auth.

// Após login, mostrar boas-vindas com email do usuário e botão para logout.

// Página Criar Post (/novo-post)

// Formulário para título e conteúdo.

// Ao cadastrar, o post é salvo com o ID do usuário como autor.

// Página Editar Post (/editar-post/:id)

// Só acessível se o usuário for autor do post.

// Permite alterar título e conteúdo.

// Página Detalhes do Post (/post/:id)

// Exibe título, autor e conteúdo.

// Se o usuário logado for o autor, mostra botões para editar ou excluir o post.

// Header

// Links para Home, Criar Post e Login/Logout (condicional).

// 🛠️ Dicas Técnicas:

// Use React Router: Routes, Route, Link, useParams, Navigate para redirecionar.

// Use Firebase Auth para autenticação e Firestore para posts.

// No Firestore, cada post deve ter campo autor com UID do usuário.

// Use onAuthStateChanged para gerenciar o estado do usuário.

// Controle permissões no front-end: só deixe editar/excluir quem for dono.

// Armazene posts com ID único (Firestore já gera).

// Opcional: implemente um contexto para usuário logado para facilitar acesso global.

const App = () => {
  return <RoutesApp />;
};

export default App;
