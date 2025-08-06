import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/Button";
import { DisplayCard } from "@/components/DisplayCard";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { ArrowLeft8 } from "@/icons/ArrowLeft8";
import { LeafAnimation } from "@/components/LeafAnimation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { EXTERNAL_LINKS, PDF_LINKS, SECTION_IDS } from "@/constants/links";
import "./style.css";

export const LandingPageScreen = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          source: 'landing_page_screen'
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
    const sections = document.querySelectorAll('.section-15, .section-16, .section-17, .section-18, .section-19, .section-20, .section-21');
    const titles = document.querySelectorAll('.title-18, .title-19, .title-20, .title-23');
    const cards = document.querySelectorAll('.display-card');

    [...sections, ...titles, ...cards].forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page-screen">
      <div className="menu-wrapper">
        <div className="menu-2">
          <div className="div-40">
            <div className="logo-4">Monkey-co</div>

            <div className="div-41">
              <div className="link-9" onClick={() => scrollToSection('problem-solution')} style={{ cursor: 'pointer' }}>Problème &amp; Solution</div>

              <div className="link-9" onClick={() => scrollToSection('advantages')} style={{ cursor: 'pointer' }}>Avantages</div>

              <div className="link-9" onClick={() => scrollToSection('tokenomics')} style={{ cursor: 'pointer' }}>Tokenomics</div>
            </div>
          </div>

          <div className="div-42">
            <div className="social-nav-links" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
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

            <div className="div-41">
              <button 
                className="button-13" 
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <div className="text-19">{t('nav.joinPresale')}</div>
              </button>

              <button 
                className="button-14" 
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <div className="text-20">{t('nav.launchApp')}</div>

                <img
                  className="icon-arrow-right-2"
                  alt="Icon arrow right"
                  src="/img/icon-arrow-right-8.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-14">
        <div className="image-9" />

        <div className="link-10">
          <p className="text-21">
            {t('hero.tagline')}
          </p>
        </div>

        <div className="div-44">
          <div className="div-45">
            <div className="div-46">
              <div className="text-22">Fais</div>

              <img
                className="albedobase-XL-a-5"
                alt="Albedobase XL a"
                src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-15-2.svg"
              />
            </div>

            <div className="div-41">
              <div className="text-23">pour la</div>

              <img
                className="albedobase-XL-a-5"
                alt="Albedobase XL a"
                src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-planet-earth-0-3.png"
              />

              <div className="text-23">planète</div>
            </div>
          </div>

          <p className="description-7">
            {t('hero.description')}
          </p>
        </div>

        <div className="div-47">
          <button 
            className="button-wrapper" 
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            <button className="button-15">{t('hero.joinPresale')}</button>
          </button>

          <p className="text-24">
            {t('hero.limitedPlaces')}
          </p>
        </div>

        <img
          className="app-image-2"
          alt="App image"
          src="/img/app-image-3-2.png"
        />

        <LeafAnimation 
          className="group-4"
          width={300}
          height={300}
        />

        <LeafAnimation 
          className="group-5"
          width={300}
          height={300}
        />
      </div>

      <div className="section-15">
        <div className="container-14">
          <div className="container-15">
            <div className="horizontal-divider-11" />

            <div className="background-border-5">
              <div className="container-16">
                <div className="text-wrapper-17">{t('partners.title')}</div>
              </div>
            </div>

            <div className="horizontal-divider-12" />
          </div>

          <div className="frame-16">
            <img
              className="logo-praxitherm-2"
              alt="Logo praxitherm"
              src="/img/logo-praxitherm-1-3.png"
            />

            <img className="image-10" alt="Image" src="/img/image-3-3.png" />

            <img className="image-11" alt="Image" src="/img/image-4-3.png" />

            <img
              className="logo-la-boite-a-demo-2"
              alt="Logo la boite a demo"
              src="/img/logo-la-boi-te-a-de-mo-1-3.png"
            />
          </div>
        </div>
      </div>

      <div className="section-16" id="problem-solution">
        <div className="background-3">
          <div className="div-48">
            <div className="div-44">
              <div className="container-17">
                <div className="background-border-5">
                  <div className="container-16">
                    <div className="text-wrapper-17">
                      PROBLÈME &amp; SOLUTION
                    </div>
                  </div>
                </div>

                <div className="horizontal-divider-12" />
              </div>

              <div className="div-49">
                <p className="text-wrapper-18">
                  Le financement de la transition énergétique est aujourd’hui un
                  frein majeur.
                </p>

                <p className="text-wrapper-19">
                  Monkey-co est la passerelle manquante entre les investisseurs
                  Web3 et les projets écologiques.
                </p>
              </div>
            </div>

            <div className="div-50">
              <div className="div-46">
                <div className="card-8">
                  <div className="div-51">
                    <div className="icon-5">
                      <div className="div-52">
                        <div className="overlap-group-6">
                          <img
                            className="vector-20"
                            alt="Vector"
                            src="/img/vector-57.svg"
                          />

                          <img
                            className="vector-21"
                            alt="Vector"
                            src="/img/vector-58.png"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="title-20">L’État ne peut pas tout financer</p>
                  </div>
                </div>

                <div className="card-9">
                  <div className="div-53">
                    <div className="icon-5">
                      <div className="div-52">
                        <img
                          className="vector-22"
                          alt="Vector"
                          src="/img/vector-59-2.svg"
                        />
                      </div>
                    </div>

                    <div className="title-20">Les banques sont frileuses</div>
                  </div>
                </div>
              </div>

              <div className="card-10">
                <div className="div-51">
                  <div className="icon-5">
                    <div className="div-52">
                      <div className="group-6">
                        <div className="overlap-group-7">
                          <img
                            className="vector-23"
                            alt="Vector"
                            src="/img/vector-60.svg"
                          />

                          <img
                            className="vector-24"
                            alt="Vector"
                            src="/img/vector-61.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="title-20">
                    Aucune solution simple, rapide et rentable pour les
                    investisseurs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="div-54">
            <div className="image-12" />

            <button className="button-16">
              <div className="text-wrapper-20">Rejoindre la prévente</div>
            </button>
          </div>
        </div>
      </div>

      <div className="section-17" id="advantages">
        <p className="text-wrapper-18">Pourquoi investir avec Monkey-co ?</p>

        <div className="frame-17">
          <div className="div-55">
            <div className="card-11">
              <img src="/img/Frame 1.svg" alt="Rendement hybride" style={{ width: '48px', height: '48px' }} />
              <p className="title-21">
                Rendement hybride (USDC + KEYCOIN indexé CO₂)
              </p>
            </div>

            <div className="card-10">
              <img src="/img/Frame 2.svg" alt="Impact environnemental" style={{ width: '48px', height: '48px' }} />
              <div className="title-22">Impact environnemental</div>
            </div>

            <div className="card-10">
              <div className="title-22">Dashboard personnel d’impact</div>
            </div>

            <div className="card-10">
              <div className="title-22">Gouvernance DAO intégrée</div>
            </div>

            <div className="card-10">
              <div className="title-22">Projets réels, audités, traçables</div>
            </div>
          </div>

          <div className="image-13">
            <img
              className="staking-USDC-empty-2"
              alt="Staking USDC empty"
              src="/img/image.png"
            />
          </div>
        </div>
      </div>

      <div className="section-18">
        <div className="div-44">
          <p className="text-25">
            Rejoins les early builders et profite d’avantages exclusifs
          </p>

          <p className="description-8">
            Seulement 100 places restantes pour la prévente !
          </p>
        </div>

        <img
          className="background-4"
          alt="Background"
          src="/img/background-3.svg"
        />

        <div className="frame-18">
          <div className="card-12">
            <div className="div-56">
              <div className="icon-6">
                <div className="vector-wrapper-2">
                  <LeafAnimation 
                    className="vector-25"
                    width={60}
                    height={60}
                  />
                </div>
              </div>

              <div className="title-23">+530 Mds $</div>
            </div>

            <p className="title-24">
              Marché des Green Bonds en croissance permanente
            </p>
          </div>

          <div className="card-13">
            <div className="div-56">
              <div className="icon-7">
                <div className="vector-wrapper-2">
                  <LeafAnimation 
                    className="vector-26"
                    width={65}
                    height={65}
                  />
                </div>
              </div>

              <div className="title-23">100 Tonnes Co2+</div>
            </div>

            <p className="title-24">
              Objectif de réduction en Co2 dès la premiere année
            </p>
          </div>

          <div className="card-13">
            <div className="div-56">
              <div className="icon-6">
                <div className="vector-wrapper-2">
                  <LeafAnimation 
                    className="vector-27"
                    width={70}
                    height={70}
                  />
                </div>
              </div>

              <div className="title-23">KEYCOIN + USDC</div>
            </div>

            <p className="title-24">
              Récompense doublée avec deux sources de gain
            </p>
          </div>

          <div className="card-13">
            <div className="div-56">
              <div className="icon-7">
                <div className="icon-arrow-right-2">
                  <LeafAnimation 
                    className="vector-28"
                    width={75}
                    height={75}
                  />
                </div>
              </div>

              <div className="title-23">30%+</div>
            </div>

            <p className="title-24">
              Bonus de rendement pour staking long terme
            </p>
          </div>
        </div>
      </div>

      <div className="section-19">
        <img
          className="albedobase-XL-a-6"
          alt="Albedobase XL a"
          src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-1-3-2.svg"
        />

        <div className="container-18">
          <div className="horizontal-divider-11" />

          <div className="background-border-5">
            <div className="container-16">
              <div className="text-wrapper-17">INVESTIR POUR LA PLANÈTE</div>
            </div>
          </div>

          <div className="horizontal-divider-12" />
        </div>

        <div className="div-57">
          <p className="text-26">Rejoins la liste d’attente de la prévente</p>

          <p className="description-9">
            Sois parmi les premiers à investir et profite de tous les bonus
            early.
          </p>
        </div>

        <div className="section-20">
          <div className="div-58">
            <div className="text-input-2">
              <div className="field-2">
                <input
                  className="text-27"
                  placeholder={t('footerCta.emailPlaceholder')}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="vector-wrapper-3">
                  <LeafAnimation 
                    className="vector-29"
                    width={70}
                    height={70}
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
            className="design-component-instance-node"
            divClassName="button-17"
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

      <div className="section-21" id="tokenomics">
        <div className="container-18">
          <div className="horizontal-divider-13" />

          <div className="background-border-6">
            <div className="container-16">
              <div className="text-wrapper-21">TOKENOMICS &amp; WHITEPAPER</div>
            </div>
          </div>

          <div className="horizontal-divider-14" />
        </div>

        <div className="div-47">
          <p className="text-28">Comment fonctionne la prévente ?</p>

          <p className="description-10">
            Découvrez comment sont répartis les fonds collectés et comment
            fonctionne le token KEYCOIN pour garantir transparence, sécurité et
            impact réel à chaque investissement.
          </p>
        </div>

        <div className="display-card-23">
          <div className="text-29">Tokens distributions</div>

          <div className="frame-19">
            <p className="legend-4">
              *Supply limité à 360 millions de Keycoins
            </p>

            <p className="legend-4">*Emission régulé selon impact écologique</p>

            <p className="legend-4">
              *Transparence des réserves et de l’émission
            </p>
          </div>

          <div className="image-14">
            <img
              className="donut-container-3"
              alt="Donut container"
              src="/img/donut-container-3-2.svg"
            />

            <div className="flexcontainer-14">
              <p className="text-30">
                <span className="text-wrapper-22">
                  Team
                  <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">10%</span>
              </p>
            </div>

            <div className="flexcontainer-15">
              <p className="text-30">
                <span className="text-wrapper-22">
                  Réserve
                  <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">10%</span>
              </p>
            </div>

            <div className="flexcontainer-16">
              <p className="text-30">
                <span className="text-wrapper-22">
                  Liquidité initiale <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">
                  (Community)
                  <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">10%</span>
              </p>
            </div>

            <div className="flexcontainer-17">
              <p className="text-30">
                <span className="text-wrapper-22">
                  Prévente &amp; ICO
                  <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">10%</span>
              </p>
            </div>

            <div className="flexcontainer-18">
              <p className="text-30">
                <span className="text-wrapper-22">
                  Staking USDC <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">
                  (Community)
                  <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">30%</span>
              </p>
            </div>

            <div className="flexcontainer-19">
              <p className="text-30">
                <span className="text-wrapper-22">
                  Staking KEYCOIN <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">
                  (Community)
                  <br />
                </span>
              </p>

              <p className="text-30">
                <span className="text-wrapper-22">30%</span>
              </p>
            </div>
          </div>

          <div className="div-58">
            <button className="button-18" onClick={() => window.open(PDF_LINKS.WHITEPAPER_FR, '_blank')}>
              <div className="material-symbols-2">
                <img
                  className="vector-30"
                  alt="Vector"
                  src="/img/vector-67-2.svg"
                />
              </div>

              <div className="text-wrapper-23">{t('footer.whitepaper')} (FR)</div>
            </button>

            <button className="button-18" onClick={() => window.open(PDF_LINKS.WHITEPAPER_EN, '_blank')}>
              <div className="material-symbols-2">
                <img
                  className="vector-30"
                  alt="Vector"
                  src="/img/vector-68.svg"
                />
              </div>

              <div className="text-wrapper-23">{t('footer.whitepaper')} (EN)</div>
            </button>
          </div>
        </div>
      </div>

      <div className="section-19">
        <div className="section-22">
          <div className="frame-20">
            <div className="frame-21">
              <h2 className="text-31">{t('whyMonkey.title')}</h2>
            </div>

            <div className="frame-22">
              <div className="frame-23">
                <img
                  className="albedobase-XL-a-7"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-16.svg"
                />

                <div className="frame-24">
                  <div className="subtitle-9">“Mon”</div>

                  <p className="subtitle-10">
                    Monkey-co est la contraction de “Money”.
                  </p>
                </div>
              </div>

              <div className="frame-23">
                <img
                  className="albedobase-XL-a-7"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-17.svg"
                />

                <div className="frame-24">
                  <div className="subtitle-9">“Key”</div>

                  <p className="subtitle-10">
                    C’est donc la clé pour reprendre le pouvoir sur votre argent
                    et construire un monde meilleur ensemble.
                  </p>
                </div>
              </div>

              <div className="frame-23">
                <img
                  className="albedobase-XL-a-7"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-18.svg"
                />

                <div className="frame-24">
                  <div className="subtitle-9">“Co”</div>

                  <p className="subtitle-10">
                    Community, vous choisissez les projets à financer.
                  </p>
                </div>
              </div>

              <div className="frame-23">
                <img
                  className="albedobase-XL-a-7"
                  alt="Albedobase XL a"
                  src="/img/albedobase-xl-a-cheerful-modern-illustration-of-a-monkey-weari-0-19.svg"
                />

                <div className="frame-24">
                  <div className="subtitle-9">“Monkey”</div>

                  <p className="subtitle-10">
                    Le singe nous rappelle l’évolution, l’adaptabilité et
                    l’intelligence collective. Tout comme le singe, la finance
                    doit évoluer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-19">
        <div className="div-47">
          <div className="text-31">Rejoins une communauté engagée</div>

          <p className="description-9">
            Suis-nous sur nos réseaux et pose toutes tes questions : notre
            équipe te répondra rapidement et tu pourras échanger avec la
            communauté.
          </p>
        </div>

        <div className="frame-25">
          <div className="frame-26">
            <div className="section-23">
              <a href={EXTERNAL_LINKS.DISCORD} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="header-2">
                  <div className="icon-5">
                    <div className="qlementine-icons-2">
                      <div className="overlap-group-8">
                        <img
                          className="vector-31"
                          alt="Vector"
                          src="/img/vector-69.svg"
                        />

                        <LeafAnimation 
                          className="vector-32"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="wrap-7">
                    <div className="title-25">Rejoignez-nous sur Discord.</div>

                    <p className="subtitle-11">Au plus près de la communauté.</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="section-23">
              <a href={EXTERNAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="header-2">
                  <img className="icon-8" alt="Icon" src="/img/icon-3.svg" />

                  <div className="wrap-7">
                    <div className="title-25">Suivez-nous sur X (Twitter).</div>

                    <div className="subtitle-11">
                      Suivez l'aventure au quotidien.
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div 
              className="section-23"
              onClick={() => window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=Parler de Monkey-co`}
              style={{ cursor: 'pointer' }}
            >
              <div className="header-2">
                <div className="icon-5">
                  <div className="uil-share-2">
                    <LeafAnimation 
                      className="vector-33"
                      width={65}
                      height={65}
                    />
                  </div>
                </div>

                <div className="wrap-7">
                  <div className="title-25">Parler de Monkey-co.</div>

                  <div className="subtitle-11">
                    Agrandissons ensemble la communauté.
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="section-23"
              onClick={() => window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=Une idée pour Monkey-co`}
              style={{ cursor: 'pointer' }}
            >
              <div className="header-2">
                <div className="icon-5">
                  <div className="div-52">
                    <LeafAnimation 
                      className="vector-34"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>

                <div className="wrap-7">
                  <p className="title-25">Une idée à partager ?</p>

                  <p className="subtitle-11">
                    Nous sommes à l’écoute de vos propositions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-19">
            <div className="section-24">
              <div className="group-7">
                <div className="overlap-2">
                  <DisplayCard
                    className="display-card-24"
                    contentClassName="display-card-27"
                    detailsClassName="display-card-26"
                    divClassName="display-card-29"
                    divClassName1="display-card-32"
                    divClassName2="display-card-34"
                    divClassName3="display-card-37"
                    divClassNameOverride="display-card-31"
                    overlapGroupClassName="display-card-35"
                    progressBackgroundClassName="display-card-36"
                    progressFigmaClassName="display-card-33"
                    rectangle="/img/image-19.png"
                    rectangleClassName="display-card-25"
                    statusesClassName="display-card-30"
                    text="Panneaux Solaires Résidence Nantes"
                    text1="150 kg CO₂ évité"
                    text2="80%"
                    wrapClassName="display-card-28"
                  />
                  <DisplayCard
                    className="display-card-38"
                    contentClassName="display-card-27"
                    detailsClassName="display-card-40"
                    divClassName="display-card-41"
                    divClassName1="display-card-32"
                    divClassName2="display-card-34"
                    divClassName3="display-card-37"
                    divClassNameOverride="display-card-43"
                    overlapGroupClassName="display-card-35"
                    progressBackgroundClassName="display-card-36"
                    progressFigmaClassName="display-card-33"
                    rectangle="/img/image-20.png"
                    rectangleClassName="display-card-39"
                    statusesClassName="display-card-42"
                    text="Rénovation Éco-Quartier Lyon"
                    text1="200 kg CO₂ évité"
                    text2="85%"
                    wrapClassName="display-card-28"
                  />
                  <div className="display-card-44">
                    <img
                      className="image-15"
                      alt="Image"
                      src="/img/image-21.png"
                    />

                    <div className="details-2">
                      <div className="content-3">
                        <div className="wrap-8">
                          <div className="r-novation-co-3">
                            Isolation Habitat Social Marseille
                          </div>

                          <div className="statuses-3">
                            <div className="text-wrapper-24">Terminé</div>
                          </div>
                        </div>

                        <div className="element-kg-CO-vit-3">
                          150 kg CO₂ évité
                        </div>

                        <div className="progress-figma-3">
                          <div className="text-wrapper-25">Progression</div>

                          <div className="overlap-group-9">
                            <div className="progress-background-3" />
                          </div>

                          <div className="text-wrapper-26">100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-27">
                <div className="wrap-9">
                  <p className="title-26">
                    Vous avez un projet pour la transition écologique ?
                  </p>

                  <p className="subtitle-12">
                    Faites appel à Monkey-co pour obtenir un financement adapté
                    et concrétiser votre initiative durable !
                  </p>
                </div>

                <div className="button-19">
                  <div className="text-wrapper-27">Demander un financement</div>

                  <ArrowLeft8 className="arrow-left-8" />
                </div>
              </div>
            </div>

            <div className="section-25">
              <div className="frame-28">
                <div className="wrap-10">
                  <p className="title-26">
                    Vous connaissez un projet à financer ?
                  </p>

                  <p className="subtitle-12">
                    Recommandez-le à Monkey-co et recevez une récompense en
                    devenant apporteur d’affaires !
                  </p>
                </div>

                <div className="button-19">
                  <div className="text-wrapper-27">
                    Devenir apporteur d&#39;affaires
                  </div>

                  <ArrowLeft8 className="arrow-left-8" />
                </div>

                <div className="group-8">
                  <div className="overlap-2">
                    <DisplayCard
                      className="display-card-24"
                      contentClassName="display-card-27"
                      detailsClassName="display-card-26"
                      divClassName="display-card-29"
                      divClassName1="display-card-32"
                      divClassName2="display-card-34"
                      divClassName3="display-card-37"
                      divClassNameOverride="display-card-31"
                      overlapGroupClassName="display-card-35"
                      progressBackgroundClassName="display-card-36"
                      progressFigmaClassName="display-card-33"
                      rectangle="/img/image-19.png"
                      rectangleClassName="display-card-25"
                      statusesClassName="display-card-30"
                      text="Panneaux Solaires Résidence Nantes"
                      text1="150 kg CO₂ évité"
                      text2="80%"
                      wrapClassName="display-card-28"
                    />
                    <DisplayCard
                      className="display-card-38"
                      contentClassName="display-card-27"
                      detailsClassName="display-card-40"
                      divClassName="display-card-41"
                      divClassName1="display-card-32"
                      divClassName2="display-card-34"
                      divClassName3="display-card-37"
                      divClassNameOverride="display-card-43"
                      overlapGroupClassName="display-card-35"
                      progressBackgroundClassName="display-card-36"
                      progressFigmaClassName="display-card-33"
                      rectangle="/img/image-20.png"
                      rectangleClassName="display-card-39"
                      statusesClassName="display-card-42"
                      text="Rénovation Éco-Quartier Lyon"
                      text1="200 kg CO₂ évité"
                      text2="85%"
                      wrapClassName="display-card-28"
                    />
                    <div className="display-card-44">
                      <img
                        className="image-15"
                        alt="Image"
                        src="/img/image-21.png"
                      />

                      <div className="details-2">
                        <div className="content-3">
                          <div className="wrap-8">
                            <div className="r-novation-co-3">
                              Isolation Habitat Social Marseille
                            </div>

                            <div className="statuses-3">
                              <div className="text-wrapper-24">Terminé</div>
                            </div>
                          </div>

                          <div className="element-kg-CO-vit-3">
                            150 kg CO₂ évité
                          </div>

                          <div className="progress-figma-3">
                            <div className="text-wrapper-25">Progression</div>

                            <div className="overlap-group-9">
                              <div className="progress-background-3" />
                            </div>

                            <div className="text-wrapper-26">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-26">
        <div className="container-18">
          <div className="horizontal-divider-13" />

          <div className="background-border-6">
            <div className="container-16">
              <p className="text-wrapper-21">
                REJOINS LA LISTE D’ATTENTE ET PROFITE DES AVANTAGES EARLY
              </p>
            </div>
          </div>

          <div className="horizontal-divider-14" />
        </div>

        <p className="text-32">Prêt à investir dans le monde de demain ?</p>

        <Button
          className="button-20"
          divClassName="button-17"
          size="lg"
          state="default"
          text="Je m’inscris maintenant"
          variant="primary"
          visible={false}
          visible1={false}
        />
      </div>

      <footer className="footer-2">
        <div className="container-19">
          <div className="container-20">
            <div className="div-59">
              <div className="logo-5">Monkey-co</div>

              <div className="flexcontainer-20">
                <p className="text-33">
                  <span className="text-wrapper-28">
                    Ensemble, on finance un monde meilleur !<br />
                  </span>
                </p>

                <p className="text-33">
                  <span className="text-wrapper-28">
                    Investis tes cryptos pour la planète.
                  </span>
                </p>
              </div>
            </div>

            <p className="link-11">© 2025 Monkey-co.com All rights reserved.</p>
          </div>

          <div className="container-21">
            <div className="div-60">
              <div className="link-12">Monkey-co</div>

              <div className="div-61">
                <div className="link-13">Accueil</div>

                <div className="link-14">Problème &amp; Solution</div>

                <div className="link-14">Avantages</div>

                <div className="link-14">Tokenomics</div>

                <div className="link-14">Communauté</div>
              </div>
            </div>

            <div className="div-60">
              <div className="link-12">Legal</div>

              <div className="div-61">
                <div className="link-13">Mentions Légales</div>

                <div className="link-14">Politique De Confidentialité</div>
              </div>
            </div>
          </div>
        </div>

        <div className="div-62">
          <button className="button-21" onClick={() => window.open(EXTERNAL_LINKS.DISCORD, '_blank')}>
            <div className="text-34">Discord</div>

            <div className="div-63">
              <div className="overlap-group-10">
                <LeafAnimation 
                  className="vector-35"
                  width={75}
                  height={75}
                />

                <LeafAnimation 
                  className="vector-36"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </button>

          <button className="button-22" onClick={() => window.open(EXTERNAL_LINKS.TWITTER, '_blank')}>
            <div className="text-34">X (Twitter)</div>

            <div className="div-63">
              <img
                className="vector-37"
                alt="Vector"
                src="/img/vector-75-2.svg"
              />
            </div>
          </button>

          <button className="button-22">
            <div className="text-34">Rejoindre la prévente</div>
          </button>

          <button className="button-23">
            <div className="text-34">Lancer l’application</div>

            <img
              className="icon-arrow-right-2"
              alt="Icon arrow right"
              src="/img/icon-arrow-right-9.svg"
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
