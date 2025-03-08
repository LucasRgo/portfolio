import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const userLanguage = navigator.language || navigator.userLanguage;
        const languageCode = userLanguage.startsWith('pt') ? 'pt' : 'en';
        setLanguage(languageCode);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;