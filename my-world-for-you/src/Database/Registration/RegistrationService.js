import { auth, db } from '../Connection/FirebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export function registerUser(firstname, lastname, username, birthdate, email, firstPassword, secondPassword) {
    if (firstPassword === secondPassword) {
        createUserWithEmailAndPassword(auth, email, firstPassword)
            .then((userCredential) => {
                const uid = userCredential.user.uid;
                const userDocRef = doc(db, 'User-Data', uid);
                return setDoc(userDocRef, {
                    firstname,
                    lastname,
                    username,
                    birthdate,
                    email
                });
            })
            .then(() => {
                console.log('User successfully registered and data saved.');
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });
    } else {
        console.log('Passwords do not match.');
    }
}
