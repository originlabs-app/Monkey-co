import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatsGrid } from './components/StatsGrid';
import { InvestmentChart } from './components/InvestmentChart';
import { VotingSection } from './components/VotingSection';
import { CommunityGrid } from './components/CommunityGrid';
import { ProjectCards } from './components/ProjectCards';
import type { DashboardStats, WalletInfo } from './types/dashboard.types';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Mock data - TODO: remplacer par API calls
  const stats: DashboardStats = {
    ecologicalImpact: 5785.32,
    totalInvested: 4999.94,
    revenue: 350.40,
    keycoinReceived: 3450,
    co2Avoided: 1247,
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
            {/* Colonne gauche - Stats */}
            <div className="dashboard-left">
              <StatsGrid stats={stats} />
            </div>
            
            {/* Colonne droite - Graphique et Votes */}
            <div className="dashboard-right">
              <InvestmentChart />
              <VotingSection />
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