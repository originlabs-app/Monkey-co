import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LeafAnimation } from "@/components/LeafAnimation";
import { EXTERNAL_LINKS } from "@/constants/links";
import { SPACING, isMobile, isDesktop } from "@/constants/theme";

interface FooterSectionProps {
  screenWidth: number;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();

  return (
    <footer
      className="footer"
      style={{
        alignSelf: "stretch",
        padding:
          isMobile(screenWidth)
            ? "48px 16px"
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
        className="container-9"
        style={{
          flexDirection: isMobile(screenWidth) ? "column" : undefined,
          gap: isMobile(screenWidth) ? "48px" : undefined,
          justifyContent: isDesktop(screenWidth) ? "space-between" : undefined,
        }}
      >
        {isMobile(screenWidth) && (
          <>
            <div className="div-34">
              <div className="logo-3">Monkey-co</div>

              <p className="link-4">Investir tes cryptos pour la planète.</p>
            </div>

            <div className="container-10">
              <div className="div-35">
                <div className="link-5">Monkey-co</div>

                <div className="div-36">
                  <div className="link-6">{t('footerNav.home')}</div>

                  <div className="link-7">{t('footerNav.problemSolution')}</div>

                  <div className="link-7">{t('footerNav.advantages')}</div>

                  <div className="link-7">{t('footerNav.tokenomics')}</div>

                  <div className="link-7">{t('footerNav.community')}</div>
                </div>
              </div>

              <div className="div-35">
                <div className="link-5">{t('footerNav.legal')}</div>

                <div className="div-36">
                  <div className="link-6">{t('footerNav.legalNotice')}</div>

                  <div className="link-7">{t('footerNav.privacyPolicy')}</div>
                </div>
              </div>
            </div>

            <p className="link-8">© 2025 Monkey-co. All rights reserved.</p>
          </>
        )}

        {isDesktop(screenWidth) && (
          <>
            <div className="container-11">
              <div className="div-37">
                <div className="logo-3">Monkey-co</div>

                <div className="flexcontainer-13">
                  <p className="text-17">
                    <span className="text-wrapper-16">
                      {t('waitingList.tagline')}<br />
                    </span>
                  </p>

                  <p className="text-17">
                    <span className="text-wrapper-16">
                      {t('waitingList.investCrypto')}
                    </span>
                  </p>
                </div>
              </div>

              <p className="link-8">
                © 2025 Monkey-co.com All rights reserved.
              </p>
            </div>

            <div className="container-12">
              <div className="div-35">
                <div className="link-5">Monkey-co</div>

                <div className="div-36">
                  <div className="link-6">{t('footerNav.home')}</div>

                  <div className="link-7">{t('footerNav.problemSolution')}</div>

                  <div className="link-7">{t('footerNav.advantages')}</div>

                  <div className="link-7">{t('footerNav.tokenomics')}</div>

                  <div className="link-7">{t('footerNav.community')}</div>
                </div>
              </div>

              <div className="div-35">
                <div className="link-5">{t('footerNav.legal')}</div>

                <div className="div-36">
                  <div className="link-6">{t('footerNav.legalNotice')}</div>

                  <div className="link-7">{t('footerNav.privacyPolicy')}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className="div-38"
        style={{
          alignItems:
            isMobile(screenWidth)
              ? "flex-end"
              : isDesktop(screenWidth)
                ? "center"
                : undefined,
          flexDirection: isMobile(screenWidth) ? "column" : undefined,
          justifyContent:
            isMobile(screenWidth)
              ? "center"
              : isDesktop(screenWidth)
                ? "flex-end"
                : undefined,
        }}
      >
        <button
          className="button-9"
          style={{
            alignSelf: "stretch",
            flex:
              isMobile(screenWidth)
                ? "0 0 auto"
                : isDesktop(screenWidth)
                  ? "1"
                  : undefined,
            flexGrow: isDesktop(screenWidth) ? "1" : undefined,
            marginBottom: isDesktop(screenWidth) ? "-1.00px" : undefined,
            marginRight: isMobile(screenWidth) ? "-1.00px" : undefined,
            width: isMobile(screenWidth) ? "100%" : undefined,
          }}
          onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}
        >
          <div className="text-18">Discord</div>

          <div className="div-39">
            <div className="overlap-group-5">
              <LeafAnimation 
                className="vector-17"
                width={isMobile(screenWidth) ? 55 : 75}
                height={isMobile(screenWidth) ? 55 : 75}
              />

              <LeafAnimation 
                className="vector-18"
                width={isMobile(screenWidth) ? 60 : 80}
                height={isMobile(screenWidth) ? 60 : 80}
              />
            </div>
          </div>
        </button>

        <button
          className="button-10"
          style={{
            alignSelf: "stretch",
            flex:
              isMobile(screenWidth)
                ? "0 0 auto"
                : isDesktop(screenWidth)
                  ? "1"
                  : undefined,
            flexGrow: isDesktop(screenWidth) ? "1" : undefined,
            marginBottom: isDesktop(screenWidth) ? "-1.00px" : undefined,
            marginLeft: isMobile(screenWidth) ? "-1.00px" : undefined,
            marginRight: isMobile(screenWidth) ? "-1.00px" : undefined,
            marginTop: isDesktop(screenWidth) ? "-1.00px" : undefined,
            width: isMobile(screenWidth) ? "100%" : undefined,
          }}
          onClick={() => window.open(EXTERNAL_LINKS.TWITTER, '_blank')}
        >
          <div className="text-18">X (Twitter)</div>

          <div className="div-39">
            <img
              className="vector-19"
              alt="Vector"
              src={
                isMobile(screenWidth)
                  ? "/img/vector-77.svg"
                  : isDesktop(screenWidth)
                    ? "/img/vector-75-2.svg"
                    : undefined
              }
            />
          </div>
        </button>

        <button
          className="button-11"
          style={{
            alignSelf: "stretch",
            flex:
              isMobile(screenWidth)
                ? "0 0 auto"
                : isDesktop(screenWidth)
                  ? "1"
                  : undefined,
            flexGrow: isDesktop(screenWidth) ? "1" : undefined,
            marginBottom: isDesktop(screenWidth) ? "-1.00px" : undefined,
            marginLeft: isMobile(screenWidth) ? "-1.00px" : undefined,
            marginRight: isMobile(screenWidth) ? "-1.00px" : undefined,
            marginTop: isDesktop(screenWidth) ? "-1.00px" : undefined,
            width: isMobile(screenWidth) ? "100%" : undefined,
          }}
        >
          <div className="text-18">{t('footerNav.joinPresale')}</div>
        </button>

        <button
          className="button-12"
          style={{
            alignSelf: "stretch",
            flex:
              isMobile(screenWidth)
                ? "0 0 auto"
                : isDesktop(screenWidth)
                  ? "1"
                  : undefined,
            flexGrow: isDesktop(screenWidth) ? "1" : undefined,
            marginLeft: isMobile(screenWidth) ? "-1.00px" : undefined,
            marginTop: isDesktop(screenWidth) ? "-1.00px" : undefined,
            width: isMobile(screenWidth) ? "100%" : undefined,
          }}
        >
          <div className="text-18">{t('footerNav.launchApp')}</div>

          <img
            className="icon-arrow-right"
            alt="Icon arrow right"
            src={
              isMobile(screenWidth)
                ? "/img/icon-arrow-right-7.svg"
                : isDesktop(screenWidth)
                  ? "/img/icon-arrow-right-9.svg"
                  : undefined
            }
          />
        </button>
      </div>
    </footer>
  );
};

FooterSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};