import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyA6I5_SDEPwLySRQEyEw9zMDmih0EepWeA",
  authDomain: "nuxt-crypto.firebaseapp.com",
  projectId: "nuxt-crypto",
  storageBucket: "nuxt-crypto.appspot.com",
  messagingSenderId: "897200824699",
  appId: "1:897200824699:web:15cd2252a9392cd0c41dde"
};

!firebase.apps.length ? firebase.initializeApp(config) : '';

export const auth = firebase.auth();
export const db = firebase.firestore();
//export const userCollection = db.collection('users');
