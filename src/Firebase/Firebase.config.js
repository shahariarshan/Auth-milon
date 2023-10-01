// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDriWf27B3a8b-Iq5dooEBeyncT0-aq4Uc",
  authDomain: "auth-milon-6160d.firebaseapp.com",
  projectId: "auth-milon-6160d",
  storageBucket: "auth-milon-6160d.appspot.com",
  messagingSenderId: "924326510305",
  appId: "1:924326510305:web:84d6e08ccad544ffa7c1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;