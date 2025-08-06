import React from 'react';
import { useTranslation } from 'react-i18next';
import type { VoteItem } from '../../types/dashboard.types';
import './VotingSection.css';

/**
 * VotingSection - Section de votes du dashboard
 * SSOT : Types centralisés dans dashboard.types.ts
 */
export const VotingSection: React.FC = () => {
  const { t } = useTranslation();

  // Mock data - TODO: Remplacer par API call
  const votes: VoteItem[] = [
    { id: 'votes-done', title: 'Votes effectués', status: 'upcoming' },
    { id: 'voting-power', title: 'Pouvoir de vote', status: 'upcoming' },
    { id: 'current-role', title: 'Rôle actuel', status: 'upcoming' },
  ];

  return (
    <div className="voting-section-container">
      <div className="voting-header">
        <h3 className="voting-title">{t('dashboard.voting.title')}</h3>
      </div>

      <div className="voting-grid">
        {votes.map((vote) => (
          <div key={vote.id} className="voting-card">
            <div className="voting-card-header">
              <span className="voting-label">
                {t(`dashboard.voting.${vote.id}`, vote.title)}
              </span>
            </div>
            <div className="voting-card-content">
              <div className="coming-soon-badge">
                {t('dashboard.voting.comingSoon')}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="voting-footer">
        <div className="next-vote-card">
          <span className="next-vote-label">
            {t('dashboard.voting.nextVote')}
          </span>
          <div className="coming-soon-badge">
            {t('dashboard.voting.comingSoon')}
          </div>
        </div>
      </div>
    </div>
  );
};