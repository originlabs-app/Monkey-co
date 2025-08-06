import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useWindowWidth } from "@/breakpoints";
import { Button } from "@/components/Button";
import { DisplayCard } from "@/components/DisplayCard";
import { ArrowLeft8 } from "@/icons/ArrowLeft8";
import { LeafAnimation } from "@/components/LeafAnimation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { JoinBeforeSection } from "@/components/JoinBeforeSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { EmailCaptureSection } from "@/components/EmailCaptureSection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { WhyMonkeyCoSection } from "@/components/WhyMonkeyCoSection";
import { PartnersSection } from "@/components/PartnersSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { EXTERNAL_LINKS, PDF_LINKS, SECTION_IDS } from "@/constants/links";
import { BREAKPOINTS, SPACING, DIMENSIONS, isMobile, isDesktop } from "@/constants/theme";
import { logger } from "@/services/logger";
import "./style.css";

export const LandingPage = (): JSX.Element => {
  const screenWidth = useWindowWidth();
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollToTop, scrollToSection } = useSmoothScroll();

  const handleShare = () => {
    const shareData = {
      title: 'Monkey-co',
      text: 'Découvrez Monkey-co, la plateforme de financement nouvelle génération !',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => {
        logger.error('Share failed', { error: error.message });
      });
    } else {
      // Fallback: Copier le lien
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  // Animation au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observer tous les éléments animables
    const sections = document.querySelectorAll('.section, .section-2, .section-3, .section-4, .section-5, .section-6');
    const titles = document.querySelectorAll('.title, .title-2, .title-3, .title-4, .title-5, .title-6');
    const cards = document.querySelectorAll('.display-card');
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');

    [...sections, ...titles, ...cards, ...animateOnScroll].forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="top"
      className="landing-page"
      style={{
        display: isMobile(screenWidth) ? "flex" : "inline-flex",
        minWidth: isMobile(screenWidth) ? `${BREAKPOINTS.MOBILE}px` : undefined,
      }}
    >
      <HeroSection 
        screenWidth={screenWidth}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
        setIsModalOpen={setIsModalOpen}
      />

      <PartnersSection screenWidth={screenWidth} />

      <div
        className="background-wrapper"
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
          className="background"
          style={{
            alignItems:
              screenWidth < 1440
                ? "center"
                : screenWidth >= 1440
                  ? "flex-start"
                  : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            gap:
              screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
            justifyContent: screenWidth < 1440 ? "center" : undefined,
            padding:
              screenWidth < 1440
                ? "16px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && (
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

              <div className="image-4" />

              <button 
                className="button-5" 
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <div className="text-wrapper-3">{t('hero.joinPresale')}</div>
              </button>
            </>
          )}

          {screenWidth >= 1440 && (
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
                <div className="image-5" />

                <button 
                  className="button-5"
                  onClick={() => setIsModalOpen(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="text-wrapper-3">{t('hero.joinPresale')}</div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <FeaturesSection screenWidth={screenWidth} />

      <StatsSection screenWidth={screenWidth} />

      <EmailCaptureSection screenWidth={screenWidth} />


      <TokenomicsSection screenWidth={screenWidth} />

      <WhyMonkeyCoSection screenWidth={screenWidth} />

      <CommunitySection screenWidth={screenWidth} />

      <div
        className="div-35"
        style={{
          alignSelf: "stretch",
          width: "100%",
          padding: isMobile(screenWidth) ? `${SPACING.xl}px` : isDesktop(screenWidth) ? `${SPACING["3xl"]}px` : undefined,
        }}
      >
        <div className="div-16">
          <div
            className="frame-13"
            style={{
              flexDirection: isMobile(screenWidth) ? "column" : undefined,
              gap: isMobile(screenWidth) ? `${SPACING.xl}px` : isDesktop(screenWidth) ? `${SPACING["2xl"]}px` : undefined,
            }}
          >
            <div
              className="section-11"
              style={{
                flex: isDesktop(screenWidth) ? "1" : undefined,
                flexGrow: isDesktop(screenWidth) ? "1" : undefined,
                height: isMobile(screenWidth) ? "213px" : undefined,
                width: isMobile(screenWidth) ? "100%" : undefined,
                padding: isMobile(screenWidth) ? `${SPACING.lg}px` : isDesktop(screenWidth) ? `${SPACING.xl}px` : undefined,
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
                    alignItems:
                      isMobile(screenWidth)
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
                      width:
                        isMobile(screenWidth)
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
                  onClick={() => window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=${i18n.language === 'fr' ? 'Demande de financement' : 'Financing request'}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="text-wrapper-15">{t('projects.requestFinancing')}</div>

                  <ArrowLeft8 className="arrow-left" />
                </div>
              </div>
            </div>

            <div
              className="section-12"
              style={{
                flex: isDesktop(screenWidth) ? "1" : undefined,
                flexGrow: isDesktop(screenWidth) ? "1" : undefined,
                height: isMobile(screenWidth) ? "213px" : undefined,
                width: isMobile(screenWidth) ? "100%" : undefined,
                padding: isMobile(screenWidth) ? `${SPACING.lg}px` : isDesktop(screenWidth) ? `${SPACING.xl}px` : undefined,
              }}
            >
                              <div
                  className="frame-15"
                  style={{
                    alignItems:
                      isMobile(screenWidth)
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
                    onClick={() => window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=${i18n.language === 'fr' ? 'Devenir apporteur d\'affaires' : 'Become a business introducer'}`}
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
                        text="Panneaux Solaires Résidence Nantes"
                        text1="150 kg CO₂ évité"
                        text2="80%"
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
                        text="Rénovation Éco-Quartier Lyon"
                        text1="200 kg CO₂ évité"
                        text2="85%"
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

      <div
        className="section-13"
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
        <div className="container-8">
          <div
            className="horizontal-divider-9"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1440 ? "200px" : undefined,
            }}
          />

          <div
            className="background-border-4"
            style={{
              display:
                screenWidth < 1440
                  ? "flex"
                  : screenWidth >= 1440
                    ? "inline-flex"
                    : undefined,
              flex: screenWidth >= 1440 ? "0 0 auto" : undefined,
              height: screenWidth >= 1440 ? "32px" : undefined,
              padding:
                screenWidth < 1440
                  ? "4px 16px"
                  : screenWidth >= 1440
                    ? "0px 16px"
                    : undefined,
              width: screenWidth < 1440 ? "190px" : undefined,
            }}
          >
            <div
              className="rejoins-la-liste-d-wrapper"
              style={{
                display:
                  screenWidth < 1440
                    ? "flex"
                    : screenWidth >= 1440
                      ? "inline-flex"
                      : undefined,
                flex:
                  screenWidth < 1440
                    ? "1"
                    : screenWidth >= 1440
                      ? "0 0 auto"
                      : undefined,
                flexGrow: screenWidth < 1440 ? "1" : undefined,
              }}
            >
              <p
                className="rejoins-la-liste-d"
                style={{
                  alignSelf: "stretch",
                  textAlign: screenWidth < 1440 ? "center" : undefined,
                  whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
                  width: screenWidth >= 1440 ? "fit-content" : undefined,
                }}
              >
                {t('waitingList.joinEarly')}
              </p>
            </div>
          </div>

          <div
            className="horizontal-divider-10"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1440 ? "200px" : undefined,
            }}
          />
        </div>

        <p
          className="text-16"
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
          }}
        >
          {t('waitingList.readyToInvest')}
        </p>

        <Button
          className="button-8"
          divClassName="button-instance"
          size="lg"
          state="default"
          text={t('waitingList.registerNow')}
          variant="primary"
          visible={false}
          visible1={false}
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <FooterSection screenWidth={screenWidth} />

      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('modal.joinPresaleTitle')}
        subtitle={t('modal.joinPresaleSubtitle')}
      />
    </div>
  );
};
