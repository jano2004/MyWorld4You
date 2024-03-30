import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from "./Desktop/Mainpage/Main/Mainpage";
import MainMobile from "./Mobile/Mainpage/Main/MainMobile";
import Login from './Desktop/Login/Front-End/Login';
import Registrationpage from './Desktop/Registration/Front-End/Registration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/mobile-mainpage' element={<MainMobile />} />
                <Route path='/desktop-mainpage' element={<Mainpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registrationpage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
