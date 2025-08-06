import React from 'react';
import { useTranslation } from 'react-i18next';
import { COMMUNITY_CARDS } from '../../constants/dashboard.constants';
import { EXTERNAL_LINKS } from '@/constants/links';
import './CommunityGrid.css';

/**
 * CommunityGrid - Réutilisation du pattern CommunitySection
 * Adapté pour le dashboard avec les mêmes cards
 * SSOT : Constantes centralisées dans dashboard.constants.ts
 */
export const CommunityGrid: React.FC = () => {
  const { t } = useTranslation();

  const handleCardClick = (cardId: string) => {
    switch (cardId) {
      case 'discord':
        window.open(EXTERNAL_LINKS.DISCORD, '_blank');
        break;
      case 'twitter':
        window.open(EXTERNAL_LINKS.TWITTER, '_blank');
        break;
      case 'share':
        // TODO: Implémenter logique de partage
        console.log('Share functionality');
        break;
      case 'idea':
        window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}?subject=Une idée pour Monkey-co`;
        break;
    }
  };

  return (
    <div className="community-grid-container">
      <div className="community-grid">
        {COMMUNITY_CARDS.map((card) => (
          <div
            key={card.id}
            className="community-card"
            onClick={() => handleCardClick(card.id)}
          >
            <div className="community-card-icon">
              <span className="icon-emoji">{card.icon}</span>
            </div>
            
            <div className="community-card-content">
              <h3 className="community-card-title">
                {t(`dashboard.community.${card.id}.title`, card.title)}
              </h3>
              <p className="community-card-description">
                {t(`dashboard.community.${card.id}.description`, card.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};