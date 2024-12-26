import './contactButton.css';
import React, { useState } from 'react';

const ContactButton = () => {
    const [isCardOpen , setIsCardOpen]= useState(false);

    const handleToggleCard = () => {
        setIsCardOpen(!isCardOpen);
      };

    return (
        <>
            <button className="floating-contact-button" onClick={handleToggleCard}>
                {isCardOpen ? 'Close' : 'Contact me here'}
            </button>
            {isCardOpen && (
                <div className="contact-card">
                <h3>Contact Information</h3>
                <p>Email: example@example.com</p>
                <p>Phone: (123) 456-7890</p>
                </div>
            )}
        </>
    );
};

export default ContactButton;
