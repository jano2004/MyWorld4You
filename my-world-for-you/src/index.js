import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login/Front-End/Login';
import reportWebVitals from './reportWebVitals';
import { auth } from './Database/Connection/firebaseConfig';
import Logout from "./Login/Logout/Logout";

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                console.log(currentUser.email, currentUser.uid);
                setUser(currentUser);
            } else {
                console.error('No user logged in:', 404, 'No user found!');
                setUser(null);
            }
        });

        // Cleanup beim Unmount
        return () => unsubscribe();
    }, []);

    return (
        <React.StrictMode>
            {user ? <Logout /> : <Login />}
        </React.StrictMode>
    );
}

root.render(<App />);

reportWebVitals();
