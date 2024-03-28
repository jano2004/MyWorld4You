// src/Database/Connection/firebaseConfig.js

// Import the functions needed from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-Soh8vZOP_Q0Ad5MN1kajq5G5rD1qRls",
    authDomain: "myworldforyou-e369c.firebaseapp.com",
    projectId: "myworldforyou-e369c",
    storageBucket: "myworldforyou-e369c.appspot.com",
    messagingSenderId: "878689819501",
    appId: "1:878689819501:web:366f29978ceeb8f68dd864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get an instance of Firebase Auth
const auth = getAuth(app);

export { app, auth };
