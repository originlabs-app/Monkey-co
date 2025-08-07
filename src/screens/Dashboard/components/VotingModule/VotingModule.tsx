import React from 'react';
import { useTranslation } from 'react-i18next';
import './VotingModule.css';

interface VotingModuleProps {
  className?: string;
}

export const VotingModule: React.FC<VotingModuleProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={`voting-module ${className || ''}`}>
      {/* Ligne 1 - Métriques de Vote (3 colonnes) */}
      <div className="voting-module__metrics">
        <div className="voting-module__metric">
          <span className="voting-module__metric-label">Votes effectués</span>
          <span className="voting-module__metric-value">Coming Soon</span>
        </div>
        
        <div className="voting-module__metric">
          <span className="voting-module__metric-label">Pouvoir de vote</span>
          <span className="voting-module__metric-value">Coming Soon</span>
        </div>
        
        <div className="voting-module__metric">
          <span className="voting-module__metric-label">Rôle actuel</span>
          <span className="voting-module__metric-value">Coming Soon</span>
        </div>
      </div>

      {/* Ligne 2 - Action (2 colonnes) */}
      <div className="voting-module__actions">
        <div className="voting-module__next-vote">
          <span className="voting-module__metric-label">Prochain vote ouvert</span>
          <span className="voting-module__metric-value">Coming Soon</span>
        </div>
        
        <button className="voting-module__participate-btn" disabled>
          Participer au vote
        </button>
      </div>
    </div>
  );
};