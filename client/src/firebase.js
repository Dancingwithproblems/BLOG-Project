// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d22c0.firebaseapp.com",
  projectId: "mern-blog-d22c0",
  storageBucket: "mern-blog-d22c0.appspot.com",
  messagingSenderId: "1007466144072",
  appId: "1:1007466144072:web:d9384da405f71aad56937d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);