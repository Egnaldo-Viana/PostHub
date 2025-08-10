import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

const Header = () => {
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
            <Link to="/login"> Login / Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
