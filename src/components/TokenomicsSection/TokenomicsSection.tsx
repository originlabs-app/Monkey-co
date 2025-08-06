import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { PDF_LINKS, SECTION_IDS } from "@/constants/links";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

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
      <div className="container-7">
        <div
          className="horizontal-divider-7"
          style={{
            flex: isMobile(screenWidth) ? "1" : undefined,
            flexGrow: isMobile(screenWidth) ? "1" : undefined,
            width: isDesktop(screenWidth) ? "200px" : undefined,
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
            flex: isMobile(screenWidth) ? "1" : undefined,
            flexGrow: isMobile(screenWidth) ? "1" : undefined,
            width: isDesktop(screenWidth) ? "200px" : undefined,
          }}
        />
      </div>

      <div
        className="div-32"
        style={{
          alignSelf: "stretch",
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
          className="text-12"
          style={{
            alignSelf: "stretch",
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
          {t('tokenomics.discoverFundsDistribution')}
        </p>
      </div>

      <div
        className="display-card-2"
        style={{
          alignSelf: "stretch",
          padding:
            isMobile(screenWidth)
              ? `${SPACING.lg}px ${SPACING.md}px`
              : isDesktop(screenWidth) ? `${SPACING["2xl"]}px`
                : undefined,
          width: "100%",
        }}
      >
        {isDesktop(screenWidth) && (
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
          {isDesktop(screenWidth) && (
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

          {isMobile(screenWidth) && (
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

        {isMobile(screenWidth) && (
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