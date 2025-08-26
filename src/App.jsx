import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  const [posts, setPosts] = React.useState([]);
  //  aqui está adicionando um novoPost ao array atual de posts.
  // O ...posts espalha os posts antigos e o novoPosts é colocado no final.
  function addPost(novoPost) {
    setPosts([...posts, novoPost]);
  }

  //  addPost={addPost}
  //        o primeiro addPost é o nome da prop
  //        o segundo addPost é a função definida no App que será enviada como valor dessa prop.

  return (
    <AuthProvider>
      <RoutesApp addPost={addPost} posts={posts} />
    </AuthProvider>
  );
};

export default App;
