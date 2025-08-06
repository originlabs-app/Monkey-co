import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

interface PartnersSectionProps {
  screenWidth: number;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();

  return (
    <div
      className="partners-section"
      style={{
        alignSelf: "stretch",
        padding: isMobile(screenWidth) 
          ? `${SPACING["2xl"]}px ${SPACING.md}px`
          : isDesktop(screenWidth)
            ? `${SPACING["5xl"]}px`
            : undefined,
        width: "100%",
      }}
    >
      <div className="container">
        <div
          className="container-2"
          style={{
            zIndex: isDesktop(screenWidth)
              ? "1"
              : isMobile(screenWidth)
                ? "2"
                : undefined,
          }}
        >
          <div
            className="horizontal-divider"
            style={{
              flex: isMobile(screenWidth) ? "1" : undefined,
              flexGrow: isMobile(screenWidth) ? "1" : undefined,
              width: isDesktop(screenWidth) ? "200px" : undefined,
            }}
          />

          <div
            className="background-border"
            style={{
              display: isDesktop(screenWidth)
                ? "inline-flex"
                : isMobile(screenWidth)
                  ? "flex"
                  : undefined,
              flex: isDesktop(screenWidth)
                ? "0 0 auto"
                : isMobile(screenWidth)
                  ? "1"
                  : undefined,
              flexGrow: isMobile(screenWidth) ? "1" : undefined,
            }}
          >
            <div
              className="container-3"
              style={{
                marginLeft: isMobile(screenWidth) ? "-5.00px" : undefined,
                marginRight: isMobile(screenWidth) ? "-5.00px" : undefined,
              }}
            >
              <div className="text-wrapper-4">{t('partners.title')}</div>
            </div>
          </div>

          <div
            className="horizontal-divider-2"
            style={{
              flex: isMobile(screenWidth) ? "1" : undefined,
              flexGrow: isMobile(screenWidth) ? "1" : undefined,
              width: isDesktop(screenWidth) ? "200px" : undefined,
            }}
          />
        </div>

        <div
          className="frame"
          style={{
            gap: isMobile(screenWidth)
              ? `${SPACING["2xl"]}px`
              : isDesktop(screenWidth)
                ? `${SPACING["4xl"]}px`
                : undefined,
            zIndex: isMobile(screenWidth)
              ? "1"
              : isDesktop(screenWidth)
                ? "0"
                : undefined,
          }}
        >
          <img
            className="logo-praxitherm"
            style={{
              height: isDesktop(screenWidth)
                ? "42px"
                : isMobile(screenWidth)
                  ? "33.6px"
                  : undefined,
              width: isDesktop(screenWidth)
                ? "224.73px"
                : isMobile(screenWidth)
                  ? "179.78px"
                  : undefined,
            }}
            alt="Logo Praxitherm"
            src="/img/logo-praxitherm-1-3.png"
          />

          <img
            className="image-2"
            style={{
              height: isMobile(screenWidth)
                ? `${SPACING["4xl"]}px`
                : isDesktop(screenWidth)
                  ? "60px"
                  : undefined,
              width: isMobile(screenWidth)
                ? "66px"
                : isDesktop(screenWidth)
                  ? "82.5px"
                  : undefined,
            }}
            alt="Logo Kamea Labs"
            src="/img/logo-kamea-labs.png"
          />

          {isDesktop(screenWidth) && (
            <>
              <img className="image-3" alt="Logo Fipto" src="/img/logo-fipto.png" />

              <img
                className="logo-la-boite-a-demo"
                alt="Logo La Boîte à Demo"
                src="/img/logo-la-boi-te-a-de-mo-1-3.png"
              />
            </>
          )}
        </div>

        {isMobile(screenWidth) && (
          <div
            className="frame-2"
            style={{
              display: "flex",
              gap: `${SPACING.lg}px`,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              alt="Logo Fipto"
              src="/img/logo-fipto.png"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            <img
              alt="Logo La Boîte à Demo"
              src="/img/logo-la-boi-te-a-de-mo-1-3.png"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

PartnersSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};