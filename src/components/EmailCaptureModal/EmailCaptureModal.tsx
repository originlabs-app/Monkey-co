import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/Button";
import { IconClose1 } from "@/icons/IconClose1";
import "./style.css";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setShowError(true);
      return;
    }

    if (!email || !validateEmail(email)) {
      setErrorMessage(t('footerCta.emailRequired'));
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Simulation d'API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccessMessage(t('footerCta.successMessage'));
      setEmail("");
      setConsent(false);
      
      // Fermer le modal après succès
      setTimeout(() => {
        onClose();
        setSuccessMessage("");
      }, 3000);
      
    } catch (error: any) {
      setErrorMessage(error.message || t('footerCta.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="email-modal-overlay" onClick={onClose}>
      <div className="email-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="email-modal-close" onClick={onClose}>
          <IconClose1 />
        </button>
        
        <div className="email-modal-header">
          <h2 className="email-modal-title">
            {title || t('modal.defaultTitle')}
          </h2>
          <p className="email-modal-subtitle">
            {subtitle || t('modal.defaultSubtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="email-modal-form">
          <div className="email-modal-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              placeholder={t('footerCta.emailPlaceholder')}
              className="email-modal-input"
              disabled={isLoading}
              required
            />
          </div>

          <div className="email-modal-consent">
            <label className="email-modal-consent-label">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setShowError(false);
                }}
                disabled={isLoading}
                className="email-modal-checkbox"
              />
              <span className="email-modal-consent-text">
                {t('footerCta.gdprConsent')}
              </span>
            </label>
            {showError && (
              <p className="email-modal-error">
                {t('footerCta.consentRequired')}
              </p>
            )}
          </div>

          {errorMessage && (
            <p className="email-modal-error-message">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="email-modal-success-message">
              {successMessage}
            </p>
          )}

          <Button
            className="email-modal-submit"
            size="lg"
            state={isLoading ? "disabled" : "default"}
            text={isLoading ? "Chargement..." : t('footerCta.subscribe')}
            variant={isLoading ? "disabled" : "primary"}
            visible={false}
            visible1={false}
            onClick={handleSubmit}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}; 