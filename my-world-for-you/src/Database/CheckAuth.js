import {auth} from "./Connection/firebaseConfig";

export function checkIfUserLoggedIn() {
    if(auth.currentUser != null) {
        let currentUser = auth.currentUser;
        console.log(currentUser.email, ' ', currentUser.uid)
        return currentUser;
    } else {
        console.error('No user loged in:,', 404, 'No user found!');
        return null;
    }
}