import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LeafAnimation } from "@/components/LeafAnimation";
import { EXTERNAL_LINKS } from "@/constants/links";

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
          screenWidth < 1440
            ? "48px 16px"
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
        className="container-9"
        style={{
          flexDirection: screenWidth < 1440 ? "column" : undefined,
          gap: screenWidth < 1440 ? "48px" : undefined,
          justifyContent: screenWidth >= 1440 ? "space-between" : undefined,
        }}
      >
        {screenWidth < 1440 && (
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

        {screenWidth >= 1440 && (
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
            screenWidth < 1440
              ? "flex-end"
              : screenWidth >= 1440
                ? "center"
                : undefined,
          flexDirection: screenWidth < 1440 ? "column" : undefined,
          justifyContent:
            screenWidth < 1440
              ? "center"
              : screenWidth >= 1440
                ? "flex-end"
                : undefined,
        }}
      >
        <button
          className="button-9"
          style={{
            alignSelf: "stretch",
            flex:
              screenWidth < 1440
                ? "0 0 auto"
                : screenWidth >= 1440
                  ? "1"
                  : undefined,
            flexGrow: screenWidth >= 1440 ? "1" : undefined,
            marginBottom: screenWidth >= 1440 ? "-1.00px" : undefined,
            marginRight: screenWidth < 1440 ? "-1.00px" : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
          onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}
        >
          <div className="text-18">Discord</div>

          <div className="div-39">
            <div className="overlap-group-5">
              <LeafAnimation 
                className="vector-17"
                width={screenWidth < 1440 ? 55 : 75}
                height={screenWidth < 1440 ? 55 : 75}
              />

              <LeafAnimation 
                className="vector-18"
                width={screenWidth < 1440 ? 60 : 80}
                height={screenWidth < 1440 ? 60 : 80}
              />
            </div>
          </div>
        </button>

        <button
          className="button-10"
          style={{
            alignSelf: "stretch",
            flex:
              screenWidth < 1440
                ? "0 0 auto"
                : screenWidth >= 1440
                  ? "1"
                  : undefined,
            flexGrow: screenWidth >= 1440 ? "1" : undefined,
            marginBottom: screenWidth >= 1440 ? "-1.00px" : undefined,
            marginLeft: screenWidth < 1440 ? "-1.00px" : undefined,
            marginRight: screenWidth < 1440 ? "-1.00px" : undefined,
            marginTop: screenWidth >= 1440 ? "-1.00px" : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
          onClick={() => window.open(EXTERNAL_LINKS.TWITTER, '_blank')}
        >
          <div className="text-18">X (Twitter)</div>

          <div className="div-39">
            <img
              className="vector-19"
              alt="Vector"
              src={
                screenWidth < 1440
                  ? "/img/vector-77.svg"
                  : screenWidth >= 1440
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
              screenWidth < 1440
                ? "0 0 auto"
                : screenWidth >= 1440
                  ? "1"
                  : undefined,
            flexGrow: screenWidth >= 1440 ? "1" : undefined,
            marginBottom: screenWidth >= 1440 ? "-1.00px" : undefined,
            marginLeft: screenWidth < 1440 ? "-1.00px" : undefined,
            marginRight: screenWidth < 1440 ? "-1.00px" : undefined,
            marginTop: screenWidth >= 1440 ? "-1.00px" : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div className="text-18">{t('footerNav.joinPresale')}</div>
        </button>

        <button
          className="button-12"
          style={{
            alignSelf: "stretch",
            flex:
              screenWidth < 1440
                ? "0 0 auto"
                : screenWidth >= 1440
                  ? "1"
                  : undefined,
            flexGrow: screenWidth >= 1440 ? "1" : undefined,
            marginLeft: screenWidth < 1440 ? "-1.00px" : undefined,
            marginTop: screenWidth >= 1440 ? "-1.00px" : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div className="text-18">{t('footerNav.launchApp')}</div>

          <img
            className="icon-arrow-right"
            alt="Icon arrow right"
            src={
              screenWidth < 1440
                ? "/img/icon-arrow-right-7.svg"
                : screenWidth >= 1440
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