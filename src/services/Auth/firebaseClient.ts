import firebaseClient from 'firebase/compat/app';
import 'firebase/compat/auth';

const CLIENT_CONFIG = {
  measurementId: 'G-7N1JC7NX74',
  projectId: 'resenha-de-apostas',
  messagingSenderId: '924374576085',
  storageBucket: 'resenha-de-apostas.appspot.com',
  authDomain: 'resenha-de-apostas.firebaseapp.com',
  apiKey: 'AIzaSyAPAeINNPw-wX3EnUHd18OrYEszFNsMwKQ',
  appId: '1:924374576085:web:4041bd6c413bdd16c56b5c',
};

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
