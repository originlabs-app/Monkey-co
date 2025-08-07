import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Wallet, 
  DollarSign, 
  Key, 
  Leaf,
  TrendingUp
} from 'lucide-react';
import { BaseCard } from '@/components/BaseCard';
import './ImpactModule.css';

interface ImpactData {
  totalValue: number;
  invested: {
    value: number;
    trend: number;
  };
  revenue: {
    value: number;
    trend: number;
  };
  keycoin: {
    value: number;
    trend: number;
  };
  co2: {
    value: number;
    trend: number;
  };
}

interface ImpactModuleProps {
  data: ImpactData;
  onStakeUSDC?: () => void;
  onStakeKeycoin?: () => void;
}

export const ImpactModule: React.FC<ImpactModuleProps> = ({ 
  data,
  onStakeUSDC,
  onStakeKeycoin
}) => {
  const { t } = useTranslation();

  const formatNumber = (num: number, decimals: number = 0) => {
    return num.toLocaleString('fr-FR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };
  const formatUSDC = (num: number) => `${formatNumber(num, 2)} USDC`;

  const sections = [
    {
      id: 'invested',
      icon: <Wallet size={24} />,
      label: 'Total investi',
      value: formatUSDC(data.invested.value),
      trend: `+${data.invested.trend}% de rendements`,
      trendColor: 'success',
      iconBg: 'green',
      action: {
        label: 'Staker',
        onClick: onStakeUSDC,
        variant: 'primary'
      }
    },
    {
      id: 'revenue',
      icon: <DollarSign size={24} />,
      label: 'Revenus',
      value: formatUSDC(data.revenue.value),
      trend: `+${data.revenue.trend}% ce mois`,
      trendColor: 'success',
      iconBg: 'green'
    },
    {
      id: 'keycoin',
      icon: <Key size={24} />,
      label: 'Total Keycoin reçus',
      value: formatNumber(data.keycoin.value),
      valueColor: 'orange',
      trend: `+${formatNumber(data.keycoin.trend)} ce mois`,
      trendColor: 'warning',
      iconBg: 'orange',
      action: {
        label: 'Staker',
        onClick: onStakeKeycoin,
        variant: 'orange'
      }
    },
    {
      id: 'co2',
      icon: <Leaf size={24} />,
      label: 'CO₂ Évité',
      value: `${formatNumber(data.co2.value)} kg`,
      trend: `+${data.co2.trend}% ce mois`,
      trendColor: 'earth',
      iconBg: 'earth'
    }
  ];

  return (
    <BaseCard className="impact-module">
      <div className="impact-header">
        <h3 className="impact-title">Mon impact écologique</h3>
        <div className="impact-total-value">{formatUSDC(data.totalValue)}</div>
      </div>

      <div className="impact-sections">
        {sections.map((section) => (
          <div key={section.id} className="impact-section">
            <div className={`section-icon icon-${section.iconBg}`}>
              {section.icon}
            </div>
            
            <div className="section-content">
              <span className="section-label">{section.label}</span>
              <span className={`section-value ${section.valueColor ? `value-${section.valueColor}` : ''}`}>
                {section.value}
              </span>
              <div className={`section-trend trend-${section.trendColor}`}>
                <TrendingUp size={14} />
                <span>{section.trend}</span>
              </div>
            </div>
            
            {section.action && (
              <button 
                className={`section-action action-${section.action.variant}`}
                onClick={section.action.onClick}
              >
                {section.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </BaseCard>
  );
};