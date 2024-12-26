import './contactButton.css';
import React, { useState } from 'react';

const ContactButton = () => {
    const [isCardOpen , setIsCardOpen]= useState(false);

    const handleToggleCard = () => {
        setIsCardOpen(!isCardOpen);
      };

    return (
        <button className="floating-contact-button" onClick={handleToggleCard}>
            {isCardOpen ? 'Close' : 'Contact me here'}
        </button>
    );
};

export default ContactButton;
