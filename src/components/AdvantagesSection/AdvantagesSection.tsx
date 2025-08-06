import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button } from "@/components/Button";
import { DisplayCard } from "@/components/DisplayCard";
import { ArrowLeft8 } from "@/icons/ArrowLeft8";
import { LeafAnimation } from "@/components/LeafAnimation";
import { SECTION_IDS } from "@/constants/links";
import { logger } from "@/services/logger";

interface AdvantagesSectionProps {
  screenWidth: number;
}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ screenWidth }) => {
  const { t, i18n } = useTranslation();
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

  const handleShare = () => {
    const shareData = {
      title: 'Monkey-co',
      text: 'Découvrez Monkey-co, la plateforme de financement nouvelle génération !',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        logger.error('Error sharing:', error);
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <div
        id={SECTION_IDS.ADVANTAGES}
        className="section-3"
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
                ? "64px 128px"
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
          className="div-25"
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
                  ? "24px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <p
            className="text-10"
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
              textAlign: "center",
            }}
          >
            {t('waitingList.joinEarly')}
          </p>

          <p
            className="description-3"
            style={{
              alignSelf: "stretch",
              fontFamily:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-family)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-size)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-style)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-line-height)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-line-height)"
                    : undefined,
              width: "100%",
              textAlign: "center",
            }}
          >
            {t('hero.limitedPlaces')}
          </p>
        </div>

        <img
          className="background-2"
          style={{
            alignSelf: "stretch",
            height:
              screenWidth < 1440
                ? "255px"
                : screenWidth >= 1440
                  ? "451px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "100%"
                : screenWidth >= 1440
                  ? "842px"
                  : undefined,
          }}
          alt="Background"
          src={
            screenWidth < 1440
              ? "/img/background-3-2.svg"
              : screenWidth >= 1440
                ? "/img/background-3.svg"
                : undefined
          }
        />

        <div
          className="frame-4"
          style={{
            alignItems:
              screenWidth < 1440
                ? "center"
                : screenWidth >= 1440
                  ? "flex-start"
                  : undefined,
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            gap:
              screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div
            className="card-4"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
              width:
                screenWidth < 1440
                  ? "258.42px"
                  : screenWidth >= 1440
                    ? "236px"
                    : undefined,
            }}
          >
            <div
              className="div-26"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
                padding: screenWidth < 1440 ? "0px 12px" : undefined,
              }}
            >
              <div className="icon-2">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-7"
                    width={screenWidth < 1440 ? 40 : 60}
                    height={screenWidth < 1440 ? 40 : 60}
                  />
                </div>
              </div>

              <div
                className="title-8"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  textAlign: screenWidth < 1440 ? "center" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>$1.2bn+</>}

                {screenWidth >= 1440 && <>{t('stats.greenBondsAmount')}</>}
              </div>
            </div>

            <div
              className="title-9"
              style={{
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
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <p className="text-wrapper-29">
                  Pool prioritaire pour les premiers inscrits
                </p>
              )}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.greenBondsDescription')}
                </p>
              )}
            </div>
          </div>

          <div
            className="card-5"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            }}
          >
            <div
              className="div-27"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              <div className="icon-3">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-8"
                    width={screenWidth < 1440 ? 45 : 65}
                    height={screenWidth < 1440 ? 45 : 65}
                  />
                </div>
              </div>

              <div
                className="title-10"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  textAlign: screenWidth < 1440 ? "center" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>150,000+</>}

                {screenWidth >= 1440 && <>{t('stats.co2Reduction')}</>}
              </div>
            </div>

            <div
              className="title-11"
              style={{
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
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && <>Airdrop + NFT surprise</>}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.co2ReductionDescription')}
                </p>
              )}
            </div>
          </div>

          <div
            className="card-6"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            }}
          >
            <div
              className="div-28"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              <div className="icon-2">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-9"
                    width={screenWidth < 1440 ? 50 : 70}
                    height={screenWidth < 1440 ? 50 : 70}
                  />
                </div>
              </div>

              <div
                className="title-12"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>15+</>}

                {screenWidth >= 1440 && <>{t('stats.dualRewards')}</>}
              </div>
            </div>

            <div
              className="title-13"
              style={{
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
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && <>Récompenses x2</>}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.dualRewardsDescription')}
                </p>
              )}
            </div>
          </div>

          <div
            className="card-7"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            }}
          >
            <div
              className="div-29"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
                padding: screenWidth < 1440 ? "0px 12px" : undefined,
              }}
            >
              <div className="icon-2">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-10"
                    width={screenWidth < 1440 ? 55 : 75}
                    height={screenWidth < 1440 ? 55 : 75}
                  />
                </div>
              </div>

              <div
                className="title-14"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  textAlign: screenWidth < 1440 ? "center" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>1M+</>}

                {screenWidth >= 1440 && <>{t('stats.projectsInPipeline')}</>}
              </div>
            </div>

            <div
              className="title-15"
              style={{
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
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <p className="text-wrapper-29">Communauté exclusive</p>
              )}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.projectsInPipelineDescription')}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-4"
        style={{
          alignSelf: "stretch",
          backgroundColor:
            screenWidth < 1440
              ? "#eaedec"
              : screenWidth >= 1440
                ? "unset"
                : undefined,
          backgroundImage:
            screenWidth >= 1440
              ? "url(/img/background-2.svg)"
              : undefined,
          backgroundPosition: screenWidth >= 1440 ? "50% 50%" : undefined,
          backgroundSize: screenWidth >= 1440 ? "cover" : undefined,
          gap:
            screenWidth < 1440
              ? "32px"
              : screenWidth >= 1440
                ? "48px"
                : undefined,
          padding:
            screenWidth < 1440
              ? "24px 20px"
              : screenWidth >= 1440
                ? "64px 128px"
                : undefined,
          width:
            screenWidth < 1440
              ? "100%"
              : screenWidth >= 1440
                ? "100%"
                : undefined,
        }}
      >
        <p
          className="text-14"
          style={{
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
          }}
        >
          {t('joinBefore.title')}
        </p>

        <div
          className="frame-5"
          style={{
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            flexWrap: screenWidth >= 1440 ? "wrap" : undefined,
            gap:
              screenWidth < 1440
                ? "16px"
                : screenWidth >= 1440
                  ? "32px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <DisplayCard
            cUSTRIPPERCENT={screenWidth >= 1440}
            className="display-card-instance"
            divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
            frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
            isIconHighlighted={false}
            state="default"
            stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
            stateProp="default"
            text={screenWidth < 1440 ? t('features.poolPriority') : t('features.poolPriorityDesc')}
            title={screenWidth < 1440 ? t('features.priorityPool') : t('features.priorityPool')}
            type={screenWidth < 1440 ? "display-h5" : "display-h4"}
            variant="light"
          />
          <DisplayCard
            cUSTRIPPERCENT={screenWidth >= 1440}
            className="display-card-instance"
            divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
            frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
            isIconHighlighted={false}
            state="default"
            stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
            stateProp="default"
            text={screenWidth < 1440 ? t('features.airdropNft') : t('features.airdropNftDesc')}
            title={screenWidth < 1440 ? t('features.airdrop') : t('features.airdrop')}
            type={screenWidth < 1440 ? "display-h5" : "display-h4"}
            variant="light"
          />
          <DisplayCard
            cUSTRIPPERCENT={screenWidth >= 1440}
            className="display-card-instance"
            divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
            frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
            isIconHighlighted={false}
            state="default"
            stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
            stateProp="default"
            text={screenWidth < 1440 ? t('features.doubleRewards') : t('features.doubleRewardsDesc')}
            title={screenWidth < 1440 ? t('features.rewards2x') : t('features.rewards2x')}
            type={screenWidth < 1440 ? "display-h5" : "display-h4"}
            variant="light"
          />
          <DisplayCard
            cUSTRIPPERCENT={screenWidth >= 1440}
            className="display-card-instance"
            divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
            frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
            isIconHighlighted={false}
            state="default"
            stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
            stateProp="default"
            text={screenWidth < 1440 ? t('features.exclusiveCommunity') : t('features.exclusiveCommunityDesc')}
            title={screenWidth < 1440 ? t('features.community') : t('features.community')}
            type={screenWidth < 1440 ? "display-h5" : "display-h4"}
            variant="light"
          />
        </div>
      </div>

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
      </div>
    </>
  );
};

AdvantagesSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};