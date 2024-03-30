import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../../../Database/Login/LoginService';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            console.log('Login successful');
            navigate('/desktop-mainpage');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const loadRegistration = () => {
        navigate('/register');
    };

    return (
        <section className='login_main_section'>
            <div className='login_main_div'>
                <div className='main_login_input_container'>
                    <input
                        className='username_input'
                        id='usernameInput'
                        type='text'
                        placeholder='E-MAIL'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='password_input'
                        id='passwordInput'
                        type='password'
                        placeholder='PASSWORT'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='main_login_button_container'>
                    <button
                        className='login_button'
                        id='loginButton'
                        type='button'
                        onClick={handleLogin}
                        >
                        LOGIN
                    </button>
                        <button onClick={loadRegistration}>JETZT REGISTRIEREN</button>
                    </div>
                </div>
        </section>
);
}

export default Login;
