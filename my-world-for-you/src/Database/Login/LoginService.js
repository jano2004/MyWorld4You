import { auth } from '../Connection/FirebaseConfig'; // Importiere die auth-Instanz aus deiner Firebase-Konfigurationsdatei
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';

export const loginUser = (email, password) => {
    return setPersistence(auth, browserLocalPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
            console.error("Login failed:", error);
            throw error;
        });
};