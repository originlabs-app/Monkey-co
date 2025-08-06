import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { DisplayCard } from "@/components/DisplayCard";
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
            <div className="overlap-wrapper">
              <div className="overlap">
                <DisplayCard
                  className="display-card-10"
                  contentClassName="display-card-7"
                  detailsClassName="display-card-8"
                  divClassName="display-card-14"
                  divClassName1="display-card-15"
                  divClassName2="display-card-13"
                  divClassName3="display-card-11"
                  divClassNameOverride="display-card-instance"
                  overlapGroupClassName="display-card-4"
                  progressBackgroundClassName="display-card-9"
                  progressFigmaClassName="display-card-5"
                  rectangle="/img/image-19.png"
                  rectangleClassName="display-card-6"
                  statusesClassName="display-card-12"
                  text={t('projects.solarPanelsNantes')}
                  text1={`150 ${t('projects.co2Avoided')}`}
                  text2="80%"
                  statusText={t('projects.inProgress')}
                  progressText={t('projects.progression')}
                  wrapClassName="display-card-3"
                />
                <DisplayCard
                  className="display-card-19"
                  contentClassName="display-card-7"
                  detailsClassName="display-card-18"
                  divClassName="display-card-21"
                  divClassName1="display-card-15"
                  divClassName2="display-card-13"
                  divClassName3="display-card-11"
                  divClassNameOverride="display-card-16"
                  overlapGroupClassName="display-card-4"
                  progressBackgroundClassName="display-card-9"
                  progressFigmaClassName="display-card-5"
                  rectangle="/img/image-20.png"
                  rectangleClassName="display-card-17"
                  statusesClassName="display-card-20"
                  text={t('projects.ecoDistrictLyon')}
                  text1={`200 ${t('projects.co2Avoided')}`}
                  text2="85%"
                  statusText={t('projects.inProgress')}
                  progressText={t('projects.progression')}
                  wrapClassName="display-card-3"
                />
                <div className="display-card-22">
                  <img
                    className="image-8"
                    alt="Image"
                    src="/img/image-21.png"
                  />

                  <div className="content-wrapper">
                    <div className="content-2">
                      <div className="wrap-3">
                        <div className="r-novation-co-2">
                          {t('projects.socialHousingMarseille')}
                        </div>

                        <div className="statuses-2">
                          <div className="text-wrapper-12">{t('projects.completed')}</div>
                        </div>
                      </div>

                      <div className="element-kg-CO-vit-2">
                        {`150 ${t('projects.co2Avoided')}`}
                      </div>

                      <div className="progress-figma-2">
                        <div className="text-wrapper-13">{t('projects.progression')}</div>

                        <div className="progress-background-wrapper">
                          <div className="progress-background-2" />
                        </div>

                        <div className="text-wrapper-14">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="frame-14"
              style={{
                alignItems: isMobile(screenWidth)
                  ? "center"
                  : isDesktop(screenWidth)
                    ? "flex-start"
                    : undefined,
              }}
            >
              <div
                className="wrap-4"
                style={{
                  alignSelf: "stretch",
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
              </div>

              <div 
                className="button-7"
                onClick={handleFinancingClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="text-wrapper-15">{t('projects.requestFinancing')}</div>
                <ArrowLeft8 className="arrow-left" />
              </div>
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
              }}
            >
              {isMobile(screenWidth) && (
                <div className="wrap-5">
                  <p className="title-18">
                    {t('projects.knowProject')}
                  </p>

                  <p className="subtitle-7">
                    {t('projects.recommendProject')}
                  </p>
                </div>
              )}

              {isDesktop(screenWidth) && (
                <div className="wrap-6">
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
                style={{ cursor: 'pointer' }}
              >
                <div className="text-wrapper-15">
                  {t('projects.becomeIntroducer')}
                </div>

                <ArrowLeft8 className="arrow-left" />
              </div>

              {isDesktop(screenWidth) && (
                <div className="group-3">
                  <div className="overlap">
                    <DisplayCard
                      className="display-card-10"
                      contentClassName="display-card-7"
                      detailsClassName="display-card-8"
                      divClassName="display-card-14"
                      divClassName1="display-card-15"
                      divClassName2="display-card-13"
                      divClassName3="display-card-11"
                      divClassNameOverride="display-card-instance"
                      overlapGroupClassName="display-card-4"
                      progressBackgroundClassName="display-card-9"
                      progressFigmaClassName="display-card-5"
                      rectangle="/img/image-19.png"
                      rectangleClassName="display-card-6"
                      statusesClassName="display-card-12"
                      text={t('projects.solarPanelsNantes')}
                      text1={`150 ${t('projects.co2Avoided')}`}
                      text2="80%"
                      statusText={t('projects.inProgress')}
                      progressText={t('projects.progression')}
                      wrapClassName="display-card-3"
                    />
                    <DisplayCard
                      className="display-card-19"
                      contentClassName="display-card-7"
                      detailsClassName="display-card-18"
                      divClassName="display-card-21"
                      divClassName1="display-card-15"
                      divClassName2="display-card-13"
                      divClassName3="display-card-11"
                      divClassNameOverride="display-card-16"
                      overlapGroupClassName="display-card-4"
                      progressBackgroundClassName="display-card-9"
                      progressFigmaClassName="display-card-5"
                      rectangle="/img/image-20.png"
                      rectangleClassName="display-card-17"
                      statusesClassName="display-card-20"
                      text={t('projects.ecoDistrictLyon')}
                      text1={`200 ${t('projects.co2Avoided')}`}
                      text2="85%"
                      statusText={t('projects.inProgress')}
                      progressText={t('projects.progression')}
                      wrapClassName="display-card-3"
                    />
                    <div className="display-card-22">
                      <img
                        className="image-8"
                        alt="Image"
                        src="/img/image-21.png"
                      />

                      <div className="content-wrapper">
                        <div className="content-2">
                          <div className="wrap-3">
                            <div className="r-novation-co-2">
                              {t('projects.socialHousingMarseille')}
                            </div>

                            <div className="statuses-2">
                              <div className="text-wrapper-12">{t('projects.completed')}</div>
                            </div>
                          </div>

                          <div className="element-kg-CO-vit-2">
                            {`150 ${t('projects.co2Avoided')}`}
                          </div>

                          <div className="progress-figma-2">
                            <div className="text-wrapper-13">{t('projects.progression')}</div>

                            <div className="progress-background-wrapper">
                              <div className="progress-background-2" />
                            </div>

                            <div className="text-wrapper-14">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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