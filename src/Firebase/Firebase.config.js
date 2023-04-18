// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD8GfmJ4B-X0abNelmhGWqzdPl596SJtQ",
  authDomain: "practic-hotel-project.firebaseapp.com",
  projectId: "practic-hotel-project",
  storageBucket: "practic-hotel-project.appspot.com",
  messagingSenderId: "1014772851556",
  appId: "1:1014772851556:web:d7427541baa6403ea59071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;