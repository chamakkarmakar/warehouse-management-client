import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-SAlWKgciQNkL-50WmcRidB81KZ5NfO0",
    authDomain: "warehouse-management-cli-2f12c.firebaseapp.com",
    projectId: "warehouse-management-cli-2f12c",
    storageBucket: "warehouse-management-cli-2f12c.appspot.com",
    messagingSenderId: "208276531590",
    appId: "1:208276531590:web:4d5e2ea4f758241618a407"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;