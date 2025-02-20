// Header.js
import React from 'react';
import CONFIG from '../config';

//import logo from '../assets/cryoport-svg.svg';
const strLogo = CONFIG.headerImage;
//import logo from '${strLogo}';

function Header() {
    return (
        <header className="header">
            <img src={strLogo} alt="Company Logo" className="header-logo" />
            <div className="header-text">
                <h1>Welcome to {CONFIG.companyName} {CONFIG.productName}!</h1>
                <p className="header-subtext">Please choose from the options below to register your device for real-time monitoring.</p>
            </div>
        </header>
    );
}

export default Header;