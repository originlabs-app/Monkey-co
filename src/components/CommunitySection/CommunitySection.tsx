import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LeafAnimation } from "@/components/LeafAnimation";
import { EXTERNAL_LINKS } from "@/constants/links";
import { SPACING, isMobile, isDesktop } from "@/constants/theme";

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
      <div
        className="div-33"
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
        <div
          className="text-15"
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
          {t('joinCommunity.title')}
        </div>

        <p
          className="description-6"
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
          {t('joinCommunity.subtitle')}
        </p>
      </div>

      <div className="div-16">
        <div
          className="frame-12"
          style={{
            flexDirection: isMobile(screenWidth) ? "column" : undefined,
          }}
        >
          <div
            className="header-wrapper"
            onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}
            style={{
              alignSelf: "stretch",
              flex:
                isMobile(screenWidth)
                  ? "0 0 auto"
                  : isDesktop(screenWidth)
                    ? "1"
                    : undefined,
              flexGrow: isDesktop(screenWidth) ? "1" : undefined,
              width: isMobile(screenWidth) ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <div className="icon">
                <div className="qlementine-icons">
                  <div className="overlap-group-4">
                    <LeafAnimation 
                      className="vector-13"
                      width={isMobile(screenWidth) ? 35 : 55}
                      height={isMobile(screenWidth) ? 35 : 55}
                    />

                    <LeafAnimation 
                      className="vector-14"
                      width={isMobile(screenWidth) ? 40 : 60}
                      height={isMobile(screenWidth) ? 40 : 60}
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
                isMobile(screenWidth)
                  ? "0 0 auto"
                  : isDesktop(screenWidth)
                    ? "1"
                    : undefined,
              flexGrow: isDesktop(screenWidth) ? "1" : undefined,
              width: isMobile(screenWidth) ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <img
                className="icon-4"
                alt="Icon"
                src={
                  isMobile(screenWidth)
                    ? "/img/icon-3-2.svg"
                    : isDesktop(screenWidth)
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
                isMobile(screenWidth)
                  ? "0 0 auto"
                  : isDesktop(screenWidth)
                    ? "1"
                    : undefined,
              flexGrow: isDesktop(screenWidth) ? "1" : undefined,
              width: isMobile(screenWidth) ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <div className="icon">
                <div className="uil-share">
                  <LeafAnimation 
                    className="vector-15"
                    width={isMobile(screenWidth) ? 45 : 65}
                    height={isMobile(screenWidth) ? 45 : 65}
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
                isMobile(screenWidth)
                  ? "0 0 auto"
                  : isDesktop(screenWidth)
                    ? "1"
                    : undefined,
              flexGrow: isDesktop(screenWidth) ? "1" : undefined,
              width: isMobile(screenWidth) ? "100%" : undefined,
              cursor: 'pointer',
            }}
          >
            <div className="header">
              <div className="icon">
                <div className="div-3">
                  <LeafAnimation 
                    className="vector-16"
                    width={isMobile(screenWidth) ? 50 : 70}
                    height={isMobile(screenWidth) ? 50 : 70}
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