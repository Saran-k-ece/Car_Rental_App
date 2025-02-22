// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaiuV6QAuuELwo5Dv2LChJIewV_PYKydo",
  authDomain: "carrental-600a6.firebaseapp.com",
  projectId: "carrental-600a6",
  storageBucket: "carrental-600a6.firebasestorage.app",
  messagingSenderId: "1080554114471",
  appId: "1:1080554114471:web:d9eacd3948ebbb8d807a82",
  measurementId: "G-9Y19X945P3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);