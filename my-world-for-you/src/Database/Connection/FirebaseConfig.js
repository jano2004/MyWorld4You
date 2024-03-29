import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-Soh8vZOP_Q0Ad5MN1kajq5G5rD1qRls",
    authDomain: "myworldforyou-e369c.firebaseapp.com",
    projectId: "myworldforyou-e369c",
    storageBucket: "myworldforyou-e369c.appspot.com",
    messagingSenderId: "878689819501",
    appId: "1:878689819501:web:366f29978ceeb8f68dd864"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
