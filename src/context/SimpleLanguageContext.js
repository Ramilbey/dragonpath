import React, { createContext, useContext, useState } from 'react';

const SimpleLanguageContext = createContext();

export const useSimpleLanguage = () => {
  return useContext(SimpleLanguageContext);
};

export const SimpleLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  const value = {
    language,
    setLanguage,
    isEnglish: language === 'english',
    isRussian: language === 'russian', 
    isUzbek: language === 'uzbek'
  };

  return (
    <SimpleLanguageContext.Provider value={value}>
      {children}
    </SimpleLanguageContext.Provider>
  );
};