import React from 'react';
import { useTranslation } from 'react-i18next';
import { DASHBOARD_MENU_ITEMS } from '../../constants/dashboard.constants';
import type { CommunityStats } from '../../types/dashboard.types';
import './Sidebar.css';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const { t } = useTranslation();
  
  // Stats communautaires (à remplacer par API call)
  const communityStats: CommunityStats = {
    projects: 23,
    co2Saved: 1247,
    totalInvested: 570000,
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img 
            src="/img/Images-monkey-co/logo-logo.png" 
            alt="Monkey-co" 
            className="logo-image"
          />
          {!isCollapsed && <span className="logo-text">Monkey-co</span>}
        </div>
        <button className="sidebar-toggle" onClick={onToggle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path 
              d="M15 18L9 12L15 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <nav className="sidebar-nav">
        {DASHBOARD_MENU_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`sidebar-item ${item.active ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
          </a>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="sidebar-stats">
          <div className="sidebar-stats-card">
            <h4>Impact communautaire</h4>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Projets financés</span>
                <span className="stat-value">{communityStats.projects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">CO₂ évités</span>
                <span className="stat-value">{communityStats.co2Saved} kg</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total investi</span>
                <span className="stat-value">${communityStats.totalInvested.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};