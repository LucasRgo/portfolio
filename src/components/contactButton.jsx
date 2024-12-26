import './contactButton.css';
import React, { useState, useRef, useEffect } from 'react';

const ContactButton = () => {
    const [isCardOpen , setIsCardOpen]= useState(false);

    const handleToggleCard = () => {
        setIsCardOpen(!isCardOpen);
    };

    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
          setIsCardOpen(false);
        }
    };

    useEffect(() => {
        if (isCardOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCardOpen]);

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
