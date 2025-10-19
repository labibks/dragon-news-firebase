// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMqfP96jD0puZUEWSDPfchq_NPXLpy0S4",
  authDomain: "dragon-news-breaking-c78d7.firebaseapp.com",
  projectId: "dragon-news-breaking-c78d7",
  storageBucket: "dragon-news-breaking-c78d7.firebasestorage.app",
  messagingSenderId: "62403656363",
  appId: "1:62403656363:web:1a8458fd3318452aa715ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);