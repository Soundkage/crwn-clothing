import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCcF3zdHKQUhRbwI5lfnqBGJ-UCBiIGlug',
  authDomain: 'crwn-db-b2d27.firebaseapp.com',
  projectId: 'crwn-db-b2d27',
  storageBucket: 'crwn-db-b2d27.appspot.com',
  messagingSenderId: '447108409848',
  appId: '1:447108409848:web:ec6d9881afd7b06fd0ce0d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
