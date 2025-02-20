// RegisterDevice.js
import React from 'react';
import CONFIG from '../config';
import bioconnectIcon from '../assets/bioconnect.png';
import registerUserIcon from '../assets/register-user.svg';
import loginUserIcon from '../assets/login-user.svg';

function RegisterDevice() {
    return (
        <div className="section register-device">
            <img src={bioconnectIcon} alt="BioConnect Icon" className="section-icon large-icon" />
            <h2>Already authorized for {CONFIG.productName}?</h2>
            <p>Register your device now!</p>
            <div className="icon-text-container">
                <div className="icon-text">
                    <img src={registerUserIcon} alt="Register User Icon" className="register-icon" />
                    <a href={CONFIG.registerNewUser} className="register-link">Register as a new user</a>
                </div>
                <div className="icon-text">
                    <img src={loginUserIcon} alt="Login User Icon" className="register-icon" />
                    <a href={CONFIG.registerDevice} className="register-link">Register a device to an existing user account</a>
                </div>
            </div>
        </div>
    );
}

export default RegisterDevice;