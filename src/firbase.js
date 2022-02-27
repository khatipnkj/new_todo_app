// import firebase from "firebase";
// import firebase from 'firebase'
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyCO5NHB-Bz6ca0nQc3f4Py__slSazvjVM8",
  authDomain: "todo-app-73462.firebaseapp.com",
  projectId: "todo-app-73462",
  storageBucket: "todo-app-73462.appspot.com",
  messagingSenderId: "1042061000004",
  appId: "1:1042061000004:web:70ca7621133c4814096b11",
  measurementId: "G-7NB8946PZF",
});

const db = getFirestore();

export default db;

// import { initializeApp } from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);