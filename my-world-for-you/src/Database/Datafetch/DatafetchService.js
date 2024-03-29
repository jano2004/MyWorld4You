import { auth, db } from '../Connection/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export async function getFirstnameOfCurrentUser() {
    const currentUserUID = auth.currentUser?.uid;

    if (!currentUserUID) {
        console.log('No user is currently signed in.');
        return '';
    }
    const docRef = doc(db, "User-Data", currentUserUID);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().firstname;
        } else {
            console.log('No such document!');
            return '';
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return '';
    }
}