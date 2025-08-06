import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  LayoutGrid, 
  Coins, 
  Users, 
  FolderOpen, 
  BookOpen,
  ChevronLeft
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  currentPage?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, 
  onToggle,
  currentPage = 'dashboard' 
}) => {
  const { t } = useTranslation();

  const menuItems = [
    { 
      id: 'dashboard', 
      label: t('dashboard.sidebar.dashboard'),
      icon: <LayoutGrid size={20} />
    },
    { 
      id: 'staking', 
      label: t('dashboard.sidebar.staking'),
      icon: <Coins size={20} />
    },
    { 
      id: 'dao', 
      label: t('dashboard.sidebar.governance'),
      icon: <Users size={20} />
    },
    { 
      id: 'projects', 
      label: t('dashboard.sidebar.projects'),
      icon: <FolderOpen size={20} />
    },
    { 
      id: 'documentation', 
      label: t('dashboard.sidebar.help'),
      icon: <BookOpen size={20} />
    },
  ];

  // Stats pour le module impact
  const communityStats = {
    projectsFunded: 23,
    co2Saved: 1247,
    totalInvested: 570000,
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Header avec logo */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-text">Monkey-co</span>
        </div>
        <button className="sidebar-toggle" onClick={onToggle}>
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`sidebar-item ${currentPage === item.id ? 'active' : ''}`}
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>
            {!isCollapsed && (
              <span className="sidebar-label">{item.label}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Module Impact Communautaire */}
      {!isCollapsed && (
        <div className="sidebar-impact">
          <div className="impact-card">
            <h4 className="impact-title">{t('dashboard.community.title')}</h4>
            <div className="impact-stats">
              <div className="stat-item">
                <span className="stat-label">Projets financés</span>
                <span className="stat-value">{communityStats.projectsFunded}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">CO₂ évités</span>
                <span className="stat-value">{communityStats.co2Saved.toLocaleString()} kg</span>
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