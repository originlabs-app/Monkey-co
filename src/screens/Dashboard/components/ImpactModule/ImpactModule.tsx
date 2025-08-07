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
import { COLORS } from '@/constants/theme';
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

  const formatNumber = (num: number) => num.toLocaleString('fr-FR');
  const formatUSDC = (num: number) => `${formatNumber(num)} USDC`;

  const sections = [
    {
      id: 'invested',
      icon: <Wallet size={20} />,
      label: t('dashboard.stats.totalInvested'),
      value: formatUSDC(data.invested.value),
      trend: `+${data.invested.trend}% ${t('dashboard.stats.yields')}`,
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
      icon: <DollarSign size={20} />,
      label: t('dashboard.stats.revenue'),
      value: formatUSDC(data.revenue.value),
      trend: `+${data.revenue.trend}% ce mois`,
      trendColor: 'success',
      iconBg: 'green'
    },
    {
      id: 'keycoin',
      icon: <Key size={20} />,
      label: t('dashboard.stats.keycoinReceived'),
      value: formatNumber(data.keycoin.value),
      valueColor: 'orange',
      trend: `+${formatNumber(data.keycoin.trend)} ce mois`,
      trendColor: 'warning',
      iconBg: 'orange',
      action: {
        label: 'Staker',
        onClick: onStakeKeycoin,
        variant: 'secondary'
      }
    },
    {
      id: 'co2',
      icon: <Leaf size={20} />,
      label: t('dashboard.stats.co2Avoided'),
      value: `${formatNumber(data.co2.value)} kg`,
      trend: `+${data.co2.trend}% ce mois`,
      trendColor: 'success',
      iconBg: 'green'
    }
  ];

  return (
    <BaseCard className="impact-module">
      <div className="impact-header">
        <h3 className="impact-title">{t('dashboard.stats.ecologicalImpact')}</h3>
        <div className="impact-total">
          <span className="impact-total-value">{formatUSDC(data.totalValue)}</span>
        </div>
      </div>

      <div className="impact-sections">
        {sections.map((section) => (
          <div key={section.id} className="impact-section">
            <div className="section-header">
              <div className={`section-icon icon-${section.iconBg}`}>
                {section.icon}
              </div>
              <div className="section-content">
                <span className="section-label">{section.label}</span>
                <span className={`section-value ${section.valueColor ? `value-${section.valueColor}` : ''}`}>
                  {section.value}
                </span>
              </div>
            </div>
            
            <div className="section-footer">
              <div className={`section-trend trend-${section.trendColor}`}>
                <TrendingUp size={14} />
                <span>{section.trend}</span>
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
          </div>
        ))}
      </div>
    </BaseCard>
  );
};