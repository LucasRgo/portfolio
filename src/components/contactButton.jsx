import React, { useState, useRef, useEffect } from 'react';
import './contactButton.css';

const ContactButton = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const cardRef = useRef(null);

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
            {!isCardOpen && (
                <button className="floating-contact-button" onClick={handleToggleCard}>
                    Contact me here
                </button>
            )}
            {isCardOpen && (
                <div className="contact-card" ref={cardRef}>
                    <h3>Contact Options</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <button className="close-button" onClick={handleToggleCard}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default ContactButton;
