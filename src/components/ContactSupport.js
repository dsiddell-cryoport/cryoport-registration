// ContactSupport.js
import React from 'react';
import CONFIG from '../config';

function ContactSupport() {
    return (
        <div className="contact-support">
            <h2>Not familiar with {CONFIG.productName}?</h2>
            <p>Our support experts can help!</p>
            <a href={CONFIG.contactEmail} className="contact-link">Contact us by Email</a>
            <a href={CONFIG.contactPhone} className="contact-link">Contact us by Phone</a>
        </div>
    );
}

export default ContactSupport;