// RegisterDevice.js
import React from 'react';
import CONFIG from '../config';

function RegisterDevice() {
    return (
        <div className="register-device">
            <h2>Already authorized for {CONFIG.productName}?</h2>
            <p>Register your device now!</p>
            <a href={CONFIG.registerNewUser} className="register-link">Register as a new user</a>
            <a href={CONFIG.registerDevice} className="register-link">Register a device to an existing user account</a>
        </div>
    );
}

export default RegisterDevice;