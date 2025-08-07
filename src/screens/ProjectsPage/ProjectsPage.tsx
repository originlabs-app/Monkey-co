import React, { useState } from 'react';
import { Sidebar } from '../Dashboard/components/Sidebar';
import { Header } from '../Dashboard/components/Header';
import { Projects } from '../Dashboard/components/Projects';
import type { WalletInfo } from '../Dashboard/types/dashboard.types';
import '../Dashboard/Dashboard.css';

export const ProjectsPage: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Mock wallet info - À remplacer par données réelles
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
        currentPage="projects"
      />
      
      <div className={`dashboard-main ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header walletInfo={walletInfo} />
        <Projects />
      </div>
    </div>
  );
};