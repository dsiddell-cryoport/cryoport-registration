// ContactSupport.js
import React from 'react';
import CONFIG from '../config';
import supportIcon from '../assets/support.svg';
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';

function ContactSupport() {
    return (
        <div className="section contact-support">
            <h2>Not familiar with {CONFIG.productName}?</h2>
            <p>Our support experts can help!</p>
            <img src={supportIcon} alt="Support Icon" className="section-icon large-icon" />
            <div className="icon-text-container">
                <div className="icon-text">
                    <img src={emailIcon} alt="Email Icon" className="contact-icon" />
                    <a href={CONFIG.contactEmail} className="contact-link">Contact us by Email</a>
                </div>
                <div className="icon-text">
                    <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
                    <a href={CONFIG.contactPhone} className="contact-link">Contact us by Phone</a>
                </div>
            </div>
        </div>
    );
}

export default ContactSupport;