import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { logger } from '@/services/logger';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ImpactModule } from './components/ImpactModule';
import { InvestmentChart } from './components/InvestmentChart';
import { VotingModule } from './components/VotingModule';
import { CommunityGrid } from './components/CommunityGrid';
import { ProjectCards } from './components/ProjectCards';
import type { DashboardStats, WalletInfo } from './types/dashboard.types';
import './Dashboard.css';
import './animations.css';

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Mock data - TODO: remplacer par API calls
  const impactData = {
    totalValue: 5785.32,
    invested: {
      value: 4999.94,
      trend: 12
    },
    revenue: {
      value: 350.40,
      trend: 8.2
    },
    keycoin: {
      value: 3450,
      trend: 1420
    },
    co2: {
      value: 1247,
      trend: 10
    }
  };

  const walletInfo: WalletInfo = {
    balance: 1250.55,
    keycoin: 3450,
    address: '0x724d...7890',
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      <div className="dashboard-main">
        <Header walletInfo={walletInfo} />
        
        <div className="dashboard-content">
          <div className="dashboard-grid">
            {/* Colonne gauche - Impact Module */}
            <div className="dashboard-left">
              <ImpactModule 
                data={impactData}
                onStakeUSDC={() => navigate('/staking')}
                onStakeKeycoin={() => navigate('/staking?token=KEYCOIN')}
              />
            </div>
            
            {/* Colonne droite - Graphique et Votes */}
            <div className="dashboard-right">
              <InvestmentChart />
              <VotingModule />
            </div>
          </div>
          
          {/* Section Communauté */}
          <CommunityGrid />
          
          {/* Cards Projets */}
          <ProjectCards />
        </div>
      </div>
    </div>
  );
};