import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

interface Language {
  code: string;
  name: string;
  flag: string;
  flagCode: string; // Code pays pour fallback
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', flagCode: 'FR' },
  { code: 'en', name: 'English', flag: '🇬🇧', flagCode: 'GB' },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fonction pour détecter si les emojis de drapeaux sont supportés
  const supportsFlagEmojis = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;
    
    ctx.font = '16px Arial';
    const text = '🇫🇷';
    const metrics = ctx.measureText(text);
    
    // Si la largeur est très petite, les emojis ne sont pas supportés
    return metrics.width > 10;
  };

  const [useEmojis, setUseEmojis] = useState(true);

  useEffect(() => {
    setUseEmojis(supportsFlagEmojis());
  }, []);

  const getFlagDisplay = (language: Language) => {
    if (useEmojis) {
      return language.flag;
    }
    // Fallback : utiliser le code pays
    return language.flagCode;
  };

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        className="language-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className={`language-flag ${!useEmojis ? 'flag-code' : ''}`}>
          {getFlagDisplay(currentLanguage)}
        </span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="language-dropdown-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className={`language-flag ${!useEmojis ? 'flag-code' : ''}`}>
                {getFlagDisplay(lang)}
              </span>
              <span className="language-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};