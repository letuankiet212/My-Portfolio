// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDJkkpO__dH8-is3fiOQJkYzdW6gLDCHaQ',
  authDomain: 'vue-porfolio.firebaseapp.com',
  databaseURL: 'https://vue-porfolio-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vue-porfolio',
  storageBucket: 'vue-porfolio.appspot.com',
  messagingSenderId: '706570572367',
  appId: '1:706570572367:web:4b574724d2df441a32903a',
  measurementId: 'G-JPYR7P3SKD'
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
