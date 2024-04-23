// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbcwDHyVWfdCXcfklUH90k99a7Q_MrMcc",
  authDomain: "bookify-2d04e.firebaseapp.com",
  projectId: "bookify-2d04e",
  storageBucket: "bookify-2d04e.appspot.com",
  messagingSenderId: "179909471236",
  appId: "1:179909471236:web:554e27c1376d71332c1951",
  measurementId: "G-72DQ5SJB4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Export the app and services
export { auth, createUserWithEmailAndPassword };
export { firestore, storage };
