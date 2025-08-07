import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FileText, 
  Download,
  MessageCircle,
  Twitter,
  Share2,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { Sidebar } from '../Dashboard/components/Sidebar';
import { Header } from '../Dashboard/components/Header';
import './Documentation.css';

interface WalletInfo {
  balance: number;
  keycoin: number;
  address: string;
}

export const Documentation: React.FC = () => {
  const { t } = useTranslation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  // Mock wallet info
  const walletInfo: WalletInfo = {
    balance: 1250.55,
    keycoin: 3450,
    address: '0x724d...7890',
  };

  const whitepapers = [
    {
      id: 'fr',
      title: 'Whitepaper (FR)',
      description: "Découvrez la vision complète de Monkey.co, la structure du projet, la tokenomics, le modèle économique et les mécanismes d'impact écologique.",
      details: "Retrouvez toutes les informations techniques, la feuille de route, les partenariats clés ainsi que les réponses aux principales questions sur l'investissement et la gouvernance.",
      action: 'Télécharger',
      icon: <FileText size={24} />
    },
    {
      id: 'en',
      title: 'Whitepaper (EN)',
      description: 'Explore the full vision of Monkey.co, including the project structure, tokenomics, economic model, and the mechanisms designed to create real ecological impact.',
      details: 'This comprehensive document provides all technical details, the detailed roadmap, security guarantees, and thorough answers to key questions regarding investment and governance.',
      action: 'Télécharger',
      icon: <FileText size={24} />
    },
    {
      id: 'de',
      title: 'Whitepaper (DE)',
      description: 'Entdecken Sie bald alle Details zu Monkey.co auf Deutsch: die Vision, die Funktionsweise, die Tokenomics, sowie die Mechanismen, die einen echten ökologischen Einfluss ermöglichen.',
      details: 'Dieses Dokument wird alle technischen Informationen, die ausführliche Roadmap, Sicherheitsgarantien und umfassende Antworten auf die wichtigsten Fragen für Investoren enthalten.',
      action: 'Télécharger',
      icon: <FileText size={24} />
    }
  ];

  const communityLinks = [
    {
      id: 'discord',
      icon: <MessageCircle size={24} />,
      title: 'Rejoignez-nous sur Discord',
      description: 'Au plus près de la communauté',
      link: 'https://discord.gg/monkey-co'
    },
    {
      id: 'twitter',
      icon: <Twitter size={24} />,
      title: 'Suivez-nous sur X (Twitter)',
      description: "Suivez l'aventure en quotidien",
      link: 'https://twitter.com/monkey_co'
    },
    {
      id: 'share',
      icon: <Share2 size={24} />,
      title: 'Parler de Monkey-co autour de vous',
      description: 'Agrandissons ensemble la communauté',
      action: 'share'
    },
    {
      id: 'idea',
      icon: <Lightbulb size={24} />,
      title: 'Une idée à partager ?',
      description: 'Toute idée est bonne à prendre',
      action: 'contact'
    }
  ];

  const handleCommunityAction = (action: string, link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else if (action === 'share') {
      // Implement share functionality
      navigator.share({
        title: 'Monkey-co',
        text: 'Découvrez Monkey-co, la plateforme d\'investissement écologique',
        url: window.location.origin
      }).catch(() => {
        // Fallback for browsers that don't support share API
        navigator.clipboard.writeText(window.location.origin);
      });
    } else if (action === 'contact') {
      window.location.href = 'mailto:contact@monkey-co.com?subject=Une idée pour Monkey-co';
    }
  };

  return (
    <div className="documentation-container">
      <Sidebar 
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        currentPage="documentation"
      />
      
      <div className="documentation-main">
        <Header walletInfo={walletInfo} />
        
        <div className="documentation-content">
          {/* Hero Section */}
          <div className="doc-hero">
            <div className="doc-hero-content">
              <div className="hero-badge">TRAVAILLE TES CRYPTOS POUR LA PLANÈTE</div>
              <h1 className="hero-title">À propos de Monkey-co</h1>
            </div>
          </div>

          {/* Whitepapers Section */}
          <div className="whitepapers-section">
            <div className="whitepapers-grid">
              {whitepapers.map((paper) => (
                <div key={paper.id} className="whitepaper-card">
                  <div className="paper-icon">
                    {paper.icon}
                  </div>
                  <h3 className="paper-title">{paper.title}</h3>
                  <p className="paper-description">{paper.description}</p>
                  <p className="paper-details">{paper.details}</p>
                  <button className="paper-download">
                    <Download size={18} />
                    <span>{paper.action}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="community-section">
            <div className="community-grid">
              {communityLinks.map((item) => (
                <div 
                  key={item.id} 
                  className="community-card"
                  onClick={() => handleCommunityAction(item.action || '', item.link)}
                >
                  <div className="community-icon">
                    {item.icon}
                  </div>
                  <h4 className="community-title">{item.title}</h4>
                  <p className="community-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="cta-section">
            <div className="cta-card cta-project">
              <div className="cta-content">
                <h3 className="cta-title">Vous avez un projet pour la transition écologique ?</h3>
                <p className="cta-description">
                  Faites appel à Monkey-co pour obtenir un financement adapté et concrétiser votre initiative durable !
                </p>
                <button className="cta-button">
                  Demander un financement
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>

            <div className="cta-card cta-investor">
              <div className="cta-content">
                <h3 className="cta-title">Vous connaissez un projet à financer ?</h3>
                <p className="cta-description">
                  Recommandez-le à Monkey-co et recevez une récompense en devenant apporteur d'affaires !
                </p>
                <button className="cta-button cta-button-light">
                  Devenir apporteur d'affaires
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};