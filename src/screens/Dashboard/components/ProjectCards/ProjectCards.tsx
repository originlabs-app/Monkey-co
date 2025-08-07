import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import './ProjectCards.css';

/**
 * ProjectCards - Section Call-to-Action du dashboard
 * Même style que la page Documentation
 */
export const ProjectCards: React.FC = () => {
  const { t } = useTranslation();

  return (
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
  );
};