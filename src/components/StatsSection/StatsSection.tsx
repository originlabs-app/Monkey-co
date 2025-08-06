import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LeafAnimation } from "@/components/LeafAnimation";
import { SECTION_IDS } from "@/constants/links";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

interface StatsSectionProps {
  screenWidth: number;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();

  return (
    <div
      id={SECTION_IDS.ADVANTAGES}
      className="section-3"
      style={{
        alignSelf: "stretch",
        gap: isMobile(screenWidth) ? `${SPACING["2xl"]}px`
            : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
              : undefined,
        padding:
          isMobile(screenWidth)
            ? `${SPACING["4xl"]}px ${SPACING.xl}px`
            : isDesktop(screenWidth)
              ? `${SPACING["5xl"]}px ${SPACING["7xl"]}px`
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
        className="div-25"
        style={{
          alignSelf: "stretch",
          display:
            isMobile(screenWidth)
              ? "flex"
              : isDesktop(screenWidth)
                ? "inline-flex"
                : undefined,
          gap: isMobile(screenWidth) ? `${SPACING.lg}px`
              : isDesktop(screenWidth) ? `${SPACING["2xl"]}px`
                : undefined,
          width: isMobile(screenWidth) ? "100%" : undefined,
        }}
      >
        <p
          className="text-10"
          style={{
            alignSelf: "stretch",
            fontSize:
              isMobile(screenWidth)
                ? "28px"
                : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
                  : undefined,
            lineHeight:
              isMobile(screenWidth)
                ? "36px"
                : isDesktop(screenWidth)
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
              isMobile(screenWidth)
                ? "var(--text-content-caption-accent-font-family)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-emphasis-font-family)"
                  : undefined,
            fontSize:
              isMobile(screenWidth)
                ? "var(--text-content-caption-accent-font-size)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-emphasis-font-size)"
                  : undefined,
            fontStyle:
              isMobile(screenWidth)
                ? "var(--text-content-caption-accent-font-style)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-emphasis-font-style)"
                  : undefined,
            fontWeight:
              isMobile(screenWidth)
                ? "var(--text-content-caption-accent-font-weight)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-emphasis-font-weight)"
                  : undefined,
            letterSpacing:
              isMobile(screenWidth)
                ? "var(--text-content-caption-accent-letter-spacing)"
                : isDesktop(screenWidth)
                  ? "var(--text-content-note-emphasis-letter-spacing)"
                  : undefined,
            lineHeight:
              isMobile(screenWidth)
                ? "var(--text-content-caption-accent-line-height)"
                : isDesktop(screenWidth)
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
            isMobile(screenWidth)
              ? "255px"
              : isDesktop(screenWidth)
                ? "451px"
                : undefined,
          width:
            isMobile(screenWidth)
              ? "100%"
              : isDesktop(screenWidth)
                ? "842px"
                : undefined,
        }}
        alt="Background"
        src={
          isMobile(screenWidth)
            ? "/img/background-3-2.svg"
            : isDesktop(screenWidth)
              ? "/img/background-3.svg"
              : undefined
        }
      />

      <div
        className="frame-4"
        style={{
          alignItems:
            isMobile(screenWidth)
              ? "center"
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
          gap: isMobile(screenWidth) ? `${SPACING["2xl"]}px`
              : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
                : undefined,
          width: isMobile(screenWidth) ? "100%" : undefined,
        }}
      >
        <div
          className="card-4"
          style={{
            flex: isMobile(screenWidth) ? "0 0 auto" : undefined,
            width:
              isMobile(screenWidth)
                ? "258.42px"
                : isDesktop(screenWidth)
                  ? "236px"
                  : undefined,
          }}
        >
          <div
            className="div-26"
            style={{
              justifyContent: isMobile(screenWidth) ? "center" : undefined,
              padding: isMobile(screenWidth) ? `0px ${SPACING.md}px` : undefined,
            }}
          >
            <div className="icon-2">
              <div className="vector-wrapper">
                <LeafAnimation 
                  className="vector-7"
                  width={isMobile(screenWidth) ? 40 : 60}
                  height={isMobile(screenWidth) ? 40 : 60}
                />
              </div>
            </div>

            <div
              className="title-8"
              style={{
                flex: isDesktop(screenWidth) ? "1" : undefined,
                textAlign: isMobile(screenWidth) ? "center" : undefined,
                whiteSpace: isMobile(screenWidth) ? "nowrap" : undefined,
                width: isMobile(screenWidth) ? "fit-content" : undefined,
              }}
            >
              {isMobile(screenWidth) && <>$1.2bn+</>}
              {isDesktop(screenWidth) && <>{t('stats.greenBondsAmount')}</>}
            </div>
          </div>

          <div
            className="title-9"
            style={{
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
              textAlign: isMobile(screenWidth) ? "center" : undefined,
            }}
          >
            {isMobile(screenWidth) && (
              <p className="text-wrapper-29">
                Pool prioritaire pour les premiers inscrits
              </p>
            )}
            {isDesktop(screenWidth) && (
              <p className="text-wrapper-29">
                {t('stats.greenBondsDescription')}
              </p>
            )}
          </div>
        </div>

        <div
          className="card-5"
          style={{
            flex: isMobile(screenWidth) ? "0 0 auto" : undefined,
          }}
        >
          <div
            className="div-27"
            style={{
              justifyContent: isMobile(screenWidth) ? "center" : undefined,
            }}
          >
            <div className="icon-3">
              <div className="vector-wrapper">
                <LeafAnimation 
                  className="vector-8"
                  width={isMobile(screenWidth) ? 45 : 65}
                  height={isMobile(screenWidth) ? 45 : 65}
                />
              </div>
            </div>

            <div
              className="title-10"
              style={{
                flex: isDesktop(screenWidth) ? "1" : undefined,
                textAlign: isMobile(screenWidth) ? "center" : undefined,
                whiteSpace: isMobile(screenWidth) ? "nowrap" : undefined,
                width: isMobile(screenWidth) ? "fit-content" : undefined,
              }}
            >
              {isMobile(screenWidth) && <>150,000+</>}
              {isDesktop(screenWidth) && <>{t('stats.co2Reduction')}</>}
            </div>
          </div>

          <div
            className="title-11"
            style={{
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
              textAlign: isMobile(screenWidth) ? "center" : undefined,
            }}
          >
            {isMobile(screenWidth) && <>Airdrop + NFT surprise</>}
            {isDesktop(screenWidth) && (
              <p className="text-wrapper-29">
                {t('stats.co2ReductionDescription')}
              </p>
            )}
          </div>
        </div>

        <div
          className="card-6"
          style={{
            flex: isMobile(screenWidth) ? "0 0 auto" : undefined,
          }}
        >
          <div
            className="div-28"
            style={{
              justifyContent: isMobile(screenWidth) ? "center" : undefined,
            }}
          >
            <div className="icon-2">
              <div className="vector-wrapper">
                <LeafAnimation 
                  className="vector-9"
                  width={isMobile(screenWidth) ? 50 : 70}
                  height={isMobile(screenWidth) ? 50 : 70}
                />
              </div>
            </div>

            <div
              className="title-12"
              style={{
                flex: isDesktop(screenWidth) ? "1" : undefined,
                whiteSpace: isMobile(screenWidth) ? "nowrap" : undefined,
                width: isMobile(screenWidth) ? "fit-content" : undefined,
              }}
            >
              {isMobile(screenWidth) && <>15+</>}
              {isDesktop(screenWidth) && <>{t('stats.dualRewards')}</>}
            </div>
          </div>

          <div
            className="title-13"
            style={{
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
              textAlign: isMobile(screenWidth) ? "center" : undefined,
            }}
          >
            {isMobile(screenWidth) && <>Récompenses x2</>}
            {isDesktop(screenWidth) && (
              <p className="text-wrapper-29">
                {t('stats.dualRewardsDescription')}
              </p>
            )}
          </div>
        </div>

        <div
          className="card-7"
          style={{
            flex: isMobile(screenWidth) ? "0 0 auto" : undefined,
          }}
        >
          <div
            className="div-29"
            style={{
              justifyContent: isMobile(screenWidth) ? "center" : undefined,
              padding: isMobile(screenWidth) ? `0px ${SPACING.md}px` : undefined,
            }}
          >
            <div className="icon-2">
              <div className="vector-wrapper">
                <LeafAnimation 
                  className="vector-10"
                  width={isMobile(screenWidth) ? 55 : 75}
                  height={isMobile(screenWidth) ? 55 : 75}
                />
              </div>
            </div>

            <div
              className="title-14"
              style={{
                flex: isDesktop(screenWidth) ? "1" : undefined,
                textAlign: isMobile(screenWidth) ? "center" : undefined,
                whiteSpace: isMobile(screenWidth) ? "nowrap" : undefined,
                width: isMobile(screenWidth) ? "fit-content" : undefined,
              }}
            >
              {isMobile(screenWidth) && <>1M+</>}
              {isDesktop(screenWidth) && <>{t('stats.projectsInPipeline')}</>}
            </div>
          </div>

          <div
            className="title-15"
            style={{
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
              textAlign: isMobile(screenWidth) ? "center" : undefined,
            }}
          >
            {isMobile(screenWidth) && (
              <p className="text-wrapper-29">Communauté exclusive</p>
            )}
            {isDesktop(screenWidth) && (
              <p className="text-wrapper-29">
                {t('stats.projectsInPipelineDescription')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

StatsSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};