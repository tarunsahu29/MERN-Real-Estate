// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d43a3.firebaseapp.com",
  projectId: "mern-estate-d43a3",
  storageBucket: "mern-estate-d43a3.appspot.com",
  messagingSenderId: "1003666657915",
  appId: "1:1003666657915:web:26ad819c8220f20666c8de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);