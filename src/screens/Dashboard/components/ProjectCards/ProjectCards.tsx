import React from 'react';
import { useTranslation } from 'react-i18next';
import { logger } from '@/services/logger';
import { Button } from '@/components/Button';
import { PROJECT_CARDS } from '../../constants/dashboard.constants';
import type { ProjectCard } from '../../types/dashboard.types';
import './ProjectCards.css';

/**
 * ProjectCards - Cards de projets en bas du dashboard
 * Réutilise le composant Button de la landing page
 * SSOT : Constantes et types centralisés
 */
export const ProjectCards: React.FC = () => {
  const { t } = useTranslation();

  const handleProjectAction = (projectId: string) => {
    // TODO: Implémenter la navigation vers les formulaires
    logger.info('Project action triggered', { projectId });
  };

  return (
    <div className="project-cards-container">
      <div className="project-cards-grid">
        {PROJECT_CARDS.map((card) => (
          <div
            key={card.id}
            className="project-card"
            style={{
              background: card.bgColor,
            }}
          >
            <div className="project-card-content">
              <h3 className="project-card-title">
                {t(`dashboard.projects.${card.id}.title`, card.title)}
              </h3>
              <p className="project-card-description">
                {t(`dashboard.projects.${card.id}.description`, card.description)}
              </p>
              
              <Button
                showIconRight={true}
                showIconLeft={false}
                value={t(`dashboard.projects.${card.id}.action`, card.action)}
                size="md"
                state="default"
                variant="primary"
                className="project-card-button"
                visible={true}
                divClassName=""
                text={card.action}
                visible1={true}
                onClick={() => handleProjectAction(card.id)}
              />
            </div>

            <div className="project-card-visual">
              {/* Images de projets */}
              <div className="project-images">
                <img
                  src="/img/projets-left.png"
                  alt="Projets écologiques"
                  className="project-image project-image-left"
                />
                <img
                  src="/img/projets-right.png"
                  alt="Projets durables"
                  className="project-image project-image-right"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};