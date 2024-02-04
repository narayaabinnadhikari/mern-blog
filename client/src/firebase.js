// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2bd89.firebaseapp.com",
  projectId: "mern-blog-2bd89",
  storageBucket: "mern-blog-2bd89.appspot.com",
  messagingSenderId: "16796945554",
  appId: "1:16796945554:web:087ee1691961dd180eea4b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
