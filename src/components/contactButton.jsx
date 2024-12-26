import React, { useState, useRef, useEffect } from 'react';
import './contactButton.css';

const ContactButton = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [copyMessage, setCopyMessage] = useState('');
    const cardRef = useRef(null);

    const handleToggleCard = () => {
        setIsCardOpen(!isCardOpen);
        setCopyMessage('');
    };

    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setIsCardOpen(false);
            setCopyMessage('');
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopyMessage(`${text} copied successfully!`);
        setTimeout(() => setCopyMessage(''), 2000);
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
                    <div
                        className="contact-item"
                        onClick={() => handleCopy('example@example.com')}
                    >
                        Email: example@example.com
                    </div>
                    <div
                        className="contact-item"
                        onClick={() => handleCopy('(123) 456-7890')}
                    >
                        Phone: (123) 456-7890
                    </div>
                    {copyMessage && <p className="copy-message">{copyMessage}</p>}
                    <button className="close-button" onClick={handleToggleCard}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default ContactButton;
