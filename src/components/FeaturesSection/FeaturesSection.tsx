import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { SECTION_IDS } from "@/constants/links";
import { SPACING, isMobile, isDesktop } from "@/constants/theme";

interface FeaturesSectionProps {
  screenWidth: number;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState("rendement");

  const cardImages = {
    rendement: "/img/Frame 1.svg",
    impact: "/img/Frame 2.svg",
    dashboard: "/img/Frame 3.svg",
    gouvernance: "/img/DAO.png",
    projets: "/img/Frame 5.svg",
  };

  return (
    <div
      id={SECTION_IDS.PROBLEM_SOLUTION}
      className="section-2"
      style={{
        alignSelf: "stretch",
        padding:
          isMobile(screenWidth)
            ? "48px 20px 48px 20px"
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
      <p
        className="text-wrapper-9"
        style={{
          fontSize:
            isMobile(screenWidth)
              ? "28px"
              : isDesktop(screenWidth)
                ? `${SPACING["3.5xl"]}px`
                : undefined,
          lineHeight:
            isMobile(screenWidth)
              ? "36px"
              : isDesktop(screenWidth)
                ? "56px"
                : undefined,
        }}
      >
        {t('whyInvest.title')}
      </p>

      <div
        className="frame-3"
        style={{
          alignItems:
            isMobile(screenWidth)
              ? "flex-start"
              : isDesktop(screenWidth)
                ? "flex-start"
                : undefined,
          alignSelf: "stretch",
          display:
            isMobile(screenWidth)
              ? "flex"
              : isDesktop(screenWidth)
                ? "inline-flex"
                : undefined,
          flexDirection: isMobile(screenWidth) ? "column" : undefined,
          justifyContent: isMobile(screenWidth) ? "center" : undefined,
          width: isMobile(screenWidth) ? "100%" : undefined,
        }}
      >
        <div
          className="div-24"
          style={{
            flex: isMobile(screenWidth) ? "0 0 auto" : undefined,
            width:
              isMobile(screenWidth)
                ? "100%"
                : isDesktop(screenWidth)
                  ? "602px"
                  : undefined,
          }}
        >
          <div 
            className="title-wrapper" 
            data-selected={selectedCard === "rendement"}
            onClick={() => setSelectedCard("rendement")}
            style={{ 
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.3s, color 0.3s',
              padding: '16px'
            }}
          >
            <p
              className="title-3"
              style={{
                flex: isMobile(screenWidth) ? "1" : undefined,
                lineHeight:
                  isMobile(screenWidth)
                    ? "16px"
                    : isDesktop(screenWidth) ? `${SPACING["3xl"]}px`
                      : undefined,
                width: isDesktop(screenWidth) ? "570px" : undefined,
                transition: 'color 0.3s'
              }}
            >
              {t('features.hybridYield')} {t('features.hybridYieldDesc')}
            </p>
          </div>

          <div 
            className="card-3"
            data-selected={selectedCard === "impact"}
            onClick={() => setSelectedCard("impact")}
            style={{ 
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.3s, color 0.3s',
              padding: '16px'
            }}
          >
            <div
              className="title-4"
              style={{
                flex: isMobile(screenWidth) ? "1" : undefined,
                lineHeight:
                  isMobile(screenWidth)
                    ? "16px"
                    : isDesktop(screenWidth) ? `${SPACING["3xl"]}px`
                      : undefined,
                width: isDesktop(screenWidth) ? "570px" : undefined,
                transition: 'color 0.3s'
              }}
            >
              {t('features.carbonImpact')}
            </div>
          </div>

          <div 
            className="card-3"
            data-selected={selectedCard === "dashboard"}
            onClick={() => setSelectedCard("dashboard")}
            style={{ 
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.3s, color 0.3s',
              padding: '16px'
            }}
          >
            <div
              className="title-5"
              style={{
                flex: isMobile(screenWidth) ? "1" : undefined,
                lineHeight:
                  isMobile(screenWidth)
                    ? "16px"
                    : isDesktop(screenWidth) ? `${SPACING["3xl"]}px`
                      : undefined,
                width: isDesktop(screenWidth) ? "570px" : undefined,
                transition: 'color 0.3s'
              }}
            >
              {t('features.dashboardManagement')}
            </div>
          </div>

          <div 
            className="card-3"
            data-selected={selectedCard === "gouvernance"}
            onClick={() => setSelectedCard("gouvernance")}
            style={{ 
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.3s, color 0.3s',
              padding: '16px'
            }}
          >
            <div
              className="title-6"
              style={{
                flex: isMobile(screenWidth) ? "1" : undefined,
                lineHeight:
                  isMobile(screenWidth)
                    ? "16px"
                    : isDesktop(screenWidth) ? `${SPACING["3xl"]}px`
                      : undefined,
                width: isDesktop(screenWidth) ? "570px" : undefined,
                transition: 'color 0.3s'
              }}
            >
              {t('features.decentralizedGovernance')}
            </div>
          </div>

          <div 
            className="card-3"
            data-selected={selectedCard === "projets"}
            onClick={() => setSelectedCard("projets")}
            style={{ 
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.3s, color 0.3s',
              padding: '16px'
            }}
          >
            <div
              className="title-7"
              style={{
                flex: isMobile(screenWidth) ? "1" : undefined,
                lineHeight:
                  isMobile(screenWidth)
                    ? "16px"
                    : isDesktop(screenWidth) ? `${SPACING["3xl"]}px`
                      : undefined,
                width: isDesktop(screenWidth) ? "570px" : undefined,
                transition: 'color 0.3s'
              }}
            >
              {t('features.projectSelection')}
            </div>
          </div>
        </div>

        <div
          className="staking-USDC-empty-wrapper no-border"
          style={{
            alignSelf: isDesktop(screenWidth) ? "stretch" : "stretch",
            display: "flex",
            marginBottom: "0",
            marginLeft: "0",
            padding: "0",
            width: isMobile(screenWidth) ? "100%" : undefined,
            boxShadow: "none",
            border: "none",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flex: isDesktop(screenWidth) ? "1" : undefined
          }}
        >
          <img
            className="staking-USDC-empty"
            style={{
              height:
                isMobile(screenWidth)
                  ? "300px"
                  : isDesktop(screenWidth)
                    ? "100%"
                    : undefined,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              width:
                isMobile(screenWidth)
                  ? "100%"
                  : isDesktop(screenWidth)
                    ? "602px"
                    : undefined,
              maxWidth:
                isDesktop(screenWidth)
                  ? "602px"
                  : undefined,
              objectFit: selectedCard === "gouvernance" ? "cover" : "contain",
              objectPosition: selectedCard === "gouvernance" ? "center" : "top left",
              transform: isDesktop(screenWidth) && selectedCard !== "gouvernance" ? "scale(1.15) translateY(-10px)" : undefined,
              transformOrigin: "top left",
              borderRadius: selectedCard === "gouvernance" ? "12px" : undefined,
            }}
            alt={selectedCard}
            src={cardImages[selectedCard as keyof typeof cardImages]}
          />
        </div>
      </div>
    </div>
  );
};

FeaturesSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};