import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'pineapples.firebaseapp.com',
  databaseURL: 'https://pineapples-default-rtdb.firebaseio.com',
  projectId: 'pineapples-de10f',
  storageBucket: 'pineapples.appspot.com',
};

// initialize firebase and firestore
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore();
