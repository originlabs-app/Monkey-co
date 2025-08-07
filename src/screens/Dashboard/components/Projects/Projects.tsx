import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Leaf,
  DollarSign,
  FolderOpen,
  Calendar,
  MapPin,
  TrendingUp,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { BaseCard } from '@/components/BaseCard';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  currentFunding: number;
  targetFunding: number;
  fundingPercentage: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
  tag: string;
  projectType: string;
  impactMetrics: {
    co2Saved: number;
    housingUnits: number;
  };
}

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('active');

  // Stats en haut de page
  const stats = {
    co2Saved: 3050,
    totalInvested: 89432,
    activeProjects: 4,
    completedProjects: 2
  };

  // Mock data des projets avec images Unsplash corrigées
  const projects: Project[] = [
    {
      id: '1',
      title: 'Rénovation Éco-Quartier Lyon',
      location: 'Lyon, 7ème arrondissement',
      description: 'Projet de rénovation énergétique globale pour 150 logements sociaux incluant isolation thermique, installation de pompes à chaleur et panneaux solaires.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=300&q=80',
      currentFunding: 2125000,
      targetFunding: 2500000,
      fundingPercentage: 85,
      startDate: '01/04/2025',
      endDate: '31/12/2025',
      status: 'active',
      tag: '🔥 En cours de financement',
      projectType: 'Rénovation',
      impactMetrics: {
        co2Saved: 1200,
        housingUnits: 150
      }
    },
    {
      id: '2',
      title: 'Isolation Habitat Social Marseille',
      location: 'Marseille, Rhone et métropole',
      description: 'Programme d\'isolation thermique pour réduire pour 200 logements sociaux avec installation de systèmes de ventilation performants.',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&h=300&q=80',
      currentFunding: 200000,
      targetFunding: 200000,
      fundingPercentage: 100,
      startDate: '01/06/2024',
      endDate: '31/12/2025',
      status: 'completed',
      tag: 'Terminé',
      projectType: 'Isolation',
      impactMetrics: {
        co2Saved: 800,
        housingUnits: 200
      }
    },
    {
      id: '3',
      title: 'Ferme Solaire Toulouse',
      location: 'Toulouse, Haute-Garonne',
      description: 'Installation d\'une ferme solaire de 5MW pour alimenter 2000 foyers en énergie renouvelable.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&h=300&q=80',
      currentFunding: 450000,
      targetFunding: 500000,
      fundingPercentage: 90,
      startDate: '15/03/2024',
      endDate: '30/06/2025',
      status: 'active',
      tag: '🔥 En cours de financement',
      projectType: 'Énergie Solaire',
      impactMetrics: {
        co2Saved: 2500,
        housingUnits: 2000
      }
    },
    {
      id: '4',
      title: 'Réhabilitation Thermique Nantes',
      location: 'Nantes, Loire-Atlantique',
      description: 'Rénovation complète de 100 logements avec installation de pompes à chaleur et isolation renforcée.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=300&q=80',
      currentFunding: 180000,
      targetFunding: 250000,
      fundingPercentage: 72,
      startDate: '01/09/2024',
      endDate: '31/08/2025',
      status: 'active',
      tag: '🔥 En cours de financement',
      projectType: 'Réhabilitation',
      impactMetrics: {
        co2Saved: 950,
        housingUnits: 100
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'active') return project.status === 'active';
    if (filter === 'completed') return project.status === 'completed';
    return true;
  });

  const formatCurrency = (amount: number) => {
    if (amount >= 1000) {
      return `$${Math.floor(amount / 1000)}k`;
    }
    return `$${amount}`;
  };

  return (
    <div className="projects-container">
      {/* Header avec titre et description */}
      <div className="projects-header">
        <h1 className="projects-title">Projets Financés</h1>
        <p className="projects-subtitle">Découvrez l'impact concret de vos investissements</p>
      </div>

      {/* Stats Cards */}
      <div className="projects-stats">
        <BaseCard className="stat-card">
          <div className="stat-icon-wrapper co2">
            <Leaf size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.co2Saved.toLocaleString()} kg</div>
            <div className="stat-label">CO₂ évité</div>
          </div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-icon-wrapper money">
            <DollarSign size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{formatCurrency(stats.totalInvested)}</div>
            <div className="stat-label">Total investi</div>
          </div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-icon-wrapper projects">
            <FolderOpen size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.activeProjects}</div>
            <div className="stat-label">Projets actifs</div>
          </div>
        </BaseCard>

        <BaseCard className="stat-card">
          <div className="stat-icon-wrapper completed">
            <TrendingUp size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.completedProjects}</div>
            <div className="stat-label">Projets terminés</div>
          </div>
        </BaseCard>
      </div>

      {/* Filters */}
      <div className="projects-filters">
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Projets Actifs dans la pool
        </button>
        <button 
          className={`filter-btn secondary ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Tous les projets
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="project-type-badge">
                {project.projectType}
              </span>
              {project.tag && (
                <span className={`project-tag tag-${project.status}`}>
                  {project.tag.includes('🔥') ? (
                    <>
                      <Sparkles size={14} />
                      {project.tag.replace('🔥 ', '')}
                    </>
                  ) : (
                    project.tag
                  )}
                </span>
              )}
            </div>

            <div className="project-content">
              <h3 className="project-title">
                {project.title}
                <ExternalLink />
              </h3>
              
              <div className="project-location">
                <MapPin />
                <span>{project.location}</span>
              </div>

              <p className="project-description">{project.description}</p>

              {/* Impact Metrics */}
              <div className="project-impact-metrics">
                <div className="impact-metric">
                  <div className="impact-metric-label">CO₂ Total Évité</div>
                  <div className="impact-metric-value">{project.impactMetrics.co2Saved} kg</div>
                </div>
                <div className="impact-metric">
                  <div className="impact-metric-label">Logements</div>
                  <div className="impact-metric-value">{project.impactMetrics.housingUnits}</div>
                </div>
              </div>

              {/* Funding */}
              <div className="project-funding">
                <div className="funding-header">
                  <span className="funding-label">Financement</span>
                  <div>
                    <span className="funding-amount">
                      {formatCurrency(project.currentFunding)} / {formatCurrency(project.targetFunding)}
                    </span>
                    <span className="funding-percentage"> {project.fundingPercentage}%</span>
                  </div>
                </div>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${project.fundingPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="project-dates">
                <div className="date-item">
                  <Calendar />
                  <span>Début: {project.startDate}</span>
                </div>
                <div className="date-item">
                  <Calendar />
                  <span>Fin: {project.endDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};