import React, {useState} from 'react';
import './Registration.css';
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../../Database/Registration/RegistrationService";

function Registration() {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const registrationHandler = () => {
        registerUser(firstname, lastname, username, birthdate, email, firstPassword, secondPassword);
        navigate('/login');
    }

    const loadLogin = () => navigate('/login');

    return (
        <section className="register_main_section">
            <div className="register_main_div">
                <div className='main_register_input_container'>
                    <input
                        className="firstname_input"
                        id="firstnameInput"
                        type="text"
                        placeholder="VORNAME"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                        className="lastname_input"
                        id="lastnameInput"
                        type="text"
                        placeholder="NACHNAME"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <input
                        className="username_input"
                        id="usernameInput"
                        type="text"
                        placeholder="BENUTZERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="birthdate_input"
                        id="birthdateInput"
                        type="date"
                        placeholder="GEBURTSDATUM"
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                    <input
                        className="email_input"
                        id="emailInput"
                        type="text"
                        placeholder="E-MAIL"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="first_password_input"
                        id="firstPasswordInput"
                        type="password"
                        placeholder="PASSWORT"
                        onChange={(e) => setFirstPassword(e.target.value)}
                    />
                    <input
                        className="second_password_input"
                        id="secondPasswordInput"
                        type="password"
                        placeholder="PASSWORT WIEDERHOLEN"
                        onChange={(e) => setSecondPassword(e.target.value)}
                    />
                </div>
                <div className='main_register_button_container'>
                    <button
                        className="register_button"
                        id="registerButton"
                        type="button"
                        onClick={registrationHandler}
                    >
                        REGISTRIEREN
                    </button>
                    <button
                        className="login_button"
                        id="loginButton"
                        type="button"
                        onClick={loadLogin}
                    >
                        DOCH EHER EINLOGGEN
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Registration;
