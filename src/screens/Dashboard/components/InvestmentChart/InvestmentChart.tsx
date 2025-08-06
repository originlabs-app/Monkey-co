import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CHART_COLORS } from '../../constants/dashboard.constants';
import type { ChartDataPoint } from '../../types/dashboard.types';
import './InvestmentChart.css';

/**
 * InvestmentChart - Graphique d'historique des investissements
 * Utilise une approche simple avec SVG pour éviter les dépendances lourdes
 * SSOT : Types et couleurs centralisés
 */
export const InvestmentChart: React.FC = () => {
  const { t } = useTranslation();

  // Mock data - TODO: Remplacer par API call
  const chartData: ChartDataPoint[] = useMemo(() => [
    { date: 'Jan', value: 2000, label: 'Janvier' },
    { date: 'Feb', value: 2200, label: 'Février' },
    { date: 'Mar', value: 2800, label: 'Mars' },
    { date: 'Apr', value: 3200, label: 'Avril' },
    { date: 'May', value: 3500, label: 'Mai' },
    { date: 'Jun', value: 3800, label: 'Juin' },
    { date: 'Jul', value: 4200, label: 'Juillet' },
    { date: 'Aug', value: 4500, label: 'Août' },
    { date: 'Sep', value: 4800, label: 'Septembre' },
    { date: 'Oct', value: 5200, label: 'Octobre' },
  ], []);

  // Calcul des dimensions et échelles
  const width = 600;
  const height = 300;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));
  const valueRange = maxValue - minValue;

  // Fonction pour calculer les coordonnées
  const getX = (index: number) => {
    return padding + (index / (chartData.length - 1)) * chartWidth;
  };

  const getY = (value: number) => {
    return padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
  };

  // Créer le path pour la ligne
  const linePath = chartData
    .map((point, index) => {
      const x = getX(index);
      const y = getY(point.value);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  // Créer le path pour la zone remplie
  const areaPath = `${linePath} L ${getX(chartData.length - 1)} ${height - padding} L ${padding} ${height - padding} Z`;

  // Lignes de grille horizontales
  const gridLines = [0, 2000, 4000, 6000, 8000];

  return (
    <div className="investment-chart-container">
      <div className="chart-header">
        <h3 className="chart-title">
          {t('dashboard.charts.investmentHistory')}
        </h3>
      </div>

      <div className="chart-wrapper">
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="investment-chart"
        >
          {/* Grille horizontale */}
          {gridLines.map((value) => {
            const y = getY(value);
            return (
              <g key={value}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke={CHART_COLORS.grid}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <text
                  x={padding - 10}
                  y={y + 5}
                  textAnchor="end"
                  fill={CHART_COLORS.text}
                  fontSize="12"
                >
                  ${value / 1000}k
                </text>
              </g>
            );
          })}

          {/* Zone remplie avec gradient */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity="0.3" />
              <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d={areaPath}
            fill="url(#areaGradient)"
          />

          {/* Ligne principale */}
          <path
            d={linePath}
            fill="none"
            stroke={CHART_COLORS.primary}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points de données */}
          {chartData.map((point, index) => (
            <circle
              key={point.date}
              cx={getX(index)}
              cy={getY(point.value)}
              r="4"
              fill={CHART_COLORS.primary}
              stroke="#ffffff"
              strokeWidth="2"
            />
          ))}

          {/* Labels des mois */}
          {chartData.map((point, index) => (
            <text
              key={point.date}
              x={getX(index)}
              y={height - padding + 20}
              textAnchor="middle"
              fill={CHART_COLORS.text}
              fontSize="12"
            >
              {point.date}
            </text>
          ))}
        </svg>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: CHART_COLORS.primary }} />
          <span className="legend-label">Investissements</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: CHART_COLORS.secondary }} />
          <span className="legend-label">Revenus</span>
        </div>
      </div>
    </div>
  );
};