import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@/components/Button";
import { logger } from "@/services/logger";

interface EmailCaptureSectionProps {
  screenWidth: number;
}

export const EmailCaptureSection: React.FC<EmailCaptureSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setShowError(false);
    setSuccessMessage("");
    setErrorMessage("");
    
    if (!email || !validateEmail(email)) {
      setShowError(true);
      setErrorMessage("Veuillez entrer une adresse email valide");
      return;
    }
    
    if (!consent) {
      setShowError(true);
      setErrorMessage("Veuillez accepter les conditions");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent })
      });
      
      if (response.ok) {
        setSuccessMessage("Inscription réussie ! Vérifiez votre email.");
        setEmail("");
        setConsent(false);
      } else {
        setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      logger.error('Error subscribing to newsletter:', error);
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="section-4"
      style={{
        alignSelf: "stretch",
        gap:
          screenWidth < 1440
            ? "24px"
            : screenWidth >= 1440
              ? "48px"
              : undefined,
        padding:
          screenWidth < 1440
            ? "48px 20px"
            : screenWidth >= 1440
              ? "64px"
              : undefined,
        width:
          screenWidth < 1440
            ? "100%"
            : screenWidth >= 1440
              ? "100%"
              : undefined,
      }}
    >
      <div
        className="heading-2"
        style={{
          alignSelf: "stretch",
          display:
            screenWidth < 1440
              ? "flex"
              : screenWidth >= 1440
                ? "inline-flex"
                : undefined,
          gap:
            screenWidth < 1440
              ? "16px"
              : screenWidth >= 1440
                ? "32px"
                : undefined,
          width: screenWidth < 1440 ? "100%" : undefined,
        }}
      >
        <p
          className="title-17"
          style={{
            alignSelf: "stretch",
            fontSize:
              screenWidth < 1440
                ? "28px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
            lineHeight:
              screenWidth < 1440
                ? "36px"
                : screenWidth >= 1440
                  ? "56px"
                  : undefined,
            width: "100%",
          }}
        >
          {t('footerCta.joinWaitingList')}
        </p>

        <p
          className="description-6"
          style={{
            alignSelf: "stretch",
            fontFamily:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-family)"
                : screenWidth >= 1440
                  ? "var(--text-content-note-regular-font-family)"
                  : undefined,
            fontSize:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-size)"
                : screenWidth >= 1440
                  ? "var(--text-content-note-regular-font-size)"
                  : undefined,
            fontStyle:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-style)"
                : screenWidth >= 1440
                  ? "var(--text-content-note-regular-font-style)"
                  : undefined,
            fontWeight:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-weight)"
                : screenWidth >= 1440
                  ? "var(--text-content-note-regular-font-weight)"
                  : undefined,
            letterSpacing:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-letter-spacing)"
                : screenWidth >= 1440
                  ? "var(--text-content-note-regular-letter-spacing)"
                  : undefined,
            lineHeight:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-line-height)"
                : screenWidth >= 1440
                  ? "var(--text-content-note-regular-line-height)"
                  : undefined,
            width: "100%",
          }}
        >
          {t('footerCta.limitedPlaces')}
        </p>
      </div>

      <div
        className="section-5"
        style={{
          alignSelf: "stretch",
          width: "100%",
          maxWidth: "568px",
          margin: "0 auto",
        }}
      >
        <div className="div-31">
          <div className="text-input">
            <div className="field">
              <input
                className="input"
                placeholder={t('footerCta.emailPlaceholder')}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="img-wrapper">
                <img
                  className="vector-11"
                  alt="Vector"
                  src={
                    screenWidth < 1440
                      ? "/img/image.svg"
                      : screenWidth >= 1440
                        ? "/img/vector-66.svg"
                        : undefined
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="rgpd-container">
            <label className="rgpd-label">
              <input
                type="checkbox"
                className="rgpd-checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setShowError(false);
                }}
                disabled={isLoading}
              />
              <span className="rgpd-text">
                {t('footerCta.gdprConsent')}
              </span>
            </label>
            {showError && (
              <p className="rgpd-error">
                {t('footerCta.consentRequired')}
              </p>
            )}
          </div>
          
          {errorMessage && (
            <p className="form-error-message">
              {errorMessage}
            </p>
          )}
          
          {successMessage && (
            <p className="form-success-message">
              {successMessage}
            </p>
          )}
        </div>

        <Button
          className="instance-node"
          divClassName="button-instance"
          size="lg"
          state={isLoading ? "disabled" : "default"}
          text={isLoading ? "Chargement..." : t('footerCta.subscribe')}
          variant={isLoading ? "disabled" : "primary"}
          visible={false}
          visible1={false}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

EmailCaptureSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};