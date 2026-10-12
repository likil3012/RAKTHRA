import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCBzwG_OPX-NxZ5TQwjN3Uki6XBGJBjEB0",
  authDomain: "rakthra-d4d1e.firebaseapp.com",
  projectId: "rakthra-d4d1e",
  storageBucket: "rakthra-d4d1e.firebasestorage.app",
  messagingSenderId: "1088857872702",
  appId: "1:1088857872702:web:d5b966c3d329f96206f46f",
  measurementId: "G-T8KYQRC3NQ"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};