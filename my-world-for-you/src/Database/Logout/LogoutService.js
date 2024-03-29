import { auth } from '../Connection/FirebaseConfig';
import { signOut } from 'firebase/auth';

export function logoutUser() {
    const currentUser = auth.currentUser;
    if (currentUser) {
        console.log('Logged out: ', currentUser.email, currentUser.uid);
        signOut(auth)
            .then(() => {
                console.log('User successfully logged out.');
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    } else {
        console.log('No user is currently signed in.');
    }
}
