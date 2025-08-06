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
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
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

      <ProblemSolutionSection 
        screenWidth={screenWidth} 
        onJoinPresale={() => setIsModalOpen(true)} 
      />

      <FeaturesSection screenWidth={screenWidth} />

      <StatsSection screenWidth={screenWidth} />

      <EmailCaptureSection screenWidth={screenWidth} />


      <TokenomicsSection screenWidth={screenWidth} />

      <WhyMonkeyCoSection screenWidth={screenWidth} />

      <CommunitySection screenWidth={screenWidth} />

      <ProjectsSection screenWidth={screenWidth} />

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
