import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

interface ProblemSolutionSectionProps {
  screenWidth: number;
  onJoinPresale: () => void;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({ 
  screenWidth, 
  onJoinPresale 
}) => {
  const { t } = useTranslation();

  const renderProblemCard = (
    problemKey: string,
    icons: { src1?: string; src2?: string; alt?: string },
    className: string,
    titleClass: string
  ) => (
    <div className={className}>
      <div className="div-19">
        <div className="icon">
          <div className="div-3">
            {icons.src2 ? (
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <img
                    className="vector-5"
                    alt="Vector"
                    src={icons.src1}
                  />
                  <img
                    className="vector-6"
                    alt="Vector"
                    src={icons.src2}
                  />
                </div>
              </div>
            ) : icons.src1 && icons.alt === "double" ? (
              <div className="overlap-group-2">
                <img
                  className="vector-2"
                  alt="Vector"
                  src={icons.src1}
                />
                <img
                  className="vector-3"
                  alt="Vector"
                  src="/img/vector-58.png"
                />
              </div>
            ) : (
              <img
                className="vector-4"
                alt="Vector"
                src={icons.src1}
              />
            )}
          </div>
        </div>
        <p className={titleClass}>
          {t(problemKey)}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="background-wrapper"
      style={{
        alignSelf: "stretch",
        padding: isMobile(screenWidth)
          ? `${SPACING["4xl"]}px ${SPACING.xl}px`
          : isDesktop(screenWidth)
            ? `${SPACING["5xl"]}px`
            : undefined,
        width: isMobile(screenWidth)
          ? "100%"
          : isDesktop(screenWidth)
            ? "100%"
            : undefined,
      }}
    >
      <div
        className="background"
        style={{
          alignItems: isMobile(screenWidth)
            ? "center"
            : isDesktop(screenWidth)
              ? "flex-start"
              : undefined,
          flexDirection: isMobile(screenWidth) ? "column" : undefined,
          gap: isMobile(screenWidth)
            ? `${SPACING["2xl"]}px`
            : isDesktop(screenWidth)
              ? `${SPACING["4xl"]}px`
              : undefined,
          justifyContent: isMobile(screenWidth) ? "center" : undefined,
          padding: isMobile(screenWidth)
            ? `${SPACING.lg}px`
            : isDesktop(screenWidth)
              ? `${SPACING["4xl"]}px`
              : undefined,
        }}
      >
        {isMobile(screenWidth) && (
          <>
            <div className="div-16">
              <div className="div-7">
                <div className="container-4">
                  <div className="background-border-2">
                    <div className="probl-me-solution-wrapper">
                      <div className="text-wrapper-4">
                        {t('problemSolution.sectionTitle')}
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-divider-3" />
                </div>

                <div className="div-17">
                  <p className="text-wrapper-5">
                    {t('problemSolution.mainProblem')}
                  </p>
                  <p className="text-wrapper-6">
                    {t('problemSolution.solution')}
                  </p>
                </div>
              </div>

              <div className="div-18">
                <div className="div-14">
                  <div className="card">
                    <div className="div-19">
                      <div className="icon">
                        <div className="div-3">
                          <div className="overlap-group-2">
                            <img
                              className="vector-2"
                              alt="Vector"
                              src="/img/vector-59.svg"
                            />
                            <img
                              className="vector-3"
                              alt="Vector"
                              src="/img/vector-58.png"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="title">
                        {t('problemSolution.problem1')}
                      </p>
                    </div>
                  </div>

                  <div className="card-2">
                    <div className="div-20">
                      <div className="icon">
                        <div className="div-3">
                          <img
                            className="vector-4"
                            alt="Vector"
                            src="/img/vector-59-2.svg"
                          />
                        </div>
                      </div>
                      <div className="title">{t('problemSolution.problem2')}</div>
                    </div>
                  </div>
                </div>

                <div className="card-3">
                  <div className="div-19">
                    <div className="icon">
                      <div className="div-3">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-3">
                            <img
                              className="vector-5"
                              alt="Vector"
                              src="/img/vector-60.svg"
                            />
                            <img
                              className="vector-6"
                              alt="Vector"
                              src="/img/vector-61.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="title">
                      {t('problemSolution.problem3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img 
              className="image-4" 
              src="/img/flow-english.png"
              alt="Flow diagram - Problème et Solution"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                objectFit: "contain",
              }}
            />

            <button 
              className="button-5" 
              onClick={onJoinPresale}
              style={{ cursor: 'pointer' }}
            >
              <div className="text-wrapper-3">{t('hero.joinPresale')}</div>
            </button>
          </>
        )}

        {isDesktop(screenWidth) && (
          <>
            <div className="div-21">
              <div className="div-12">
                <div className="container-4">
                  <div className="background-border-2">
                    <div className="container-5">
                      <div className="text-wrapper-4">
                        {t('problemSolution.sectionTitle')}
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-divider-4" />
                </div>

                <div className="div-22">
                  <p className="text-wrapper-7">
                    {t('problemSolution.mainProblem')}
                  </p>
                  <p className="text-wrapper-8">
                    {t('problemSolution.solution')}
                  </p>
                </div>
              </div>

              <div className="div-18">
                <div className="div-14">
                  <div className="card">
                    <div className="div-19">
                      <div className="icon">
                        <div className="div-3">
                          <div className="overlap-group-2">
                            <img
                              className="vector-2"
                              alt="Vector"
                              src="/img/vector-57.svg"
                            />
                            <img
                              className="vector-3"
                              alt="Vector"
                              src="/img/vector-58.png"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="title-2">
                        {t('problemSolution.problem1')}
                      </p>
                    </div>
                  </div>

                  <div className="card-2">
                    <div className="div-20">
                      <div className="icon">
                        <div className="div-3">
                          <img
                            className="vector-4"
                            alt="Vector"
                            src="/img/vector-59-2.svg"
                          />
                        </div>
                      </div>
                      <div className="title-2">
                        {t('problemSolution.problem2')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-3">
                  <div className="div-19">
                    <div className="icon">
                      <div className="div-3">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-3">
                            <img
                              className="vector-5"
                              alt="Vector"
                              src="/img/vector-60.svg"
                            />
                            <img
                              className="vector-6"
                              alt="Vector"
                              src="/img/vector-61.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="title-2">
                      {t('problemSolution.problem3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-23">
              <img 
                className="image-5" 
                src="/img/flow-english.png"
                alt="Flow diagram - Problème et Solution"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              
              <button 
                className="button-5"
                onClick={onJoinPresale}
                style={{ cursor: 'pointer' }}
              >
                <div className="text-wrapper-3">{t('hero.joinPresale')}</div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ProblemSolutionSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  onJoinPresale: PropTypes.func.isRequired,
};