import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LeafAnimation } from "@/components/LeafAnimation";
import { EXTERNAL_LINKS } from "@/constants/links";

interface CommunitySectionProps {
  screenWidth: number;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ screenWidth }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="section-7"
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
      <div
        className="div-33"
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
        <div
          className="text-15"
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
          {t('joinCommunity.title')}
        </div>

        <p
          className="description-6"
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
          {t('joinCommunity.subtitle')}
        </p>
      </div>

      <div className="div-16">
        <div
          className="frame-12"
          style={{
            flexDirection: screenWidth < 1440 ? "column" : undefined,
          }}
        >
          <div
            className="header-wrapper"
            onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}
            style={{
              alignSelf: "stretch",
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <div className="icon">
                <div className="qlementine-icons">
                  <div className="overlap-group-4">
                    <LeafAnimation 
                      className="vector-13"
                      width={screenWidth < 1440 ? 35 : 55}
                      height={screenWidth < 1440 ? 35 : 55}
                    />

                    <LeafAnimation 
                      className="vector-14"
                      width={screenWidth < 1440 ? 40 : 60}
                      height={screenWidth < 1440 ? 40 : 60}
                    />
                  </div>
                </div>
              </div>

              <div className="wrap-2">
                <div className="title-16">{t('joinCommunity.discord')}</div>

                <p className="subtitle-5">{t('joinCommunity.discordDescription')}</p>
              </div>
            </div>
          </div>

          <div
            className="section-8"
            onClick={() => window.open(EXTERNAL_LINKS.TWITTER, '_blank')}
            style={{
              alignSelf: "stretch",
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <img
                className="icon-4"
                alt="Icon"
                src={
                  screenWidth < 1440
                    ? "/img/icon-3-2.svg"
                    : screenWidth >= 1440
                      ? "/img/icon-3.svg"
                      : undefined
                }
              />

              <div className="wrap-2">
                <div className="title-16">{t('joinCommunity.twitter')}</div>

                <div className="subtitle-5">
                  {t('joinCommunity.twitterDescription')}
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-9"
            onClick={() => window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=${i18n.language === 'fr' ? 'Parler de Monkey-co' : 'Talk about Monkey-co'}`}
            style={{
              alignSelf: "stretch",
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <div className="icon">
                <div className="uil-share">
                  <LeafAnimation 
                    className="vector-15"
                    width={screenWidth < 1440 ? 45 : 65}
                    height={screenWidth < 1440 ? 45 : 65}
                  />
                </div>
              </div>

              <div className="wrap-2">
                <div className="title-16">{t('joinCommunity.talkAbout')}</div>

                <div className="subtitle-5">
                  {t('joinCommunity.growCommunity')}
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-10"
            onClick={() => window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=Une idée pour Monkey-co`}
            style={{
              alignSelf: "stretch",
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <div className="icon">
                <div className="div-3">
                  <LeafAnimation 
                    className="vector-16"
                    width={screenWidth < 1440 ? 50 : 70}
                    height={screenWidth < 1440 ? 50 : 70}
                  />
                </div>
              </div>

              <div className="wrap-2">
                <p className="title-16">{t('joinCommunity.shareIdea')}</p>

                <p className="subtitle-5">
                  {t('joinCommunity.listenToProposals')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CommunitySection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};