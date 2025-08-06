import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@/components/Button";
import { ArrowLeft8 } from "@/icons/ArrowLeft8";
import { logger } from "@/services/logger";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

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
          isMobile(screenWidth)
            ? "#06502b"
            : isDesktop(screenWidth)
              ? "unset"
              : undefined,
        backgroundImage:
          isDesktop(screenWidth)
            ? "url(/img/background.svg)"
            : undefined,
        backgroundPosition: isDesktop(screenWidth) ? "50% 50%" : undefined,
        backgroundSize: isDesktop(screenWidth) ? "cover" : undefined,
        gap: isMobile(screenWidth) ? `${SPACING["2xl"]}px`
            : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
              : undefined,
        padding:
          isMobile(screenWidth)
            ? `${SPACING["3.5xl"]}px ${SPACING.xl}px`
            : isDesktop(screenWidth)
              ? `${SPACING["5xl"]}px ${SPACING["8xl"]}px`
              : undefined,
        width:
          isMobile(screenWidth)
            ? "100%"
            : isDesktop(screenWidth)
              ? "100%"
              : undefined,
      }}
    >
      <div
        className="heading-3"
        style={{
          alignSelf: "stretch",
          display:
            isMobile(screenWidth)
              ? "flex"
              : isDesktop(screenWidth)
                ? "inline-flex"
                : undefined,
          gap: isMobile(screenWidth) ? `${SPACING.md}px`
              : isDesktop(screenWidth) ? `${SPACING["2xl"]}px`
                : undefined,
          width: isMobile(screenWidth) ? "100%" : undefined,
        }}
      >
        <div
          className="title-16"
          style={{
            alignSelf: "stretch",
            color:
              isMobile(screenWidth)
                ? "#ffffff"
                : isDesktop(screenWidth)
                  ? "#f2f8f7"
                  : undefined,
            flex: isMobile(screenWidth) ? "1" : undefined,
            fontSize:
              isMobile(screenWidth)
                ? "28px"
                : isDesktop(screenWidth)
                  ? `${SPACING["3.5xl"]}px`
                  : undefined,
            lineHeight:
              isMobile(screenWidth)
                ? "36px"
                : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
                  : undefined,
            marginTop: isDesktop(screenWidth) ? "-1.00px" : undefined,
            width: isDesktop(screenWidth) ? "624px" : undefined,
          }}
        >
          {t('newsletter.title')}
        </div>

        <p
          className="description-4"
          style={{
            alignSelf: "stretch",
            color:
              isMobile(screenWidth)
                ? "#eff6f5"
                : isDesktop(screenWidth)
                  ? "#f2f8f7"
                  : undefined,
            fontFamily:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-family)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-body-regular-font-family)"
                  : undefined,
            fontSize:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-size)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-body-regular-font-size)"
                  : undefined,
            fontStyle:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-style)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-body-regular-font-style)"
                  : undefined,
            fontWeight:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-font-weight)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-body-regular-font-weight)"
                  : undefined,
            letterSpacing:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-letter-spacing)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-body-regular-letter-spacing)"
                  : undefined,
            lineHeight:
              isMobile(screenWidth)
                ? "var(--text-content-caption-regular-line-height)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-body-regular-line-height)"
                  : undefined,
            width: isMobile(screenWidth) ? "100%" : undefined,
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
          borderRadius: `${SPACING.sm}px`,
          display: "flex",
          gap: "16px",
          padding: `${SPACING.sm}px`,
          position: "relative",
          width: isMobile(screenWidth) ? "100%" : undefined,
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
            padding: `${SPACING.sm}px`,
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