import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Gift,
  Clock,
  TrendingUp
} from 'lucide-react';
import { BaseCard } from '@/components/BaseCard';
import './Staking.css';

interface StakingPosition {
  id: string;
  type: 'USDC' | 'KEYCOIN';
  amount: number;
  rewards: number;
  daysRemaining: number;
  status: 'active' | 'completed';
}

export const Staking: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Vérifier si KEYCOIN doit être pré-sélectionné depuis l'URL
  const urlParams = new URLSearchParams(location.search);
  const tokenFromUrl = urlParams.get('token');
  
  const [activeToken, setActiveToken] = useState<'USDC' | 'KEYCOIN'>(
    tokenFromUrl === 'KEYCOIN' ? 'KEYCOIN' : 'USDC'
  );
  const [amount, setAmount] = useState<string>('');
  const [duration, setDuration] = useState<number>(90);
  const [estimatedGain, setEstimatedGain] = useState<number>(0);

  // Mock data - À remplacer par données réelles
  const balances = {
    USDC: 1250.55,
    KEYCOIN: 12398.12
  };

  const apyRates = {
    USDC: 8.5,
    KEYCOIN: 37
  };

  const stats = {
    tvl: 2847392,
    activeStakers: 1247,
    distributedRewards: 89432
  };

  const positions: StakingPosition[] = [
    {
      id: '1',
      type: 'USDC',
      amount: 1800,
      rewards: 179.2,
      daysRemaining: 0,
      status: 'completed'
    },
    {
      id: '2',
      type: 'KEYCOIN',
      amount: 1000,
      rewards: 67,
      daysRemaining: 0,
      status: 'completed'
    },
    {
      id: '3',
      type: 'USDC',
      amount: 500,
      rewards: 12.5,
      daysRemaining: 15,
      status: 'active'
    },
    {
      id: '4',
      type: 'USDC',
      amount: 1500,
      rewards: 0,
      daysRemaining: 45,
      status: 'active'
    }
  ];

  // Calcul du gain estimé
  useEffect(() => {
    if (amount && !isNaN(parseFloat(amount))) {
      const principal = parseFloat(amount);
      const apy = apyRates[activeToken];
      const daysInYear = 365;
      const gain = (principal * apy * duration) / (100 * daysInYear);
      setEstimatedGain(parseFloat(gain.toFixed(2)));
    } else {
      setEstimatedGain(0);
    }
  }, [amount, duration, activeToken]);

  const handleStake = () => {
    // TODO: Implémenter la logique de staking
    console.log('Staking:', { activeToken, amount, duration, estimatedGain });
  };

  const handleUnstake = (positionId: string) => {
    // TODO: Implémenter la logique d'unstaking
    console.log('Unstaking position:', positionId);
  };

  const formatNumber = (num: number, decimals: number = 0) => {
    return num.toLocaleString('fr-FR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };

  const formatCurrency = (num: number, token: string) => {
    if (token === 'KEYCOIN') {
      return formatNumber(num);
    }
    return `${formatNumber(num, 2)}`;
  };

  return (
    <div className="staking-container">
      {/* Stats Cards */}
      <div className="staking-stats">
        <BaseCard className="stat-card">
          <div className="stat-icon">
            <Building size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">TVL Total</span>
            <span className="stat-value">${formatNumber(stats.tvl)}</span>
          </div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Stakers Actifs</span>
            <span className="stat-value">{formatNumber(stats.activeStakers)}</span>
          </div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-icon">
            <Gift size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Récompenses Distribuées</span>
            <span className="stat-value">${formatNumber(stats.distributedRewards)}</span>
          </div>
        </BaseCard>
      </div>

      <div className="staking-content">
        {/* Nouveau Staking Form */}
        <BaseCard className="staking-form-card">
          <h2 className="card-title">Nouveau Staking</h2>
          
          {/* Token Toggle */}
          <div className="token-toggle">
            <button
              className={`toggle-btn ${activeToken === 'USDC' ? 'active' : ''}`}
              onClick={() => setActiveToken('USDC')}
            >
              USDC
            </button>
            <button
              className={`toggle-btn ${activeToken === 'KEYCOIN' ? 'active' : ''}`}
              onClick={() => setActiveToken('KEYCOIN')}
            >
              KEYCOIN
            </button>
          </div>

          {/* Amount Input */}
          <div className="form-group">
            <label className="form-label">
              Montant à staker
              <span className="balance-info">
                Disponible : {formatCurrency(balances[activeToken], activeToken)} {activeToken === 'KEYCOIN' ? '' : 'USDC'}
              </span>
            </label>
            <input
              type="number"
              className="form-input"
              placeholder={activeToken === 'KEYCOIN' ? '12,398' : '1250'}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              max={balances[activeToken]}
            />
          </div>

          {/* Duration Select */}
          <div className="form-group">
            <label className="form-label">Durée (jours)</label>
            <select
              className="form-select"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
            >
              <option value={30}>30 jours</option>
              <option value={60}>60 jours</option>
              <option value={90}>90 jours</option>
              <option value={180}>180 jours</option>
              <option value={365}>365 jours</option>
            </select>
          </div>

          {/* APY & Estimated Gain */}
          <div className="staking-info">
            <div className="info-row">
              <span className="info-label">
                {activeToken === 'KEYCOIN' ? 'KEYCOIN' : 'USDC'} Staking
              </span>
              <span className="info-value">APY: {apyRates[activeToken]}%</span>
            </div>
            <div className="info-row highlight">
              <span className="info-label">Gain estimé</span>
              <span className="info-value gain-value">
                {activeToken === 'KEYCOIN' 
                  ? formatNumber(estimatedGain)
                  : `${formatNumber(estimatedGain, 2)}$`
                }
              </span>
            </div>
          </div>

          {/* Stake Button */}
          <button 
            className={`stake-btn ${activeToken === 'KEYCOIN' ? 'keycoin' : ''}`}
            onClick={handleStake}
            disabled={!amount || parseFloat(amount) <= 0}
          >
            Staker
          </button>
        </BaseCard>

        {/* Mes Positions */}
        <BaseCard className="positions-card">
          <h2 className="card-title">Mes positions</h2>
          
          <div className="positions-list">
            {positions.map((position) => (
              <div key={position.id} className="position-item">
                <div className="position-header">
                  <span className="position-amount">
                    {formatCurrency(position.amount, position.type)} {position.type}
                  </span>
                  {position.status === 'completed' ? (
                    <button 
                      className="unstake-btn"
                      onClick={() => handleUnstake(position.id)}
                    >
                      Unstaker
                    </button>
                  ) : (
                    <button className="unstake-btn disabled" disabled>
                      Unstaker
                    </button>
                  )}
                </div>
                <div className="position-details">
                  <div className="position-info">
                    <Clock size={16} />
                    <span>{position.daysRemaining} jours restants</span>
                  </div>
                  <div className="position-rewards">
                    <span className="rewards-label">Récompenses :</span>
                    <span className="rewards-value">
                      {formatCurrency(position.rewards, position.type)} {position.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BaseCard>
      </div>
    </div>
  );
};