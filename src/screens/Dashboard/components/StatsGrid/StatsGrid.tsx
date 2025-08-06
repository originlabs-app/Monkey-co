import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/Button';
import type { DashboardStats } from '../../types/dashboard.types';
import './StatsGrid.css';

interface StatsGridProps {
  stats: DashboardStats;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const { t } = useTranslation();

  return (
    <div className="stats-grid-container">
      {/* Card Impact Écologique */}
      <div className="stats-card stats-card-large">
        <div className="stats-card-header">
          <span className="stats-label">Mon impact écologique</span>
        </div>
        <div className="stats-value-primary">
          {stats.ecologicalImpact.toLocaleString()} USDC
        </div>
      </div>

      {/* Card Total Investi */}
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-icon">💰</span>
          <span className="stats-label">Total investi</span>
        </div>
        <div className="stats-value">
          {stats.totalInvested.toFixed(2)} USDC
        </div>
        <div className="stats-badge stats-badge-success">
          <span className="trend-icon">📈</span>
          +12% de rendements
        </div>
        <Button
          showIconRight={false}
          showIconLeft={false}
          value="Staker"
          size="md"
          state="default"
          variant="primary"
          className="stats-button"
          visible={true}
          divClassName=""
          text="Staker"
          visible1={true}
        />
      </div>

      {/* Card Revenue */}
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-icon">💵</span>
          <span className="stats-label">Revenue</span>
        </div>
        <div className="stats-value">
          {stats.revenue.toFixed(2)} USDC
        </div>
        <div className="stats-badge stats-badge-info">
          <span className="trend-icon">📈</span>
          +8.2% ce mois
        </div>
      </div>

      {/* Card Keycoin */}
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-icon">🔑</span>
          <span className="stats-label">Total Keycoin reçus</span>
        </div>
        <div className="stats-value stats-value-keycoin">
          {stats.keycoinReceived.toLocaleString()}
        </div>
        <div className="stats-badge stats-badge-warning">
          <span className="trend-icon">📈</span>
          +1420 ce mois
        </div>
        <Button
          showIconRight={false}
          showIconLeft={false}
          value="Staker"
          size="md"
          state="default"
          variant="secondary"
          className="stats-button"
          visible={true}
          divClassName=""
          text="Staker"
          visible1={true}
        />
      </div>

      {/* Card CO2 Évité */}
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-icon">🌱</span>
          <span className="stats-label">CO₂ Évité</span>
        </div>
        <div className="stats-value">
          {stats.co2Avoided.toLocaleString()} kg
        </div>
        <div className="stats-badge stats-badge-success">
          <span className="trend-icon">📈</span>
          +10% ce mois
        </div>
      </div>
    </div>
  );
};