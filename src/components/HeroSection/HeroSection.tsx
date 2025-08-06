import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LeafAnimation } from "@/components/LeafAnimation";
import { SECTION_IDS, EXTERNAL_LINKS } from "@/constants/links";
import { SPACING, isMobile, isDesktop } from "@/constants/theme";

interface HeroSectionProps {
  screenWidth: number;
  scrollToTop: () => void;
  scrollToSection: (sectionId: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  screenWidth, 
  scrollToTop, 
  scrollToSection,
  setIsModalOpen 
}) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Menu Section */}
      <div
        className="menu-section"
        style={{
          alignSelf: "stretch",
          padding:
            isMobile(screenWidth)
              ? "0px 16px"
              : isDesktop(screenWidth)
                ? "0px 48px"
                : undefined,
          width: "100%",
        }}
      >
        <div
          className="menu"
          style={{
            flex: isMobile(screenWidth) ? "0 0 auto" : undefined,
            height: isDesktop(screenWidth) ? "80px" : undefined,
          }}
        >
          {isMobile(screenWidth) && (
            <div className="div-2">
              <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>Monkey-co</div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <LanguageSwitcher />
                <div className="div-3">
                  <img className="vector" alt="Vector" src="/img/vector-58.svg" />
                </div>
              </div>
            </div>
          )}

          {isDesktop(screenWidth) && (
            <>
              <div className="div-4">
                <div className="logo-2" onClick={scrollToTop} style={{ cursor: 'pointer' }}>Monkey-co</div>

                <div className="div-5">
                  <div className="link" onClick={() => scrollToSection(SECTION_IDS.PROBLEM_SOLUTION)} style={{ cursor: 'pointer' }}>{t('nav.problemSolution')}</div>

                  <div className="link" onClick={() => scrollToSection(SECTION_IDS.ADVANTAGES)} style={{ cursor: 'pointer' }}>{t('nav.advantages')}</div>

                  <div className="link" onClick={() => scrollToSection(SECTION_IDS.TOKENOMICS)} style={{ cursor: 'pointer' }}>{t('nav.tokenomics')}</div>
                </div>
              </div>

              <div className="div-6">
                <div className="social-nav-links" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <LanguageSwitcher />
                  <button 
                    onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      padding: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    aria-label="Discord"
                  >
                    <img src="/img/icon discord.svg" alt="Discord" style={{ width: '24px', height: '24px' }} />
                  </button>
                  <button 
                    onClick={() => window.open(EXTERNAL_LINKS.TWITTER, '_blank')}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      padding: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    aria-label="X (Twitter)"
                  >
                    <img src="/img/icon twitter.svg" alt="X (Twitter)" style={{ width: '24px', height: '24px' }} />
                  </button>
                </div>

                <div className="div-5">
                  <button 
                    className="div-wrapper" 
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="text">{t('nav.joinPresale')}</div>
                  </button>

                  <button 
                    className="button-2" 
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="text-2">{t('nav.launchApp')}</div>

                    <img
                      className="icon-arrow-right"
                      alt="Icon arrow right"
                      src="/img/icon-arrow-right-8.svg"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Hero content will be added here */}
      <div
        className="section"
        style={{
          alignSelf: "stretch",
          gap:
            isMobile(screenWidth)
              ? `${SPACING["3.5xl"]}px`
              : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
                : undefined,
          height:
            isMobile(screenWidth)
              ? "700px"
              : isDesktop(screenWidth)
                ? "1200px"
                : undefined,
          padding:
            isMobile(screenWidth)
              ? `${SPACING["4xl"]}px ${SPACING.xl}px`
              : isDesktop(screenWidth) ? `${SPACING["5xl"]}px`
                : undefined,
          width: "100%",
        }}
      >
        <div
          className="image"
          style={{
            backgroundImage:
              isDesktop(screenWidth)
                ? "url(/img/image-17.png)"
                : isMobile(screenWidth)
                  ? "url(/img/image-13.png)"
                  : undefined,
            height:
              isDesktop(screenWidth)
                ? "598px"
                : isMobile(screenWidth)
                  ? "266px"
                  : undefined,
            top:
              isDesktop(screenWidth)
                ? "467px"
                : isMobile(screenWidth)
                  ? "374px"
                  : undefined,
          }}
        />

        {isMobile(screenWidth) && (
          <>
            <div className="link-2">
              <p className="p">
                {t('hero.tagline')}
              </p>
            </div>

            <div className="div-7">
              <h1 className="hero-title-mobile">
                {t('hero.title1')} 
                <img
                  className="hero-icon-monkey"
                  alt="Singe"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-14.svg"
                />
                {t('hero.title2')} <span className="crypto-gradient">{t('hero.title3')}</span><br />
                {t('hero.title4')} 
                <img
                  className="hero-icon-planet"
                  alt="Planète"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-planet-earth-0-3-2x.png"
                />
                {t('hero.title5')}
              </h1>

              <p className="description">
                {t('hero.description')}
              </p>
            </div>

            <div className="div-11">
              <button 
                className="button-3" 
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <div className="text-wrapper-3">{t('hero.joinPresale')}</div>
              </button>

              <p className="text-5">
                {t('hero.limitedPlaces')}
              </p>
            </div>
          </>
        )}

        {isDesktop(screenWidth) && (
          <>
            <div className="link-3">
              <p className="text-6">
                {t('hero.tagline')}
              </p>
            </div>

            <div className="div-12">
              <h1 className="hero-title-desktop">
                {t('hero.title1')} 
                <img
                  className="hero-icon-monkey-desktop"
                  alt="Singe"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-15-2.svg"
                />
                {t('hero.title2')} <span className="crypto-gradient-desktop">{t('hero.title3')}</span><br />
                {t('hero.title4')} 
                <img
                  className="hero-icon-planet-desktop"
                  alt="Planète"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-planet-earth-0-3.png"
                />
                {t('hero.title5')}
              </h1>

              <p className="description-2">
                {t('hero.description')}
              </p>
            </div>

            <div className="div-15">
              <button 
                className="button-3" 
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <button className="button-4">{t('hero.joinPresale')}</button>
              </button>

              <p className="text-9">
                {t('hero.limitedPlaces')}
              </p>
            </div>
          </>
        )}

        <img
          className="app-image"
          style={{
            height:
              isMobile(screenWidth)
                ? "auto"
                : isDesktop(screenWidth)
                  ? "auto"
                  : undefined,
            marginTop:
              isMobile(screenWidth)
                ? "20px"
                : isDesktop(screenWidth)
                  ? `${SPACING["3.5xl"]}px`
                  : undefined,
            marginBottom:
              isMobile(screenWidth)
                ? "0px"
                : isDesktop(screenWidth)
                  ? "0px"
                  : undefined,
            width:
              isMobile(screenWidth)
                ? "100%"
                : isDesktop(screenWidth)
                  ? "100%"
                  : undefined,
            maxWidth: "1200px",
            objectPosition: "center 70%",
          }}
          alt="App image"
          src="/img/app-image-new.png"
        />

        {isDesktop(screenWidth) && (
          <>
            <LeafAnimation 
              className="group"
              width={300}
              height={300}
            />

            <LeafAnimation 
              className="group-2"
              width={300}
              height={300}
            />
          </>
        )}
      </div>
    </>
  );
};

HeroSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  scrollToTop: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};