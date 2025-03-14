import React, { useState, useRef, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import './contactButton.css';

const ContactButton = () => {
    const { language } = useContext(LanguageContext);
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
        setTimeout(() => setCopiedItem(null), 8000);
    };

    useEffect(() => {
        if (isCardOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCardOpen]);


    useEffect(() => {
        if (isCardOpen) {
          document.body.classList.add('card-open');
        } else {
          document.body.classList.remove('card-open');
        }

        return () => {
          document.body.classList.remove('card-open');
        };
    }, [isCardOpen]);

    return (
        <>
            {!isCardOpen && (
                <button className="floating-contact-button" onClick={handleToggleCard}>
                    {language === "pt" ? "Entre em contato" : "Contact me here"}
                </button>
            )}

            {isCardOpen && (
                <div className="contact-card" ref={cardRef}>
                    <h3>{language === "pt" ? "Contato" : "Contact"}</h3>
                    <div className="contact-table">
                        {/* Email */}
                        <div
                            className={`contact-row ${copiedItem === 'email' ? 'copied' : ''}`}
                            onClick={() => handleCopy('lucas.lrg0005@gmail.com', 'email')}
                        >
                            <span className="contact-label">
                                <i className="fas fa-envelope"></i> Email
                            </span>
                            <span className="contact-value">
                                {copiedItem === 'email' 
                                    ? (language === "pt" ? "Copiado!" : "Copied!") 
                                    : 'lucas.lrg0005@gmail.com'}
                            </span>
                            <i className="fas fa-copy action-icon"></i>
                        </div>

                        {/* Phone */}
                        <div
                            className={`contact-row ${copiedItem === 'phone' ? 'copied' : ''}`}
                            onClick={() => handleCopy('+55 (63) 99206-0528', 'phone')}
                        >
                            <span className="contact-label">
                                <i className="fas fa-phone"></i> {language === "pt" ? "Telefone" : "Phone"}
                            </span>
                            <span className="contact-value">
                                {copiedItem === 'phone' 
                                    ? (language === "pt" ? "Copiado!" : "Copied!") 
                                    : '+55 (63) 99206-0528'}
                            </span>
                            <i className="fas fa-copy action-icon"></i>
                        </div>

                        {/* LinkedIn */}
                        <div
                            className="contact-row"
                            onClick={() => window.open('https://www.linkedin.com/in/lucasrgoveiadev/', '_blank')}
                        >
                            <span className="contact-label">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </span>
                            <span className="contact-value">lucasrgoveiadev</span>
                            <i className="fas fa-external-link-alt action-icon"></i>
                        </div>
                    </div>
                    <button className="close-button" onClick={handleToggleCard}>
                        {language === "pt" ? "Fechar" : "Close"}
                    </button>
                </div>
            )}
        </>
    );
};

export default ContactButton;