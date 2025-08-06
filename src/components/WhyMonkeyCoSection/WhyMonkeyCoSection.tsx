import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

interface WhyMonkeyCoSectionProps {
  screenWidth: number;
}

export const WhyMonkeyCoSection: React.FC<WhyMonkeyCoSectionProps> = ({ screenWidth }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="section-wrapper"
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
        className="frame-wrapper"
        style={{
          backgroundImage:
            screenWidth < 1440
              ? "url(/img/section-11.png)"
              : screenWidth >= 1440
                ? "url(/img/section-17.png)"
                : undefined,
          padding:
            screenWidth < 1440
              ? "24px"
              : screenWidth >= 1440
                ? "48px"
                : undefined,
        }}
      >
        <div
          className="frame-6"
          style={{
            gap:
              screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <div className="div-7">
              <div className="frame-7">
                <img
                  className="albedobase-XL-a-4"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-15.svg"
                />

                <div className="div-31">
                  <div className="subtitle">"Mon"</div>

                  <p className="subtitle-2">
                    {t('whyMonkeyCo.moneyContraction')}
                  </p>
                </div>
              </div>

              <div className="frame-7">
                <img
                  className="albedobase-XL-a-4"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-16-2.svg"
                />

                <div className="div-31">
                  <div className="subtitle">"Key"</div>

                  <p className="subtitle-2">
                    {t('whyMonkeyCo.keyPower')}
                  </p>
                </div>
              </div>

              <div className="frame-7">
                <img
                  className="albedobase-XL-a-4"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-18.svg"
                />

                <div className="div-31">
                  <div className="subtitle">"Co"</div>

                  <p className="subtitle-2">
                    {t('whyMonkeyCo.community')}
                  </p>
                </div>
              </div>

              <div className="frame-7">
                <img
                  className="albedobase-XL-a-4"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-17-2.svg"
                />

                <div className="div-31">
                  <div className="subtitle">"Monkey"</div>

                  <p className="subtitle-2">
                    {t('whyMonkeyCo.monkeyEvolution')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {screenWidth >= 1440 && (
            <>
              <div className="frame-8">
                <h2 className="text-10">
                  {i18n.language === 'fr' ? (
                    <>Et pourquoi <span>Monkey-co</span> ?</>
                  ) : (
                    <>And why <span>Monkey-co</span>?</>
                  )}
                </h2>
              </div>

              <div className="frame-9">
                <div className="frame-10">
                  <img
                    className="albedobase-XL-a-4"
                    alt="Albedobase XL a"
                    src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-16.svg"
                  />

                  <div className="frame-11">
                    <div className="subtitle-3">"Mon"</div>

                    <p className="subtitle-4">
                      {t('whyMonkeyCo.moneyContraction')}
                    </p>
                  </div>
                </div>

                <div className="frame-10">
                  <img
                    className="albedobase-XL-a-4"
                    alt="Albedobase XL a"
                    src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-17.svg"
                  />

                  <div className="frame-11">
                    <div className="subtitle-3">"Key"</div>

                    <p className="subtitle-4">
                      {t('whyMonkeyCo.keyPower')}
                    </p>
                  </div>
                </div>

                <div className="frame-10">
                  <img
                    className="albedobase-XL-a-4"
                    alt="Albedobase XL a"
                    src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-18.svg"
                  />

                  <div className="frame-11">
                    <div className="subtitle-3">"Co"</div>

                    <p className="subtitle-4">
                      {t('whyMonkeyCo.community')}
                    </p>
                  </div>
                </div>

                <div className="frame-10">
                  <img
                    className="albedobase-XL-a-4"
                    alt="Albedobase XL a"
                    src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-19.svg"
                  />

                  <div className="frame-11">
                    <div className="subtitle-3">"Monkey"</div>

                    <p className="subtitle-4">
                      {t('whyMonkeyCo.monkeyEvolution')}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

WhyMonkeyCoSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};