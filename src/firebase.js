import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhICkmA39CMjKjCl3AYS-WBgdDi5kFIlc",
  authDomain: "disney-plus-clone-f4849.firebaseapp.com",
  projectId: "disney-plus-clone-f4849",
  storageBucket: "disney-plus-clone-f4849.appspot.com",
  messagingSenderId: "669714971028",
  appId: "1:669714971028:web:e64da771feef8f5974b781",
  measurementId: "G-MXGT0JJNQB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
