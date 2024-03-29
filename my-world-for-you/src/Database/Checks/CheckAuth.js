import { auth } from "../Connection/FirebaseConfig";

export async function checkIfUserLoggedIn() {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user.email, ' ', user.uid);
                resolve(user);
            } else {
                console.error('No user logged in:', 404, 'No user found!');
                resolve(null);
            }
        }, reject);
    });
}
