import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Gift,
  TrendingUp,
  Briefcase,
  Calendar,
  Users,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { BaseCard } from '@/components/BaseCard';
import './DAO.css';

interface Proposal {
  id: string;
  title: string;
  description: string;
  budget: string;
  budgetUsdc?: number;
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
  endDate: string;
  status: 'active' | 'completed' | 'approved' | 'rejected';
  result?: 'APPROUVER' | 'REJETER';
}

export const DAO: React.FC = () => {
  const { t } = useTranslation();
  const [userVotes, setUserVotes] = useState<Record<string, 'for' | 'against'>>({});

  // Mock data - À remplacer par données réelles
  const userStats = {
    votingPower: 367,
    grade: 2,
    projectsVoted: 2
  };

  const proposals: Proposal[] = [
    {
      id: '1',
      title: 'Finance rénovation éco-quartier Lyon',
      description: 'Projet de rénovation énergétique globale pour 150 logements sociaux incluant isolation thermique, installation de pompes à chaleur et panneaux solaires.',
      budget: '2.5M USDC',
      budgetUsdc: 2500000,
      votesFor: 45000,
      votesAgainst: 12000,
      totalVotes: 57000,
      endDate: '31/12/2025',
      status: 'active'
    },
    {
      id: '2',
      title: 'Allocation Budget R&D 2024',
      description: 'Approuver l\'allocation de 500K€ pour la recherche et développement de nouvelles solutions',
      budget: '550K USDC',
      budgetUsdc: 550000,
      votesFor: 12000,
      votesAgainst: 38000,
      totalVotes: 50000,
      endDate: '30/04/2024',
      status: 'completed',
      result: 'REJETER'
    },
    {
      id: '3',
      title: 'Partenariat avec Engie Solutions',
      description: 'Établir un partenariat stratégique avec Engie pour accélérer les projets de transition énergétique.',
      budget: '100K USDC',
      budgetUsdc: 100000,
      votesFor: 38000,
      votesAgainst: 22000,
      totalVotes: 60000,
      endDate: '31/12/2024',
      status: 'completed',
      result: 'APPROUVER'
    },
    {
      id: '4',
      title: 'Développement plateforme IoT',
      description: 'Créer une plateforme IoT pour monitorer en temps réel la consommation énergétique des bâtiments.',
      budget: '800K USDC',
      budgetUsdc: 800000,
      votesFor: 32000,
      votesAgainst: 8000,
      totalVotes: 40000,
      endDate: '15/01/2025',
      status: 'active'
    }
  ];

  const handleVote = (proposalId: string, voteType: 'for' | 'against') => {
    setUserVotes(prev => ({
      ...prev,
      [proposalId]: voteType
    }));
    // TODO: Envoyer le vote à l'API
    console.log(`Vote ${voteType} for proposal ${proposalId}`);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('fr-FR');
  };

  const getVotePercentage = (votesFor: number, totalVotes: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((votesFor / totalVotes) * 100);
  };

  return (
    <div className="dao-container">
      {/* Header Section */}
      <div className="dao-header">
        <div className="dao-header-content">
          <div className="dao-header-left">
            <h2 className="dao-subtitle">VOTEZ, SOUTENEZ ET SOYEZ RÉCOMPENSÉ</h2>
            <h1 className="dao-title">Pourquoi voter avec vos Keycoins ?</h1>
          </div>
          <div className="dao-header-right">
            <p className="dao-description">
              Chaque détenteur de Keycoin peut influencer l'avenir des projets proposés. 
              Votre vote compte et sa puissance dépend de la quantité de tokens que vous détenez.
            </p>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="dao-benefits">
          <div className="benefit-card">
            <Gift className="benefit-icon" />
            <h3>Airdrops exclusifs</h3>
            <p>Recevez des tokens gratuits si le projet que vous soutenez est financé avec succès.</p>
          </div>
          <div className="benefit-card">
            <TrendingUp className="benefit-icon" />
            <h3>Bonus de staking</h3>
            <p>Profitez d'un rendement amélioré sur vos Keycoins en votant régulièrement.</p>
          </div>
          <div className="benefit-card">
            <Briefcase className="benefit-icon" />
            <h3>Poids de vote</h3>
            <p>Plus vous détenez de Keycoins, plus votre voix a d'impact sur les décisions.</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dao-stats">
        <BaseCard className="stat-card">
          <div className="stat-header">
            <Calendar className="stat-icon" />
            <span className="stat-label">Pouvoir de vote</span>
          </div>
          <div className="stat-value">{userStats.votingPower}</div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-header">
            <TrendingUp className="stat-icon" />
            <span className="stat-label">Grade</span>
          </div>
          <div className="stat-value">{userStats.grade}</div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-header">
            <Briefcase className="stat-icon" />
            <span className="stat-label">Projets en cours de vote</span>
          </div>
          <div className="stat-value">{userStats.projectsVoted}</div>
        </BaseCard>
      </div>

      {/* Proposals List */}
      <div className="dao-proposals">
        {proposals.map(proposal => {
          const votePercentage = getVotePercentage(proposal.votesFor, proposal.totalVotes);
          const userVote = userVotes[proposal.id];
          
          return (
            <BaseCard key={proposal.id} className="proposal-card">
              <div className="proposal-header">
                <div className="proposal-title-section">
                  <h3 className="proposal-title">{proposal.title}</h3>
                </div>
                {proposal.status === 'active' && (
                  <span className="proposal-tag">🔥 En cours</span>
                )}
                {proposal.status === 'completed' && (
                  <span className={`proposal-status status-${proposal.status}`}>
                    Terminé
                  </span>
                )}
              </div>

              <p className="proposal-description">{proposal.description}</p>

              <div className="proposal-info">
                <div className="proposal-budget">
                  <span className="info-label">Budget estimé :</span>
                  <span className="info-value">{proposal.budget}</span>
                </div>
                <div className="proposal-deadline">
                  <span className="info-label">Fin de vote:</span>
                  <span className="info-value">{proposal.endDate}</span>
                </div>
              </div>

              <div className="proposal-votes">
                <div className="vote-stats">
                  <div className="vote-stat">
                    <span className="vote-label" style={{ color: '#E89C5C', fontWeight: 600 }}>
                      Pour: {formatNumber(proposal.votesFor)} votes
                    </span>
                  </div>
                  <div className="vote-stat">
                    <span className="vote-label">Contre: {formatNumber(proposal.votesAgainst)} votes</span>
                  </div>
                </div>

                <div className="vote-progress">
                  <div className="vote-bar">
                    <div 
                      className="vote-bar-fill vote-bar-for" 
                      style={{ 
                        width: `${votePercentage}%`,
                        background: 'linear-gradient(90deg, #E89C5C 0%, #F4A460 100%)'
                      }}
                    />
                  </div>
                  <div className="vote-percentages">
                    <span>{formatNumber(proposal.totalVotes)} votes au total</span>
                  </div>
                </div>

                {proposal.status === 'active' ? (
                  <div className="vote-actions">
                    <button 
                      className={`vote-btn vote-approve ${userVote === 'for' ? 'active' : ''}`}
                      onClick={() => handleVote(proposal.id, 'for')}
                    >
                      <CheckCircle size={18} />
                      Approuver
                    </button>
                    <button 
                      className={`vote-btn vote-reject ${userVote === 'against' ? 'active' : ''}`}
                      onClick={() => handleVote(proposal.id, 'against')}
                    >
                      <XCircle size={18} />
                      Rejeter
                    </button>
                  </div>
                ) : (
                  <div className="vote-result">
                    <button 
                      className={`result-btn result-${proposal.result === 'APPROUVER' ? 'approved' : 'rejected'}`}
                      disabled
                    >
                      Résultat : {proposal.result}
                    </button>
                  </div>
                )}
              </div>
            </BaseCard>
          );
        })}
      </div>
    </div>
  );
};