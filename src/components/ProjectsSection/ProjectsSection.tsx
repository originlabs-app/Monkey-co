import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { ArrowLeft8 } from "@/icons/ArrowLeft8";
import { EXTERNAL_LINKS } from "@/constants/links";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

interface ProjectsSectionProps {
  screenWidth: number;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ screenWidth }) => {
  const { t, i18n } = useTranslation();

  const handleFinancingClick = () => {
    const subject = i18n.language === 'fr' ? 'Demande de financement' : 'Financing request';
    window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=${subject}`;
  };

  const handleIntroducerClick = () => {
    const subject = i18n.language === 'fr' ? "Devenir apporteur d'affaires" : 'Become a business introducer';
    window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=${subject}`;
  };

  return (
    <div
      className="div-35"
      style={{
        alignSelf: "stretch",
        width: "100%",
        padding: isMobile(screenWidth) 
          ? `${SPACING.xl}px` 
          : isDesktop(screenWidth) 
            ? `${SPACING["3xl"]}px` 
            : undefined,
      }}
    >
      <div className="div-16">
        <div
          className="frame-13"
          style={{
            flexDirection: isMobile(screenWidth) ? "column" : undefined,
            gap: isMobile(screenWidth) 
              ? `${SPACING.xl}px` 
              : isDesktop(screenWidth) 
                ? `${SPACING["2xl"]}px` 
                : undefined,
          }}
        >
          {/* Section Financement de Projet */}
          <div
            className="section-11"
            style={{
              flex: isDesktop(screenWidth) ? "1" : undefined,
              flexGrow: isDesktop(screenWidth) ? "1" : undefined,
              height: isMobile(screenWidth) ? "213px" : undefined,
              width: isMobile(screenWidth) ? "100%" : undefined,
              padding: isMobile(screenWidth) 
                ? `${SPACING.lg}px` 
                : isDesktop(screenWidth) 
                  ? `${SPACING.xl}px` 
                  : undefined,
            }}
          >


            <div
              className="frame-14"
              style={{
                alignItems: isMobile(screenWidth)
                  ? "center"
                  : isDesktop(screenWidth)
                    ? "flex-start"
                    : undefined,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "16px",
                height: "100%"
              }}
            >
              <div
                className="wrap-4"
                style={{
                  flex: "1",
                  width: isMobile(screenWidth)
                    ? "100%"
                    : isDesktop(screenWidth)
                      ? "374px"
                      : undefined,
                }}
              >
                <p
                  className="title-17"
                  style={{
                    textAlign: isMobile(screenWidth) ? "center" : undefined,
                  }}
                >
                  {t('projects.haveProject')}
                </p>

                <p
                  className="subtitle-6"
                  style={{
                    textAlign: isMobile(screenWidth) ? "center" : undefined,
                  }}
                >
                  {t('projects.getFinancing')}
                </p>

                <div 
                  className="button-7"
                  onClick={handleFinancingClick}
                  style={{ cursor: 'pointer', marginTop: "16px" }}
                >
                  <div className="text-wrapper-15">{t('projects.requestFinancing')}</div>
                  <ArrowLeft8 className="arrow-left" />
                </div>
              </div>

              <img
                src="/img/projets-left.png"
                alt="Projets écologiques"
                style={{
                  width: "174px",
                  height: "auto",
                  borderRadius: "8px",
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* Section Apporteur d'Affaires */}
          <div
            className="section-12"
            style={{
              flex: isDesktop(screenWidth) ? "1" : undefined,
              flexGrow: isDesktop(screenWidth) ? "1" : undefined,
              height: isMobile(screenWidth) ? "213px" : undefined,
              width: isMobile(screenWidth) ? "100%" : undefined,
              padding: isMobile(screenWidth) 
                ? `${SPACING.lg}px` 
                : isDesktop(screenWidth) 
                  ? `${SPACING.xl}px` 
                  : undefined,
            }}
          >
            <div
              className="frame-15"
              style={{
                alignItems: isMobile(screenWidth)
                  ? "center"
                  : isDesktop(screenWidth)
                    ? "flex-end"
                    : undefined,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "16px"
              }}
            >
              <img
                src="/img/projets-right.png"
                alt="Projets écologiques"
                style={{
                  width: "174px",
                  height: "auto",
                  borderRadius: "8px",
                  flexShrink: 0
                }}
              />

              <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                {isMobile(screenWidth) && (
                  <div className="wrap-5" style={{ textAlign: "right" }}>
                    <p className="title-18">
                      {t('projects.knowProject')}
                    </p>

                    <p className="subtitle-7">
                      {t('projects.recommendProject')}
                    </p>
                  </div>
                )}

                {isDesktop(screenWidth) && (
                  <div className="wrap-6" style={{ textAlign: "right" }}>
                    <p className="title-19">
                      {t('projects.knowProject')}
                    </p>

                    <p className="subtitle-8">
                      {t('projects.recommendProject')}
                    </p>
                  </div>
                )}

                <div 
                  className="button-7"
                  onClick={handleIntroducerClick}
                  style={{ cursor: 'pointer', marginTop: "16px" }}
                >
                  <div className="text-wrapper-15">
                    {t('projects.becomeIntroducer')}
                  </div>

                  <ArrowLeft8 className="arrow-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectsSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};