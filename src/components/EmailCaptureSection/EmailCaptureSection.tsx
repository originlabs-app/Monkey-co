import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@/components/Button";
import { logger } from "@/services/logger";
import { SPACING, isMobile, isDesktop } from "@/constants/theme";

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
        gap: isMobile(screenWidth) ? `${SPACING["2xl"]}px`
            : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
              : undefined,
        padding:
          isMobile(screenWidth)
            ? `${SPACING["4xl"]}px ${SPACING.xl}px`
            : isDesktop(screenWidth) ? `${SPACING["5xl"]}px`
              : undefined,
        width:
          isMobile(screenWidth)
            ? "100%"
            : isDesktop(screenWidth)
              ? "100%"
              : undefined,
      }}
    >
      <img
        className="albedobase-XL-a-3"
        style={{
          height:
            isMobile(screenWidth)
              ? "113px"
              : isDesktop(screenWidth)
                ? "172px"
                : undefined,
          left:
            isMobile(screenWidth)
              ? "-31px"
              : isDesktop(screenWidth)
                ? "339px"
                : undefined,
          top:
            isMobile(screenWidth)
              ? "243px"
              : isDesktop(screenWidth)
                ? "284px"
                : undefined,
          width:
            isMobile(screenWidth)
              ? "113px"
              : isDesktop(screenWidth)
                ? "172px"
                : undefined,
        }}
        alt="Albedobase XL a"
        src={
          isMobile(screenWidth)
            ? "/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-1-3.svg"
            : isDesktop(screenWidth)
              ? "/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-1-3-2.svg"
              : undefined
        }
      />

      <div className="container-6">
        <div
          className="horizontal-divider-5"
          style={{
            flex: isMobile(screenWidth) ? "1" : undefined,
            flexGrow: isMobile(screenWidth) ? "1" : undefined,
            width: isDesktop(screenWidth) ? "200px" : undefined,
          }}
        />

        <div className="background-border-2">
          <div className="investir-pour-la-wrapper">
            <div className="text-wrapper-4">INVESTIR POUR LA PLANÈTE</div>
          </div>
        </div>

        <div
          className="horizontal-divider-6"
          style={{
            flex: isMobile(screenWidth) ? "1" : undefined,
            flexGrow: isMobile(screenWidth) ? "1" : undefined,
            width: isDesktop(screenWidth) ? "200px" : undefined,
          }}
        />
      </div>
      <div
        className="div-30"
        style={{
          alignSelf: "stretch",
          alignItems: "center",
          flex: "0 0 auto",
          flexDirection: "column" as const,
          gap: "16px",
          position: "relative" as const,
          display:
            isMobile(screenWidth)
              ? "flex"
              : isDesktop(screenWidth)
                ? "inline-flex"
                : undefined,
          width: isMobile(screenWidth) ? "100%" : undefined,
        }}
      >
        <p
          className="text-11"
          style={{
            alignSelf: "stretch",
            color: "var(--variable-collection-background-dark)",
            fontFamily: '"Lexend Deca", Helvetica',
            fontWeight: 600,
            letterSpacing: "-1px",
            marginTop: "-1px",
            position: "relative" as const,
            textAlign: "center" as const,
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize:
              isMobile(screenWidth)
                ? "28px"
                : isDesktop(screenWidth)
                  ? `${SPACING["3.5xl"]}px`
                  : undefined,
            lineHeight:
              isMobile(screenWidth)
                ? "32px"
                : isDesktop(screenWidth)
                  ? "56px"
                  : undefined,
            width: "100%",
          }}
        >
          {t('footerCta.presaleTitle')}
        </p>

        <p
          className="description-4"
          style={{
            alignSelf: "stretch",
            color: "var(--variable-collection-grey-300)",
            position: "relative" as const,
            textAlign: "center" as const,
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-family)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-regular-font-family)"
                  : undefined,
            fontSize:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-size)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-regular-font-size)"
                  : undefined,
            fontStyle:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-style)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-regular-font-style)"
                  : undefined,
            fontWeight:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-weight)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-regular-font-weight)"
                  : undefined,
            letterSpacing:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-letter-spacing)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-regular-letter-spacing)"
                  : undefined,
            lineHeight:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-line-height)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-regular-line-height)"
                  : undefined,
            width: "100%",
          }}
        >
          {t('footerCta.presaleDescription')}
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
                    isMobile(screenWidth)
                      ? "/img/image.svg"
                      : isDesktop(screenWidth)
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