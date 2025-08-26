import React from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import '../../app.css';

const Cadastro = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const navegacao = useNavigate();

  const { cadastro } = React.useContext(AuthContext);

  async function cadastroUsuario(event) {
    event.preventDefault();

    try {
      await cadastro(email, senha);
      navegacao('/login');
      setEmail('');
      setSenha('');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Este e-mail já está em uso. Por favor, use outro.');
      } else if (error.code === 'auth/invalid-email') {
        alert('Formato de e-mail inválido.');
      } else if (error.code === 'auth/weak-password') {
        alert('A senha deve ter pelo menos 6 caracteres.');
      } else {
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={cadastroUsuario} className="login-form">
        <label> Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
