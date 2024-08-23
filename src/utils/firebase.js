// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogs-65151.firebaseapp.com",
  projectId: "blogs-65151",
  storageBucket: "blogs-65151.appspot.com",
  messagingSenderId: "134011124533",
  appId: "1:134011124533:web:5958f35d6daa6bb210ea7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);