import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBuVyllHCS2OAChxCyNn3OSGuyNo6e-0Bs",
  authDomain: "pry-portafolio3-62de4.firebaseapp.com",
  projectId: "pry-portafolio3-62de4",
  storageBucket: "pry-portafolio3-62de4.appspot.com",
  messagingSenderId: "722517368346",
  appId: "1:722517368346:web:80b42b1641a529182d7ba3"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();
