import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  Twitter,
  Share2,
  Lightbulb
} from 'lucide-react';
import './CommunityGrid.css';

/**
 * CommunityGrid - Réutilisation du pattern CommunitySection
 * Adapté pour le dashboard avec les mêmes cards
 * SSOT : Constantes centralisées dans dashboard.constants.ts
 */
export const CommunityGrid: React.FC = () => {
  const { t } = useTranslation();

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
      description: "Suivez l'aventure au quotidien",
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

  const handleCommunityAction = (action: string | undefined, link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else if (action === 'share') {
      navigator.share({
        title: 'Monkey-co',
        text: 'Découvrez Monkey-co, la plateforme d\'investissement écologique',
        url: window.location.origin
      }).catch(() => {
        navigator.clipboard.writeText(window.location.origin);
      });
    } else if (action === 'contact') {
      window.location.href = 'mailto:contact@monkey-co.com?subject=Une idée pour Monkey-co';
    }
  };

  return (
    <div className="community-grid-container">
      <div className="community-grid">
        {communityLinks.map((item) => (
          <div 
            key={item.id} 
            className="community-card"
            onClick={() => handleCommunityAction(item.action, item.link)}
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
  );
};