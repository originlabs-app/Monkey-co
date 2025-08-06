import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@/components/Button";
import { ArrowLeft8 } from "@/icons/ArrowLeft8";
import { logger } from "@/services/logger";

interface NewsletterSectionProps {
  screenWidth: number;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setSuccessMessage("");
    setErrorMessage("");
    
    if (!email || !validateEmail(email)) {
      setErrorMessage("Veuillez entrer une adresse email valide");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setSuccessMessage("Inscription réussie ! Vérifiez votre email.");
        setEmail("");
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
      className="section-5"
      style={{
        alignSelf: "stretch",
        backgroundColor:
          screenWidth < 1440
            ? "#06502b"
            : screenWidth >= 1440
              ? "unset"
              : undefined,
        backgroundImage:
          screenWidth >= 1440
            ? "url(/img/background.svg)"
            : undefined,
        backgroundPosition: screenWidth >= 1440 ? "50% 50%" : undefined,
        backgroundSize: screenWidth >= 1440 ? "cover" : undefined,
        gap:
          screenWidth < 1440
            ? "24px"
            : screenWidth >= 1440
              ? "48px"
              : undefined,
        padding:
          screenWidth < 1440
            ? "40px 20px"
            : screenWidth >= 1440
              ? "64px 249px"
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
        className="heading-3"
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
              ? "12px"
              : screenWidth >= 1440
                ? "24px"
                : undefined,
          width: screenWidth < 1440 ? "100%" : undefined,
        }}
      >
        <div
          className="title-16"
          style={{
            alignSelf: "stretch",
            color:
              screenWidth < 1440
                ? "#ffffff"
                : screenWidth >= 1440
                  ? "#f2f8f7"
                  : undefined,
            flex: screenWidth < 1440 ? "1" : undefined,
            fontSize:
              screenWidth < 1440
                ? "28px"
                : screenWidth >= 1440
                  ? "40px"
                  : undefined,
            lineHeight:
              screenWidth < 1440
                ? "36px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
            marginTop: screenWidth >= 1440 ? "-1.00px" : undefined,
            width: screenWidth >= 1440 ? "624px" : undefined,
          }}
        >
          {t('newsletter.title')}
        </div>

        <p
          className="description-4"
          style={{
            alignSelf: "stretch",
            color:
              screenWidth < 1440
                ? "#eff6f5"
                : screenWidth >= 1440
                  ? "#f2f8f7"
                  : undefined,
            fontFamily:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-family)"
                : screenWidth >= 1440
                  ? "var(--text-content-body-regular-font-family)"
                  : undefined,
            fontSize:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-size)"
                : screenWidth >= 1440
                  ? "var(--text-content-body-regular-font-size)"
                  : undefined,
            fontStyle:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-style)"
                : screenWidth >= 1440
                  ? "var(--text-content-body-regular-font-style)"
                  : undefined,
            fontWeight:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-font-weight)"
                : screenWidth >= 1440
                  ? "var(--text-content-body-regular-font-weight)"
                  : undefined,
            letterSpacing:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-letter-spacing)"
                : screenWidth >= 1440
                  ? "var(--text-content-body-regular-letter-spacing)"
                  : undefined,
            lineHeight:
              screenWidth < 1440
                ? "var(--text-content-caption-regular-line-height)"
                : screenWidth >= 1440
                  ? "var(--text-content-body-regular-line-height)"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          {t('newsletter.description')}
        </p>
      </div>

      <div
        className="div-31"
        style={{
          alignItems: "flex-start",
          alignSelf: "stretch",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          display: "flex",
          gap: "16px",
          padding: "8px",
          position: "relative",
          width: screenWidth < 1440 ? "100%" : undefined,
        }}
      >
        <input
          className="input"
          placeholder={t('newsletter.placeholder')}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: "none",
            flex: "1",
            fontSize: "16px",
            outline: "none",
            padding: "8px",
          }}
        />
        
        <Button
          className="button-instance"
          icon={<ArrowLeft8 className="arrow-left-2" />}
          iconPosition="trailing"
          isPressed={false}
          showIcon
          size="md"
          state={isLoading ? "disabled" : "default"}
          text={isLoading ? "Chargement..." : t('footerCta.subscribe')}
          variant={isLoading ? "disabled" : "primary"}
          visible={false}
          visible1={false}
          onClick={handleSubmit}
        />
      </div>

      {successMessage && (
        <p style={{ color: "#4ade80", textAlign: "center" }}>{successMessage}</p>
      )}
      {errorMessage && (
        <p style={{ color: "#f87171", textAlign: "center" }}>{errorMessage}</p>
      )}
    </div>
  );
};

NewsletterSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};