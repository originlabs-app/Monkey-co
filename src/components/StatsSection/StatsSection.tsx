import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LeafAnimation } from "@/components/LeafAnimation";
import { SECTION_IDS } from "@/constants/links";

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
  );
};

StatsSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};