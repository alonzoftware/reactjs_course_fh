// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsJ9ZH_sNgkApS2nY7FFbjf27vbjPrdPs",
  authDomain: "learningfirebase-9f6fa.firebaseapp.com",
  databaseURL: "https://learningfirebase-9f6fa.firebaseio.com",
  projectId: "learningfirebase-9f6fa",
  storageBucket: "learningfirebase-9f6fa.appspot.com",
  messagingSenderId: "789932073512",
  appId: "1:789932073512:web:3d001a454bf7b2dacd4b1d",
  measurementId: "G-DE5XV3VJ2X"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);