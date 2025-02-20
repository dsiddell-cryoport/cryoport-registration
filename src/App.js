import React from 'react';
import Header from './components/Header';
import ContactSupport from './components/ContactSupport';
import RegisterDevice from './components/RegisterDevice';
import './css/styles.css';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <ContactSupport />
                <RegisterDevice />
            </div>
        </div>
    );
}

export default App;