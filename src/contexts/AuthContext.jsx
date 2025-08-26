import React from 'react';

import { auth } from '../firebaseConnection';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  //funcao cadastro
  const cadastro = async (email, senha) => {
    return createUserWithEmailAndPassword(auth, email, senha);
  };

  // funcao de login
  const login = async (email, senha) => {
    return signInWithEmailAndPassword(auth, email, senha);
  };

  // funcao de logout
  const logout = async (email, senha) => {
    return signOut(auth);
  };

  // monitora se o usuario esta logado ou nao
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, cadastro, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
