import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'; // aqui estou importando o contexto de autenticacao

import '../../app.css';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const navegacao = useNavigate();

  const { login } = useContext(AuthContext);

  async function logarUsuario(event) {
    event.preventDefault();

    try {
      await login(email, senha); // aqui chama a funcao do contexto
      navegacao('/');
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={logarUsuario} className="login-form">
        <label> Email:</label>
        <input
          type="email"
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

        <button>Entrar</button>
        <p>
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="cadastre">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
