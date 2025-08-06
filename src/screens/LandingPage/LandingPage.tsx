import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { DisplayCard } from "../../components/DisplayCard";
import { ArrowLeft8 } from "../../icons/ArrowLeft8";
import { LeafAnimation } from "../../components/LeafAnimation";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { EmailCaptureModal } from "../../components/EmailCaptureModal";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { EXTERNAL_LINKS, PDF_LINKS, SECTION_IDS } from "../../constants/links";
import "./style.css";

export const LandingPage = (): JSX.Element => {
  const screenWidth = useWindowWidth();
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCard, setSelectedCard] = useState("rendement");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollToTop, scrollToSection } = useSmoothScroll();

  const cardImages = {
    rendement: "/img/Frame 1.svg",
    impact: "/img/Frame 2.svg",
    dashboard: "/img/Frame 3.svg",
    gouvernance: "/img/Frame 4.svg",
    projets: "/img/Frame 5.svg",
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleShare = () => {
    const shareData = {
      title: 'Monkey-co',
      text: 'Découvrez Monkey-co, la plateforme de financement nouvelle génération !',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      // Fallback: Copier le lien
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  const handleSubmit = async () => {
    // Reset messages
    setShowError(false);
    setErrorMessage("");
    setSuccessMessage("");

    // Validation email
    if (!email || !validateEmail(email)) {
      setErrorMessage(t('footerCta.emailRequired'));
      return;
    }

    // Validation consentement
    if (!consent) {
      setShowError(true);
      return;
    }
    
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/mailing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          consent,
          timestamp: new Date().toISOString(),
          source: 'landing_page'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'inscription');
      }

      // Succès
      setSuccessMessage(t('footerCta.successMessage'));
      setEmail("");
      setConsent(false);
    } catch (error: any) {
      setErrorMessage(error.message || t('footerCta.errorMessage'));
    } finally {
      setIsLoading(false);
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
        display:
          screenWidth < 1440
            ? "flex"
            : screenWidth >= 1440
              ? "inline-flex"
              : undefined,
        minWidth: screenWidth < 1440 ? "390px" : undefined,
      }}
    >
      <div
        className="menu-section"
        style={{
          alignSelf: "stretch",
          padding:
            screenWidth < 1440
              ? "0px 16px"
              : screenWidth >= 1440
                ? "0px 48px"
                : undefined,
          width: "100%",
        }}
      >
        <div
          className="menu"
          style={{
            flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            height: screenWidth >= 1440 ? "80px" : undefined,
          }}
        >
          {screenWidth < 1440 && (
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

          {screenWidth >= 1440 && (
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

      <div
        className="section"
        style={{
          alignSelf: "stretch",
          gap:
            screenWidth < 1440
              ? "40px"
              : screenWidth >= 1440
                ? "48px"
                : undefined,
          height:
            screenWidth < 1440
              ? "585px"
              : screenWidth >= 1440
                ? "1010px"
                : undefined,
          padding:
            screenWidth < 1440
              ? "48px 20px"
              : screenWidth >= 1440
                ? "64px"
                : undefined,
          width: "100%",
        }}
      >
        <div
          className="image"
          style={{
            backgroundImage:
              screenWidth >= 1440
                ? "url(/img/image-17.png)"
                : screenWidth < 1440
                  ? "url(/img/image-13.png)"
                  : undefined,
            height:
              screenWidth >= 1440
                ? "598px"
                : screenWidth < 1440
                  ? "266px"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "467px"
                : screenWidth < 1440
                  ? "374px"
                  : undefined,
          }}
        />

        {screenWidth < 1440 && (
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

        {screenWidth >= 1440 && (
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
              screenWidth < 1440
                ? "211.47px"
                : screenWidth >= 1440
                  ? "639.02px"
                  : undefined,
            marginBottom:
              screenWidth < 1440
                ? "-48.00px"
                : screenWidth >= 1440
                  ? "-64.00px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "366px"
                : screenWidth >= 1440
                  ? "1106px"
                  : undefined,
          }}
          alt="App image"
          src={
            screenWidth < 1440
              ? "/img/app-image-3.png"
              : screenWidth >= 1440
                ? "/img/app-image-3-2.png"
                : undefined
          }
        />

        {screenWidth >= 1440 && (
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

      <div
        className="container-wrapper"
        style={{
          alignSelf: "stretch",
          padding:
            screenWidth < 1440
              ? "24px 12px"
              : screenWidth >= 1440
                ? "64px"
                : undefined,
          width: "100%",
        }}
      >
        <div className="container">
          <div
            className="container-2"
            style={{
              zIndex:
                screenWidth >= 1440
                  ? "1"
                  : screenWidth < 1440
                    ? "2"
                    : undefined,
            }}
          >
            <div
              className="horizontal-divider"
              style={{
                flex: screenWidth < 1440 ? "1" : undefined,
                flexGrow: screenWidth < 1440 ? "1" : undefined,
                width: screenWidth >= 1440 ? "200px" : undefined,
              }}
            />

            <div
              className="background-border"
              style={{
                display:
                  screenWidth >= 1440
                    ? "inline-flex"
                    : screenWidth < 1440
                      ? "flex"
                      : undefined,
                flex:
                  screenWidth >= 1440
                    ? "0 0 auto"
                    : screenWidth < 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth < 1440 ? "1" : undefined,
              }}
            >
              <div
                className="container-3"
                style={{
                  marginLeft: screenWidth < 1440 ? "-5.00px" : undefined,
                  marginRight: screenWidth < 1440 ? "-5.00px" : undefined,
                }}
              >
                <div className="text-wrapper-4">{t('partners.title')}</div>
              </div>
            </div>

            <div
              className="horizontal-divider-2"
              style={{
                flex: screenWidth < 1440 ? "1" : undefined,
                flexGrow: screenWidth < 1440 ? "1" : undefined,
                width: screenWidth >= 1440 ? "200px" : undefined,
              }}
            />
          </div>

          <div
            className="frame"
            style={{
              gap:
                screenWidth < 1440
                  ? "24px"
                  : screenWidth >= 1440
                    ? "48px"
                    : undefined,
              zIndex:
                screenWidth < 1440
                  ? "1"
                  : screenWidth >= 1440
                    ? "0"
                    : undefined,
            }}
          >
            <img
              className="logo-praxitherm"
              style={{
                height:
                  screenWidth >= 1440
                    ? "42px"
                    : screenWidth < 1440
                      ? "33.6px"
                      : undefined,
                width:
                  screenWidth >= 1440
                    ? "224.73px"
                    : screenWidth < 1440
                      ? "179.78px"
                      : undefined,
              }}
              alt="Logo praxitherm"
              src={
                screenWidth >= 1440
                  ? "/img/logo-praxitherm-1-3.png"
                  : screenWidth < 1440
                    ? "/img/logo-praxitherm-1-3-2x.png"
                    : undefined
              }
            />

            <img
              className="image-2"
              style={{
                height:
                  screenWidth < 1440
                    ? "48px"
                    : screenWidth >= 1440
                      ? "60px"
                      : undefined,
                width:
                  screenWidth < 1440
                    ? "66px"
                    : screenWidth >= 1440
                      ? "82.5px"
                      : undefined,
              }}
              alt="Image"
              src="/img/image-3-3.png"
            />

            {screenWidth >= 1440 && (
              <>
                <img className="image-3" alt="Image" src="/img/image-4-3.png" />

                <img
                  className="logo-la-boite-a-demo"
                  alt="Logo la boite a demo"
                  src="/img/logo-la-boi-te-a-de-mo-1-3.png"
                />
              </>
            )}
          </div>

          {screenWidth < 1440 && (
            <img
              className="frame-2"
              alt="Frame"
              src="/img/frame-1707478377-1.svg"
            />
          )}
        </div>
      </div>

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

      <div
        id={SECTION_IDS.PROBLEM_SOLUTION}
        className="section-2"
        style={{
          alignSelf: "stretch",
          padding:
            screenWidth < 1440
              ? "48px 20px 48px 20px"
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
        <p
          className="text-wrapper-9"
          style={{
            fontSize:
              screenWidth < 1440
                ? "28px"
                : screenWidth >= 1440
                  ? "40px"
                  : undefined,
            lineHeight:
              screenWidth < 1440
                ? "36px"
                : screenWidth >= 1440
                  ? "56px"
                  : undefined,
          }}
        >
          {t('whyInvest.title')}
        </p>

        <div
          className="frame-3"
          style={{
            alignItems:
              screenWidth < 1440
                ? "flex-start"
                : screenWidth >= 1440
                  ? "flex-start"
                  : undefined,
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            justifyContent: screenWidth < 1440 ? "center" : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div
            className="div-24"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
              width:
                screenWidth < 1440
                  ? "100%"
                  : screenWidth >= 1440
                    ? "602px"
                    : undefined,
            }}
          >
            <div 
              className="title-wrapper" 
              data-selected={selectedCard === "rendement"}
              onClick={() => setSelectedCard("rendement")}
              style={{ 
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
                padding: '16px'
              }}
            >
              <p
                className="title-3"
                style={{
                  flex: screenWidth < 1440 ? "1" : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "16px"
                      : screenWidth >= 1440
                        ? "32px"
                        : undefined,
                  width: screenWidth >= 1440 ? "570px" : undefined,
                  transition: 'color 0.3s'
                }}
              >
                {t('features.hybridYield')} {t('features.hybridYieldDesc')}
              </p>
            </div>

            <div 
              className="card-3"
              data-selected={selectedCard === "impact"}
              onClick={() => setSelectedCard("impact")}
              style={{ 
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
                padding: '16px'
              }}
            >
              <div
                className="title-4"
                style={{
                  flex: screenWidth < 1440 ? "1" : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "16px"
                      : screenWidth >= 1440
                        ? "32px"
                        : undefined,
                  width: screenWidth >= 1440 ? "570px" : undefined,
                  transition: 'color 0.3s'
                }}
              >
                {t('features.carbonImpact')}
              </div>
            </div>

            <div 
              className="card-3"
              data-selected={selectedCard === "dashboard"}
              onClick={() => setSelectedCard("dashboard")}
              style={{ 
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
                padding: '16px'
              }}
            >
              <div
                className="title-5"
                style={{
                  flex: screenWidth < 1440 ? "1" : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "16px"
                      : screenWidth >= 1440
                        ? "32px"
                        : undefined,
                  width: screenWidth >= 1440 ? "570px" : undefined,
                  transition: 'color 0.3s'
                }}
              >
                {t('features.dashboardManagement')}
              </div>
            </div>

            <div 
              className="card-3"
              data-selected={selectedCard === "gouvernance"}
              onClick={() => setSelectedCard("gouvernance")}
              style={{ 
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
                padding: '16px'
              }}
            >
              <div
                className="title-6"
                style={{
                  flex: screenWidth < 1440 ? "1" : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "16px"
                      : screenWidth >= 1440
                        ? "32px"
                        : undefined,
                  width: screenWidth >= 1440 ? "570px" : undefined,
                  transition: 'color 0.3s'
                }}
              >
                {t('features.decentralizedGovernance')}
              </div>
            </div>

            <div 
              className="card-3"
              data-selected={selectedCard === "projets"}
              onClick={() => setSelectedCard("projets")}
              style={{ 
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
                padding: '16px'
              }}
            >
              <div
                className="title-7"
                style={{
                  flex: screenWidth < 1440 ? "1" : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "16px"
                      : screenWidth >= 1440
                        ? "32px"
                        : undefined,
                  width: screenWidth >= 1440 ? "570px" : undefined,
                  transition: 'color 0.3s'
                }}
              >
                {t('features.projectSelection')}
              </div>
            </div>
          </div>

          <div
            className="staking-USDC-empty-wrapper no-border"
            style={{
              alignSelf: screenWidth >= 1440 ? "stretch" : "stretch",
              display: "flex",
              marginBottom: "0",
              marginLeft: "0",
              padding: "0",
              width: screenWidth < 1440 ? "100%" : undefined,
              boxShadow: "none",
              border: "none",
              justifyContent: "flex-start",
              alignItems: "stretch",
              flex: screenWidth >= 1440 ? "1" : undefined
            }}
          >
            <img
              className="staking-USDC-empty"
              style={{
                height:
                  screenWidth < 1440
                    ? "300px"
                    : screenWidth >= 1440
                      ? "100%"
                      : undefined,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                width:
                  screenWidth < 1440
                    ? "100%"
                    : screenWidth >= 1440
                      ? "602px"
                      : undefined,
                maxWidth:
                  screenWidth >= 1440
                    ? "602px"
                    : undefined,
                objectFit: "contain",
                objectPosition: "top left",
                transform: screenWidth >= 1440 ? "scale(1.15) translateY(-10px)" : undefined,
                transformOrigin: "top left",
              }}
              alt={selectedCard}
              src={cardImages[selectedCard as keyof typeof cardImages]}
            />
          </div>
        </div>
      </div>

      <div
        id={SECTION_IDS.ADVANTAGES}
        className="section-3"
        style={{
          alignSelf: "stretch",
          gap:
            screenWidth < 1440
              ? "24px"
              : screenWidth >= 1440
                ? "48px"
                : undefined,
          padding:
            screenWidth < 1440
              ? "48px 20px"
              : screenWidth >= 1440
                ? "64px 128px"
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
          className="div-25"
          style={{
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            gap:
              screenWidth < 1440
                ? "16px"
                : screenWidth >= 1440
                  ? "24px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <p
            className="text-10"
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
              textAlign: "center",
            }}
          >
            {t('waitingList.joinEarly')}
          </p>

          <p
            className="description-3"
            style={{
              alignSelf: "stretch",
              fontFamily:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-family)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-size)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-style)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-accent-line-height)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-emphasis-line-height)"
                    : undefined,
              width: "100%",
              textAlign: "center",
            }}
          >
            {t('hero.limitedPlaces')}
          </p>
        </div>

        <img
          className="background-2"
          style={{
            alignSelf: "stretch",
            height:
              screenWidth < 1440
                ? "255px"
                : screenWidth >= 1440
                  ? "451px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "100%"
                : screenWidth >= 1440
                  ? "842px"
                  : undefined,
          }}
          alt="Background"
          src={
            screenWidth < 1440
              ? "/img/background-3-2.svg"
              : screenWidth >= 1440
                ? "/img/background-3.svg"
                : undefined
          }
        />

        <div
          className="frame-4"
          style={{
            alignItems:
              screenWidth < 1440
                ? "center"
                : screenWidth >= 1440
                  ? "flex-start"
                  : undefined,
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            gap:
              screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                  ? "48px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div
            className="card-4"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
              width:
                screenWidth < 1440
                  ? "258.42px"
                  : screenWidth >= 1440
                    ? "236px"
                    : undefined,
            }}
          >
            <div
              className="div-26"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
                padding: screenWidth < 1440 ? "0px 12px" : undefined,
              }}
            >
              <div className="icon-2">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-7"
                    width={screenWidth < 1440 ? 40 : 60}
                    height={screenWidth < 1440 ? 40 : 60}
                  />
                </div>
              </div>

              <div
                className="title-8"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  textAlign: screenWidth < 1440 ? "center" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>$1.2bn+</>}

                {screenWidth >= 1440 && <>{t('stats.greenBondsAmount')}</>}
              </div>
            </div>

            <div
              className="title-9"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-line-height)"
                      : undefined,
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <p className="text-wrapper-29">
                  Pool prioritaire pour les premiers inscrits
                </p>
              )}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.greenBondsDescription')}
                </p>
              )}
            </div>
          </div>

          <div
            className="card-5"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            }}
          >
            <div
              className="div-27"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              <div className="icon-3">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-8"
                    width={screenWidth < 1440 ? 45 : 65}
                    height={screenWidth < 1440 ? 45 : 65}
                  />
                </div>
              </div>

              <div
                className="title-10"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  textAlign: screenWidth < 1440 ? "center" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>150,000+</>}

                {screenWidth >= 1440 && <>{t('stats.co2Reduction')}</>}
              </div>
            </div>

            <div
              className="title-11"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-line-height)"
                      : undefined,
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && <>Airdrop + NFT surprise</>}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.co2ReductionDescription')}
                </p>
              )}
            </div>
          </div>

          <div
            className="card-6"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            }}
          >
            <div
              className="div-28"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              <div className="icon-2">
                <div className="vector-wrapper">
                  <LeafAnimation 
                    className="vector-9"
                    width={screenWidth < 1440 ? 50 : 70}
                    height={screenWidth < 1440 ? 50 : 70}
                  />
                </div>
              </div>

              <div
                className="title-12"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>15+</>}

                {screenWidth >= 1440 && <>{t('stats.dualRewards')}</>}
              </div>
            </div>

            <div
              className="title-13"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-line-height)"
                      : undefined,
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <p className="text-wrapper-29">
                  Rôle spécial Discord : Early Builder
                </p>
              )}

              {screenWidth >= 1440 && (
                <p className="text-wrapper-29">
                  {t('stats.dualRewardsDescription')}
                </p>
              )}
            </div>
          </div>

          <div
            className="card-7"
            style={{
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            }}
          >
            <div
              className="div-29"
              style={{
                justifyContent: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              <div className="icon-3">
                <div className="icon-arrow-right">
                  <LeafAnimation 
                    className="vector-10"
                    width={screenWidth < 1440 ? 55 : 75}
                    height={screenWidth < 1440 ? 55 : 75}
                  />
                </div>
              </div>

              <div
                className="title-14"
                style={{
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1440 ? "fit-content" : undefined,
                }}
              >
                {screenWidth < 1440 && <>36%+</>}

                {screenWidth >= 1440 && <>{t('stats.stakingBonus')}</>}
              </div>
            </div>

            <p
              className="title-15"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-content-caption-regular-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-content-body-regular-line-height)"
                      : undefined,
                textAlign: screenWidth < 1440 ? "center" : undefined,
              }}
            >
              {t('stats.stakingBonusDescription')}
            </p>
          </div>
        </div>
      </div>

      <div
        className="section-4"
        style={{
          alignSelf: "stretch",
          gap:
            screenWidth < 1440
              ? "24px"
              : screenWidth >= 1440
                ? "48px"
                : undefined,
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
        <img
          className="albedobase-XL-a-3"
          style={{
            height:
              screenWidth < 1440
                ? "113px"
                : screenWidth >= 1440
                  ? "172px"
                  : undefined,
            left:
              screenWidth < 1440
                ? "-31px"
                : screenWidth >= 1440
                  ? "339px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "243px"
                : screenWidth >= 1440
                  ? "284px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "113px"
                : screenWidth >= 1440
                  ? "172px"
                  : undefined,
          }}
          alt="Albedobase XL a"
          src={
            screenWidth < 1440
              ? "/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-1-3.svg"
              : screenWidth >= 1440
                ? "/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-1-3-2.svg"
                : undefined
          }
        />

        <div className="container-6">
          <div
            className="horizontal-divider-5"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1440 ? "200px" : undefined,
            }}
          />

          <div className="background-border-2">
            <div className="investir-pour-la-wrapper">
              <div className="text-wrapper-4">INVESTIR POUR LA PLANÈTE</div>
            </div>
          </div>

          <div
            className="horizontal-divider-6"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1440 ? "200px" : undefined,
            }}
          />
        </div>

        <div
          className="div-30"
          style={{
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <p
            className="text-11"
            style={{
              alignSelf: "stretch",
              fontSize:
                screenWidth < 1440
                  ? "28px"
                  : screenWidth >= 1440
                    ? "40px"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "32px"
                  : screenWidth >= 1440
                    ? "56px"
                    : undefined,
              width: "100%",
            }}
          >
            {t('footerCta.presaleTitle')}
          </p>

          <p
            className="description-4"
            style={{
              alignSelf: "stretch",
              fontFamily:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-family)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-size)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-style)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-line-height)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-line-height)"
                    : undefined,
              width: "100%",
            }}
          >
            {t('footerCta.presaleDescription')}
          </p>
        </div>

        <div
          className="section-5"
          style={{
            alignSelf: "stretch",
            width: "100%",
            maxWidth: "568px",
            margin: "0 auto",
          }}
        >
          <div className="div-31">
            <div className="text-input">
              <div className="field">
                <input
                  className="input"
                  placeholder={t('footerCta.emailPlaceholder')}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="img-wrapper">
                  <img
                    className="vector-11"
                    alt="Vector"
                    src={
                      screenWidth < 1440
                        ? "/img/image.svg"
                        : screenWidth >= 1440
                          ? "/img/vector-66.svg"
                          : undefined
                    }
                  />
                </div>
              </div>
            </div>
            
            <div className="rgpd-container">
              <label className="rgpd-label">
                <input
                  type="checkbox"
                  className="rgpd-checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setShowError(false);
                  }}
                  disabled={isLoading}
                />
                <span className="rgpd-text">
                  {t('footerCta.gdprConsent')}
                </span>
              </label>
              {showError && (
                <p className="rgpd-error">
                  {t('footerCta.consentRequired')}
                </p>
              )}
            </div>
            
            {errorMessage && (
              <p className="form-error-message">
                {errorMessage}
              </p>
            )}
            
            {successMessage && (
              <p className="form-success-message">
                {successMessage}
              </p>
            )}
          </div>

          <Button
            className="instance-node"
            divClassName="button-instance"
            size="lg"
            state={isLoading ? "disabled" : "default"}
                         text={isLoading ? "Chargement..." : t('footerCta.subscribe')}
            variant={isLoading ? "disabled" : "primary"}
            visible={false}
            visible1={false}
            onClick={handleSubmit}
          />
        </div>
      </div>

      <div
        id={SECTION_IDS.TOKENOMICS}
        className="section-6"
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
        <div className="container-7">
          <div
            className="horizontal-divider-7"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1440 ? "200px" : undefined,
            }}
          />

          <div className="background-border-3">
            <div className="tokenomics-wrapper">
              <div className="tokenomics">TOKENOMICS &amp; WHITEPAPER</div>
            </div>
          </div>

          <div
            className="horizontal-divider-8"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              width: screenWidth >= 1440 ? "200px" : undefined,
            }}
          />
        </div>

        <div
          className="div-32"
          style={{
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <p
            className="text-12"
            style={{
              alignSelf: "stretch",
              fontSize:
                screenWidth < 1440
                  ? "28px"
                  : screenWidth >= 1440
                    ? "40px"
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
            {t('tokenomics.howPresaleWorks')}
          </p>

          <p
            className="description-5"
            style={{
              alignSelf: "stretch",
              fontFamily:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-family)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-size)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-style)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-line-height)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-line-height)"
                    : undefined,
              width: "100%",
            }}
          >
            {t('tokenomics.discoverFundsDistribution')}
          </p>
        </div>

        <div
          className="display-card-2"
          style={{
            alignSelf: "stretch",
            padding:
              screenWidth < 1440
                ? "16px 12px"
                : screenWidth >= 1440
                  ? "24px"
                  : undefined,
            width: "100%",
          }}
        >
          {screenWidth >= 1440 && (
            <>
              <div className="text-13">{t('tokenomics.tokenDistribution')}</div>

              <div className="frame-5">
                <p className="legend">
                  {t('tokenomics.supplyLimited')}
                </p>

                <p className="legend">
                  {t('tokenomics.regulatedEmission')}
                </p>

                <p className="legend">
                  {t('tokenomics.transparencyReserves')}
                </p>
              </div>

              <div className="image-6">
                <img
                  className="donut-container"
                  alt="Donut container"
                  src="/img/donut-container-3-2.svg"
                />

                <div className="flexcontainer">
                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.team')}
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-2">
                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.reserve')}
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-3">
                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.initialLiquidity')} <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.community')}
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-4">
                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.presaleICO')}
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-5">
                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.stakingUSDC')} <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.community')}
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">30%</span>
                  </p>
                </div>

                <div className="flexcontainer-6">
                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.stakingKEYCOIN')} <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">
                      {t('tokenomics.community')}
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="span">30%</span>
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="div-31">
            {screenWidth >= 1440 && (
              <>
                <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_FR, '_blank')}>
                  <div className="material-symbols">
                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-67-2.svg"
                    />
                  </div>

                  <div className="text-wrapper-10">{t('tokenomics.whitepaperFR')}</div>
                </button>

                <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_EN, '_blank')}>
                  <div className="material-symbols">
                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-68.svg"
                    />
                  </div>

                  <div className="text-wrapper-10">{t('tokenomics.whitepaperEN')}</div>
                </button>
              </>
            )}

            {screenWidth < 1440 && (
              <>
                <p className="legend-2">
                  {t('tokenomics.supplyLimited')}
                </p>

                <p className="legend-3">
                  {t('tokenomics.regulatedEmission')}
                </p>

                <p className="legend-3">
                  {t('tokenomics.transparencyReserves')}
                </p>
              </>
            )}
          </div>

          {screenWidth < 1440 && (
            <>
              <div className="image-7">
                <img
                  className="donut-container-2"
                  alt="Donut container"
                  src="/img/donut-container-3.svg"
                />

                <div className="flexcontainer-7">
                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.team')}
                      <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-8">
                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.reserve')}
                      <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-9">
                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.initialLiquidity')} <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.community')}
                      <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-10">
                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.presaleICO')}
                      <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">10%</span>
                  </p>
                </div>

                <div className="flexcontainer-11">
                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.stakingUSDC')} <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.community')}
                      <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">30%</span>
                  </p>
                </div>

                <div className="flexcontainer-12">
                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.stakingKEYCOIN')} <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">
                      {t('tokenomics.community')}
                      <br />
                    </span>
                  </p>

                  <p className="text-14">
                    <span className="text-wrapper-11">30%</span>
                  </p>
                </div>
              </div>

              <div className="div-31">
                <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_FR, '_blank')}>
                  <div className="material-symbols">
                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-69-2.svg"
                    />
                  </div>

                  <div className="text-wrapper-10">{t('tokenomics.whitepaperFR')}</div>
                </button>

                <button className="button-6" onClick={() => window.open(PDF_LINKS.WHITEPAPER_EN, '_blank')}>
                  <div className="material-symbols">
                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-70-2.svg"
                    />
                  </div>

                  <div className="text-wrapper-10">{t('tokenomics.whitepaperEN')}</div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

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

      <div
        className="section-7"
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
          className="div-33"
          style={{
            alignSelf: "stretch",
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div
            className="text-15"
            style={{
              alignSelf: "stretch",
              fontSize:
                screenWidth < 1440
                  ? "28px"
                  : screenWidth >= 1440
                    ? "40px"
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
            {t('joinCommunity.title')}
          </div>

          <p
            className="description-6"
            style={{
              alignSelf: "stretch",
              fontFamily:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-family)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-size)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-style)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--text-content-note-regular-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--text-content-caption-regular-line-height)"
                  : screenWidth >= 1440
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
              flexDirection: screenWidth < 1440 ? "column" : undefined,
            }}
          >
            <div
              className="header-wrapper"
              onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}
              style={{
                alignSelf: "stretch",
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
                cursor: 'pointer',
              }}
            >
              <div className="header">
                <div className="icon">
                  <div className="qlementine-icons">
                    <div className="overlap-group-4">
                      <LeafAnimation 
                        className="vector-13"
                        width={screenWidth < 1440 ? 35 : 55}
                        height={screenWidth < 1440 ? 35 : 55}
                      />

                      <LeafAnimation 
                        className="vector-14"
                        width={screenWidth < 1440 ? 40 : 60}
                        height={screenWidth < 1440 ? 40 : 60}
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
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
                cursor: 'pointer',
              }}
            >
              <div className="header">
                <img
                  className="icon-4"
                  alt="Icon"
                  src={
                    screenWidth < 1440
                      ? "/img/icon-3-2.svg"
                      : screenWidth >= 1440
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
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
                cursor: 'pointer',
              }}
            >
              <div className="header">
                <div className="icon">
                  <div className="uil-share">
                    <LeafAnimation 
                      className="vector-15"
                      width={screenWidth < 1440 ? 45 : 65}
                      height={screenWidth < 1440 ? 45 : 65}
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
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
                cursor: 'pointer',
              }}
            >
              <div className="header">
                <div className="icon">
                  <div className="div-3">
                    <LeafAnimation 
                      className="vector-16"
                      width={screenWidth < 1440 ? 50 : 70}
                      height={screenWidth < 1440 ? 50 : 70}
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

          <div
            className="frame-13"
            style={{
              flexDirection: screenWidth < 1440 ? "column" : undefined,
            }}
          >
            <div
              className="section-11"
              style={{
                flex: screenWidth >= 1440 ? "1" : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                height: screenWidth < 1440 ? "213px" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
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
                    screenWidth < 1440
                      ? "center"
                      : screenWidth >= 1440
                        ? "flex-start"
                        : undefined,
                }}
              >
                <div
                  className="wrap-4"
                  style={{
                    alignSelf: "stretch",
                    width:
                      screenWidth < 1440
                        ? "100%"
                        : screenWidth >= 1440
                          ? "374px"
                          : undefined,
                  }}
                >
                  <p
                    className="title-17"
                    style={{
                      textAlign: screenWidth < 1440 ? "center" : undefined,
                    }}
                  >
                    {t('projects.haveProject')}
                  </p>

                  <p
                    className="subtitle-6"
                    style={{
                      textAlign: screenWidth < 1440 ? "center" : undefined,
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
                flex: screenWidth >= 1440 ? "1" : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                height: screenWidth < 1440 ? "213px" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div
                className="frame-15"
                style={{
                  alignItems:
                    screenWidth < 1440
                      ? "center"
                      : screenWidth >= 1440
                        ? "flex-end"
                        : undefined,
                }}
              >
                {screenWidth < 1440 && (
                  <div className="wrap-5">
                    <p className="title-18">
                      {t('projects.knowProject')}
                    </p>

                    <p className="subtitle-7">
                      {t('projects.recommendProject')}
                    </p>
                  </div>
                )}

                {screenWidth >= 1440 && (
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

                {screenWidth >= 1440 && (
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

      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('modal.joinPresaleTitle')}
        subtitle={t('modal.joinPresaleSubtitle')}
      />
    </div>
  );
};
