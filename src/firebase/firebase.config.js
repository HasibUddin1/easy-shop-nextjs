// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// TODO: must hide firebase config information
const firebaseConfig = {
  apiKey: "AIzaSyD0uHN62ORgr8g25bQqsTHyfR-W-1es3Xk",
  authDomain: "easy-shop-js.firebaseapp.com",
  projectId: "easy-shop-js",
  storageBucket: "easy-shop-js.appspot.com",
  messagingSenderId: "432225105142",
  appId: "1:432225105142:web:cb110ffa1733c39a6fe8d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;