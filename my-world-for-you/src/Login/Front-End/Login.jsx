import React, { useState } from 'react'; // Import useState for managing email and password inputs
import './Login.css';
import { loginUser } from '../Back-End/DatabaseConnection.js';

function Login() {
    const [email, setEmail] = useState(''); // Use useState to manage email
    const [password, setPassword] = useState(''); // Use useState to manage password

    // Function to handle login on button click
    const handleLogin = () => {
        loginUser(email, password);
    };

    return (
        <section className="login_main_section">
            <div className="login_main_div">
                <input
                    className="username_input"
                    id="usernameInput"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)} // Set email state on change
                />
                <input
                    className="password_input"
                    id="passwordInput"
                    type="password" // Change type to password for security
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} // Set password state on change
                />
                <button
                    className="login_button"
                    id="loginButton"
                    type="button" // Change type to button to prevent form submission
                    onClick={handleLogin} // Call handleLogin when button is clicked
                >
                    LOGIN
                </button>
            </div>
        </section>
    );
}

export default Login;