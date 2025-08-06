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
            alt="Logo praxitherm"
            src={
              isDesktop(screenWidth)
                ? "/img/logo-praxitherm-1-3.png"
                : isMobile(screenWidth)
                  ? "/img/logo-praxitherm-1-3-2x.png"
                  : undefined
            }
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
            alt="Image"
            src="/img/image-3-3.png"
          />

          {isDesktop(screenWidth) && (
            <>
              <img className="image-3" alt="Image" src="/img/image-4-3.png" />

              <img
                className="logo-la-boite-a-demo"
                alt="Logo la boite a demo"
                src="/img/logo-la-boi-te-a-de-mo-1-3.png"
              />
            </>
          )}
        </div>

        {isMobile(screenWidth) && (
          <img
            className="frame-2"
            alt="Frame"
            src="/img/frame-1707478377-1.svg"
          />
        )}
      </div>
    </div>
  );
};

PartnersSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};