// Página Cadastro de Usuário / Login
// - Formulários para criar conta e fazer login usando Firebase Auth.
// - Após login, mostrar boas-vindas com email do usuário e botão para logout.
import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const navegacao = useNavigate();

  async function logarUsuario(event) {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navegacao('/');
      })
      .catch(() => {
        alert('Erro ao fazer login');
      });
  }

  return (
    <div className="login-container">
      <form onSubmit={logarUsuario} className="login-form">
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

        <button>Entrar</button>
        <p>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
