// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBprXBVBAeb8ZtxGg1RlzigMzwVrTMIPCY",
  authDomain: "galaxyfire-native.firebaseapp.com",
  projectId: "galaxyfire-native",
  storageBucket: "galaxyfire-native.appspot.com",
  messagingSenderId: "1068476426379",
  appId: "1:1068476426379:web:0b2aadd0f1a437450d0c8e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
