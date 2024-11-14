// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa3SGuUQ0zNuoOlmYO7OESgXoQ0UaFerY",
  authDomain: "dragon-news-9385b.firebaseapp.com",
  projectId: "dragon-news-9385b",
  storageBucket: "dragon-news-9385b.firebasestorage.app",
  messagingSenderId: "10565275181",
  appId: "1:10565275181:web:143d8c5d6f28e77445f2a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
export default app;
