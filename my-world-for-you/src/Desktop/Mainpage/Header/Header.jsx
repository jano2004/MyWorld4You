import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { logoutUser } from '../../../Database/Logout/LogoutService';
import { auth } from '../../../Database/Connection/FirebaseConfig'; // Importieren Sie auth von FirebaseConfig
import { getFirstnameOfCurrentUser } from '../../../Database/Datafetch/DatafetchService';

function Header() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const name = await getFirstnameOfCurrentUser();
                    setFirstName(name);
                    setIsLoggedIn(true);
                } catch (error) {
                    console.error('Error fetching user name', error);
                }
            } else {
                setIsLoggedIn(false);
                setFirstName('');
            }
        });

        return () => unsubscribe();
    }, []);

    const loadLogin = () => navigate('/login');
    const loadLogout = async () => {
        try {
            await logoutUser();
            setIsLoggedIn(false);
            navigate('/desktop-mainpage');
        } catch (error) {
            console.log('Failed to log out!');
        }
    };

    const renderCommonButtons = () => (
        <>
            <button className='header_button_home'>HOME</button>
            <button className='header_button_coaching'>COACHING</button>
            <button className='header_button_weltreiseblog'>WELTREISEBLOG</button>
            <button className='header_button_kontakt'>KONTAKT</button>
        </>
    );

    return (
        <section className='main_header_section'>
            <div className='main_header_div_left'>
                {/* Linke Seite Inhalte */}
            </div>
            <div className='main_header_div_right'>
                {renderCommonButtons()}
                {isLoggedIn ?
                    <button className='header_button_user' onClick={loadLogout}>{firstName.toUpperCase() || "Loading..."}</button> :
                    <button className='header_button_login' onClick={loadLogin}>LOGIN</button>
                }
            </div>
        </section>
    );
}

export default Header;
