import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from "./Mainpage/Main/Mainpage";
import Login from './Login/Front-End/Login';
import Registrationpage from './Registration/Front-End/Registration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/mainpage' element={<Mainpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registrationpage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
