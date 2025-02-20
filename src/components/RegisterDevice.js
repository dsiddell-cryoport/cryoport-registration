// RegisterDevice.js
import React from 'react';
import CONFIG from '../config';
import bioconnectIcon from '../assets/bioconnect.png';
import registerUserIcon from '../assets/register-user.svg';
import loginUserIcon from '../assets/login-user.svg';

function RegisterDevice() {
    return (
        <div className="register-device">
            <img src={bioconnectIcon} alt="BioConnect Icon" className="section-icon large-icon" />
            <h2>Already authorized for {CONFIG.productName}?</h2>
            <p>Register your device now!</p>
            <div className="register-links-wrapper">
                <div className="register-links centered">
                    <img src={registerUserIcon} alt="Register User Icon" className="register-icon" />
                    <a href={CONFIG.registerNewUser} className="register-link">Register as a new user</a>
                </div>
                <div className="register-links left-aligned">
                    <img src={loginUserIcon} alt="Login User Icon" className="register-icon" />
                    <a href={CONFIG.registerDevice} className="register-link">Register a device to an existing user account</a>
                </div>
            </div>
        </div>
    );
}

export default RegisterDevice;