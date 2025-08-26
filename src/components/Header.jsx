import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  async function sair() {
    const confirma = window.confirm('Tem certeza que deseja sair da conta?');
    if (confirma) {
      await logout();
    }
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">PostHub</Link>
      </div>
      <nav>
        <ul className="nav-link">
          <li>
            <Link to="/novo-post">Criar Post</Link>
          </li>
          <li>
            {user ? (
              <Link onClick={sair} style={{ cursor: 'pointer' }}>
                {user.displayName || user.email} / sair
              </Link>
            ) : (
              <Link to="/login">Login / Cadastro</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
