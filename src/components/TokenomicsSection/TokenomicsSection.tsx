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

      <div
        className="display-card-2"
        style={{
          alignSelf: "stretch",
          padding:
            screenWidth < 1440
              ? "16px 12px"
              : screenWidth >= 1440
                ? "24px"
                : undefined,
          width: "100%",
        }}
      >
        {screenWidth >= 1440 && (
          <>
            <div className="text-13">{t('tokenomics.tokenDistribution')}</div>

            <div className="frame-5">
              <p className="legend">
                {t('tokenomics.supplyLimited')}
              </p>

              <p className="legend">
                {t('tokenomics.regulatedEmission')}
              </p>

              <p className="legend">
                {t('tokenomics.transparencyReserves')}
              </p>
            </div>

            <div className="image-6">
              <img
                className="donut-container"
                alt="Donut container"
                src="/img/donut-container-3-2.svg"
              />

              <div className="flexcontainer">
                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.team')}
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">10%</span>
                </p>
              </div>

              <div className="flexcontainer-2">
                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.reserve')}
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">10%</span>
                </p>
              </div>

              <div className="flexcontainer-3">
                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.initialLiquidity')} <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.community')}
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">10%</span>
                </p>
              </div>

              <div className="flexcontainer-4">
                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.presaleICO')}
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">10%</span>
                </p>
              </div>

              <div className="flexcontainer-5">
                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.stakingUSDC')} <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.community')}
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">30%</span>
                </p>
              </div>

              <div className="flexcontainer-6">
                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.stakingKEYCOIN')} <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">
                    {t('tokenomics.community')}
                    <br />
                  </span>
                </p>

                <p className="span-wrapper">
                  <span className="span">30%</span>
                </p>
              </div>
            </div>
          </>
        )}

        <div className="div-31">
          {screenWidth >= 1440 && (
            <>
              <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_FR, '_blank')}>
                <div className="material-symbols">
                  <img
                    className="vector-12"
                    alt="Vector"
                    src="/img/vector-67-2.svg"
                  />
                </div>

                <div className="text-wrapper-10">{t('tokenomics.whitepaperFR')}</div>
              </button>

              <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_EN, '_blank')}>
                <div className="material-symbols">
                  <img
                    className="vector-12"
                    alt="Vector"
                    src="/img/vector-68.svg"
                  />
                </div>

                <div className="text-wrapper-10">{t('tokenomics.whitepaperEN')}</div>
              </button>
            </>
          )}

          {screenWidth < 1440 && (
            <>
              <p className="legend-2">
                {t('tokenomics.supplyLimited')}
              </p>

              <p className="legend-3">
                {t('tokenomics.regulatedEmission')}
              </p>

              <p className="legend-3">
                {t('tokenomics.transparencyReserves')}
              </p>
            </>
          )}
        </div>

        {screenWidth < 1440 && (
          <>
            <div className="image-7">
              <img
                className="donut-container-2"
                alt="Donut container"
                src="/img/donut-container-3.svg"
              />

              <div className="flexcontainer-7">
                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.team')}
                    <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">10%</span>
                </p>
              </div>

              <div className="flexcontainer-8">
                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.reserve')}
                    <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">10%</span>
                </p>
              </div>

              <div className="flexcontainer-9">
                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.initialLiquidity')} <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.community')}
                    <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">10%</span>
                </p>
              </div>

              <div className="flexcontainer-10">
                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.presaleICO')}
                    <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">10%</span>
                </p>
              </div>

              <div className="flexcontainer-11">
                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.stakingUSDC')} <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.community')}
                    <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">30%</span>
                </p>
              </div>

              <div className="flexcontainer-12">
                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.stakingKEYCOIN')} <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">
                    {t('tokenomics.community')}
                    <br />
                  </span>
                </p>

                <p className="text-14">
                  <span className="text-wrapper-11">30%</span>
                </p>
              </div>
            </div>

            <div className="div-31">
              <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_FR, '_blank')}>
                <div className="material-symbols">
                  <img
                    className="vector-12"
                    alt="Vector"
                    src="/img/vector-69-2.svg"
                  />
                </div>

                <div className="text-wrapper-10">{t('tokenomics.whitepaperFR')}</div>
              </button>

              <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_EN, '_blank')}>
                <div className="material-symbols">
                  <img
                    className="vector-12"
                    alt="Vector"
                    src="/img/vector-70-2.svg"
                  />
                </div>

                <div className="text-wrapper-10">{t('tokenomics.whitepaperEN')}</div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TokenomicsSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};