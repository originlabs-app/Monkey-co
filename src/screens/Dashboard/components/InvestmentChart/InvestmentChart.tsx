import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { BaseCard } from '@/components/BaseCard';
import { COLORS } from '@/constants/theme';
import './InvestmentChart.css';
// Data pour le graphique avec deux courbes
const chartData = [
  { month: 'Jan', invested: 1000, rewards: 200 },
  { month: 'Fév', invested: 5000, rewards: 2000 },
  { month: 'Mar', invested: 5500, rewards: 2400 },
  { month: 'Avr', invested: 6000, rewards: 2800 },
  { month: 'Mai', invested: 5800, rewards: 3200 },
  { month: 'Juin', invested: 6200, rewards: 3600 },
  { month: 'Juil', invested: 6800, rewards: 4000 },
  { month: 'Août', invested: 6500, rewards: 4300 },
  { month: 'Sep', invested: 7200, rewards: 4700 },
  { month: 'Oct', invested: 8000, rewards: 5000 }
];

interface CustomTooltipProps extends TooltipProps<number, string> {}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="tooltip-value" style={{ color: entry.color }}>
            {entry.name}: ${entry.value?.toLocaleString('fr-FR')}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const InvestmentChart: React.FC = () => {
  const { t } = useTranslation();

  // Formateur pour l'axe Y (milliers)
  const formatYAxis = (value: number) => `$${value / 1000}k`;

  return (
    <BaseCard className="investment-chart-container">
      <h3 className="chart-title">Historique de mes investissements</h3>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <defs>
              {/* Gradient pour la courbe orange */}
              <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E67E22" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#E67E22" stopOpacity={0.05} />
              </linearGradient>
              
              {/* Gradient pour la courbe verte */}
              <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#52705F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#52705F" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            {/* Grille */}
            <CartesianGrid 
              strokeDasharray="0" 
              stroke="#e2e8f0"
              strokeOpacity={0.5}
              vertical={true}
              horizontal={true}
            />

            {/* Axe X */}
            <XAxis 
              dataKey="month" 
              stroke="#718096"
              tick={{ fill: '#718096', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
            />

            {/* Axe Y */}
            <YAxis 
              stroke="#718096"
              tick={{ fill: '#718096', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
              tickFormatter={formatYAxis}
              domain={[0, 'dataMax + 1000']}
              ticks={[2000, 5000, 6000, 8000]}
            />

            {/* Tooltip */}
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />

            {/* Courbe Orange - Investissements */}
            <Area
              type="monotone"
              dataKey="invested"
              name="Investi"
              stroke="#E67E22"
              strokeWidth={2.5}
              fill="url(#gradientOrange)"
              activeDot={{ r: 5, fill: '#E67E22' }}
            />

            {/* Courbe Verte - Récompenses */}
            <Area
              type="monotone"
              dataKey="rewards"
              name="Récompenses"
              stroke="#52705F"
              strokeWidth={2.5}
              fill="url(#gradientGreen)"
              activeDot={{ r: 5, fill: '#52705F' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Légende */}
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot legend-orange"></span>
          <span className="legend-label">Total investi</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-green"></span>
          <span className="legend-label">Récompenses</span>
        </div>
      </div>
    </BaseCard>
  );
};