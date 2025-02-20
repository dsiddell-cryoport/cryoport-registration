// Header.js
import React from 'react';
import CONFIG from '../config';

function Header() {
    return (
        <header>
            <img src={CONFIG.headerImage} alt="Header" className="header-image" />
            <h1>Welcome to {CONFIG.companyName} {CONFIG.productName} MONITORING!</h1>
            <p>Please choose from the options below to register your device for real-time monitoring.</p>
        </header>
    );
}

export default Header;