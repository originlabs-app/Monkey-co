import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { SECTION_IDS } from "@/constants/links";

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
    gouvernance: "/img/Frame 4.svg",
    projets: "/img/Frame 5.svg",
  };

  return (
    <div
      id={SECTION_IDS.PROBLEM_SOLUTION}
      className="section-2"
      style={{
        alignSelf: "stretch",
        padding:
          screenWidth < 1440
            ? "48px 20px 48px 20px"
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
      <p
        className="text-wrapper-9"
        style={{
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
            screenWidth < 1440
              ? "flex-start"
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
          justifyContent: screenWidth < 1440 ? "center" : undefined,
          width: screenWidth < 1440 ? "100%" : undefined,
        }}
      >
        <div
          className="div-24"
          style={{
            flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            width:
              screenWidth < 1440
                ? "100%"
                : screenWidth >= 1440
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
                flex: screenWidth < 1440 ? "1" : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "16px"
                    : screenWidth >= 1440
                      ? "32px"
                      : undefined,
                width: screenWidth >= 1440 ? "570px" : undefined,
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
                flex: screenWidth < 1440 ? "1" : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "16px"
                    : screenWidth >= 1440
                      ? "32px"
                      : undefined,
                width: screenWidth >= 1440 ? "570px" : undefined,
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
                flex: screenWidth < 1440 ? "1" : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "16px"
                    : screenWidth >= 1440
                      ? "32px"
                      : undefined,
                width: screenWidth >= 1440 ? "570px" : undefined,
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
                flex: screenWidth < 1440 ? "1" : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "16px"
                    : screenWidth >= 1440
                      ? "32px"
                      : undefined,
                width: screenWidth >= 1440 ? "570px" : undefined,
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
                flex: screenWidth < 1440 ? "1" : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "16px"
                    : screenWidth >= 1440
                      ? "32px"
                      : undefined,
                width: screenWidth >= 1440 ? "570px" : undefined,
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
            alignSelf: screenWidth >= 1440 ? "stretch" : "stretch",
            display: "flex",
            marginBottom: "0",
            marginLeft: "0",
            padding: "0",
            width: screenWidth < 1440 ? "100%" : undefined,
            boxShadow: "none",
            border: "none",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flex: screenWidth >= 1440 ? "1" : undefined
          }}
        >
          <img
            className="staking-USDC-empty"
            style={{
              height:
                screenWidth < 1440
                  ? "300px"
                  : screenWidth >= 1440
                    ? "100%"
                    : undefined,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              width:
                screenWidth < 1440
                  ? "100%"
                  : screenWidth >= 1440
                    ? "602px"
                    : undefined,
              maxWidth:
                screenWidth >= 1440
                  ? "602px"
                  : undefined,
              objectFit: "contain",
              objectPosition: "top left",
              transform: screenWidth >= 1440 ? "scale(1.15) translateY(-10px)" : undefined,
              transformOrigin: "top left",
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