import { app, auth } from '../../Database/Connection/firebaseConfig'; // Importieren der Firebase-Konfiguration und der Auth-Instanz
import { setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth';

export function loginUser(email, password) {
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .then((userCredential) => {
            console.log("Logged in user:", userCredential.user);
        })
        .catch((error) => {
            console.error("Login failed:", error);
        });
}

export function logoutUser() {
    auth.signOut();
}
