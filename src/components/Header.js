// Header.js
import React from 'react';
import CONFIG from '../config';
import logo from '{CONFIG.headerImage}';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Company Logo" className="header-logo" />
            <div className="header-text">
                <h1>Welcome to {CONFIG.companyName} {CONFIG.productName}!</h1>
                <p className="header-subtext">Please choose from the options below to register your device for real-time monitoring.</p>
            </div>
        </header>
    );
}

export default Header;