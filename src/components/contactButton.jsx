import React, { useState, useRef, useEffect } from 'react';
import './contactButton.css';

const ContactButton = () => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [copiedItem, setCopiedItem] = useState(null);
    const cardRef = useRef(null);

    const handleToggleCard = () => {
        setIsCardOpen(!isCardOpen);
        setCopiedItem(null);
    };

    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setIsCardOpen(false);
            setCopiedItem(null);
        }
    };

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(id);
        setTimeout(() => setCopiedItem(null), 2000); // Reset after 2 seconds
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
                    <h3>Contact</h3>
                    <div className="contact-table">
                        <div
                            className={`contact-row ${copiedItem === 'email' ? 'copied' : ''}`}
                            onClick={() => handleCopy('example@example.com', 'email')}
                        >
                            {copiedItem === 'email' ? 'Copied!' : 'example@example.com'}
                        </div>
                        <div
                            className={`contact-row ${copiedItem === 'phone' ? 'copied' : ''}`}
                            onClick={() => handleCopy('(123) 456-7890', 'phone')}
                        >
                            {copiedItem === 'phone' ? 'Copied!' : '(123) 456-7890'}
                        </div>
                        <div
                            className={`contact-row ${copiedItem === 'git' ? 'copied' : ''}`}
                            onClick={() => handleCopy('my github profile', 'git')}
                        >
                            {copiedItem === 'git' ? 'Copied!' : 'my github profile'}
                        </div>
                    </div>
                    <button className="close-button" onClick={handleToggleCard}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default ContactButton;
