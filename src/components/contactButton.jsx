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
        setTimeout(() => setCopiedItem(null), 3000);
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
                        {/* Email */}
                        <div
                            className={`contact-row ${copiedItem === 'email' ? 'copied' : ''}`}
                            onClick={() => handleCopy('example@example.com', 'email')}
                        >
                            <span className="contact-label">
                                <i className="fas fa-envelope"></i> Email
                            </span>
                            <span className="contact-value">
                                {copiedItem === 'email' ? 'Copied!' : 'example@example.com'}
                            </span>
                            <i className="fas fa-copy action-icon"></i>
                        </div>

                        {/* Phone */}
                        <div
                            className={`contact-row ${copiedItem === 'phone' ? 'copied' : ''}`}
                            onClick={() => handleCopy('(123) 456-7890', 'phone')}
                        >
                            <span className="contact-label">
                                <i className="fas fa-phone"></i> Phone
                            </span>
                            <span className="contact-value">
                                {copiedItem === 'phone' ? 'Copied!' : '(123) 456-7890'}
                            </span>
                            <i className="fas fa-copy action-icon"></i>
                        </div>

                        {/* LinkedIn */}
                        <div
                            className="contact-row"
                            onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
                        >
                            <span className="contact-label">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </span>
                            <span className="contact-value">LucasRgoDev</span>
                            <i className="fas fa-external-link-alt action-icon"></i>
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
