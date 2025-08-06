import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { PDF_LINKS, SECTION_IDS } from "@/constants/links";

interface TokenomicsSectionProps {
  screenWidth: number;
}

export const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();

  return (
    <div
      id={SECTION_IDS.TOKENOMICS}
      className="section-6"
      style={{
        alignSelf: "stretch",
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
      <div className="container-7">
        <div
          className="horizontal-divider-7"
          style={{
            flex: screenWidth < 1440 ? "1" : undefined,
            flexGrow: screenWidth < 1440 ? "1" : undefined,
            width: screenWidth >= 1440 ? "200px" : undefined,
          }}
        />

        <div className="background-border-3">
          <div className="tokenomics-wrapper">
            <div className="tokenomics">TOKENOMICS &amp; WHITEPAPER</div>
          </div>
        </div>

        <div
          className="horizontal-divider-8"
          style={{
            flex: screenWidth < 1440 ? "1" : undefined,
            flexGrow: screenWidth < 1440 ? "1" : undefined,
            width: screenWidth >= 1440 ? "200px" : undefined,
          }}
        />
      </div>

      <div
        className="div-32"
        style={{
          alignSelf: "stretch",
          display:
            screenWidth < 1440
              ? "flex"
              : screenWidth >= 1440
                ? "inline-flex"
                : undefined,
          width: screenWidth < 1440 ? "100%" : undefined,
        }}
      >
        <p
          className="text-12"
          style={{
            alignSelf: "stretch",
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
            width: "100%",
          }}
        >
          {t('tokenomics.howPresaleWorks')}
        </p>

        <p
          className="description-5"
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
          {t('tokenomics.discoverFundsDistribution')}
        </p>
      </div>
    </div>
  );
};

TokenomicsSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};