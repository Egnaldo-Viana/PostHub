import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyArxbaKzZfaman8_ib932pJ9RThSd-oy-w',
  authDomain: 'posthub-62c18.firebaseapp.com',
  projectId: 'posthub-62c18',
  storageBucket: 'posthub-62c18.firebasestorage.app',
  messagingSenderId: '277291922320',
  appId: '1:277291922320:web:994e52207785b76cb5f915',
  measurementId: 'G-N6HF6JC3LG',
};

const firebaseApp = initializeApp(firebaseConfig);

// Inicializa o Firebase
const db = getFirestore(firebaseApp);

// Conecta ao Firestore
const auth = getAuth(firebaseApp);

export { db, auth };
